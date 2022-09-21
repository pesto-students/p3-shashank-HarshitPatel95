import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Room = () => {
  const [isLightOn, setIsLightOn] = useState(true);

  const flipLight = () => {
    setIsLightOn(!isLightOn);
  };

  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
};

ReactDOM.render(<Room />, document.getElementById("root"));
