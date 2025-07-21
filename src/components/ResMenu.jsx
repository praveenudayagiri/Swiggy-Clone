import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";

const ResMenu = () => {
  const [resMenuInfo, setresMenuInfo] = useState(null);
  const { resId }=useParams();
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(MENU_API_URL+resId);
    const json = await data.json();
    setresMenuInfo(json?.data?.cards);
  };

  if (!resMenuInfo) {
    return <Shimmer />;
  }

  // Extracting safely
  const info = resMenuInfo[2]?.card?.card?.info;
  const menu= resMenuInfo[4].groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards;

  if (!info || menu.length===0) {
    return <p>Restaurant info not available</p>;
  }

  return (
    <div className="menu">
      <h1>{info.name}</h1>
      <h2>Rating: {info.avgRating}</h2>
      <h2>Cuisines: {info.cuisines?.join(", ")}</h2>
      <h2>Delivery Time: {info.sla?.deliveryTime} mins</h2>
      <h2>Price for two: {info.costForTwoMessage}</h2>
      {
        
            menu.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name}: Rs {(item.card.info.price || item.card.info.defaultPrice)/100}</li>
            ))
        
      }  
    </div>
  );
};

export default ResMenu;
