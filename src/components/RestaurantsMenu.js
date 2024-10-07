import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTURL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantsMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  const [showIndex, setShowIndex] = useState(0);

  // console.log("menu rendered " + resInfo);
  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="rest-menu-pg">
      <img
        className="restMenu-img m-auto size-48"
        src={RESTURL + cloudinaryImageId}
        alt="restaurant img"
      ></img>
      <h2 className="text-center font-bold">{name}</h2>
      <h3 className="text-center font-bold">{cuisines.join()}</h3>
      <h2 className="text-center font-bold">{avgRating}</h2>

      {/* controlled component */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true} // lifting the state up
          setShowIndex={setShowIndex}
          index={index}
        ></RestaurantCategory>
      ))}
    </div>
  );
};
export default RestaurantsMenu;
