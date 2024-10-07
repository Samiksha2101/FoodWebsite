import { useContext } from "react";
import { RESTURL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { restData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    restData?.info;
  //   console.log(avgRating);
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="rest-card m-4 p-4 w-[250px] h-[400px] rounded-md bg-slate-100 hover:bg-slate-300">
      <img
        className="rest-img rounded-md h-52 w-[240px]"
        src={RESTURL + cloudinaryImageId}
        alt="restaurant img"
      ></img>
      <h2 className="font-bold py-2">{name}</h2>
      <h4>{cuisines.join(" ")}</h4>
      <h4>Rating {avgRating}</h4>
      <h3>{costForTwo}</h3>
      {/* <h4>{loggedInUser}</h4> */}
    </div>
  );
};

// higher order component
export const withPromoted = (RestaurentCard) => {
  return (props) => {
    return () => (
      <div>
        <label>Promoted</label>
        <RestaurentCard {...props}></RestaurentCard>
      </div>
    );
  };
};

export default RestaurentCard;
