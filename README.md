# pdxmg
PDX MegaGames

Static marketing website for PDX MegaGames, served at pdxmegagames.com. Plain HTML + a shared `styles.css`; no build system.

## Running locally for testing

Game cards on `index.html` and `games.html` render client-side from JSON files (`upcoming-games.json`, `our-games.json`) via `fetch()`. Because `fetch()` is blocked over `file://`, opening the HTML files directly in a browser will show empty cards and a "check the Discord" fallback. You must serve the directory over HTTP.

From the repo root:

```bash
python -m http.server 8000
```

Then open **http://localhost:8000/** (not the `file://` path).

### Notes

- **Edit the JSON, not the HTML** to add/edit/remove a game card. Edit `upcoming-games.json` for the homepage and `our-games.json` for the games page. Only touch the HTML to change the card *structure*.
- Cards render in JSON array order.
- **Hard-refresh** (`Ctrl+F5`) after each JSON edit — the browser caches the JSON.
- **Validate your JSON** before reloading. A trailing comma or missing quote makes the fetch fail, and the page silently falls back to the "check the Discord" copy. Seeing that fallback is your signal that something is broken (bad JSON, wrong path, or the server isn't running).
