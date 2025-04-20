import React from "react";
import { CDN_URL } from "../utils/constants";

const CategoryItemList = ({ items }) => {
  console.log("items", items);
  const cloudinaryBaseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";

  return (
    <div>
      {items.map((item) => (
        <div
          className="flex justify-between items-center shadow-lg my-2 p-4 bg-white rounded-lg"
          key={item?.card?.info?.id}
        >
          <div className="flex flex-col gap-1 w-9/12">
            <span className="font-bold text-lg">
              {item?.card?.info?.name}
              {item.card.info.itemAttribute.vegClassifier === "VEG"
                ? "🌱(veg)"
                : "🍗(non-veg)"}
            </span>
            <span>
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <span className="text-gray-500">
              {item?.card?.info?.description}
            </span>
          </div>
          <div className="w-3/12">
            <img
              src={`${cloudinaryBaseUrl}/${item?.card?.info?.imageId}`}
              alt={item?.card?.info?.name}
              className="w-30 h-auto rounded-lg"
            />
            <button className="bg-orange-400 text-white rounded-lg p-2 w-1/2 mx-6 hover:bg-orange-500 cursor-pointer">
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemList;
