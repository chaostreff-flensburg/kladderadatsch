import React from "react";
import { Settings } from "react-feather";
import { PlusCircle } from "react-feather";
import { XCircle } from "react-feather";

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

  showAddTask = () => {
    document.getElementById("form").classList.add("add-task");
  };

  hideAddTask = () => {
    document.getElementById("form").classList.remove("add-task");
  };

  save = e => {
    e.preventDefault();
    var title = document.getElementById("title").value;
    var energyLevel = document.getElementById("slider").value;

    console.log("Titel: " + title + " Energy: " + energyLevel);
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
            <img className="logo" src="../icon-512.png" alt="" />
          </figure>
          <figure className="add" onClick={this.props.onCreateTask}>
            <span>
              <PlusCircle />
            </span>
            <figcaption>Neue Aufgabe</figcaption>
          </figure>
        </nav>
        {/* <form id="form">
          <span className="close" onClick={this.hideAddTask}>
            <XCircle />
          </span>
          <label htmlFor="title">Titel</label>
          <input type="text" id="title" />
          <label htmlFor="slider">Benötige Energie</label>
          <input type="range" min="0" max="360" step="10" id="slider" />
          <button onClick={this.save}>Speichern</button>
        </form> */}

        <style jsx>{`
          .title {
            font-size: 20px;
            display: none;
          }

          label {
            display: block;
            text-align: center;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }

          form {
            width: 80%;
            margin: 0 auto;
            padding-bottom: 0.5rem;
            border-bottom: solid 1px #605f5e;
            display: none;
          }

          .add-task {
            display: inherit;
          }

          .add {
            cursor: pointer;
          }

          button {
            margin-left: 50%;
            transform: translateX(-50%);
          }

          input {
            display: block;
            text-align: center;
            width: 100%;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
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
            border-bottom: solid 1px #dedede;
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

          .close {
            text-align: right;
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;
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
