import "./../Body.css"
import React from "react"
import ProfileSummary from "./ProfileSummary"
import AboutUser from "./AboutUser"

function LeftPane(){
    return (
        <div className="left-pane">
            <ProfileSummary />
            <AboutUser />
        </div>
    )
}

export default LeftPane;