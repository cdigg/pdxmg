# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing website for PDX MegaGames, served at pdxmegagames.com. Plain HTML + a single shared `styles.css`; no build system, no JavaScript framework, no tests.

## Deployment

`.github/workflows/main.yml` runs on every push to `main`:
1. `aws s3 sync . s3://pdxmegagames.com --delete --exclude '.*' --exclude 'README.md' --exclude 'CLAUDE.md' --exclude 'archived-descriptions.json'`
2. CloudFront invalidation against `secrets.AWS_DISTRIBUTION_PRODUCTION` (path `/*`).

Region is `us-west-1`. There is no staging environment — merging to `main` is production.

Because the deploy uses `s3 sync . --delete`, **anything at the repo root that isn't excluded gets uploaded to the live bucket.** Don't add scratch files, notes, or experiments at the root; put them under `.`-prefixed paths or outside the repo.

## Page structure

Five top-level pages (`index.html`, `games.html`, `aar.html`, `what-is-a-megagame.html`, `about-us.html`) each duplicate the same `<header>`/nav/`<footer>` markup — there is no templating. When changing the nav, footer, or copyright year, edit all five files.

- `index.html` — homepage, shows the upcoming "Next Game" cards. Cards render dynamically from `upcoming-games.json`.
- `games.html` — evergreen catalog of recurring games. Cards render dynamically from `our-games.json`.
- `aar.html` — After Action Reports (post-game writeups). Still static markup.
- `archivedHomeBanner/` — snapshots of past `index.html` "next game" card sections, preserved for reference. Not linked from the live site but **is** deployed by `s3 sync` (not excluded).
- `games/` — currently holds one historical game-specific page (`01202024_den_of_wolves.html`).
- `images/` — all site images. New game cards typically need a hero image added here.

## Game card data (JSON-driven)

Game cards on `index.html` and `games.html` are rendered client-side from JSON files at the repo root by an inline `<script>` in each page. To add/edit/remove a game, edit the JSON — do not touch the HTML unless you're changing the card *structure*.

- **`upcoming-games.json`** drives `index.html`. Fields: `title`, `image`, `imageAlt`, `location`, `date`, `description` (HTML string), optional `ticketUrl`, optional `ticketLabel` (defaults to `"Get Tickets"`), optional `show: false` to hide.
- **`our-games.json`** drives `games.html`. Fields: `title`, `image`, `imageAlt`, `description` (HTML string), optional `nextGame: { date, location, ticketUrl?, ticketLabel? }`, optional `pastGames: [string, ...]` (each string rendered as a `<p>`), optional `show: false` to hide.

Cards render in JSON array order. The "Get Tickets" button only appears when `ticketUrl` is set — there is no "coming soon" placeholder. `description` is injected via `innerHTML`, so it can contain inline tags like `<a>`; the other text fields are escaped. The renderer falls back to "check the Discord" copy if the fetch fails.

**Local preview:** `fetch()` won't work over `file://` — serve the directory over HTTP (e.g. `python -m http.server 8000`) and open `http://localhost:8000/`. Production (S3/CloudFront) works normally.

## Workflow conventions

Recent history (see `git log`) shows the typical change is a content update around a game (pre/post game updates, date changes). PRs are small, named like `cle/post-gs-2026` or `cle/after-dh-_01_2026`, merged to `main` which auto-deploys.
