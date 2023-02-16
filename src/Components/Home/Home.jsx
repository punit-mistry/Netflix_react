import{ React, useState,} from 'react'
import "../Home/Home.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import {GiPlayButton} from "react-icons/gi"
import {MdPlaylistAddCheck} from "react-icons/md"


const apikey = process.env.REACT_APP_API_KEY;


const url ="https://api.themoviedb.org/3/movie"
const upcoming="/upcoming"
const Top_rated="/top_rated"
const Popular="/popular"
const img_url="https://image.tmdb.org/t/p/w500"
const Card=({img,img_url})=>(

 <img className='card' src={`https://image.tmdb.org/t/p/w500${img}`} alt="cover" />

)


const Rows=({title,arr=[] })=>(

  <div className='rows'>
    <h2>{title}</h2>
    <div >
    {
      arr.map((item,index)=> (
        <Card key={index} img={item.poster_path} />
      ))
    }
    </div>
  </div>

)



const Home = () => {

  const [UpcomingMovies,setUpcomingMovies] =useState([])
  const [PopularMovies,setPopularMovies] =useState([])
  const [TopratedMovies,setTopratedMovies] =useState([])
  const [GenreMovies,setGenreMovies] =useState([])

  useEffect(() => {
    
    const fetchdata=async()=>{
      const {data}=await axios.get(`${url}/${upcoming}?api_key=${apikey}&language=en-US&page=1`)
      setUpcomingMovies(data.results)
    }
    const popular=async()=>{
      const {data}=await axios.get(`${url}/${Popular}?api_key=${apikey}&language=en-US&page=1`)
      setPopularMovies(data.results)
   
    }
    const top_rated=async()=>{
      const {data}=await axios.get(`${url}/${Top_rated}?api_key=${apikey}&language=en-US&page=1`)
      setTopratedMovies(data.results)
    
    }

    const genre=async()=>{
      // https://api.themoviedb.org/3/genre/movie/list?api_key=75970159f4a54a647111ecb1d9a770fc&language=en-US&page=1
      const {data}=await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US&page=1`)
      setGenreMovies(data.genres)
      
    }

    fetchdata()
    popular()
    top_rated()
    genre()

  }, [])
  



  return (
   <div className="home">
    <div className="banner" style={{
      backgroundImage :PopularMovies[3]? `url(https://image.tmdb.org/t/p/w500${PopularMovies[0].poster_path})` : "black",
      backgroundRepeat: 'no-repeat'
    }}>
      {
        PopularMovies[0]&&(
          <h1>{PopularMovies[0].original_title}</h1>
        )
      }
      {
        PopularMovies[0]&&(
          <h4>{PopularMovies[0].overview}</h4>
        )
      }
      <div className={"Buttons"}>
      <button> <GiPlayButton />Play</button>
      <button> <MdPlaylistAddCheck />My Lists</button>
      </div>
      
      
     
    {/* <img src={`https://image.tmdb.org/t/p/w500${PopularMovies[3].poster_path}`} alt="banner" /> */}

    </div>
    <Rows title={"Upcoming Movies "} arr={UpcomingMovies} />
    <Rows title={"Popular Movies"} arr={PopularMovies} />
    <Rows title={"Top Rated Moives "} arr={TopratedMovies} />
    
    <div className="genreBox">
      {GenreMovies.map((item,index)=>(
        <Link key={index} to={`/genre/${item.id}`}>{item.name}  </Link>
      ))}
    </div>

   </div>
  )
}

export default Home