import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addToCart, decreaseQuantity, increaseQuantity, removeItem } from "../utils/cartSlice";

const ItemList = ({items})=>{
    // console.log(items);
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);

    const handleAddItem = (item)=>{
        dispatch(addToCart(item));
    }
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }
    const getItemQuanitity = (itemId) => {
        const cartItem = cartItems.find(item => item.card.info.id === itemId);
        return cartItem ? cartItem.quantity : 0;
    }
    return (
        items.map((item)=>{
            return (
                <div data-testid="menuItem" key={item.card.info.id} className="border-gray-200 border-b-2 p-2 m-2 text-left flex justify-between p-8">
                    <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-sm text-gray-400">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/5 flex flex-col items-center relative">
                        {item?.card?.info?.imageId && <img className="w-32 md:w-40 h-28  rounded-md shadow-lg" src={CDN_URL + item.card.info.imageId} alt=""/>}
                        <div className="absolute bottom-[-10px] w-full bg-white/20 p-1">
                            {getItemQuanitity(item.card.info.id) > 0 ? (
                                <div className="flex justify-center items-center w-full gap-1">
                                    <button
                                        className="relative text-center px-3 py-1 sm:py-2 sm:px-4 text-black text-base font-bold overflow-hidden bg-green-400 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                                        onClick={() => handleRemoveItem(item)}
                                    >
                                        -
                                    </button>
                                    <span className="px-2 py-1 sm:py-2 sm:px-4 bg-white font-mono font-semibold rounded-md">{getItemQuanitity(item.card.info.id)}</span>
                                    <button
                                        className="relative px-3 py-1 text-center sm:py-2 sm:px-4  text-black text-base font-bold overflow-hidden bg-green-400 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                                        onClick={() => handleAddItem(item)}
                                    >
                                    +
                                    </button>
                                </div>
                            ) : (
                            <div className="flex items-center justify-center">
                                <button
                                    className="relative py-1 px-4 sm:py-2  text-center text-black text-base font-bold overflow-hidden bg-green-400 rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                                    onClick={() => handleAddItem(item)}
                                >
                                Add+
                                </button>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default ItemList;