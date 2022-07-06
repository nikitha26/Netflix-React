import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import "./banner.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Popup from './Popup';


function Banner() {
    //Banner Request
    const[movie, setMovie] = useState([]);
    const[trailerUrl, setTrailerUrl] = useState("");
    
    
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginal);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
      }
     fetchData()
    }, []);
  

    function truncate(str,n) {
       return str?.length > n ? str.substr(0, n-1) + "..." : str;
    };
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
    const handleBanner = (movie) => {
      if(trailerUrl){
        setTrailerUrl('')
      }else {
        movieTrailer(null ,{ tmdbId: movie.id })
        .then((url) => {
          //https://www.youtube.com/watch?v=XtMThy8QKqU&t=268s
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error))
      }
    }
  

  return (
    <div className='banner_img'>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      
      <header className='banner'
        style={{
          backgroundSize:'cover',
          backgroundImage:`url(
              "https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}"
          )`,
          backgroundPosition:'center center',  
        }}
      >
        <div className='banner_contents'>
          <h1 className='banner_title'>
              {movie?.title ||movie?.name||movie?.original_name}
          </h1>
          <div className='banner_buttons'>
              <button className='banner_button' onClick={() => handleBanner(movie)}>Play</button>
              <button className='banner_button'>My List</button>
          </div>
          <h1 className='banner_description'>
            {truncate(movie?.overview,150)}
          </h1>
        </div>
        <div className='banner_fadebottom'/>
        {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
      </header>
      {/* <div>{console.log(show)}</div>
      <div>{show ? <Popup movie={movie} show={show}/> : console.log("else")}</div> */}
    </div>
  )
}

export default Banner