import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1.5 },
      { id: 2, value: "TypeScript", xp: 1.1 },
      { id: 3, value: "Python", xp: 1 },
      { id: 4, value: "PHP", xp: 0.7 },
      { id: 5, value: "Css", xp: 1.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.6 },
      { id: 2, value: "Node.Js", xp: 1.6 },
      { id: 3, value: "Angular", xp: 1.2 },
      { id: 4, value: "Django", xp: 1.5 },
      { id: 5, value: "Laravel", xp: 0.3 },
      { id: 6, value: "Bootstrap", xp: 1.5 },
      { id: 7, value: "Sass", xp: 1.2 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;
    return (
      <div class="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="languages"
        />

        <ProgressBar
          languages={frameworks}
          className="frameworkDisplay"
          title="framework & bibliothèques"
        />
      </div>
    );
  }
}
