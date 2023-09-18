import React from 'react'

export default function CinemaNote({ single, couple, bed }) {
    return (
        <ul className="cinema-note">
            <li className="single">Ghế thường</li>
            <li className="couple">Ghế đôi</li>
            {/* <li className="bed">Ghế đôi</li> */}
            <li className="choosing">Ghế đang chọn</li>
            <li className="busy">Ghế đã chọn</li>
            <li className="road">Lối đi</li>
        </ul>
    )
}
