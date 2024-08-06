import { RESTURL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { restData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    restData?.info;
  //   console.log(avgRating);
  return (
    <div className="rest-card">
      <img
        className="rest-img"
        src={RESTURL + cloudinaryImageId}
        alt="restaurant img"
      ></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(" ")}</h4>
      <h4>Rating {avgRating}</h4>
      <h3>{costForTwo}</h3>
    </div>
  );
};
export default RestaurentCard;
