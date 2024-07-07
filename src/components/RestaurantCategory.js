import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex})=>{
    // console.log("categorie",data);
    const handleClick = ()=>{
        setShowIndex(!showItems);
    }
    
    return (<div>
        <div className="w-9/12  m-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg " >{data.title} ({data.itemCards.length})</span>
            <span>{showItems ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
}</span>
            </div>
            <div>
             {showItems &&<ItemList items={data.itemCards} />}
            </div>
        </div>
    </div>);
}
export default RestaurantCategory;