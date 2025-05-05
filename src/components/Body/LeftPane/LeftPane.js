import "./../Body.css"
import React from "react"
import ProfileSummary from "./ProfileSummary"
import AboutUser from "./AboutUser"

function LeftPane(){
    return (
        <React.Fragment>
            <ProfileSummary />
            <AboutUser />
        </React.Fragment>
    )
}

export default LeftPane;