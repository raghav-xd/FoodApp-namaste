import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function Accordianlist({ dataa }) {
  console.log(dataa);

  // const dispatch = useDispatch();
  const dispatch=useDispatch();
  const handleAdditem=(item)=>{
    //dispatch an action 
    dispatch(addItem(item));
  }

  return (
    <div className="accordian-items">
      {dataa.map((item) => {
        
        return (
          <div key={item.card.info.id} className="accordian-item">
            <div>
              <div className="item-name">
                <span>{item.card.info.name}</span>
                <span> ₹- {item.card.info.price / 100}</span>
                {/* <span>{item.card.info.description}</span> */}
              </div>
            </div>

            <div>
              <img
                className="item-img"
                src={CDN_URL + item.card.info.imageId}
              ></img>
              <button onClick={()=>{
                handleAdditem(item)
              }}>Add +</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordianlist;
