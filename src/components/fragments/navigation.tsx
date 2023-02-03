import React from "react"
import {Link} from "react-router-dom"

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/TechnologiesAndProjects">Skills and projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;