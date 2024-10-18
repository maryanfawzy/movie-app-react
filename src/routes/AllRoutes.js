import  {Route, Routes} from "react-router-dom"
import { MovieList } from "../pages/MovieList.js"
import { Search } from "../pages/Search.js"
import { MovieDetail } from "../pages/MovieDetail.js"
import { PageNotFound } from "../../pages/pageNotFound.js"



import React from 'react'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path= "/" element={<MovieList/>}/>
      <Route path= "/movie/:id" element={<MovieDetail/>}/>
      <Route path= "/movies/popular" element={<MovieList/>}/>
      <Route path= "/movies/top" element={<MovieList/>}/>
      <Route path= "/movie/upcomming" element={<MovieList/>}/>
      <Route path= "search" element={<Search/>}/>
      <Route path= "" element={<PageNotFound/>}/>

    </Routes>
      
    </>
  )
}

export default AllRoutes
