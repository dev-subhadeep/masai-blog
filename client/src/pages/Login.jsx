import React, { useState } from "react"
import axios from "axios"
import { API } from "../utils/constants"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    axios({
      method: "post",
      url: `${API}/login`,
      data: { email, password },
    })
      .then((res) => localStorage.setItem("token", res.data.token))
      .catch((error) => console.log(error))
  }
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
