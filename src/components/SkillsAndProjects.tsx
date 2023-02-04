import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
} from "@fortawesome/free-brands-svg-icons";

function MainContent() {
    return (
        <div className="description">
            <h2 className="gap">
                Main Languages: Java, Javascript and Typescript
            </h2>
            <h2>
                Libraries/Frameworks: React.js, Node.js based on Express.js and Next.js
            </h2>
            <h2>
                Databases: SQL-based databases, most experienced with MySQL
            </h2>
            <p className="pElement">
                The project I am currently most proud of is my simple application where users can log in and view/add/edit records to a couple of different tables,
                these changes will affect what other tables display and what options are available when, for example, adding a new "OrderedProduct" record.
                The application was made with React.js on the front-end making API calls to my Node.js Express backend which utilizes MySQL and MongoDB databases.
                Available on Github here:
            </p>
            <div className="iconActive">
                <a href="https://github.com/D34THNOTE/TIN_Project" className="github" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
            </div>

            <p className="pElement">
                Another project I am happy to display is a recreation of the bottom screen of the very old-school game Donkey Kong
                as it on the DK-52 portable console. The project was made in Java using the Swing library.
                Project available on Github here:
            </p>
            <div className="iconActive">
                <a href="https://github.com/D34THNOTE/DK-52_Donkey_Kong_in_Java_bottom_screen" className="github" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
            </div>
        </div>
)
}

export default MainContent;