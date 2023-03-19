import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import App from './App'
import '@fontsource/tenor-sans/400.css'

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    grey: {
      100: '#E7EAEF',
      200: '#C4C4C4'
    }
  },
  fonts: {
    body: `"Tenor Sans", sans-serif`
  },
  fontSizes:{
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
  },
  letterSpacings:{
    sm: '2px',
    md: '4px',
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
