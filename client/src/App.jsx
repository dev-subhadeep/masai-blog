import { useState } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import MainRoutes from "./components/MainRoutes"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Navbar />
        <MainRoutes />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
