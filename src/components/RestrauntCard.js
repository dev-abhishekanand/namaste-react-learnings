import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
export const RestrauntCard = ({ resData }) => {
  // console.log("resData", resData);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData;
  // console.log(cloudinaryImageId);
  const loggedInUserData = useContext(UserContext);
  const cloudinaryBaseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";
  const displayCuisines =
    cuisines.length > 3
      ? cuisines.slice(0, 3).join(", ") + "..."
      : cuisines.join(", ");
  return (
    // <div className="rest-card">
    <div className="m-5 p-5 w-52 shadow-lg bg-gray-100 rounded-lg hover:bg-emerald-900 hover:border-1 hover:border-gray-300 hover:text-white">
      <img
        className="rounded-lg"
        src={
          cloudinaryImageId
            ? `${cloudinaryBaseUrl}/${cloudinaryImageId}`
            : "https://media.istockphoto.com/id/1299079243/photo/food-for-healthy-brain.jpg?s=612x612&w=0&k=20&c=nEYOuCgPDUf5ftWUBB5Y61ZuqzRy3QJJ0QoI-j7tjUY="
        }
        alt="res-logo"
      />
      <div className=" font-bold py-2 flex justify-between">
        <p>{name}</p>
        <p>{avgRating}💚</p>
      </div>
      <p title={cuisines.join(", ")}>{displayCuisines}</p>

      {/* <p>rating: {avgRating}</p> */}
      <p> {costForTwo}</p>
      <p>Delivery In: {sla.slaString}</p>
      <p className="font-bold">User:: {loggedInUserData?.loggedInUser}</p>
    </div>
    // </div>
  );
};
export default RestrauntCard;
