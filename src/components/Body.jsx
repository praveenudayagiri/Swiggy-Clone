import resList from "../utils/mockdata";
import ResCard from "./ResCard";

const Body = () =>{
    return(
        <div className="body">
            <h2>Search</h2>
            <div className="res-container">
                {
                    resList.map((restaurant)=>(
                        <ResCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }

            </div>
        </div>
    )
};


export default Body;