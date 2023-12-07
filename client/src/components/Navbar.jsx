import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import { Link as ChakraLink } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <div>
      <div>Masai Blog</div>
      <nav>
        <ul>
          <li>
            <ChakraLink as={ReactRouterLink} to="/sign-in">
              Sign In
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={ReactRouterLink} to="/sign-up">
              Sign Up
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={ReactRouterLink} to="/">
              Blogs
            </ChakraLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
