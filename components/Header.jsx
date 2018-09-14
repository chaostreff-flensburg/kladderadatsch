import React from "react";
import { Settings } from "react-feather";
import { Calendar } from "react-feather";

class Navigation extends React.Component {
  getDate = () => {
    var dateTime = new Date();
    var weekdays = [
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
      "Sonnatg"
    ];
    var weekday = dateTime.getDay();
    var day = dateTime.getDate() + "." + dateTime.getMonth();
    return weekdays[weekday - 1] + " " + day;
  };

  render() {
    return (
      <header>
        <nav>
          <span className="settings">
            <Settings />
          </span>
          <h1>Kladderadatsch</h1>
          <figure>
            <span className="calendar">
              <Calendar />
            </span>
            <figcaption>{this.getDate()}</figcaption>
          </figure>
        </nav>

        <style jsx>{`
          h1 {
            font-size: 20px;
            font-family: sans-serif;
            margin: 0;
            display: inline;
            position: relative;
            margin-left: 74px;
            margin-top: 10px;
            padding-left: 5px;
          }

          h1::before {
            content: "";
            position: absolute;
            background-image: url(../static/icon-512.png);
            background-size: 25px 25px;
            width: 25px;
            height: 25px;
            right: 100%;
          }

          figure {
            margin: 0;
          }

          nav {
            padding: 1rem;
            border-bottom: solid 1px;
            border-color: #605f5e;
            display: flex;
            justify-content: space-between;
            align-items: stretch;
          }

          .settings {
            margin-top: 10px;
          }

          .calendar {
            display: block;
            text-align: center;
          }
        `}</style>
      </header>
    );
  }
}

export default Navigation;
