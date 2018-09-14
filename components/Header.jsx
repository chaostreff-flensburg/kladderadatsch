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
          <figure>
            <img className="logo" src="../static/icon-512.png" alt="" />
            <figcaption className="title">Kladderadatsch</figcaption>
          </figure>
          <figure>
            <span className="calendar">
              <Calendar />
            </span>
            <figcaption>{this.getDate()}</figcaption>
          </figure>
        </nav>

        <style jsx>{`
          .title {
            font-size: 20px;
            font-family: "Roboto", sans-serif;
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

          .logo {
            width: 30px;
            height: 30px;
            margin-left: 50%;
            transform: translateX(-50%);
          }
        `}</style>
      </header>
    );
  }
}

export default Navigation;
