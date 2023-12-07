import React, { useState } from "react"
import axios from "axios"
import { API } from "../utils/constants"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [formData, setFormData] = useState()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleRegister = () => {
    axios({
      method: "post",
      url: `${API}/register`,
      data: formData,
    })
      .then((res) => {
        console.log(res.data.message)
        navigate("/sign-in")
      })
      .catch((err) => console.log(err.err))
  }
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="avatar"
        placeholder="avatar"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
