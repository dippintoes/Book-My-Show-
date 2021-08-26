//rafce - to get boiler plate of code
import React from 'react'

const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col items-start gap-2">  
            <div className="h-40 md:h-80">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-xl" />
            </div>
            <h3 className={`text-xl font-bold px-3 ${props.isDark ? "text-white" : "text-gray-700"}`}>
            {props.title}
            </h3>
            <p className={`text-lg font-bold px-3 ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
        </div>
        </>
    );
}

export default Poster;