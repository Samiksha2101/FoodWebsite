import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    if (!showItems) {
      setShowIndex(index);
      //   showItems = true;
    } else {
      showItems = setShowIndex(null);
      showItems = false;
    }
  };
  return (
    <div className="w-6/12 shadow-lg bg-slate-50 mx-auto my-3 p-3 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold ">
          {data.title}({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* {accordian body} */}
      {showItems && <ItemList items={data.itemCards}></ItemList>}
    </div>
  );
};

export default RestaurantCategory;
