import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENUAPI } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  console.log(resid);
  useEffect(() => {
    console.log("useeffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const restaurants = await fetch(MENUAPI + resid);

    const restJson = await restaurants.json();
    // console.log(restJson);
    setResInfo(restJson.data);
  };

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
    <div>
      {/* <img
        className="restMenu-img"
        src={RESTURL + cloudinaryImageId}
        alt="restaurant img"
      ></img> */}
      <h2>{name}</h2>
      <h3>{cuisines.join()}</h3>
      <h2>{avgRating}</h2>

      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name + "  -   Rs" + item.card.info.price / 100 ||
              item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantsMenu;
