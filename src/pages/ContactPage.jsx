import React from 'react';
import Contact from '../components/Contact/Contact';
import Promotion from '../components/SlideShow/Promotion';
import SliderPlayingMovie from '../components/SlideShow/SliderPlayingMovie';

function ContactPage() {
    return (
        <>
            <Contact />
            <SliderPlayingMovie />
            <Promotion />
        </>
    );
}

export default ContactPage;
