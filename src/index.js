//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
let greetings;
let headingStyle = {
  color: "black"
};
const getTime = (day = new Date().getHours()) => {
  let morning = 0;
  let afternoon = 12;
  let night = 18;
  if (day >= morning && day < afternoon) {
    return (greetings = "Good morning"), (headingStyle.color = "red");
  } else if (day >= afternoon && day <= night) {
    return (greetings = "Good afternon"), (headingStyle.color = "green");
  } else {
    return (greetings = "Good evening"), (headingStyle.color = "blue");
  }
};
getTime();
ReactDOM.render(
  <div>
    <h1 className="heading" style={headingStyle}>
      {greetings}
    </h1>
  </div>,
  document.getElementById("root")
);
