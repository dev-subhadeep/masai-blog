const express = require("express")
const app = express()
const cors = require("cors")
const connection = require("./utils/connection")
const router = require("./routes/api/apiRoutes")
require("dotenv").config()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send({ message: "Check out api routes at /api" })
})

app.use("/api", router)

app.listen(process.env.PORT, async () => {
  try {
    await connection()
    console.log("DB connected")
    console.log(`server running on port ${process.env.PORT}`)
  } catch (error) {
    console.log(error)
  }
})
