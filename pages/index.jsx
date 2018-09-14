import React from "react";
import { Settings } from "react-feather";
import { Calendar } from "react-feather";
import Navigation from "../components/Navigation";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
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
