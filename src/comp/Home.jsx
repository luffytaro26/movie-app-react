import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import { data } from "react-router-dom";
// const movie=[
//     {
//         poster:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4296/674296-v",
//         title:"ironman-3",
//         releasedate:"01/02/2000",
//     },
//     {
//         poster:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/486/1747141090486-v",
//         title:"Captain-America Brave New World",
//         releasedate:"01/02/2000",
//     },
//     {
//         poster:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4296/674296-v",
//         title:"ironman-3",
//         releasedate:"01/02/2000",
//     },
//     {
//         poster:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4296/674296-v",
//         title:"ironman-3",
//         releasedate:"01/02/2000",
//     },
//     {
//         poster:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4296/674296-v",
//         title:"ironman-3",
//         releasedate:"01/02/2000",
//     },
//     {
//         poster:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4296/674296-v",
//         title:"ironman-3",
//         releasedate:"01/02/2000",
//     },
//     {
//         poster:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4296/674296-v",
//         title:"ironman-3",
//         releasedate:"01/02/2000",
//     },
//     {
//         poster:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4296/674296-v",
//         title:"ironman-3",
//         releasedate:"01/02/2000",
//     },
// ];
const Home=()=>{
    const[movie, setMovie]=useState([]);
    const[page, setPage]=useState(1);
    const[search, setSearch]=useState("");
    useEffect(()=>{
        let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=18ca5c387e79d23ea7578b869cbd1194`;
        if(search){
            url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=18ca5c387e79d23ea7578b869cbd1194`;
        }
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> setMovie(data.results));
    },[page,search]);
    return(
        <>
       
       <div className="p-3 pt-16"> 
        <input onChange={(e)=> setSearch(e.target.value)} className="p-3  w-3/4 md:w-1/2 border rounded-lg  border-gray-900 bg-gray-900 opacity-60 backdrop-blur-md text-white fixed top-16 left-1/4 text-center z-10" type="text" placeholder="SearchMovie..." />
       </div>
       <div className="Moviecontainer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movie.map(movie=>{
            return(
                <Moviecard key={movie.id} movie={movie}/>
            );
        })}

       </div>
       <div className="pagination flex justify-between mt-5 p-3">
        <button disabled={page==1} className="border bg-gray-900 rounded-lg px-2 py-1 text-white" onClick={()=>{ setPage(prev=> prev-1)}}>Previous</button>
        <button className="border bg-gray-900 rounded-lg px-2 py-1 text-white" onClick={()=>{ setPage(prev=> prev+1)}}>Next</button>
       </div>
        </>

    )
}
export default Home