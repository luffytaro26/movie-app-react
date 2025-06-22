
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./comp/Home"
import Navbar from "./Navbar"
import Wishlist from "./Wishlist"
import { WatchListProvider } from "./comp/WatchListContext"

function App() {

  return (
    <WatchListProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="wishlist" element={<Wishlist/>}/>
    </Routes>
    </BrowserRouter>
    </WatchListProvider>
   

   
  )
}

export default App
