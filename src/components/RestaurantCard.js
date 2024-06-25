const RestaurantCard = ({resObj}) => {
    const { resId, resImg, resName, resCuisine, resRating, resDeliveryTime } = resObj;
    
    return (
        <div className="res-card" style={{ background: "#f0f0f0" }}>
            <img className="res-img" src={resImg} alt="restaurant image" />
            <h3>{resName}</h3>
            <h4>{resCuisine?.join(',')}</h4>
            <h4>{resRating} Stars</h4>
            <h4>{resDeliveryTime} mins</h4>
        </div>
    );
}
export default RestaurantCard;