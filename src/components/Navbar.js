import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import React, {useState} from "react";
function Navbar () {
    
    //We made use of useEffect hook to get updated state value//
    //https://stackoverflow.com/questions/61054275/usestate-with-boolean-value-in-react//
    const {useEffect, useState } = React;
    const [clickedStatus, setClicked] = useState(false); //variable clickedStatus is initially set to False
    //onClick turns false value to true(made use in tertiary if-else statement to show something different on clicking)
    const clickHandler = () => {
        setClicked(current=> !current)
    }
    useEffect( () => {
        console.log(clickedStatus);
    }, [clickedStatus]);
    return (
            <nav className="NavbarItems">
                
                   
                    <h2 className="navbar-logo">
                        Consoom
                    </h2>
               
{/*
             
                    <div className="search-bar">
                        <form className="d-flex" role="search">
                            <input className="form-control"  type="search" placeholder="Search Consoom.in" aria-label="Search"/>
                            <button className="form-button" type="submit" style={{marginRight: '3 rem'}}><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
    */}

  
                    <div className="menu-icons" onClick={clickHandler}>
                        <i className={clickedStatus ? "fas fa-times" : "fas fa-bars"} ></i>
                    </div>


                    <ul className={clickedStatus ? "navbar-menu active" : "navbar-menu" }>
                        {MenuItems.map((item, index) => {
                        return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                    );
                })}
                <button className="navbar-links-mobile">Sign In</button>
            </ul>
        </nav>

    )
}

export default Navbar;