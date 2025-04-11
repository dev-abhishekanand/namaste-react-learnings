import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_INFO_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantInfo = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo", resInfo);
  //   console.log("resInfo", resId);
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

  // if (resInfo === null) return <Shimmer />;

  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage, cuisines, sla } =
    resInfo?.cards[2]?.card?.card?.info || {};

  //   const categories =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card
  //       .categories;

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <h3>
          {costForTwoMessage} - {avgRating}✅
        </h3>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{sla.slaString}</h3>
      </div>
      {/* <div>
        <h1>MenuCard</h1>
        {categories.length > 0 ? (
          categories.map((category) => {
            return (
              <div key={category.categoryId}>
                <h2>{category.title}</h2>
                {category.itemCards.map((item) => {
                  return (
                    <div key={item.card.info.id}>
                      <p>
                        {item.card.info.name}- ₹
                        {item.card.info.defaultPrice ||
                          item.card.info.price / 100}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })
        ) : (
          <p>No menu available.</p>
        )}
      </div> */}
    </div>
  );
};

export default RestaurantInfo;
