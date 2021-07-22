import * as React from "react"
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"



export const ThemeProvider:React.FC = ({ children })=> {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider