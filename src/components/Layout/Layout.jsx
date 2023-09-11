import React from 'react';
import Footer from '../Footer/Footer';
import Header from './../Header/Header';
import User from '../Header/User';
import Slider from '../Header/Slider';
import CartSection from '../Header/CartSection';

export default function Layout({ children }) {
    return (
        <div>
            {/*LOAD-PAGE*/}
            <div className="all-pics" />
            <div className="all-album" />
            <div className="allvideo" />
            <div className="overlay-album" />
            <div className="overlay-video" />
            <div className="overlay-dark" />
            {/*LOAD-PAGE*/}
            <div className="nav-click" style={{ display: 'none', opacity: 0 }} />
            {/*HEAD*/}
            <Header />
            {/*HEAD*/}
            {/*CONTAINER*/}
            <div className="container" style={{ minHeight: '302px', opacity: 1 }}>
                <div className="container-bg">
                    <div className="scroll-down-desktop" style={{ top: '470.016px' }}>
                        scroll down
                    </div>
                    {/*USER-SECTION*/}
                    <User />
                    {/*USER-SECTION*/}
                    {/*SLIDER*/}
                    <Slider />
                    {/*SLIDER*/}
                    {/*CART-SECTION-*/}
                    <CartSection />
                    {/*CART-SECTION-*/}
                    {/*CONTENT-PAGE*/}

                    <div className="content-page" style={{ marginBottom: '145px' }}>
                        {children}
                    </div>

                    {/*CONTENT-PAGE*/}
                </div>
                {/*FOOTER*/}
                <Footer />
                {/*FOOTER*/}
            </div>
        </div>
    );
}
