import React,{useContext,useState} from 'react';

//components
import PaymentModal from '../PaymentModal/Payment.component';
//context
import { MovieContext } from '../../context/movie.context';


const Movieinfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[price,setPrice]=useState(0);
    const {movie} = useContext(MovieContext);

    //to use the movies genres and language and other information in tmdb we have a array of genre and so, we will need a array to parse it
    /* const genres = movie.genres && movie.genres.map(({name})=>name).join(", ");
    //the cpondition chacking if genres are present then next conditions will be executed. */
    const genres = movie.genres?.map(({name})=>name).join(", ");//optional chaining

    const rentMovies = () =>{
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovies = () =>{
        setIsOpen(true);
        setPrice(199);
    };


    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
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
                    {movie.original_title}
                </h1>
                <div className="flex flex-col-reverse lg:flex-col gap-2 lg:py-4">
                <div className="flex flex-col gap-5 py-2 md:px-4">
                    <p className="text-white">
                        {movie.original_language} &bull; Languages :  
                        <span className="text-butt-300 px-3">
                            Audio(1), subtitles(1)
                        </span>
                    </p>
                    <p className="text-white">{(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; {movie.adult ? `U/A` : `U`} &bull; 18 Dec,2020</p>
                </div>
                <div className="flex items-center gap-3 md:w-screen lg:w-full md:px-4">
                    <button onClick={rentMovies} className="bg-butt-300 text-white w-full py-3 text-sm rounded-lg font-semibold">Rent ₹ 109
                    </button>
                    <button onClick={buyMovies} className="bg-butt-300 text-white w-full py-3 text-sm rounded-lg font-semibold">Buy ₹ 199
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Movieinfo;
