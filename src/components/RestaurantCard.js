const RestaurantCard = ({resObj}) => {
    const { resId, resImg, resName, resCuisine, resRating, resDeliveryTime } = resObj;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[300px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="rounded-lg h-[250px] w-[350px]" src={resImg} alt="restaurant image" />
            <h3 className="font-bold py-4 text-lg">{resName}</h3>
            <h4>{resCuisine?.join(', ')}</h4>
            <h4>{resRating} Stars</h4>
            <h4>{resDeliveryTime} mins</h4>
        </div>
    );
}
export const withOpenLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
   
                <label className="absolute bg-black text-white rounded-lg m-2 p-2">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;