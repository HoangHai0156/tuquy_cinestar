import React from 'react';
const theaterLocationList = [
    {
        id: '8f3a5832-8340-4a43-89bc-6653817162f1',
        name: 'CineStar Quốc Thanh',
        address: '271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh',
        phone: '028 7300 8881'
    },
    {
        id: '667c7727-857e-4aac-8aeb-771a8f86cd14',
        name: 'CineStar Hai Bà Trưng (TP.HCM)',
        address: '135 Hai Bà Trưng, Phường Bến Nghé ,Quận 1,Thành Phố Hồ Chí Minh',
        phone: '028 7300 7279'
    }
]
function TheaterLocation(props) {
    const { 
            handleHideSelectThearter, isTheaterClicked, handleShowSelectTheater, showSelectTheater,
            currentTheater, selectedTheater, handleChangeTheater} = props
    return (
        <div className="select-list" data-cate="location-cine" onMouseLeave={handleHideSelectThearter}>
            <div className={`select-header ${isTheaterClicked ? 'onClick' : ''}`} onClick={handleShowSelectTheater}>
                <span />
                <h3 data-holder="Chọn rạp">{currentTheater}</h3>
            </div>
            <div className="select-box" style={{ display: showSelectTheater }} >
                <ul>
                    {
                        theaterLocationList.map(theater => (
                            <li key={theater.id}
                                className={selectedTheater === theater.id ? 'selected' : ''}>
                                <a href="https://cinestar.com.vn/schedulelist" 
                                    onClick={(e) => handleChangeTheater(e, theater)}
                                    data-value={theater.id} 
                                    cinema-id={1} data-cine="1/1" 
                                    cine-open={1} 
                                    cine-address={theater.address}
                                    cine-call={theater.phone}>
                                    <h3>{theater.name}</h3>
                                </a>
                             </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default TheaterLocation;