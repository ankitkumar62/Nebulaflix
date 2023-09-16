
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popular from '../api/Popular';
import Drama from '../api/Drama';
import Movies from '../api/Movie';
import Thriller from '../api/Thriller'
import KDRAMA from '../api/KDrama'

const Home = () => {
  const [index, setIndex] = useState(0);
  const [ThrillerData, setThrillerData] = useState(Thriller);
  const [PopularData, setPopularData] = useState(Popular);
  const [DramaData, setdramaData] = useState(Drama);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    // Fetch data from your server's endpoint
    fetch('http://localhost:2000/api/data')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const handleDownload = (movie) => {
    const videoUrl = movie.link;
    const link = document.createElement('a');
    link.href = videoUrl;
    link.click();
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  

  return (
    <>
    

      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((movie, movieIndex) => (
            <Carousel.Item key={movieIndex}>
              <div className="slider">
                <div className="slider-content">
                  <h1 className="movie-title">{movie.title}</h1>
                  <p className="movie-des">{movie.decription}</p>
                </div>
                <div className='imgc'>
                  <img
                    className='im'
                    href='{movie.title}'
                    onClick={() => handleDownload(movie)}
                    style={{ cursor: 'pointer' }}
                    src={movie.image}
                    alt={movie.title}
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className='MainContainer'>



        <h2 className='title'>K-Drama</h2>
        <div className="item-container">
          {KDRAMA.map((item) => (
            <div key={item.id} className="item">
              <Link to={`/about/${item.id}`}>
                <img
                  className="img"
                  src={item.image}
                  alt={item.title}
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </div>
          ))}
        </div>


        <h2 className='title'>Tranding</h2>
        <div className="item-container">
          {Popular.map((item, index) => (
            <div key={item.id} className="item" >
              <img className='img' src={item.image} alt={item.title} onClick={() => handleDownload(item)}
                style={{ cursor: 'pointer' }} />
            </div>
          ))}
        </div>




        <h2 className='title'>Drama</h2>
        <div className="item-container">
          {DramaData.map((item, index) => (
            <div key={item.id} className="item" >
              <img className='img' src={item.image} alt={item.title} onClick={() => handleDownload(item)}
                style={{ cursor: 'pointer' }} />
            </div>
          ))}
        </div>




        <h2 className='title'>Thriller</h2>
        <div className="item-container">
          {ThrillerData.map((item, index) => (
            <div key={item.id} className="item" >
              <img className='img' src={item.image} alt={item.title} onClick={() => handleDownload(item)}
                style={{ cursor: 'pointer' }} />
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Home;
