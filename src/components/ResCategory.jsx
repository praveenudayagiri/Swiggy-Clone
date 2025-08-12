import { useState } from "react";
import ItemsList from "./ItemsList";

const ResCategory = ({data}) =>{
    const [showItems,setshowItems]=useState(false);
    const handleClick = ()=>{
        setshowItems(!showItems);
    }
    return(
        <div className="rescategory-accordian">
            <div className="accordian-header">
            <span className="accordian-title" 
            onClick={()=>handleClick()}
            >{data.title +" ("+data.itemCards.length+")" }</span>
            <span>{"⬇️"}</span>
            </div>
            <div>
                {showItems && <ItemsList items={data.itemCards}/>}
            </div>
        </div>
    )
};

export default ResCategory;