import Navbar from "../components/Navbar";
import React from 'react';
import Major from '../components/Major.js'
import AboutImg from '../images/2.jpg'
function About() {
    return(
        
        <>
             <Navbar />
        <Major 
            cName="major-mid"
            majorImg={AboutImg}
            title="Book your ticket now!"
            btnClass="show"
            btnText="Travel Plan"
            url="/about"
        />
        </>
    );
}
export default About;