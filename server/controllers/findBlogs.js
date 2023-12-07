const Blog = require("../models/blog")

const findBlogs = async (req, res) => {
  const { title, category, order } = req.query
  const q = {}
  let o
  if (title) {
    q.title = { $regex: title, $options: "i" }
  }
  if (category) {
    q.category = category
  }

  if (order) {
    o = order === "asc" ? 1 : -1
  } else {
    o = -1
  }

  try {
    const blogs = await Blog.find({ ...q }).sort({ date: o })
    if (blogs.length) {
      res.status(200).send({ message: `${blogs.length} blogs found`, blogs })
    } else {
      res.status(200).send({ message: "0 blog found" })
    }
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = findBlogs
