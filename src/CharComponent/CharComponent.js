import React from "react";
import "./CharComponent.css";

const CharComponent = (props) => {
  return (
    <div onClick={props.click} style={props.style} className="char-comp">
      <p> {props.letter}</p>
    </div>
  );
};
export default CharComponent;
