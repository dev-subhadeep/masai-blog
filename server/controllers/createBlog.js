const Blog = require("../models/blog")

const createBlog = async (req, res) => {
  try {
    // res.status(200).send({ blog: { ...req.body } })
    const blog = await Blog.create({
      ...req.body,
    })
    if (blog) {
      res.status(200).send({ message: "Blog Published", blog })
    } else {
      res.status(500).send({ error: "Error creating blog" })
    }
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = createBlog
