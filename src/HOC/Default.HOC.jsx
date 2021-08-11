import React from "react";
import { Route } from "react-router-dom";
//layout
import DefaultLayout from "../layouts/Default.layout";
const DefaultHOC = ({component, ...otherprops}) => {
    const Component = component;
    //or ({component: Component because name of component should be with capital letter only and capitalize the first one directly then it wont be anyways})
    return (
        <>
        <Route 
        {...otherprops} 
        component={(props) =>(
            <DefaultLayout>
                <Component {...props}/>
            </DefaultLayout>
        )}//returning whole component
        />
        </>
    );
};

export default DefaultHOC;

