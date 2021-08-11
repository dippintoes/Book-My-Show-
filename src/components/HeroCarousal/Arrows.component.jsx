import React from "react";

export const NextArrow = (props) => {
    /* const {className, style, onClick} = props; */
    //react slick will pass all className, inline styles, onClick
    return (
        <>
            <div className={props.className} style={{...props.style, backgroundColor:"black"}} /* copying all existing styles */ onClick={props.onClick}
            />
        </>
    );
};

export const PrevArrow = (props) => {
    return (
        <>
            <div className={props.className} style={{...props.style, backgroundColor:"black"}} /* copying all existing styles */ onClick={props.onClick}
            />
        </>
    );
};

//we are not exporting this by default
//const {className, style, onClick} = props;
//this are the common props of all slick components, therefore we can add them just by destructuring.