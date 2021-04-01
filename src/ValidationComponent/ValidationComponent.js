import React from "react";

const validationComponent = (props) => {
  return (
    <div>
      <p>{props.validation} the text length is: {props.textLength}</p>
      <p>To erase a letter just click on it</p>
    </div>
  );
};
export default validationComponent;
