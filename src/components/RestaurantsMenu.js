import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTURL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantsMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  console.log("menu rendered " + resInfo);
  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="rest-menu-pg">
      <img
        className="restMenu-img"
        src={RESTURL + cloudinaryImageId}
        alt="restaurant img"
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join()}</h3>
      <h2>{avgRating}</h2>

      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            <h4>
              {item.card.info.name}
              {"  -   Rs"}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantsMenu;
