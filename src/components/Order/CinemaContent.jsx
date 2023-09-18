import React from 'react';
import CinemaNote from './CinemaNote';
import CinemaWrapSeat from './CinemaWrapSeat';

export default function CinemaContent() {
    return (
        <div id="cinema-content" className="cinema-content" style={{ display: 'block', opacity: '1' }}>
            <div className="cinema-name">
                <h2>CineStar Huế</h2>
            </div>
            <div className='cinema-wrap'>
                <h3 className="cinema-title">Màn hình</h3>
                {/* cinema-wrap-seat */}
                <CinemaWrapSeat />
                {/* cinema-wrap-seat */}

                <CinemaNote />

                <div className="cinema-btn">
                    <input type="button" id="cinema-back" defaultValue="Quay lại" />
                    <input type="button" id="cons-chose" className="cons-chose" defaultValue="Chọn Đồ Ăn" />
                    <input type="button" id="cinema-next" defaultValue="Thanh toán" />
                </div>
            </div>

        </div>
    );
}
