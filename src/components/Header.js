import {useState} from 'react';
import { LOGO_URL } from "../utils/constants";  
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    const isOnline = useOnlineStatus();
    console.log("rerendering...");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-links">
               
                <ul>
                    <li>Online Status: {isOnline ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li> 
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="btn-login" onClick={()=>{btnLogin==="Login"? setBtnLogin("Logout"): setBtnLogin("Login")}}>{btnLogin}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;