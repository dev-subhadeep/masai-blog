import React, { useEffect, useState } from "react"
import axios from "axios"
import { API } from "../utils/constants"
import Blog from "./Blog"

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState()
  const [category, setCategory] = useState("")
  const [sortOrder, setSortOrder] = useState("")

  const token = localStorage.getItem("token")

  useEffect(() => {
    let url

    axios({
      method: "get",
      url: `${API}/blogs`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setBlogs(res.data.blogs))
      .catch((error) => console.log(error))
  }, [search, category, sortOrder])

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
        <select name="category">
          <option value="">Filter By Category</option>
          <option
            value="Business"
            onChange={(e) => setCategory(e.target.value)}
          >
            Business
          </option>
          <option value="Tech" onChange={(e) => setCategory(e.target.value)}>
            Tech
          </option>
          <option
            value="Lifestyle"
            onChange={(e) => setCategory(e.target.value)}
          >
            Lifestyle
          </option>
          <option
            value="Entertainment"
            onChange={(e) => setCategory(e.target.value)}
          >
            Entertainment
          </option>
        </select>

        <select name="sort">
          <option value="">Sort By Date</option>
          <option
            value="Ascending"
            onClick={(e) => setSortOrder(e.target.value)}
          >
            Ascending
          </option>
          <option
            value="Descending"
            onClick={(e) => setSortOrder(e.target.value)}
          >
            Descending
          </option>
        </select>
      </div>
      {blogs.length > 0 &&
        blogs.map((blog) => <Blog key={blog.id} {...blog} />)}
    </div>
  )
}

export default Blogs
