import React from 'react';
import HeroSlider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const settingsLG = {
        arrows: true, 
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    };
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

      };

      const images = ["https://images.unsplash.com/photo-1628377236770-6733e8d7a1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", "https://images.unsplash.com/photo-1628533460851-20236fc62150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80","https://images.unsplash.com/photo-1628541886348-884f4d33c5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80","https://images.unsplash.com/photo-1628565210854-2974e7a89772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80","https://images.unsplash.com/photo-1628430383773-1063a7ecdfb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"];

    return (
        <>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
                {
                    images.map((image)=>(
                        <div className="w-full h-56 md:h-80 py-3">
                            <img src={image} alt="testing" className="w-full h-full"/>
                        </div>
                    ))
                }
            </HeroSlider>
            </div>

            <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                {
                    images.map((image)=>(
                        <div className="w-full h-96 px-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                        </div>
                    ))
                }
            </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousal;