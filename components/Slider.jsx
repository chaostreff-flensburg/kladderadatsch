import React from "react";

class Slider extends React.Component {


  render() {
    return (
      <React.Fragment>
        <input type="range" min="0" max="360" step="10"/>

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
