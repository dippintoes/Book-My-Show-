import React , {useContext, useState, useEffect }from 'react'
import {FaCcPaypal } from "react-icons/fa";

//components
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import Crew from '../components/Crew/Crew.component';
//config
import TempPosters from '../config/TempPosters.config';

//context
import { MovieContext } from '../context/movie.context';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

const Movie = () => {

    const {id} = useParams();
    const {movie} = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [recom, setRecom] = useState([]);
    useEffect(() => {
        const requestCast = async()=>{
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
        
    }, [id])//using id here so that the poster will again redirect to it's specific's play page using the life cycle process shouldcomponentupdate i.e. if id changes the the whole information gets updated


    useEffect(() => {
        const requestCrew = async()=>{
            const getCrew = await axios.get(`/movie/${id}/credits`);
            setCrew(getCrew.data.crew);
        };
        requestCrew();
        
    }, [id])

    useEffect(() => {
        const requestSimilarMovies = async () => {
          const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
          setSimilar(getSimilarMovies.data.results);
        };
    
        requestSimilarMovies();
      }, [id]);

      useEffect(() => {
        const requestRecomMovies = async () => {
          const getRecomMovies = await axios.get(`/movie/${id}/recommendations`);
          setRecom(getRecomMovies.data.results);
        };
    
        requestRecomMovies();
      }, [id]);

      const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <>
             <MovieHero/>
             <div className="container lg:w-3/5 lg:ml-20 px-4 my-12">
                <div className="flex flex-col itmes-start gap-3">
                    <h1 className="text-2xl font-bold text-gray-800">
                    About the movie
                    </h1>
                    <p>
                    {movie.overview}
                    </p>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="my-8 flex flex-col itmes-start gap-3">
                    <h1 className="text-2xl font-bold text-gray-800">
                    Applicable offers
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-3">

                        <div className="container h-20 lg:w-full bg-yellow-50 border-2 border-yellow-300 border-dashed rounded-lg flex items-center gap-3">
                            <div className="w-8 h-8">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-0AoapjoPY0hxlRvVspD5_0gY25oa7lT4ZOJ68uAlnd5owCIBa5qGZS7VrOUuMO5_HI&usqp=CAU" alt="logo" className="w-full h-full ml-3"/>
                            </div>
                            <div>
                            <h1 className="ml-3">Filmy Pass</h1>
                            <p className="text-gray-700 text-xs ml-3">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                            </div>   
                        </div>

                        <div className="container h-20 lg:w-full bg-yellow-50 border-2 border-yellow-300 border-dashed rounded-lg flex items-center gap-3">
                            <div className="w-8 h-8">
                            <FaCcPaypal className="w-full h-full ml-3"/>
                            </div>
                            <div>
                            <h1 className="ml-3">Pay Pal Pass</h1>
                            <p className="text-gray-700 text-xs ml-3">Get Rs.105* off on 8 movies you buy/rent on Stream. Buy Pay Pal Pass @Rs.199</p>
                            </div>    
                        </div>

                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="my-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Cast
                    </h1>
                    <Slider {...settingsCast}>
                        {cast.map((castdata)=>(
                            <Cast image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`} CastName={castdata.original_name} Role={castdata.character}/>
                        ))}  
                        </Slider>
                </div>

               <div className="my-8">
                    <hr/>
                </div>

                <div className="my-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Crew
                    </h1>
                    <Slider {...settingsCast}>
                        {crew.map((crewdata)=>(
                            <Crew image={`https://image.tmdb.org/t/p/original${crewdata.profile_path}`} CrewName={crewdata.original_name} Role={crewdata.department}/>
                        ))}  
                        </Slider>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="my-8 flex flex-col itmes-start gap-3 flex-wrap">
                    <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Reviews
                    </h1>
                    </div>
                    <div className="container bg-blue-50 flex items-center gap-2 w-80 lg:w-96">
                    <div className="mx-5 my-2">
                        <h1 className="font-semibold">
                            Watched? Add your rating & review
                        </h1>
                        <p className="text-gray-700">Your ratings matter</p>
                    </div>
                    <div>
                    <button className="bg-butt-300 text-white w-full py-2 text-sm rounded-lg px-2 font-semibold">Rate now
                    </button>
                    </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="my-8 flex flex-col items-start gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            Buzz
                        </h1>
                    </div>
                    <div className=" flex items-center lg:gap-44 gap-2">
                        <div className="lg:w-16 lg:h-16 w-12 h-12">
                            <img src="https://in.bmscdn.com/content-buzz/2020/10/blog-1.jpg" alt="buzz" className="w-full h-full"/>
                        </div>
                    
                        <div className="container flex flex-col gap-4 w-full lg:w-96">
                            <div className="mx-5 my-2">
                               <div>
                               <h1 className="text-sm">
                                We Went To The Cinemas And It Was Like Old Times
                                </h1>
                               </div>
                                <div className="flex items-center gap-2 py-2">
                                    <div className="h-8 w-8 ">
                                        <img src="https://secure.gravatar.com/avatar/998a3fef031787e669c77fdc4aeb8b9a?s=60&#038;d=mm&#038;r=g" alt="delnaz" className="w-full h-full rounded-full"/>
                                    </div>
                                    <p className="text-gray-700 font-semibold">Delnaz Divecha</p>
                                    <p className="text-sm text-gray-400">251 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="my-8">
                    <div className="container mx-auto my-8">
                    <PosterSlider config={settings} images={recom} title="You might also like" isDark={false} ></PosterSlider>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="my-8">
                    <div className="container mx-auto my-8">
                    <PosterSlider config={settings} images={similar} title="BMS Exclusive" isDark={false} ></PosterSlider>
                    </div>
                </div>


                <div className="my-8">
                    <hr/>
                </div>


             </div>
        </>
    )
};

export default Movie;

