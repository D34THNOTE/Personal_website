import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
} from "@fortawesome/free-brands-svg-icons";

function MainContent() {
    return (
        <div className="description">
            <h2 className="gap">
                Main Languages: Java, Javascript and Typescript, C#
            </h2>
            <h2>
                Libraries/Frameworks: React.js, Node.js based on Express.js and Next.js
            </h2>
            <h2>
                Databases: SQL-based databases, most experienced with MSSQL and PostgreSQL
            </h2>

            <p className="pElement">
                The project I am currently most proud of is my simple application where users can log in and view/add/edit records to a couple of different tables,
                these changes will affect what other tables display and what options are available when, for example, adding a new "OrderedProduct" record.
                The application was made with React.js on the front-end making API calls to my Node.js Express backend which utilizes a MySQL database.
                Available on Github here:
            </p>
            <div className="iconActive">
                <a href="https://github.com/D34THNOTE/TIN_Project" className="github" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
            </div>
            <img src="/Personal_website/images/TINss.png" className="bigImg" />

            <p className="pElement">
                Another project of mine that I am happy to share is my recreation of the bottom screen of a very old-school Donkey Kong game,
                the way it was known on the DK-52 portable console. The project was made in Java using the Swing library.
                Project available on Github here:
            </p>
            <div className="iconActive">
                <a href="https://github.com/D34THNOTE/DK-52_Donkey_Kong_in_Java_bottom_screen" className="github" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
            </div>
            <img src="/Personal_website/images/DKss.png" className="lastImg" />
        </div>
)
}

export default MainContent;