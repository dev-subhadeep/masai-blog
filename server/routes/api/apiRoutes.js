const express = require("express")
const register = require("../../controllers/register")
const login = require("../../controllers/login")
const auth = require("../../middleware/auth")
const createBlog = require("../../controllers/createBlog")
const findBlog = require("../../controllers/findBlog")
const findBlogs = require("../../controllers/findBlogs")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Home Route")
})
router.post("/register", register)
router.post("/login", login)

// AUTHENTICATED ROUTES:

router.use(auth)
router.post("/blogs", createBlog)
router.get("/blogs", findBlogs)
router.get("/blogs/:id", findBlog)

module.exports = router
