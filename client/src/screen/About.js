import { React, useEffect, useState } from 'react';
import { useParams, Link ,useNavigate} from 'react-router-dom';
import KDRAMA from '../api/KDrama';
const About = () => {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const foundMovie = KDRAMA.find((movie) => movie.id === movieId);
    const image = `${foundMovie.image}`;


    const handleDownload = () => {
        if(foundMovie.ep === '1'){
        const videoUrl = foundMovie.link1;
        const link = document.createElement('a');
        link.href = videoUrl;
        link.click();
        }
        else{
            navigate(`/Episodes/${foundMovie.id}`)
        }
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };



    // Add an onClick event to scroll to top when the Link is clicked
    const linkClickHandler = () => {

        scrollToTop();
    };
    return (
        <>
            <header style={{ backgroundImage: `url(${foundMovie.cover})` }}>
                <nav>
                    <p className="logo">
                        Neb
                        <span>
                            ula<span></span>
                        </span>
                    </p>
                    <marquee >
                    <p className="logo">
                    You are in 
                        <span>
                            -{foundMovie.type}<span></span>
                        </span>
                    </p>
                            </marquee>
                </nav>
                <div className="popular-movie-slider">
                    <img
                        src={image}
                        className="poster"
                    />
                    <div className="popular-movie-slider-content">
                        <p className="release">{foundMovie.year}</p>
                        <h2 className="movie-name">{foundMovie.title}</h2>
                        <ul className="category">
                            <li>{foundMovie.category}</li>
                            <li>{foundMovie.quality}</li>
                        </ul>
                        <p className="desc">
                            {foundMovie.decription}
                        </p>
                        <div className="movie-info">
                            <i className="fa fa-clock-o">
                                {" "}
                                &nbsp;&nbsp;&nbsp;<span>{foundMovie.time}min/ep</span>
                            </i>
                            <i className="fa fa-volume-up">
                                {" "}
                                &nbsp;&nbsp;&nbsp;<span>Subtitles</span>
                            </i>
                            <i className="fa fa-circle">
                                {" "}
                                &nbsp;&nbsp;&nbsp;
                                <span>
                                    Imdb: <b>9.1/10</b>
                                </span>
                            </i>
                        </div>
                        <div className="movie-btns">
                            <button onClick={() => {

                                window.location.href = `${foundMovie.trailer}`;
                            }}>

                                <i className="fa fa-play" /> &nbsp;
                                Watch trailer
                            </button>



                            <button onClick={handleDownload}>

                                <i className="fa fa-play" /> &nbsp;
                                Download
                            </button>

                        </div>
                    </div>
                </div>
                {/*-slider-*/}
            </header>
            <section>

                {/*-movie-ticket-book*/}
                <div className="filter-search-box">
                    <div className="filters-box">
                        <div className="all-filters filters">
                            All formats <i className="fa fa-angle-down" />
                        </div>
                        <div className="date-filters filters">
                            By Date <i className="fa fa-angle-down" />
                        </div>
                        <div className="category-filters filters">
                            By category <i className="fa fa-angle-down" />
                        </div>
                        <div className="category-filters filters">Coming soon</div>
                    </div>
                    <div className="search-filters">
                        <input type="text" placeholder="Search by name..." />
                        <i className="fa fa-search" />
                    </div>
                    <div className="search-bar">
                        <div className="bar" />
                    </div>
                </div>
                {/*--filter-search-box--*/}

                <div className="movie-card-section">
                    {KDRAMA.slice().sort((a, b) => b.id - a.id).map((item) => (
                        <div key={item.id} className="card">
                            {/* Use Link component to navigate to About.js with movieId parameter */}
                            <Link to={`/about/${item.id}`} onClick={linkClickHandler}>
                                <img
                                    className="imm"
                                    src={item.image}
                                    alt={item.title}
                                    style={{ cursor: 'pointer' }}
                                />
                            </Link>
                            <div className="card-content">
                                <p className="movie-name">{item.title}</p>
                                {/* <div className="movie-info">
                                    <p className="time">
                                        11:30{" "}
                                        <span>
                                            14:45<span className="d3">3D</span> 16:05
                                            <span className="d3">3D</span>
                                        </span>{" "}
                                        18:40 21:00 23:15
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
                {/*-movie-card-*/}
                <div className="show">
                    <div className="show-bar">
                        <div className="bar" />
                    </div>
                    <button>Show more</button>
                </div>
                {/*-bar-*/}
            </section>
            <footer>
                <div className="logo-box">
                    <p className="logo">
                        Neb<span>ula</span>
                    </p>
                    <p>
                        <i className="fa fa-copyright" /> 2001-2017, SIA Multiflex
                    </p>
                </div>
                <ul>
                    <li>main</li>
                    <li>schedlues</li>
                    <li>tickets</li>
                    <li>news</li>
                    <li>contact</li>
                </ul>
                <div className="socail-box">
                    <i className="fa fa-facebook-f" />
                    <i className="fa fa-twitter" />
                    <i className="fa fa-instagram" />
                </div>
            </footer>
        </>

    );
}

export default About;
