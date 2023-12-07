const User = require("../models/User")
const bcrypt = require("bcrypt")

const register = (req, res) => {
  const { password } = req.body
  try {
    bcrypt.hash(password, 3, async (err, hash) => {
      if (err) {
        req.status(500).send({ error: err })
      } else {
        const user = await User.create({
          ...req.body,
          password: hash,
        })

        res.status(200).send({ message: "Registered Successfully" })
      }
    })
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" })
  }
}

module.exports = register
