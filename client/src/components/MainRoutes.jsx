import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Blogs from "../pages/Blogs"

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
