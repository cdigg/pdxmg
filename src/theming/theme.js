import { extendTheme } from '@chakra-ui/react'
import { menuTheme } from './MenuTheming'
import { tabTheme } from './TabTheming'

const theme = extendTheme({
  components: {
    Menu: menuTheme,
    // Tabs: tabTheme
  },
})

export default theme