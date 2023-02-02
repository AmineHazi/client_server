import React from 'react';
import "./home.css";
import ImageSlider from './ImageSlider';

const Home = () => {
  const slides = [
    { url: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg", title: "beach" },
    { url: "https://m.media-amazon.com/images/I/51Zr6Pd32ML._AC_SY780_.jpg", title: "boat" },
    { url: "https://images.squarespace-cdn.com/content/v1/594aa1f9db29d6bdf1b4913c/1540839895857-J6MRENNQKUKN9PLS7RIT/Screen+Shot+2018-10-25+at+5.08.05+PM.png", title: "forest" },
  ];
  return (
    <div className='home'>
        <div className='gradient'>

          <div className='searchforbook'>
            <h1>
              Find your next favorite book at the best price!
            </h1>
            <p>
              From fiction to educational resources, we have a lot of books to offer.
            </p>
            <input type="text" className='input-search' placeholder='Search for a book, an author, a genre...'></input>
          </div> 
         <div className="container">

{/*             <input type="radio" name="slider" id="item-1" checked></input>
            <input type="radio" name="slider" id="item-2" ></input>
            <input type="radio" name="slider" id="item-3" ></input>
           
            <div className="cards">
              <label className="card" for="item-1" id="song-1">
                <img src="https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg" alt=""></img>
              </label>
              <label className="card" for="item-2" id="song-2">
                <img src="https://m.media-amazon.com/images/I/51Zr6Pd32ML._AC_SY780_.jpg" alt=""></img>
              </label>
              <label className="card" for="item-3" id="song-3">
                <img src="https://images.squarespace-cdn.com/content/v1/594aa1f9db29d6bdf1b4913c/1540839895857-J6MRENNQKUKN9PLS7RIT/Screen+Shot+2018-10-25+at+5.08.05+PM.png" alt=""></img>
              </label>
            </div> */}
            <ImageSlider slides={slides} />
          </div>
        </div>
        <div className='Suggestions'>

        </div>
        <footer id='feet'>

        </footer>
    </div>
  
  )
}

export default Home