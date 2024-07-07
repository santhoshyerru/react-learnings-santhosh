
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = ()=>{
    const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null){
        return <Shimmer />
    }
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card.card.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    console.log(resInfo)
   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   console.log("categories", categories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ") }- {costForTwoMessage}
            </p>
            {categories?.map((category, index)=>{
                return <RestaurantCategory key={category.card.card.title} data={category?.card?.card}  showItems = {showIndex===index ? true : false}  setShowIndex={(show)=>{show ? setShowIndex(index) : setShowIndex(null)}} />
            })}
        </div>
    )
}
export default RestaurantMenu;