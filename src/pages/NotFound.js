import React from "react";
import { NavLink } from 'react-router-dom';


const NotFound = () => {
  return (
    <div class="notFound">
      <div class="notFoundContent">
        <h3>Page Not Found</h3>
        <NavLink exact to="/">
            <i className="fas fa-home"></i>
            <span>Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
