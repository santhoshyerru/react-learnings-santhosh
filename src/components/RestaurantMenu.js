
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null){
        return <Shimmer />
    }
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    console.log(itemCards, resInfo);
    return (
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ") }- {costForTwoMessage}
            </p>
            <h3>Menu</h3>
            <ul>
            {itemCards?.map((itemCard)=>{
            return (
                <li key={itemCard.card.info.id}>{itemCard.card.info.name} - Rs {itemCard.card.info.price/100 || itemCard.card.info.defaultPrice/100}</li>)
            })}
            </ul>
        </div>
    )
}
export default RestaurantMenu;