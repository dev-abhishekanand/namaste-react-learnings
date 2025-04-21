import React, { useState } from "react";
import RestaurantCategoryItemList from "./RestaurantCategoryItemList";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  // const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" gap-2 my-2 p-4  bg-gray-300 shadow-lg rounded-lg">
        <div className="flex justify-between" onClick={handleToggle}>
          <span className="font-bold text-lg">
            {category?.title}({category?.itemCards?.length})
          </span>
          <span>{showItems ? "↓" : "↑"}</span>
        </div>
        <div className="flex justify-center">
          {showItems && (
            <RestaurantCategoryItemList items={category?.itemCards} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
