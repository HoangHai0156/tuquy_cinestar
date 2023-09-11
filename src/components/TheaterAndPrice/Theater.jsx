import React from 'react';
import TheaterList from './TheaterList/TheaterList';


function Theater(props) {


    return (
        <div className="cinema-list-content">
            <div className="cinema-list-wrap">

                <TheaterList />

            </div>
        </div>
    );
}

export default Theater;