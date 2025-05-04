import React from "react";
import PropTypes from "prop-types";
import "./../Header.css";

function NavItem(props){
    return(
        <a className="nav-item" href={props.navLink}>{props.navName}</a>
    )
}

NavItem.propTypes = {
    navName: PropTypes.string,
    navLink: PropTypes.string
}

export default NavItem;