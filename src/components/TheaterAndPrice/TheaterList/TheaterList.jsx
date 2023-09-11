import React, { useState } from 'react';
import Location from './Location';
import TheaterLocation from './TheaterLocation';
import TheaterAddress from './TheaterAddress';

function TheaterList(props) {
    const [isLocationClicked, setIsLocationClicked] = useState(false);
    const [isTheaterClicked, setIsTheaterClicked] = useState(false);

    const [showSelectLocation, setshowSelectLocation] = useState('none');
    const [showSelectTheater, setShowSelectTheater] = useState('none');

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedTheater, setSelectedTheater] = useState(null);

    const [currentLocation, setCurrentLocation] = useState('TP. Hồ Chí Minh');
    const [currentTheater, setCurrentTheater] = useState('CineStar Quốc Thanh');



    function handleShowSelectLocation() {

        setIsLocationClicked(!isLocationClicked);
        setshowSelectLocation(showSelectLocation === 'none' ? 'block' : 'none')
    }
    function handleShowSelectTheater() {

        setIsTheaterClicked(!isTheaterClicked);
        setShowSelectTheater(showSelectTheater === 'none' ? 'block' : 'none')
    }
    function handleHideSelectLocation() {
        setshowSelectLocation('none')
    }
    function handleHideSelectThearter() {
        setShowSelectTheater('none')
    }
    function handleChangeTheaterLocation(e, location) {
        e.preventDefault()
        setSelectedLocation(location.id);
        setCurrentLocation(location.province)
        setshowSelectLocation('none')
    }
    function handleChangeTheater(e, theater) {
        e.preventDefault()
        setSelectedTheater(theater.id);
        setCurrentTheater(theater.name)
        setShowSelectTheater('none')
    }
    return (
        <>
            <div className="cinema-list">
                <h2>Hệ thống rạp</h2>

                <Location
                    isLocationClicked={isLocationClicked}
                    handleHideSelectLocation={handleHideSelectLocation}
                    handleShowSelectLocation={handleShowSelectLocation}
                    currentLocation={currentLocation}
                    showSelectLocation={showSelectLocation}
                    selectedLocation={selectedLocation}
                    handleChangeTheaterLocation={handleChangeTheaterLocation}
                />

                <TheaterLocation
                    handleHideSelectThearter={handleHideSelectThearter}
                    isTheaterClicked={isTheaterClicked}
                    handleShowSelectTheater={handleShowSelectTheater}
                    showSelectTheater={showSelectTheater}
                    currentTheater={currentTheater}
                    selectedTheater={selectedTheater}
                    handleChangeTheater={handleChangeTheater}
                />

            </div>
            <TheaterAddress />
        </>
    );
}

export default TheaterList;