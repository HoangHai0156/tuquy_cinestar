import React from 'react';
const locationList = [
    {
        id: '506018c7-c3a6-4113-9112-01cbad73d0a7',
        province: 'TP. Hồ Chí Minh'
    },
    {
        id: 'e2c7d28c-2f95-444d-b9ff-aa6684af4ad8',
        province: 'Bình Dương'
    },
    {
        id: '3a10a529-c2e3-4d88-8ad5-f3d653849c0d',
        province: 'Huế'
    },
    {
        id: '506018c2-c3a6-4113-9112-01cbad73d0a7',
        province: 'Đà Lạt'
    },
    {
        id: 'b27fe633-a4a1-4df4-81e2-23b3da44f7ec',
        province: 'Tiền Giang'
    },
    {
        id: '18b96581-f9e9-4216-97b4-78b49c54d5c5',
        province: 'Kiên Giang'
    },
    {
        id: '55e2182d-e5b8-4b74-b791-abf55f770b67',
        province: 'Lâm Đồng'
    },
]
function Location(props) {
    const {
            handleHideSelectLocation, isLocationClicked, handleShowSelectLocation, 
            currentLocation, showSelectLocation, selectedLocation, handleChangeTheaterLocation} = props
    return (
        <div className="select-list" data-cate="location" onMouseLeave={handleHideSelectLocation}>
        <div className={`select-header ${isLocationClicked ? 'onClick' : ''}`} onClick={handleShowSelectLocation}>
            <span />
            <h3>{currentLocation}</h3>
        </div>
        <div className="select-box" style={{ display: showSelectLocation }} >
            <ul>
               {
                    locationList.map((location) => (
                        <li key={location.id}                                 
                            className={selectedLocation === location.id ? 'selected' : ''}>
                            <a href='/#' 
                                onClick={(e) => handleChangeTheaterLocation(e, location)}
                                data-target={location.id}>
                                <h3>
                                    {location.province}
                                </h3>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    );
}

export default Location;