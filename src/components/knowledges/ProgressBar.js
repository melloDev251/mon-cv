import React from "react";

const ProgressBar = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <h3> {props.title} </h3>
      <div className="years">
        <span>Années d'expériences</span>
        <span>3 mois</span>
        <span>9 mois</span>
      </div>

      <div>
        {props.languages.map((item) => {
        //   console.log(item);
          let xpyears = 2;
          let progressBar = (item.xp / xpyears) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <li> {item.value} </li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
