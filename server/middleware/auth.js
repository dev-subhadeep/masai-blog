const jwt = require("jsonwebtoken")
require("dotenv").config()

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1] || null

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(400).send({ error: `${err}` })
        }
        if (decoded) {
          console.log(decoded)
          req.body.username = decoded.username
          next()
        } else {
          res.status(400).send({ error: "Please Login" })
        }
      })
    } else {
      res.status(400).send({ error: "Please login" })
    }
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = auth
