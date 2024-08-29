import { useEffect, useState } from "react";
import { MENUAPI } from "./constants";

const useRestaurantMenu = (resId) => {
  //fetch data
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENUAPI + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
