import React from 'react';

function TheaterAddress(props) {
    const {theater} = props;
    return (
        <div className="cinema-address">
            <h2>
                <span className="c_logo" style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }} />
                <span className="c_name">Quốc Thanh</span>
            </h2>
            <div className="c_address">271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh</div>
            <div className="c_tel">Đặt vé: <strong><a href="tel:028 7300 8881">028 7300 8881</a></strong></div>
        </div>
    );
}

export default TheaterAddress;