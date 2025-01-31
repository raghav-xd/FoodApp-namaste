import React from "react";
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestrumenu } from "../utils/useRestrumenu";
import RestrurantCate from "./RestrurantCate";

function RestrurantMenu() {
  const { resId } = useParams();

  //custom hook i use useRestrumenu logic of api calling is in it
  const resmenu = useRestrumenu(resId);

  const [showItem,setshowItem] = useState(null);


  if (!resmenu) {
    return <Shimmer />;
  }
  //  console.log(resmenu);
  const { name, cuisines, costForTwo } = resmenu.cards[2].card.card.info;
  //  console.log(resmenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
  const { itemCards } =
    resmenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log(itemCards);
  const categories = resmenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  // console.log(categories);

  // case for expaning cards
 


  const cate = categories.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // console.log(cate);
  // console.log(showItem);

  return (
    <div className="restrurant-outer">
      <div className="Restrumenu">
        <h1 className="restru-name">{name}</h1>
        <h4>
          {cuisines.join(", ")} - {costForTwo}
        </h4>
        <h2>Menu</h2>
      </div>
      {/* Categries accordians */}

      <div className="category">
        {cate.map((cat,index) => {
          return (
            <RestrurantCate
              key={cat?.card?.card?.title}
              data={cat?.card?.card}
              showItem={showItem===index?true:false}
              setshowItem={()=>setshowItem(index)}
            />
          );
        })}
        
      </div>
    </div>
    
    
  );
}

export default RestrurantMenu;
