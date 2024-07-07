import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = ()=>{
    const dispatch = useDispatch();
    const handleClear = ()=>{
        dispatch(clearCart());
    }
    const cartItems = useSelector((store)=>store.cart.items);

    const calculateTotalPrice = ()=>{
        return cartItems.reduce((acc, item)=>{
            return acc + (item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100)*item.quantity;
    },0)
    }

    if(cartItems.length === 0) {
        return (
            <div className="m-4 p-4 text-center  md:my-20">
                <h1 className="text-2xl font-bold text-gray-700">Your cart is empty</h1>
                <p className="text-gray-500 my-4">We know you are hungry. Order and treat yourself with delicious and hot meals</p>
                <button className="my-4 p-2 rounded-md bg-green-400 hover:bg-green-600/85 text-white font-bold shadow-lgs"><Link to="/">Order Now at nearest restaurants!</Link></button>
            </div>
        )
    }

    return (
        <div className="flex justify-center my-14">
        <div className="w-8/12  text-center m-auto p-4">
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold m-2 p-2">Cart</h1>
                <button className="relative h-10 border-2 m-2 p-2 border-red-500 border-collapse text-black font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-red-500 before:to-red-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0" onClick={handleClear}>Clear Cart</button>
            </div>
            <div className="">
                {cartItems.length ===0 && <h1>We know you are hungry but cart is empty!</h1>}
                <ItemList items={cartItems} />
            </div>
            

        </div>
        <div className="m-auto w-3/12">
            {cartItems.length >0 &&
            <div className="flex flex-col text-center gap-3 p-10">
                <h1 className="font-bold">Bill Details</h1>
                <div className="flex justify-between">
                    <span>Item Total</span>
                    <span>{calculateTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between">
                                    <div className="flex gap-1 justify-center items-center">
                                        <h1>Platform Fee</h1>
                                    </div>
                                    <div className="flex">
                                        <h1>₹</h1>
                                        <h1 className="line-through text-gray-400 mr-1">20.00</h1>
                                        <h1>4</h1>
                                    </div>
                                </div>
                                <div className="flex justify-between border-b-4">
                                    <div className="flex justify-center items-center mb-2 gap-1">
                                        <h1>GST & Restaurant Charges</h1>
                                    </div>
                                    <h1>₹42</h1>
                                </div>
                                <div className="flex justify-between">
                                    <span>Total</span>
                                    <span>₹{calculateTotalPrice() + 40 + 4 + 42}</span>
                                </div>
                                <button
                                    className="relative w-full h-10 border-2 my-6 border-green-500 border-collapse text-black font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                                    onClick={handleClear}
                                >
                                Proceed to Checkout!
                                </button>
            </div>}
        </div>
         </div>
        )

}
export default Cart;