import React from "react"
import "./Header.css"

function HeaderButtons(){
    return(
        <div className="header-buttons">
            <input type="text" placeholder="Search" />
            <button>Tweet</button>
        </div>
    )
}

export default HeaderButtons;