import Navbar from "../components/Navbar";
import Major from "../components/Major"
import AboutImg from '../images/1.jpg'
import React from 'react';
function Home() {
    return(
        <>
        <Navbar />
        <Major 
            cName="major"
            majorImg={AboutImg}
            title="Book your ticket now!"
            text="Choose a travel destination"
            btnClass="show"
            btnText="Travel Plan"
            url="/"
        />
        </>
    );
}
export default Home;