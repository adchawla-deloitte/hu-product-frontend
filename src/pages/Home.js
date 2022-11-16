import React from 'react';
import Row from '../Row';
import './Home.css';
import requests from '../Requests';
import Banner from '../Banner'

const Home = () => {
    return (
        <div className='home'>
            <h1>homepage</h1>
            <Banner />
            <Row title="Treanding Now" fetchUrl={requests.fetchTreanding}  isLargeRow={true}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumantariesMovies} />
  
        
        </div>
    );
};

export default Home;