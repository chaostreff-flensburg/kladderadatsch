import React from "react";

class Page extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Hello Kladderadatsch!</h1>
        <style jsx>{`
          h1 {
            font-family: sans-serif;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
