import { CDN_URL } from "../utils/constants";
export const RestrauntCard = ({ resData }) => {
  // console.log("resData", resData);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData;
  // console.log(cloudinaryImageId);

  const cloudinaryBaseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";
  const displayCuisines =
    cuisines.length > 3
      ? cuisines.slice(0, 3).join(", ") + "..."
      : cuisines.join(", ");
  return (
    <div className="rest-card">
      <div className="res-card">
        <img
          className="res-logo"
          src={
            cloudinaryImageId
              ? `${cloudinaryBaseUrl}/${cloudinaryImageId}`
              : "https://media.istockphoto.com/id/1299079243/photo/food-for-healthy-brain.jpg?s=612x612&w=0&k=20&c=nEYOuCgPDUf5ftWUBB5Y61ZuqzRy3QJJ0QoI-j7tjUY="
          }
          alt="res-logo"
        />
        <h3>{name}</h3>
        <p title={cuisines.join(", ")}>{displayCuisines}</p>

        <p>rating: {avgRating}</p>
        <p> {costForTwo}</p>
        <p>Delivery In: {sla.slaString}</p>
      </div>
    </div>
  );
};
export default RestrauntCard;
