import React, { useRef } from 'react'

export default function CFriend({ handleShow }) {

    return (
        <div className="member-details-content" style={{ display: 'block', opacity: 1, top: '1213.01px' }}>
            <div className="member-details-wrap">
                <a className="close-member" style={{ cursor: 'pointer' }} onClick={() => handleShow('friend')}>close</a>
                {/*LOAD*/}
                <div className="member-load"><div className="member-detail">
                    <h3>Membership Terms &amp; Conditions</h3>
                    <div className="member-text">
                        <p><strong>Thẻ C’Friend: </strong></p>
                        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.</p>
                        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tích lũy điểm theo giá trị mua hàng hóa dịch vụ như sau</p>
                        <p><img alt="" src="https://cinestar.com.vn/pictures/webimages/3Khuyenmai/member/point.jpg" /></p>
                        <p>- &nbsp; &nbsp; &nbsp; &nbsp;Được giảm 10% trực tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.</p>
                        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tặng 1 vé xem phim 2D vào tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật) với số điểm tích lũy tối thiểu 500 điểm.</p>
                        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tham gia các chương trình dành cho thành viên.</p>
                    </div>
                </div></div>
                {/*LOAD*/}
            </div>
        </div>
    )
}
