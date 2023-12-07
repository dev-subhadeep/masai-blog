import React, { useEffect, useState } from "react"
import Comment from "./Comment"

const Blog = ({
  username,
  category,
  date,
  title,
  content,
  likes,
  comments,
}) => {
  return (
    <div>
      <h3>{username}</h3>
      <p>{category}</p>
      <p>{date.toLocaleString()}</p>

      <h2>{title}</h2>
      <div>{content}</div>
      <div>
        <span>{likes} Likes</span>
        <button>Add Comment</button>
      </div>
      <div id="comments">
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment.concat(Date.now())} {...comment} />
          ))}
      </div>
    </div>
  )
}

export default Blog
