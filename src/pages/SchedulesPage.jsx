import React from 'react';
import Schedules from '../components/Schedules/Schedules';
import Promotion from '../components/SlideShow/Promotion';
import Theater from '../components/TheaterAndPrice/Theater';

function SchedulesPage() {
    return (
        <>
            <Theater />
            <Schedules />
            <Promotion />
        </>
    );
}

export default SchedulesPage;
