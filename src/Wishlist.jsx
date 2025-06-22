import React, { useContext,useState } from "react";
import GerneFilter from "./comp/GerneFilter";
import { WatchListContext } from "./comp/WatchListContext";
import Moviecard from "./comp/Moviecard";
const Wishlist=()=>{
   const{watchList,gernerList}=useContext(WatchListContext);
   const[searchTerm, setSearchTerm] = useState("");
   const filteredWatchList = watchList.filter(movie =>
       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
   );
    return(
        <div>
            <div className="p-3 pt-16"> 
        <input className="p-3  w-3/4 md:w-1/2 border rounded-lg  border-gray-900 bg-gray-900 opacity-60 backdrop-blur-md text-white fixed top-16 left-1/4 text-center z-10" type="text" placeholder="SearchMovie..." 
        onChange={(e)=> setSearchTerm(e.target.value)} />
       </div>
       <div>
        <GerneFilter gernerList={gernerList}/>
       </div>
       <div className="Moviecontainer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredWatchList.map(movie=>{
            return(
                <Moviecard key={movie.id} movie={movie}/>
            );
        })}

       </div>
       
        </div>
    )
}
export default Wishlist