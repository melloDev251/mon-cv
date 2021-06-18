import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languages, languagesIcons, source, info, picture } =
      this.props.itemDouble;
    return (
      <>
        <div className="project">
          <div className="icons">
            {languagesIcons.map((icon) => {
              <i className={icon} key={icon}></i>;
            })}
          </div>
          <h3> {name} </h3>
          <img src={picture} alt="project name" onClick={this.handleInfo} />
          <span className="infos" onClick={this.handleInfo}>
            <i className="fas fa-plus-circle"></i>
          </span>

          {this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2> {languages} </h2>
                  <div className="sourceCode">
                    <a href={source} className="button" target="_blank" rel="noopener noreferrer">
                      Code source
                    </a>
                  </div>
                </div>

                <p className="text"> {info} </p>

                <div className="button return" onClick={this.handleInfo}>
                  <i className="fas fa-undo-alt"> </i>
                  <span> Retour</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
