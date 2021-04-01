import "./App.css";
import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
class App extends Component {
  // state is an js object.
  state = {
    long: "0",
    content: "",
  };

  handleChange = (event) => {
    this.setState({
      long: event.target.value.length,
      content: event.target.value,
    });
  };

  // setColor = () => {
  //   const colors = [
  //     "rgba(235,64,52,0.3)",
  //     "rgba(29,43,74,0.3)",
  //     "rgba(69,29,74,0.3)",
  //     "rgba(163,73,31,0.3)",
  //   ];

  //   return colors[Math.floor(Math.random() * colors.length)];
  // };

  deleteChars = (charIndex) => {
    //copies array
    const wordList = [...this.state.content.split("")];
    //deletes an array item from a list on the given index
    wordList.splice(charIndex, 1);
    this.setState({
      long: wordList.join("").length,
      content: wordList.join(""),
    });
  };

  render() {
    // console.log(this.setColor());
    let validation = null;
    if (this.state.long < 5) {
      validation = "Text too short,";
    } else if (this.state.long >= 5) {
      validation = "Text is long enough,";
    }

    const colors = [
      "rgba(235,64,52,0.3)",
      "rgba(29,43,74,0.3)",
      "rgba(69,29,74,0.3)",
      "rgba(163,73,31,0.3)",
    ];

    let letters = (
      <div>
        {this.state.content.split("").map((char, index) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <CharComponent
              key={`${char} + ${index}`}
              style={{
                backgroundColor: color,
              }}
              click={() => this.deleteChars(index)}
              letter={char}
            ></CharComponent>
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <h2>Write some text on the input field</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.content}
        ></input>
        <ValidationComponent
          textLength={this.state.long}
          validation={validation}
        />
        {letters}
      </div>
    );
  }
}

export default App;
