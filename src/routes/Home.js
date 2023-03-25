import Navbar from "../components/Navbar";
import Major from "../components/Major"
import React from 'react';
function Home() {
    return(
        <>
        <Navbar />
        <Major 
            cName="major"
            majorImg="https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg"
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