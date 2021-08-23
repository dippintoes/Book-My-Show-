import React from 'react'

const Movieinfo = () => {
    return (
        <>
            <div classname="flex flex-col gap-2 lg:gap-8">
                <div className="flex items-center gap-2 py-5 md:px-4">
                    <div className="w-25 h-5">
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="" className="w-full h-full"/>
                    </div>
                    <span className="w-35 h-5 bg-bms-800 text-white text-xs rounded-xl px-3">
                        Streaming now
                    </span>
                </div>
                <h1 className="hidden lg:block text-white text-3xl lg:text-5xl font-bold">
                    The Secrets We Keep
                </h1>
                <div className="flex flex-col-reverse lg:flex-col gap-2 lg:py-4">
                <div className="flex flex-col gap-5 py-2 md:px-4">
                    <p className="text-white">
                        English &bull; Languages :  
                        <span className="text-butt-300 px-3">
                            Audio(1), subtitles(1)
                        </span>
                    </p>
                    <p className="text-white">1h 37m &bull; Drama, Thriller &bull; 18+ &bull; 18 Dec,2020</p>
                </div>
                <div className="flex items-center gap-3 md:w-screen lg:w-full md:px-4">
                    <button className="bg-butt-300 text-white w-full py-3 text-sm rounded-lg font-semibold">Rent ₹ 109
                    </button>
                    <button className="bg-butt-300 text-white w-full py-3 text-sm rounded-lg font-semibold">Buy ₹ 109
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Movieinfo;
