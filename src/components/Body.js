import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

// const resList = [
//     {
//         resId: 1,
//         resImg: "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg",
//         resName: "Raising Canes",
//         resCuisine: ["American", "Mexican", "Cuban"],
//         resRating: 3.3,
//         resDeliveryTime: 30
//     },
//     {
//         resId: 2,
//         resImg: "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg",
//         resName: "Clifton Court Restaurant",
//         resCuisine: ["American", "Mexican", "Cuban"],
//         resRating: 3.3,
//         resDeliveryTime: 30
//     },
//     {
//         resId: 3,
//         resImg: "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg",
//         resName: "Biagios Bistro",
//         resCuisine: ["American", "Mexican", "Cuban"],
//         resRating: 3.3,
//         resDeliveryTime: 30
//     }
// ]
const Body = () => {
    const [resList, setResList] = useState([{
        resId: 1,
        resImg: "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg",
        resName: "Raising Canes",
        resCuisine: ["American", "Mexican", "Cuban"],
        resRating: 3.3,
        resDeliveryTime: 30
    },
    {
        resId: 2,
        resImg: "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg",
        resName: "Clifton Court Restaurant",
        resCuisine: ["American", "Mexican", "Cuban"],
        resRating: 3.3,
        resDeliveryTime: 30
    },
    {
        resId: 3,
        resImg: "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg",
        resName: "Biagios Bistro",
        resCuisine: ["American", "Mexican", "Cuban"],
        resRating: 5,
        resDeliveryTime: 30
    }])
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="top-rated">
                <button className="top-rated-btn" onClick={()=>{
                  setResList(resList.filter((restaurant)=> (restaurant.resRating>4)));
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {resList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.resId} resObj={restaurant} />
                })}
            </div>
        </div>
    )
}

export default Body;