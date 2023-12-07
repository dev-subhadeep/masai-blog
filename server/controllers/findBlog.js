const Blog = require("../models/blog")

const findBlog = async (req, res) => {
  const { id } = req.params
  try {
    const blog = await Blog.findOne({ _id: id })
    if (blog) {
      res.status(200).send({ message: `Blog found`, blog })
    } else {
      res.status(400).send({ error: "No such blog found" })
    }
  } catch (error) {
    res.status(500).send({ error: "Server Error" })
  }
}

module.exports = findBlog
