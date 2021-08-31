import React from 'react'

const Crew = (props) => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center">
                    <div className="h-32 w-32">
                        <img src={props.image} alt="crew" className="h-full w-full rounded-full"/>
                    </div>
                    <h1 className="text-lg">{props.CrewName}</h1>
                    <p className="text-sm text-gray-500">{props.Role}</p>
                </div>
            </div>
        </>
    )
}

export default Crew;
