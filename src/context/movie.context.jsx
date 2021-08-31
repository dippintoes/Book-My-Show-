import React, {useState} from "react";

export const MovieContext = React.createContext();
//finction to return the data from provider i.e. context store
const MovieProvider = ({children}) => {
const [movie,setMovie]=useState({
id:0,
original_title:"",
overview: "",
backdrop_path:"",
poster_path:"",
});//setting default values so that while the function is fetching it  wont show that the object is undefined but it will be just undefined
//wrapping up context


return <MovieContext.Provider value={{movie, setMovie}}>{children}</MovieContext.Provider>
}//using children so that only this function can access from this provider

export default MovieProvider;