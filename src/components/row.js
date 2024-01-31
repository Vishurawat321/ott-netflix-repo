import React, { useEffect, useState } from 'react'
import './row.css'
import axios from './axios';
function Row({title, fetchUrl, isLargeRow = false}) {
    const [movie,setMovie]= useState([]);
    const baseUrl="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])

    console.log(movie);
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
        {movie.map(movie=>(
            ((isLargeRow &&movie.poster_path)||
            (!isLargeRow && movie.backdrop_path))&&(
            <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt=""/>
            )
        ))}
        </div>
    </div>
  )
}

export default Row;
