import { useEffect, useState, useContext } from "react";
import RestaurentCard, { withPromoted } from "./RestaurentCard.js";
import { FETCHDATA } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState("");
  const [filterRest, setFilterRest] = useState([]);

  const promoted = false;
  const RestaurantPromoted = withPromoted(RestaurentCard);

  const { loggedInUser, setUsername } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  console.log("body rendered");

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
    // console.log(
    //   "fetch called",
    //   jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  };

  if (useOnlineStatus() === false) {
    return (
      <h1>
        Oops looks like you are offline, please check your network connectivity
      </h1>
    );
  }

  if (restaurants.length === 0) {
    return (
      <div className="shimmer">
        <Shimmer></Shimmer>
      </div>
    );
  }
  return (
    <div className="body">
      <div className="search-bar flex justify-center">
        <div className="search-rest m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchRestaurants}
            onChange={(e) => {
              setSearchRestaurants(e.target.value);
            }}
          ></input>

          {/* {console.log(searchRestaurants)} */}
          <button
            className="m-4 bg-orange-100 px-4 py-2 rounded-lg"
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
        <div className="search flex items-center">
          <h2>Top Restaurents, Click here to see</h2>
          <button
            className="search-btn m-4 bg-orange-100 px-4 py-2 rounded-lg"
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
        <div className="m-4 flex justify-center items-center">
          <label className="p-2">User Name:</label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-black p-2"
          />
        </div>
      </div>
      <div className="rest-container flex flex-wrap justify-center">
        {filterRest.map((restObj) => (
          <Link key={restObj.info.id} to={"restaurants/" + restObj.info.id}>
            {promoted ? (
              <RestaurantPromoted restData={restObj}></RestaurantPromoted>
            ) : (
              <RestaurentCard restData={restObj}></RestaurentCard>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
