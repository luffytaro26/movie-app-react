import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "./comp/WatchListContext";
const Navbar=()=>{
  const{watchList}= useContext(WatchListContext)
    return(
        <nav className="p-3 flex bg-gray-900 text-white justify-between fixed w-full border rounded-lg top-0 z-10">
            <Link className="text-xl font-bold" to="/" >MovieApp</Link>
           {/* <link to="/">Watchlist</link> */}
           <Link to="/wishlist">Watchlist({watchList.length})</Link>
        </nav>
    )
}
export default Navbar