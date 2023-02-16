import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss";
import {ImSearch} from "react-icons/im"
const navbar = () => {
  return (
    <nav className='navbar'>
        
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' />
       <div className="link">
        <Link to="/" >Home</Link>
        <Link to="/tvshows" >TV Shows</Link>
        <Link to="/movies" >Movies</Link>
        <Link to="/mylists" >My Lists</Link>
       </div>
       <ImSearch />
    </nav>
  )
}

export default navbar