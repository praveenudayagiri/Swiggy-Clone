import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";

const Header = () =>{
    const [loginbtn,setloginbtn]=useState("login");

    useEffect(()=>{
        console.log("useEffect Rendered");
    },[loginbtn]);
    return(
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="" />
            <ul className="nav-items">
                <li> <Link to="/" >Home</Link> </li>
                <li> <Link to="/about">About </Link> </li>
                <li>Cart</li>
                <li><Link to="/contact"> Contact</Link></li>
                <button className="login-btn" onClick={()=>{
                    loginbtn=="login"? 
                    setloginbtn("logout"):setloginbtn("login");
                }}>{loginbtn}</button>
            </ul>
        </div>
    )
};

export default Header;