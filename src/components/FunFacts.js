import React, { Component } from "react";

class FunFacts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="funFact">
        <p>A fun fact</p>
        <button>again</button>
      </div>
    );
  }
}

export default FunFacts;
