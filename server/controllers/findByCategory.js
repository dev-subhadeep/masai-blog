const Blog = require("../models/blog")

const findByCategory = async (req, res) => {
  const { category } = req.query
  try {
    const blogs = await Blog.find({ category })
    if (blogs.length) {
      res.status(200).send({ message: `${blogs.length} blogs found`, blogs })
    } else {
      res.status(200).send({ message: "0 blog found in that category" })
    }
  } catch (error) {
    res.status(500).send({ error: "Server Error" })
  }
}

module.exports = findByCategory
