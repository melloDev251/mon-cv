import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "typescript" },
      { id: 3, value: "python" },
      { id: 4, value: "php" },
      { id: 5, value: "css" },
    ],
    selectedRadio: "javascript",
  };

  handleChangeRadio = (event) => {
    // console.log(event.target.value);
    let radio = event.target.value;
    this.setState({
      selectedRadio: radio,
    });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id} className="">
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleChangeRadio}
                />
                <label htmlFor={radio.value}> {radio.value} </label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} itemDouble={item} />;
            })}
        </div>
      </div>
    );
  }
}
