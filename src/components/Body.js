import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestrauntCard } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const [restraunts, setRestraunts] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const handleFilterBestRestraunt = () => {
    const best = restraunts.filter((res) => {
      return res.info.avgRating > 4.1;
    });
    setRestraunts(best);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  const handleSearch = () => {
    const FilteredData = restraunts.filter((res) =>
      res.info.name.toLowerCase().includes(searchtext.toLocaleLowerCase())
    );
    setFilteredRestraunt(FilteredData);
  };
  console.log("component rerendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await response.json();

      const restaurantList =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestraunts(restaurantList);
      setFilteredRestraunt(restaurantList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }
  // if (restraunts.length === 0) {
  //   return <Shimmer />;
  // }

  return restraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="searchInput"
            value={searchtext}
            onChange={handleSearchChange}
          />
          <button className="searchInput" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="rating-button">
          <button className="filter-btn" onClick={handleFilterBestRestraunt}>
            Top Rated Restraunt
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestraunt?.map((res) => {
          return (
            <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
              <RestrauntCard resData={res.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
