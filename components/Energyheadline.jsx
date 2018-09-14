import React from "react";

class Energyheadline extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Energiereserve</h2>

        <style jsx>{`
          h2 {
            display: block;
            text-align: center;
            font-size: 18px;
            font-family: "Roboto", sans-serif;
            margin: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Energyheadline;
