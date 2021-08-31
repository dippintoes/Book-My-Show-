//rafce - to get boiler plate of code
import React from 'react'
import {Link} from "react-router-dom";
const Poster = (props) => {
    return (
        <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col items-start gap-2">  
            <div className="h-40 md:h-80">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl" />
            </div>
            <h3 className={`text-xl font-bold px-3 ${props.isDark ? "text-white" : "text-gray-700"}`}>
            {props.original_title}
            </h3>
            <p className={`text-lg font-semibold px-3 ${props.isDark ? "text-white" : "text-gray-900"}`}>{props.subtitle}</p>
        </div>
        </Link>
    );
}

export default Poster;