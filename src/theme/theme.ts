import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      100: '#434343',
      200: '#22252B',
    },
    secondary: {
      100: '#45689E',
    },
    blue: {
      50: '#f5faff',
      100: '#82beff',
      300: '#007bff',
    },
    red: {
      100: '#F04438',
      200: '#fda29b',
    },
    overlay: {
      50: '#6D6A6A4D',
    },
    border: {
      50: '#EAECF0',
    },
  },

  shadows: {
    100: '0px 1px 2px 0px #1018280d',
    200: '0px 12px 32px 0px #a9a9ad1a',
    300: '0px 1px 3px 0px #1018281a;',
    900: '1px solid #FECDCA',
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  semanticTokens: {
    maxwidthstr: '1440px',
    header: {
      height: {
        base: {
          positivestring: '56px',
          negativestring: '-56px',
        },
        sm: {
          positivestring: '70px',
          negativestring: '-70px',
        },
        md: {
          positivestring: '70px',
          negativestring: '-70px',
        },
        lg: {
          positivestring: '70px',
          negativestring: '-70px',
        },
      },
    },
    body: {
      paddingInline: {
        base: {
          positivestring: '16px',
          negativestring: '-16px',
        },
        sm: {
          positivestring: '32px',
          negativestring: '-32px',
        },
        md: {
          positivestring: '48px',
          negativestring: '-48px',
        },
        lg: {
          positivestring: '80px',
          negativestring: '-80px',
        },
      },
    },
  },
})

export default theme
