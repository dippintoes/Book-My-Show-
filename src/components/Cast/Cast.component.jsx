import React from 'react'

const Cast = (props) => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center">
                    <div className="h-32 w-32">
                        <img src={props.image} alt="Cast" className="h-full w-full rounded-full"/>
                    </div>
                    <h1 className="text-lg">{props.CastName}</h1>
                    <p className="text-sm text-gray-500">as {props.Role}</p>
                </div>
            </div>
        </>
    )
}

export default Cast;
