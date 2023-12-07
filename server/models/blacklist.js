const mongoose = require("mongoose")

const blSchema = mongoose.Schema({
  token: String,
})

const BL = mongoose.model("bl", blSchema)

module.exports = BL
