import React from "react";
import "../index.css";

function Birthday({ birthday }) {
  return (
    <div className="container">
      <img src={birthday.img} alt="face"></img>
      <div className="card">
        <h4>{birthday.name}</h4>
        <p>{birthday.age} years</p>
      </div>
    </div>
  );
}

export default Birthday;
