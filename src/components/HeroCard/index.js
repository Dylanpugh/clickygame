import React from "react";
import "./style.css";

function HeroCard(props) {
  return (
    <span onClick={() => props.clickHero(props.id)} className="click">
      <div className="card">
        <div className="img-container">
          <img src={props.image} />
        </div>
      </div>
    </span>
  );
}

export default HeroCard;

