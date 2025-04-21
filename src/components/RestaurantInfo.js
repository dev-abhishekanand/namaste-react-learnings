import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_INFO_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch(RESTAURANT_INFO_URL + resId);
  //       const apiData = await data.json();
  //       setResInfo(apiData.data);
  //       console.log(apiData);
  //     } catch (error) {
  //       console.error("Error fetching restaurant data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (resInfo === null) return <Shimmer />;

  // if (!resInfo) {
  //   return <Shimmer />;
  // }
  const { name, avgRating, costForTwoMessage, cuisines, sla } =
    resInfo?.cards[2]?.card?.card?.info || {};

  //   const categories =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card
  //       .categories;
  // console.log(
  //   "resInfo?.cards",
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards
  // );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);
  return (
    <div className=" items-center justify-center  bg-white p-5 m-5 w-1/2 mx-auto">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <div className="flex flex-col gap-2 my-2 border-1 border-gray-400 rounded-lg h-30 p-5  bg-white shadow-lg">
        <p className="font-bold  text-gray-900">
          💚{avgRating}ratings . {costForTwoMessage}
        </p>
        <p className="font-bold text-lg text-orange-400">
          {cuisines.join(", ")}
        </p>
        <p className="font-bold text-lg text-gray-900">{sla?.slaString}</p>
        <hr className="my-4 border-t border-gray-300" />
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            category={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantInfo;
