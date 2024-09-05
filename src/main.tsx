import './index.css'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from 'App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './theme/theme'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChakraBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraBaseProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
