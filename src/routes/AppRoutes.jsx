import { Navigate, Route, Routes } from "react-router-dom"
import { CategoiesPage, HomePage, DetailsPage, SearchPage } from "../pages"




export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/movie/:id" element={<DetailsPage type='movie'/>}/>
        <Route path="/tv/:id" element={<DetailsPage type='tv'/>}/>
        <Route path="/search/:query" element={<SearchPage/>}/>
        <Route path="/categories/:query" element={<CategoiesPage/>}/>
        <Route path ='/*' element={ <Navigate to='/home' /> } />
    </Routes>
  )
}
