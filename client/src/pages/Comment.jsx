import React from "react"

const Comment = ({ username, content }) => {
  return (
    <div>
      <div>{username}</div>
      <div>{content}</div>
    </div>
  )
}

export default Comment
