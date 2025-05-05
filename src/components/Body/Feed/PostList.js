import "./../Body.css"
import React from "react"
import Post from "./Post"

function PostList(){
    return (
        <React.Fragment>
            <Post />
            <Post />
            <Post />
        </React.Fragment>
    )
}

export default PostList;