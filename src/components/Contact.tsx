import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
} from "@fortawesome/free-brands-svg-icons";

function MainContent() {
    return (
        <main className="contactTransformation">
            <h2>
                My e-mail address: bartoszjanowskics@gmail.com
            </h2>
            <h2>
                You can also check out my Github profile using the link below!
            </h2>
            <div className="iconActive">
                <a href="https://github.com/D34THNOTE" className="github" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
            </div>

        </main>
    )
}

export default MainContent;