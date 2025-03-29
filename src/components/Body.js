import { useState } from "react";
import { resList } from "../utils/mockData";
import { RestrauntCard } from "./RestrauntCard";

const Body = () => {
  const [restraunts, setRestraunts] = useState(resList);
  const handleFilterBestRestraunt = () => {
    const best = resList.filter((res) => {
      return res.rating > 4.1;
    });
    setRestraunts(best);
  };

  return (
    <div className="body">
      <div className="search-filter">
        {/* <div className="search">
          <input type="text" placeholder="Search..." className="searchInput" />
          <button className="searchInput">Search</button>
        </div> */}
        <div className="rating-button">
          <button className="filter-btn" onClick={handleFilterBestRestraunt}>
            Top Rated Restraunt
          </button>
        </div>
      </div>

      <div className="res-container">
        {restraunts?.map((res) => (
          <RestrauntCard key={res?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
