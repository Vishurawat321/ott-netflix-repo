import React from 'react'
import "./homescreen.css"
import Nav from '../components/nav'
import Banner from '../components/banner'
import requests from '../Requests'
import Row from '../components/row'
function Homescren() {
  return (
    <div className='homescreen'>
        {/* Navbar */}
        <Nav/>
        {/* Banner */}
        <Banner />
        {/* Rows */}
        <Row 
        title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
      
        <Row 
        title="Trending Now" fetchUrl={requests.fetchTrending}
        />
        <Row 
        title="Top Rated" fetchUrl={requests.fetchTopRated}
        />
        <Row 
        title="Action Movies" fetchUrl={requests.fetchActionMovies}
        />
        <Row 
        title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
        title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
        title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
        title="Documentaries" fetchUrl={requests.fetchDocumentaries}
        />
        
        
    </div>
  )
}

export default Homescren