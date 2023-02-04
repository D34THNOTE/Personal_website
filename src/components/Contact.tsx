import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faDiscord
} from "@fortawesome/free-brands-svg-icons";

function MainContent() {
    return (
        <main>
            <h2>
                My e-mail address: detnotatka@gmail.com
            </h2>
            <h2>
                You can also reach me on Discord and check out my Github profile!
            </h2>
            <div className="iconActive">
                <a href="https://github.com/D34THNOTE" className="github" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://discord.com/users/417950493772480515" className="discord" target="_blank">
                    <FontAwesomeIcon icon={faDiscord} size="3x" />
                </a>
            </div>

        </main>
    )
}

export default MainContent;