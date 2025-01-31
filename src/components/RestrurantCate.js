import React from "react";
import Accordianlist from "./Accordianlist";
import { useState } from "react";

function RestrurantCate({data,showItem,setshowItem}) {
  // console.log({showItem});
  // const { data } = props;
  // console.log(data);
 const handleclick=()=>{
  setshowItem();
 }
  

  return (
    <div className="catee">
      <div className="category1" >
        <div>
          <span className="category-title" onClick={handleclick}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
      </div>

      <div className="category2">
        {showItem && <Accordianlist dataa={data.itemCards} />}
      </div>
    </div>
    
  );
}

export default RestrurantCate;
