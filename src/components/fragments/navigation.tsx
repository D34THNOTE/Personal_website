import React from "react"
import {Link, useLocation} from "react-router-dom"

function Navigation() {
    let location = useLocation()

    return (
        <nav>
            <ul>
                <li><Link to="/About" className={location.pathname === "/About" ? "active" : ""} >About</Link></li>
                <li><Link to="/SkillsAndProjects" className={location.pathname === "/SkillsAndProjects" ? "active" : ""} >Skills and projects</Link></li>
                <li><Link to="/Contact" className={location.pathname === "/Contact" ? "active" : ""} >Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;