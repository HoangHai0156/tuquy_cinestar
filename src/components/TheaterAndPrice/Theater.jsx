import React, { useState } from 'react';

function Theater(props) {

    const [isLocationClicked, setIsLocationClicked] = useState(false);
    const [isTheaterClicked, setIsTheaterClicked] = useState(false);

    const [showSelectLocation, setshowSelectLocation] = useState('none');
    const [showSelectTheater, setShowSelectTheater] = useState('none');



    function handleShowSelectLocation () {

            setIsLocationClicked(!isLocationClicked);
            setshowSelectLocation(showSelectLocation === 'none' ? 'block' : 'none')
    }
    function handleShowSelectTheater () {

        setIsTheaterClicked(!isTheaterClicked);
        setShowSelectTheater(showSelectTheater === 'none' ? 'block' : 'none')
    }

    function handleHideSelectLocation () {
        setshowSelectLocation('none')
    }
    function handleHideSelectThearter () {
        setShowSelectTheater('none')
    }


    return (
        <div className="cinema-list-content">
                    <div className="cinema-list-wrap">

                        <div className="cinema-list">
                            <h2>Hệ thống rạp</h2>
                            <div className="select-list" data-cate="location" onMouseLeave={handleHideSelectLocation}>
                                <div className={`select-header ${isLocationClicked  ? 'onClick' : ''}`} onClick={handleShowSelectLocation}>
                                    <span />
                                    <h3>Hồ Chí Minh</h3>
                                </div>
                                <div className="select-box" style={{display: showSelectLocation}} >
                                    <ul>
                                        <li className="selected"><a href="/#" data-target="44eb9a3b-a1fb-45a4-898e-1c0ae39e84dc"><h3>Hồ Chí Minh</h3></a></li>
                                        <li><a href="/#" data-target="506018c7-c3a6-4113-9112-01cbad73d0a7"><h3>Đà Lạt</h3></a></li>
                                        <li><a href="/#" data-target="e2c7d28c-2f95-444d-b9ff-aa6684af4ad8"><h3>Bình Dương</h3></a></li>
                                        <li><a href="/#" data-target="3a10a529-c2e3-4d88-8ad5-f3d653849c0d"><h3>Huế</h3></a></li>
                                        <li><a href="/#" data-target="b27fe633-a4a1-4df4-81e2-23b3da44f7ec"><h3>Tiền Giang</h3></a></li>
                                        <li><a href="/#" data-target="18b96581-f9e9-4216-97b4-78b49c54d5c5"><h3>Kiên Giang</h3></a></li>
                                        <li><a href="/#" data-target="55e2182d-e5b8-4b74-b791-abf55f770b67"><h3>Lâm Đồng</h3></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-list" data-cate="location-cine" onMouseLeave={handleHideSelectThearter}>
                                <div className={`select-header ${isTheaterClicked  ? 'onClick' : ''}`} onClick={handleShowSelectTheater}>
                                    <span />
                                    <h3 data-holder="Chọn rạp">CineStar Quốc Thanh</h3>
                                </div>
                                <div className="select-box" style={{display: showSelectTheater}} >
                                    <ul><li className="show selected"><a href="https://cinestar.com.vn/schedulelist" data-value="8f3a5832-8340-4a43-89bc-6653817162f1" cinema-id={1} data-cine="1/1" cine-open={1} cine-address="271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh" cine-call="028 7300 8881"><h3>CineStar Quốc Thanh</h3></a></li><li className="show"><a href="https://cinestar.com.vn/schedulelist" data-value="667c7727-857e-4aac-8aeb-771a8f86cd14" cinema-id={1} data-cine="1/1" cine-open={1} cine-address="135 Hai Bà Trưng, Phường Bến Nghé ,Quận 1,Thành Phố Hồ Chí Minh" cine-call="028 7300 7279"><h3>CineStar Hai Bà Trưng (TP.HCM)</h3></a></li></ul>
                                </div>
                            </div>
                        </div>

                        <div className="cinema-address">
                            <h2><span className="c_logo" style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }} /><span className="c_name">Quốc Thanh</span></h2>
                            <div className="c_address">271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh</div>
                            <div className="c_tel">Đặt vé: <strong><a href="tel:028 7300 8881">028 7300 8881</a></strong></div>
                        </div>
                    </div>
                </div> 
    );
}

export default Theater;