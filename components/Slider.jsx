import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sliderValue: null };

    // This binding is necessary to make `this` work in the callback
    this.sliderChange = this.sliderChange.bind(this);
  }

  sliderChange() {
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
          onChange={this.sliderChange}
          type="range"
          min="0"
          max="360"
          step="10"
        />

        <style jsx>{`
          input[type="range"] {
            width: 100%;
            padding-top: 1rem;
            padding-bottom: 1rem;
            margin: 0;
            position: relative;
          }

          input[type="range"]::before,
          input[type="range"]::after {
            position: absolute;
            top: 0;
          }

          input[type="range"]::before {
            content: "-";
            left: 0;
          }

          input[type="range"]::after {
            content: "+";
            right: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Slider;
