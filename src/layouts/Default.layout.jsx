import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
//to import autmatically, just right Navbar and it will be imported already
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
    return ( 
    <>
    <Navbar />
    <HeroCarousal />
    {props.children}
    </>
    );
};

export default DefaultLayout;
