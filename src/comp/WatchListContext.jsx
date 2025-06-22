import { createContext } from "react";
import React, { useState,useEffect } from "react";

export const WatchListContext = createContext();
export const WatchListProvider=({children })=>{
    
    const [watchList, setWatchList] = useState([]);
    const[gernerList, setGerneList] = useState([]);
    useEffect(()=>{
            let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=18ca5c387e79d23ea7578b869cbd1194`;
            fetch(url)
            .then((response)=> response.json())
            .then((data)=> setGerneList(data.gerner || []));
        },[]);


    const toogleWatchList = (movie) => {
       const index= watchList.findIndex((m) => m.id === movie.id);
         if(index === -1) {
            setWatchList([...watchList, movie]);
         }
         else {
            setWatchList([...watchList.slice(0, index), ...watchList.slice(index + 1)]);
         }
    };
    return(
        <WatchListContext.Provider value={{ watchList, toogleWatchList,gernerList }}>
            {children}
        </WatchListContext.Provider>
    )
    
}