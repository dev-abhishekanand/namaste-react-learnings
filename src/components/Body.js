import { useContext, useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestrauntCard } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import useRestaurantList from "../hooks/useRestaurantList";
import withPromotedLabel from "./withPromotedLabel";
import { useSearch } from "../hooks/useSearch";
import UserContext from "../utils/UserContext";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const [restraunts, loading] = useRestaurantList();
  const {
    searchtext,
    setSearchText,
    filteredRestraunt,
    handleSearch,
    setFilteredRestraunt,
  } = useSearch(restraunts);

  useEffect(() => {
    setFilteredRestraunt(restraunts);
  }, [restraunts]);

  const handleFilterBestRestraunt = () => {
    const best = restraunts.filter((res) => {
      return res.info.avgRating > 4.2;
    });
    setFilteredRestraunt(best);
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  // const handleSearch = () => {
  //   const FilteredData = restraunts.filter((res) =>
  //     res.info.name.toLowerCase().includes(searchtext.toLocaleLowerCase())
  //   );
  //   setFilteredRestraunt(FilteredData);
  // };
  // console.log("component rerendered");

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const jsonData = await response.json();

  //     const restaurantList =
  //       jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants || [];

  //     setRestraunts(restaurantList);
  //     setFilteredRestraunt(restaurantList);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }
  // if (restraunts.length === 0) {
  //   return <Shimmer />;
  // }

  const PromotedRestrauntCard = withPromotedLabel(RestrauntCard);

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-5 m-5 bg-yellow-400 justify-between rounded-lg">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className=" border-solid border-black border-2 rounded-lg p-2"
            value={loggedInUser}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" bg-green-900 px-5 py-2 m-5 text-white rounded-lg cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="rating-button">
          <input
            type="text"
            className="bg-white p-2 rounded-lg"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className=" bg-green-900 px-5 py-2 m-5 text-white rounded-lg cursor-pointer"
            onClick={handleFilterBestRestraunt}
          >
            Top Rated Restraunt
          </button>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filteredRestraunt?.map((res) => {
          return (
            <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
              <PromotedRestrauntCard resData={res.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
