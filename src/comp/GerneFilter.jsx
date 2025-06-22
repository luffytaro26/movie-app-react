import React, { useContext } from "react";
const GerneFilter=({gernerList})=>{
    return(
        <div className="gerne mt-16 flex justify-center">
            <select name="Gerner" className="flex opacity-60 bg-gray-700 text-white">
               {gernerList.map((genre)=>{
                return(
                    <option key={genre.id} value={genre} >
                        {genre.name}
                    </option>
                );
               })}
            </select>
        </div>
     
    )
}
export default GerneFilter