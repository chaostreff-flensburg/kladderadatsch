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
          <figure>
            <span>
              <Settings />
            </span>
            <figcaption>Einstellungen</figcaption>
          </figure>

          <figure className="mark">
            <img className="logo" src="../static/icon-512.png" alt="" />
            <figcaption className="title">Kladderadatsch</figcaption>
          </figure>

          <figure>
            <span>
              <Calendar />
            </span>
            <figcaption>{this.getDate()}</figcaption>
          </figure>
        </nav>

        <style jsx>{`
          .title {
            font-size: 20px;
            display: none;
          }

          header {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            background-color: #ffffff;
            z-index: 100;
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
            align-items: flex-end;
          }

          span {
            display: block;
            text-align: center;
            font-size: 14px;
          }

          .logo {
            width: 45px;
            height: 45px;
            margin-left: 50%;
            transform: translateX(-50%);
          }

          @media screen and (min-width: 450px) {
            .title {
              display: inherit;
            }

            .logo {
              width: 30px;
              height: 30px;
            }
          }
        `}</style>
      </header>
    );
  }
}

export default Navigation;
