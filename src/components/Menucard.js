import React from "react";
import { Link } from "react-router-dom";

const Menucard = ({ prop }) => {
  const restaurantId=498382;
  return (
    <div className="menu-card">
     <Link to={`/restrurant/${restaurantId}`}>
      <img className="menu-img" src={prop.img} alt={prop.name} />
      </Link>
      <h3 className="menu-card-name">{prop.name}</h3>
      {/* <p className="menu-card-price">💲{prop.price}</p> */}
      {/* <button className="menu-btn">Click it</button> */}
      
      

      
    </div>
  );
};

export default Menucard;
