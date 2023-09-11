import React from 'react'

export default function CVip({handleShow}) {
    return (
        <div className="member-details-content" style={{ display: 'block', opacity: 1, top: '1213.01px' }}>
            <div className="member-details-wrap">
                <a className="close-member" style={{cursor: 'pointer'}} onClick={()=>handleShow('vip')}>close</a>
                {/*LOAD*/}
                <div className="member-load"><div className="member-detail">
                    <h3>Membership Terms &amp; Conditions</h3>
                    <div className="member-text">
                        <p><strong>Thẻ C’VIP:</strong></p>
                        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được cấp cho thành viên C’Friend khi tích lũy được ít nhất 10,000 điểm.</p>
                        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tích lũy điểm theo giá trị mua hàng hóa dịch vụ như sau.</p>
                        <p><img alt="" src="https://cinestar.com.vn/pictures/webimages/3Khuyenmai/member/point.jpg" style={{ width: '1920px', height: '1080px' }} /></p>
                        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được giảm 15% trực tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.</p>
                        <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có cơ hội nhận vé tham gia Lễ Ra Mắt Phim và các chương trình khuyến mãi khác của Cinestar.</p>
                        <p>&nbsp;</p>
                    </div>
                </div></div>
                {/*LOAD*/}
            </div>
        </div>
    )
}
