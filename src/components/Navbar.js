import React from "react";

class NameDisplay extends React.Component {
  render() {
    const name = "John Doe"; // Replace with the name you want to display

    return (
      <div>
        <h1>Hello, {name}!</h1>
      </div>
    );
  }
}

export default NameDisplay;
