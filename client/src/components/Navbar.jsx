import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import { Link as ChakraLink } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <div>
      <h4>
        NOTICE: The backend is hosted on render, which falls asleep after
        inactivity. Please start the backend first by visiting clicking{" "}
        <a href="https://masai-blog-mock-6.onrender.com/">here</a> before trying
        the frontend.{" "}
      </h4>
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
