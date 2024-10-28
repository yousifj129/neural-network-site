import React from "react";
import {Link} from "react-router-dom"
import {Download , Chat} from "phosphor-react"
import "./navbar.css"
export const Navbar = () => {
    return <div className="navbar">
        <div className="links">
            <Link to="/"> Main </Link>
            <Link to="/download"> Download <Download size={32}/></Link>
            <Link to="/ideas"> Ideas <Chat size={32}/></Link>
        </div>
    </div>;
}