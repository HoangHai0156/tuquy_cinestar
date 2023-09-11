import React from 'react';
import WrapperIcon from '../components/WrapperIcon/WrapperIcon';
import SubTabFilm from '../components/ShowingMovies/SubTabFilm';
import SliderPlayingMovie from '../components/SlideShow/SliderPlayingMovie';
import Promotion from '../components/SlideShow/Promotion';
import HomeNews from '../components/NewsContent/HomeNews';

function Home() {
    return (
        <div>
            <WrapperIcon />
            <SubTabFilm />
            <SliderPlayingMovie />
            <Promotion />
            <HomeNews />
        </div>
    );
}

export default Home;
