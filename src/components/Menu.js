import React from "react";
import Menucard from "./Menucard";
import menudata from "../utils/menudata";

const Menu = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-heading">🍽️ Order Our Best Food Options</h2>

      <div className="menu-grid">
        {menudata.map((item, index) => (
          <Menucard key={index} prop={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
