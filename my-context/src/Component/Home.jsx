import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import "./Home.css"

function Home () {
  const darkMode = useContext(MyContext);

    return(
        <div className={darkMode ? "dark-text" : ""}>
          <div className="txt">
          <h2>Home</h2>
          </div>
        </div>
    )
}
export default Home;