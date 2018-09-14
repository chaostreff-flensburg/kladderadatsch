import React from "react";
import Navigation from "../components/Navigation";
import Task from "../components/Task";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <ul>
          <Task color="123" title="Beispiel task"/>
        </ul>
        {/* Global style for body etc. */}
        <style jsx global>{`
          body {
            margin: 0;
            color: #605f5e;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Page;
