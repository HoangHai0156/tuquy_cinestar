import React from 'react';
import Theater from './Theater';
import Price from './Price';

function TheaterAndPrice(props) {
    return (
        <>
            <div className="content-page">
                {/*CINERMA - SYSTEM*/}
                <Theater />
                {/*CINERMA - SYSTEM*/}

                {/*CINEMA-PRICE*/}
                <Price />
                {/*CINEMA-PRICE*/}
                
                {/*PROMOTION-SECTION*/}
                {/*PROMOTION-SECTION*/}
            </div>
        </>
    );
}

export default TheaterAndPrice;