import React from 'react'
import Movieinfo from './Movieinfo.component';

const MovieHero = () => {
    return (
        <>
            <div>
{/* Mobile */}
                <div className="relative md:hidden w-full h-full" style={{height: "calc(180vw)"}}>
                    <div className="absolute z-30 bottom-10 px-3">
                        <Movieinfo/>
                    </div>
                    <div className="h-56 w-full absolute bg-black bg-opacity-90 z-10 bottom-0"/>
                        <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-secrets-we-keep-et00137312-20-05-2021-10-39-32.jpg" alt="the secrets we keep" className="w-full h-full"/>
                </div>
{/* medium */}
                <div className="relative hidden md:block lg:hidden w-full h-full" style={{height: "calc(100vw)"}}>
                <div className="absolute z-30 bottom-10">
                        <Movieinfo/>
                    </div>
                    <div className="h-56 w-full absolute bg-black bg-opacity-80 z-10 bottom-0"/>
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-secrets-we-keep-et00137312-20-05-2021-10-39-32.jpg" alt="the secrets we keep" className="w-full h-full"/>
                </div>
{/* large */}
                <div className="relative hidden lg:block w-full" style={{height: "30rem"}}> 

                <div className="absolute z-10 w-full h-full" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} />
                
                    <div className="absolute z-10 left-24 top-10 flex items-center gap-7">
                        <div className="w-64 h-96">
                            <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-secrets-we-keep-et00137312-20-05-2021-10-39-32.jpg" alt="the secrets we keep" className="w-full h-full rounded-lg"/>
                        </div>
                        <div>
                                <Movieinfo/>
                        </div> 
                    </div>
                        <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-secrets-we-keep-et00137312-20-05-2021-10-39-32.jpg" alt="the secrets we keep" className="w-full h-full"/>            
                </div>
            </div>
        </>
    )
}

export default MovieHero;
