'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "",
        marginBottom: "80px"
      },
    }),
  },
  colors: {
    button: "linear-gradient(90deg, rgba(55,63,231,1) 0%, rgba(226,27,214,1) 100%)",
  },
  breakpoints: {
    base: "0px",
    sm: "375px",
    md: "425px",
    lg: "768px",
    xl: "960px",
    "2xl": "1200px",
  }
});

export function Providers({children}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
