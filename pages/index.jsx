import React from "react";
import { settings } from "react-feather";

class Page extends React.Component {
  getDateTime = () => {
    return "Hello world 2";
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <img src="<settings />" alt="" />
          <settings color="red" size={48}/>
          <h1>{this.getDateTime()}</h1>
          <img src="assets/" alt="" className="calendar" />
        </header>

        <style jsx>{`
          h1 {
            font-family: sans-serif;
            margin: 0;
          }

          header {
            padding-bottom: 0.1rem;
            border-bottom: solid 1px;
            border-color: lightslategray;
          }
        `}</style>

        {/* Global style for body etc. */}
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
