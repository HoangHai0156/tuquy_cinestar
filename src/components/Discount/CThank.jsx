import React from 'react'

export default function CThank({handleShow}) {
    return (
        <div className="member-details-content" style={{ display: 'block', opacity: 1, top: '1213.01px' }}>
            <div className="member-details-wrap">
                <a className="close-member" style={{cursor: 'pointer'}} onClick={()=>handleShow('thank')}>close</a>
                {/*LOAD*/}
                <div className="member-load"><div className="member-detail">
                    <h3>THẺ THANH VIÊN HỢP TÁC TRIỂN LÃM "TÁC HẠI CỦA MA TUÝ"</h3>
                    <div className="member-text">
                        <p>&nbsp;</p>
                        <p>ƯU ĐÃI CHỦ THẺ:</p>
                        <p style={{ marginLeft: '21.3pt' }}><em>- Thẻ được giảm 25% giá vé trên bảng giá niêm yết cho HSSV của CINESTAR HAI BÀTRƯNG.</em></p>
                        <p>QUY ĐỊNH SỬ DỤNG:</p>
                        <p style={{ marginLeft: '21.3pt' }}><em>- Thẻ chỉ áp dụng với chủ thẻ, 01 vé, 01 suất chiếu tại Cinestar Hai Bà Trưng và Cinestar Sinh Viên.</em></p>
                        <p style={{ marginLeft: '21.3pt' }}><em>- Thẻ này sử dụng trước khi giao dịch tại CINESTAR<strong>.</strong></em></p>
                        <p style={{ marginLeft: '21.3pt' }}><em>- Thẻ này là sản phẩm của CINESTAR không được chuyển nhượng.</em></p>
                        <p style={{ marginLeft: '21.3pt' }}><em>- Xin vui lòng hoàn trả công ty CINESTAR thẻ này trong trường hợp không sử dụng hoặc nhặt được<strong>.</strong></em></p>
                        <p style={{ marginLeft: '21.3pt' }}><em>- CINESTAR bảo lưu quyền cung cấp&nbsp; dịch vụ và quyền thay đổi điều kiện nội dung chương trình ưu đãi mà không cần báo phải thông báo trước </em></p>
                        <p style={{ marginLeft: '21.3pt' }}><em>- Tham khảo chi tiết điều khoản tại website của chúng tôi:<strong>.</strong></em></p>
                        <p style={{ marginLeft: '21.3pt' }}><strong><em>https//:cinestar.com.vn</em></strong></p>
                    </div>
                </div></div>
                {/*LOAD*/}
            </div>
        </div>
    )
}
