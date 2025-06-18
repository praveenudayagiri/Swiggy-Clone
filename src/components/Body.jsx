import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
const Body = () =>{
    const [ ListOfRestaurant, setListOfRestaurant ] = useState([]);

    useEffect(()=>{
        FetchData();
    },[]);
    const FetchData = async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const dynamicData = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurant(dynamicData);
    };

    if(ListOfRestaurant.length===0){
        return(
            <Shimmer/>
        )
    }

    return ListOfRestaurant.length===0 ?(
        <Shimmer/>
    ): (
        <div className="body">
            <h2>Search</h2>
            <button onClick={()=>{
                const filterdList = ListOfRestaurant.filter((res)=>{
                    return res.info.avgRating > 4
                })
                setListOfRestaurant(filterdList);
            }
            
            }>Top Rated Restaurant</button>
            <div className="res-container">
                {
                    ListOfRestaurant.map((restaurant)=>(
                        <ResCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }

            </div>
        </div>
    )
};


export default Body;