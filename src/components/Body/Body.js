import "./Body.css"
import React from "react"
import LeftPane from "./LeftPane/LeftPane";
import Feed from "./Feed/Feed";
import RightPane from "./RightPane/RightPane";

function Body(){
    return (
        <React.Fragment>
            <div className="container">
                {/* <LeftPane /> */}
                <Feed />
                {/* <RightPane /> */}
            </div>            
        </React.Fragment>
    )
}

export default Body;