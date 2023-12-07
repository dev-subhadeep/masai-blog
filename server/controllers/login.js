const bcrypt = require("bcrypt")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(400).send({ error: "Login Failed" })
        }
        if (result) {
          console.log(user)
          const token = jwt.sign(
            { username: user.username },
            process.env.JWT_SECRET
          )
          res.status(200).send({ message: "Login Successful", token })
        } else {
          res.status(400).send({ error: "Login Failed" })
        }
      })
    } else {
      res.status(400).send({ error: "Login Failed" })
    }
  } catch (error) {
    res.status(500).send({ error: "Login Failed" })
  }
}

module.exports = login
