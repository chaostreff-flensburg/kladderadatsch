import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sliderValue: null};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var sliderState = document.getElementById("slider").value;
    console.log(sliderState);
    this.setState(state => ({
      sliderValue: !state.sliderState
    }));
  }

  render() {
    return (
      <React.Fragment>
        <input
          id="slider"
          onChange={this.handleClick}
          type="range"
          min="0"
          max="360"
          step="10"
        />

        <style jsx>{`
          input {
            width: 100%;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Slider;
