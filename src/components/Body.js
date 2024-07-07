import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchResList, setSearchResList] = useState([]);
    const [searchName,setSearchName] = useState("");
    const isOnline = useOnlineStatus();
    const OpenedRestaurantCard = withOpenLabel(RestaurantCard)
    const {loggedInUser, setUserName} = useContext(UserContext);
    console.log(loggedInUser);
    useEffect(()=>{
       fetchData();
    }, [])
    fetchData = async () => {
        const response = await fetch(RESTAURANTS_URL);
        const json = await response.json();
        const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        const restaurantList = []
        console.log("restaurants", restaurants)
        restaurants.map((restaurant) => {
        restaurantList.push({
            resId: restaurant.info.id,
            resName: restaurant.info.name,
            resCuisine: restaurant.info.cuisines,
            resRating: restaurant.info.avgRating,
            resDeliveryTime: restaurant.info.sla.deliveryTime,
            resImg: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`,
            resOpen: restaurant.info.isOpen,
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
        <div className="my-14">
            <div className="filter flex">
                <div className="search m-4 p-4 ">
                    <input type="text" data-testid="SearchInput" className="border border-solid border-black" placeholder="Search for restaurants" value={searchName} onChange={(e)=>{setSearchName(e.target.value)}}/>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"  onClick={()=>{
                        setResList(searchResList.filter((restaurant)=> (restaurant.resName.toLowerCase().includes(searchName.toLowerCase()))));
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-1 bg-gray-100 m-2 rounded-lg" onClick={()=>{
                  setResList(searchResList.filter((restaurant)=> (restaurant.resRating>4)));
                }}>Top Rated Restaurant</button>
                </div>
               
            </div>
            <div className="flex flex-wrap">
                {resList.map((restaurant) => {
                    return <Link key={restaurant.resId}  to={"restaurant/"+restaurant.resId}>
            
                        {restaurant.resOpen ?
                            (<OpenedRestaurantCard resObj={restaurant}/>) :
                            (<RestaurantCard resObj={restaurant} />)
                        }
                        </Link>
                })}
            </div>
        </div>
    )
}

export default Body;