import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./nav-item.css"

const NavItem = (props)=>{
    const [showSouMenu, setShowSouMenu] = useState(false);

    let link = props.to? <Link to= {props.to}>{props.value}</Link> : <div className="link">{props.value}</div>

    return (
        <div 
        className="nav-item-menu"
        >
            {link}
            <div className="nav-item-sous-menu">
                {props.children}
            </div>
        </div>
    )
}

export default NavItem