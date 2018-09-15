import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sliderValue: null };
  }

  sliderChange = e => {
    let sliderState = e.nativeEvent.target.valueAsNumber;
    this.setState({ sliderValue: sliderState });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <label htmlFor="slider">Energiereserve</label>
          <input
            id="slider"
            onChange={this.sliderChange}
            type="range"
            min="0"
            max="100"
            step="any"
          />
        </form>

        <style jsx>{`
          form {
            width: 80%;
            margin: 0 auto;
            padding-top: 1rem;
          }

          input[type="range"] {
            width: 100%;
            padding-top: 1rem;
            padding-bottom: 1rem;
            margin: 0;
            position: relative;
            cursor: pointer;
          }

          label {
            display: block;
            text-align: center;
            font-size: 18px;
            margin: 0;
          }

          input[type="range"]::before,
          input[type="range"]::after {
            position: absolute;
            top: -10px;
            font-size: 16px;
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
