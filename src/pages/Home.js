import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>mello Dev</h1>
          <h2>Développeur front-end</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Télécharger
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
