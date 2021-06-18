import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intêrets</h3>
      <ul>
        <li className="hobby">
          <i class="fas fa-gamepad"></i>
          <span>Jeux video</span>
        </li>
        <li className="hobby">
          <i class="fas fa-swimmer"></i>
          <span>Natation</span>
        </li>
        <li className="hobby">
          <i class="fas fa-rocket"></i>
          <span>Espace</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
