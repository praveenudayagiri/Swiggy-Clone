import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
const Body = () =>{
    const [ ListOfRestaurant, setListOfRestaurant ] = useState([]);
    const [filterdRestaurants, setfilteredRestaurants] = useState([]);
    const[searchTxt,setsearchTxt] = useState("");

    useEffect(()=>{
        FetchData();
    },[]);
    const FetchData = async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const dynamicData = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        /** Saving Data in Two Lists and manipulating second List eveytimw while rendering */
        setListOfRestaurant(dynamicData);
        setfilteredRestaurants(dynamicData);
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
            <div className="filter">
                <input type="text" value={searchTxt} 
                /*** Every time we type each letter searchTxt will be updated and whole component is re-rendered */
                onChange={(e)=>{
                    setsearchTxt(e.target.value);
                }}  
                />
                <button className="search-btn"
                /*** Rather than getting data from filterRestaurants we are getting filtered data from original data which we got from API */
                    onClick={()=>{
                        const filterdList= ListOfRestaurant.filter((res)=>{
                            return res.info.name.includes(searchTxt);
                        })
                        setfilteredRestaurants(filterdList);
                    }}
                >Search</button>
            <button onClick={()=>{
                const filterdList = ListOfRestaurant.filter((res)=>{
                    return res.info.avgRating > 4
                })
                setfilteredRestaurants(filterdList);
            }
            
            }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filterdRestaurants.map((restaurant)=>(
                        <ResCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }

            </div>
        </div>
    )
};


export default Body;