import React from "react";
import { Route } from "react-router-dom";
//layout
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({component, ...otherprops}) => {
    const Component = component;
    //or ({component: Component because name of component should be with capital letter only and capitalize the first one directly then it wont be anyways})
    return (
        <>
        <Route 
        {...otherprops} 
        component={(props) =>(
            <MovieLayout>
                <Component {...props}/>
            </MovieLayout>
        )}//returning whole component
        />
        </>
    );
};

export default MovieHOC;

