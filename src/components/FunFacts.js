import React, { Component } from "react";

class FunFacts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="funFact">
        <p>Did tou know that we are going to teach you a lot of things with those fun facts</p>
        <button className="funFact-button"><i class="fas fa-recycle"></i></button>
      </div>
    );
  }
}

export default FunFacts;
