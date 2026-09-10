import React from 'react'

const PostCard = React.memo(({value})=>{

    console.log("Post Render")

    return (
    <div>
        <h1>Your name is {value.name} and your age is {value.age}</h1>
    </div>
  )
})

export default PostCard