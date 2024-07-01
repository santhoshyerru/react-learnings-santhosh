import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchResList, setSearchResList] = useState([]);
    const [searchName,setSearchName] = useState("");
    const isOnline = useOnlineStatus();
    useEffect(()=>{
       fetchData();
    }, [])
    fetchData = async () => {
        const response = await fetch(RESTAURANTS_URL);
        const json = await response.json();
        const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        const restaurantList = []
        restaurants.map((restaurant) => {
        restaurantList.push({
            resId: restaurant.info.id,
            resName: restaurant.info.name,
            resCuisine: restaurant.info.cuisines,
            resRating: restaurant.info.avgRating,
            resDeliveryTime: restaurant.info.sla.deliveryTime,
            resImg: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`,
        })
        })
        setResList(restaurantList); 
        setSearchResList(restaurantList);
    }
    if(!isOnline){
        return <h1>Please Check your internet connection!!!</h1>
    }
    if(resList.length=== 0){
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search for restaurants" value={searchName} onChange={(e)=>{setSearchName(e.target.value)}}/>
                    <button onClick={()=>{
                        setResList(searchResList.filter((restaurant)=> (restaurant.resName.toLowerCase().includes(searchName.toLowerCase()))));
                    }}>Search</button>
                </div>
                <button className="top-rated-btn" onClick={()=>{
                  setResList(searchResList.filter((restaurant)=> (restaurant.resRating>4)));
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {resList.map((restaurant) => {
                    return <Link key={restaurant.resId}  to={"restaurant/"+restaurant.resId}><RestaurantCard resObj={restaurant} /></Link>
                })}
            </div>
        </div>
    )
}

export default Body;