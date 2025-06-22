import React, {useContext} from "react";
import{ FaHeart, FaRegHeart } from"react-icons/fa";
import { WatchListContext } from "./WatchListContext";

const Moviecard=({movie})=>{
   const{toogleWatchList,watchList}= useContext(WatchListContext);
//    console.log("watchList",watchList); -- test whether watchList is working or not
    const isInWatchList = watchList.some((m) => m.id === movie.id);
   
    return(
        <div className="bg-gray-800 p-4  mt-16 rounded-lg shadow-md relative cursor-pointer tranform hover:-translate-y-2 ">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-80 object-contain rounded-lg"/>
            <h3 className="text-white font-bold text-xl text-center">{movie.title}</h3>
            <p className="text-white text-sm text-center">{movie.release_date}</p>
            <p className="text-white text-sm text-center">{movie.vote_average}</p>
           <button className="absolute text-red-700 top-4 right-5 " onClick={()=>toogleWatchList(movie)}>{isInWatchList?<FaHeart/>:<FaRegHeart/>}</button>
        </div>
    )
};
export default Moviecard



