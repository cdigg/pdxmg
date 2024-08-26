import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

  const baseStyle = definePartsStyle({
    // define the part you're going to style
    tab: {
      margin: '5px',
    },
    tabpanel: {
      color: 'black', // change the font family
    },
  });

// define the base component styles
const colorfulVariant = definePartsStyle({
  tab: {
    border: '2px solid',
    borderColor: 'transparent',
    // use colorScheme to change background color with dark and light mode options
    bg: '#ac3a3a',
    borderTopRadius: 'lg',
    borderBottom: 'none',
    _selected: {
      bg: '#ac3a3a',
      color: 'white',
      borderColor: 'inherit',
      borderBottom: 'none',
      mb: '-2px',
    },
  },
  tablist: {
    borderBottom: '2x solid',
    borderColor: 'inherit',
  },
})

const variants = {
  colorful: colorfulVariant,
}


// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  variant: 'enclosed',
  colorScheme: 'green',
};

// export the base styles in the component theme
export const tabTheme = defineMultiStyleConfig({ variants, baseStyle, defaultProps })