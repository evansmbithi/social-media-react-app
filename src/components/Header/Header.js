import React from "react";
import NavPane from "./Nav/NavPane";
import "./Header.css";
import HeaderButtons from "./HeaderButtons";

function Header(){
    return (
        <React.Fragment>
            <div className="header">
                <NavPane />    
                <HeaderButtons />                     
            </div>
            <hr /> 
              

        </React.Fragment>
    )
}

export default Header;