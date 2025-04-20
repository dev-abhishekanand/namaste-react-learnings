import React, { useEffect, useState } from "react";
import { RESTAURANT_INFO_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const response = await fetch(RESTAURANT_INFO_URL + resId);
    const data = await response.json();
    setResInfo(data.data);
    console.log("data in useResMenu", data);
  };
  return resInfo;
};

export default useRestaurantMenu;
