import { useState } from "react";
import resList from "../utils/mockdata";
import ResCard from "./ResCard";
const Body = () =>{
    const [ ListOfRestaurant, setListOfRestaurant ] = useState(resList);
    return(
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