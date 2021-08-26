import React from "react";

//components

import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Poster from "../components/Poster/poster.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from '../config/TempPosters.config';


const HomePage = () => {
return <> 
<div className="flex flex-col gap-10">

    <div className="container mx-auto px-5 md:px-20">
    <h1 className="text-2xl font-bold my-3 text-gray-800">The best of entertainment</h1>
    <EntertainmentCardSlider></EntertainmentCardSlider>
    </div>

    <div className="bg-butt-800 py-12 px-5 md:px-20">
        <div className="container">
            <div className="hidden md:flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premiere" className="h-full w-full"/>
            </div>
        <PosterSlider isDark images={TempPosters} title="Premiers" subtitle="Brand new releases every friday" ></PosterSlider>
        </div>
    </div> 

    <div className="container mx-auto px-5 md:px-20 lg:my-8">
    <PosterSlider images={TempPosters} title="Online Streaming Events" isDark={false} ></PosterSlider>
    </div>

    <div className="container mx-auto px-5 md:px-20 lg:my-8">
    <PosterSlider images={TempPosters} title="Outdoor Events" isDark={false} ></PosterSlider>
    </div>

    <div className="container mx-auto px-5 md:px-20 lg:my-8">
    <PosterSlider images={TempPosters} title="Laughter Events" isDark={false} ></PosterSlider>
    </div>

    <div className="container mx-auto px-5 md:px-20 lg:my-8">
    <PosterSlider images={TempPosters} title="Popular Events" isDark={false} ></PosterSlider>
    </div>

    <div className="container mx-auto px-5 md:px-20 lg:my-8">
    <PosterSlider images={TempPosters} title="Top games and sports Events" isDark={false} ></PosterSlider>
    </div>
</div>

</>
};

export default HomePage;