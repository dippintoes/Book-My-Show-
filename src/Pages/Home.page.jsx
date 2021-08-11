import React from "react";


//components

import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";


const HomePage = () => {
return <> 
<div className="container mx-auto px-20">
<h1 className="text-2xl font-bold my-3 text-gray-800">The best of entertainment</h1>
<EntertainmentCardSlider></EntertainmentCardSlider>
</div>
</>
};

export default HomePage;