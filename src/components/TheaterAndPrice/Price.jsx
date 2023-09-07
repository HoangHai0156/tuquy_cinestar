import React from 'react';

function Price(props) {
    return (
        <div className="cinema-price-content">
            <div className="cinema-price-wrap">
                <div className="cinema-price-load" style={{ minHeight: '257px', opacity: 1 }}><div className="cinema-price-item">
                    <img src="https://cinestar.com.vn/pictures/Bảng%20giá%20vé/cqt_2d-cap.jpeg" alt="pic" className="zoom-pic" />
                </div>
                    <div className="cinema-price-item">
                        <img src="https://cinestar.com.vn/pictures/Bảng%20giá%20vé/cqt_3d.png" alt="pic" className="zoom-pic" />
                    </div>
                </div>
            </div>
            <div className="bg-cover" style={{ backgroundImage: 'url("https://cinestar.com.vn/pictures/Bảng%20giá%20vé/439751.jpg")' }} />
        </div>
    );
}

export default Price;