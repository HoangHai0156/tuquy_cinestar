import React from 'react';
import Introduce from '../components/Introduce/Introduce';
import SliderSlick from '../components/SlideShow/SliderSlick';
import SliderPlayingMovie from '../components/SlideShow/SliderPlayingMovie';

function IntroductionPage() {
    return (
        <>
            <Introduce />
            <SliderSlick />
            <SliderPlayingMovie />
        </>
    );
}

export default IntroductionPage;
