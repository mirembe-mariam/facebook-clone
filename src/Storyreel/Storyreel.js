import React from "react";
import "./Storyreel.css";
import Story from "../Story/Story.js";

function Storyreel() {
  return (
    <div className="Storyreel">
      <Story
        image=""
        profileSRc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYNmE6RAcIrnm8-_gfi2RFw6-rMCXFvEqWQ&usqp=CAU"
        title="Mariam"
      />

      <Story image="" profileSRc="" title="Hanna" />

      <Story
        image=""
        profileSRc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieTWwY4fbW7B8kkq6jOzIikdWu25eVY2cBg&usqp=CAU"
        title="Allan"
      />
    </div>
  );
}

export default Storyreel;
