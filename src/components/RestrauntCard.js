export const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, image, cuisine, rating, costForTwo, deliveryTime } = resData;
  return (
    <div className="rest-card">
      <div className="res-card">
        <img className="res-logo" src={image} alt="res-logo" />
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <p>rating: {rating}</p>
        <p>Cost of Two: {costForTwo}</p>
        <p>Delivery In: {deliveryTime}</p>
      </div>
    </div>
  );
};
export default RestrauntCard;
