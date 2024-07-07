import {useContext, useState} from 'react';
import { LOGO_URL } from "../utils/constants";  
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    const isOnline = useOnlineStatus();
    const defaultUser = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items);

    console.log("cartItems", cartItems)
    console.log("defaultUser", defaultUser)
    console.log("rerendering...");
    return (
        <div className="header fixed z-50 top-0 left-0 right-0 flex justify-between bg-pink-50 shadow-md sm:bg-yellow-50 lg:bg-blue-50">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {isOnline ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart - ({cartItems.length})</Link></li> 
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className='relative w-28'>
                        <button className='login-btn min-w-[4rem] mb-8 lg:mb-0'
                            onClick={()=>{
                                btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
                            }}
                        >{btnLogin}</button>
                        <p className='absolute left-0 top-8'>{ btnLogin === "Login" ? "" : "User: "+ defaultUser.loggedInUser}</p>
                    </li>
                   
                </ul>
            </div>
        </div>
   
    )
}
export default Header;