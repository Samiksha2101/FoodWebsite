import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard.js";
import { FETCHDATA } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState("");
  const [filterRest, setFilterRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("rendered");

  const fetchData = async () => {
    const data = await fetch(FETCHDATA);
    const jsonData = await data.json();
    setRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRest(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restaurants.length === 0) {
    return (
      <div className="shimmer">
        <Shimmer></Shimmer>
      </div>
    );
  }
  return (
    <div className="body">
      <div className="search-bar">
        <div className="search-rest">
          <input
            type="text"
            className="rest-input"
            value={searchRestaurants}
            onChange={(e) => {
              setSearchRestaurants(e.target.value);
            }}
          ></input>

          {/* {console.log(searchRestaurants)} */}
          <button
            onClick={() => {
              const filtered = restaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchRestaurants.toLowerCase())
              );
              setFilterRest(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="search">
          <h2>Top Restaurents, Click here to see</h2>
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurants.filter(
                (x) => x.info.avgRating > 4.3
              );
              setFilterRest(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="rest-container">
        {filterRest.map((restObj) => (
          <RestaurentCard
            key={restObj.info.id}
            restData={restObj}
          ></RestaurentCard>
        ))}
      </div>
    </div>
  );
};
export default Body;
