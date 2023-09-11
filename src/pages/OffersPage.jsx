import React from 'react';
import MemberSlide from './../components/Discount/MemberSlide';
import PromotionList from './../components/Discount/PromotionList';
import SliderPlayingMovie from '../components/SlideShow/SliderPlayingMovie';

function OffersPage() {
    return (
        <>
            <MemberSlide />
            <PromotionList />
            <SliderPlayingMovie />
        </>
    );
}

export default OffersPage;
