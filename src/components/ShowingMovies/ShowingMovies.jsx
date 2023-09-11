import React, { useState } from 'react';
import SubTabFilm from './SubTabFilm';
import SpecialFilm from './SpecialFilm';
import PlayingMovie from './PlayingMovie';
import ComingFilm from './ComingFilm';

export default function ShowingMovies() {
    return (
        <div id="film-page">
            <SubTabFilm />
            <div className="tab-movie">
                <PlayingMovie />

                <ComingFilm />

                <SpecialFilm />
            </div>
        </div>
    );
}
