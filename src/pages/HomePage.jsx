import { useState, useEffect } from "react";
import { Typography, TextField, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


import { getApiData } from "../helpers/getApiData";

import { PageLayout } from "../layout/PageLayout"
import { FlexBox } from "../theme/purpleTheme";
import { ScrollBarMovies } from "../components/ScrollBarMovies";
import { Categories } from "../components/Categories";
import { Genres } from "../components/Genres";
import { localData } from "../helpers/localData";

export const HomePage = () => {

    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState('');
    const [tranding, setTranding] = useState(null);
    const [genres, setGenres] = useState(null);
    const [tv, setTv] = useState(null);
    const [ fav , setFav] = useState(null);

    useEffect(() => {

        const getTrending = async ()=>{
            const {results} = await getApiData('/trending/movie/week');
            setTranding(results)
        }
        const getGenres = async ()=>{
            const {genres} = await getApiData('/genre/movie/list');
            setGenres(genres)
        };
        const getTv = async ()=>{
            const {results} = await getApiData('/trending/tv/week');
            setTv(results)
        }
        
        const getFav = ()=>{

            const data = JSON.parse(localStorage.getItem('fav'))
            setFav(data)
           
        }

        
        getTrending();
        getGenres();
        getTv();
        getFav();

    }, [])

    console.log(fav)

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${searchValue}`);
    }   


  return (
    <PageLayout>

        <FlexBox flexDirection='column'>

            <Typography variant="h6" color= 'primary.white' mt={5}>Hello, Luis !!</Typography>

            <FlexBox>

                <form onSubmit={handleSubmit}>
                    <TextField 
                        sx={{marginTop:'10px', width:{sm:'50vw', xs:'80vw'}, border:'1px solid white', borderRadius:'4px'}}
                        size = 'small'
                        color = 'secondary'
                        variant = 'outlined'
                        type = 'text' 
                        placeholder="Serch your favorite movie"
                        value={searchValue}
                        onChange={(e)=> {setSearchValue(e.target.value)}}
                        required
                    />
                    <IconButton onClick={handleSubmit}>
                        <SearchIcon fontSize="medium" sx={{marginTop:'8px', position:'absolute', right:'30px', top:'9px',color:'primary.white'}}/>
                    </IconButton>
                </form>
            </FlexBox>

        </FlexBox>

        <ScrollBarMovies data= {tranding} title={'Most Popular Movies'} movieName={true}/>

        <Categories/>

        <ScrollBarMovies data={tv} title={'Most Popular on Tv'} movieName={false} type={'tv'}/>

        <Genres data={genres}/>

        <ScrollBarMovies title={'Your favorites'} data={fav !== null ? fav.reverse() : null} movieName={false} type={'tv'} />

    </PageLayout>
  )
}
