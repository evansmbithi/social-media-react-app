import React from "react";
import NavItem from "./NavItem";
import "./../Header.css";

function NavPane(){
    return (
        <div>
            <NavItem
            navName="Home"
            navLink="#" />
            <NavItem
            navName="Notification"
            navLink="#" />
            <NavItem
            navName="Messages"
            navLink="#" />           

        </div>
    )    
}

export default NavPane;
