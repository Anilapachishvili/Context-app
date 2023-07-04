import { MyContext } from "../MyContext";
import React from "react";
import "./About.css";
import { useContext } from "react";
function About () {
    const darkMode = useContext(MyContext);
    return(
        <div className={darkMode ? "dark-text" : ""}>
            <div className="info">
            <h1>About us</h1>
            </div>
        </div>
    )
}
export default About;