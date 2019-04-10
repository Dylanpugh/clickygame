import React from "react";
import "./style.css";


function Header(props){
    return(
        <div className="jumbotron" id="jumbo">

                <h1>Clicky Game</h1>

                <h2>Score: {props.children} </h2>

                <h2>Top Score: {props.children}</h2>

        </div>
    )
}

export default Header;