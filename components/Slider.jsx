import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  sliderChange = e => {
    this.props.onSliderChange(e.nativeEvent.target.valueAsNumber);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <label htmlFor="slider">Energie</label>
          <input
            id="slider"
            onChange={this.sliderChange}
            type="range"
            min="1"
            max={this.props.maxLevel + 1}
            step="any"
            value={this.props.energyLevel}
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
            margin: 0;

            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0.5px;
            text-transform: uppercase;
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
