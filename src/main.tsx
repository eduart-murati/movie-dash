import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ChakraProvider, defaultSystem} from '@chakra-ui/react';
import { ThemeProvider } from "next-themes" 
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider enableSystem={true} attribute="class">
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </StrictMode>,
)