import React, { useEffect, useState } from 'react'
import './banner.css'
import { FaCirclePlay,FaCircleInfo } from "react-icons/fa6";
import axios from './axios';
import requests from '../Requests';

function Banner() {

    const[Banner,setBanner]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setBanner(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])
    console.log(Banner);

    function truncate(s,n){
        return s?.length > n ? s.substr(0,n-1)+'...':
        s;
    }
  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${Banner?.backdrop_path}")`,
        
        backgroundPosition:"center center",
        
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>{Banner?.title || Banner?.name || Banner?.original_name}</h1>
        
        
        <h1 className='banner_description'> {truncate(Banner?.overview,200)}

        </h1>
        <div className='banner_buttons'>
            <button className='banner_button1'><FaCirclePlay className='icon1'/> Play</button>
            <button className='banner_button'><FaCircleInfo className='icon1'/> More Info</button>
        </div>
        </div>
        <div className='banner_fade'/>
    </header>
  )
}

export default Banner