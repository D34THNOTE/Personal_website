import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faDiscord
} from "@fortawesome/free-brands-svg-icons";

function MainContent() {
    return (
        <main className="contactTransformation">
            <h2>
                My e-mail address: detnotatka@gmail.com
            </h2>
            <h2>
                You can also reach me on Discord and check out my Github profile!
            </h2>
            <h2>
                (If the Discord link doesn't work despite every thread on the internet claiming one like that should work,
                you can find me on Discord using this: D34THNOTE#9322)
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