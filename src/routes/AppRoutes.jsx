import { Route, Routes } from "react-router-dom"
import { CategoiesPage } from "../pages/CategoiesPage"
import { DetailsPage } from "../pages/DetailsPage"
import { HomePage } from "../pages/HomePage"
import { SearchPage } from "../pages/SearchPage"
import { Navbar } from "../ui/components/Navbar"


export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/movie/:id" element={<DetailsPage type='movie'/>}/>
        <Route path="/tv/:id" element={<DetailsPage type='tv'/>}/>
        <Route path="/search/:query" element={<SearchPage/>}/>
        <Route path="/categories/:query" element={<CategoiesPage/>}/>
    </Routes>
  )
}
