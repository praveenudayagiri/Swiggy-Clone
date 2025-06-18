import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    const [loginbtn,setloginbtn]=useState("login");
    return(
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="" />
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>Contact</li>
                <button className="login-btn" onClick={()=>{
                    loginbtn=="login"? 
                    setloginbtn("logout"):setloginbtn("login");
                }}>{loginbtn}</button>
            </ul>
        </div>
    )
};

export default Header;