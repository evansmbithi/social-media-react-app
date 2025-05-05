import "./../Body.css"
import React from "react"
import PostInput from "./PostInput"
import PostList from "./PostList"

function Feed(){
    return (
        <div className="feed">
            <PostInput />
            <PostList />
        </div>
    )
}

export default Feed;