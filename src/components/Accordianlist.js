import React from "react";
import { CDN_URL } from "../utils/constants";

function Accordianlist({ dataa }) {
  console.log(dataa);
  return (
    <div className="accordian-items">
      {dataa.map((item) => {
        return (
          <div key={item.card.info.id} className="accordian-item">
            <div>
              <div className="item-name">
                <span>{item.card.info.name}</span>
                <span> ₹- {item.card.info.price / 100}</span>
                <p>{item.card.info.description}</p>
              </div>
            </div>

            <div>
              <img
                className="item-img"
                src={CDN_URL + item.card.info.imageId}
              ></img>
              <button>Add +</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordianlist;
