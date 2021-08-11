import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) =>
{
    return (
    <>
    <div className="w-full h-29 xs:h-50 px-2">
        <img className="w-full h-full rounded-xl" 
        src={props.src} 
        alt="entertainment" ></img>
    </div>
    </>
    );
};

const EntertainmentCardSlider = ()=>{

    const EntertainmentImages = ["https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTc1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png", "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/cooking-collection-202007222211.png"];

    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
            {
            breakpoints: 1024,
            settings: {
                slideToShow: 3,
                slideToScroll : 2,
                infinite: true,
            },
        },
        {
            breakpoints: 768,
            settings: {
                slideToShow: 2,
                slideToScroll : 1,
                infinite: true,
                InitialSlide: 1,
            },
        },
        {
            breakpoints: 480,
            settings: {
                slideToShow: 2,
                slideToScroll : 1,
                infinite: true,
                InitialSlide: 2,
            },
        },

    ],

    };
    return <>
    <Slider {...settings}>
        {
            EntertainmentImages.map((image)=> (
            <EntertainmentCard src={image} />
            ))
        }

    </Slider>
    </>
}

export default EntertainmentCardSlider;

