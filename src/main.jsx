import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
/**
 * 
 * @returns 
 * -app
 *      -header
 *          -logo
 *          -nav links
 *      -body
 *          -search
 *          -restarantContainer
 *              -resCards
 *      -footer
 *          -copyrights
 *          -contact
 *          -address
 * 
 * 
 * 
 * 
 * 
 */

const Header = () =>{
    return(
        <div className="header">
            <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png" alt="logo" />
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>Contact</li>
            </ul>
        </div>
    )
};

const ResCard = (props) =>{
    const {name,cusine}=props;
    return(
        <div className="res-card">
            <img className="res-image" src="https://im.whatshot.in/img/2021/Mar/header3-1615920876.jpg" alt="" />
            <h3>{name}</h3>
            <h4>{cusine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
};

const Body = () =>{
    return(
        <div className="body">
            <h2>Search</h2>
            <div className="res-container">
                <ResCard name="KFC" cusine="Birriyani" />
                <ResCard name="MC" cusine="Burger"/>

            </div>
        </div>
    )
};

const App = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);