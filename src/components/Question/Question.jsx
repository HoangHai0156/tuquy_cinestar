import React, { useState } from 'react';

function Question() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSetShow = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div className="content-page">
            {/*FAQ-CONTENT*/}
            <div className="faq-content">
                <div className="section-title">
                    <h2>Hỏi và đáp</h2>
                </div>
                {/*FAQ-WRAP*/}
                <div className="faq-wrap">
                    <div className="faq">
                        <ul>
                            <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleSetShow(1)}>
                                <div className="ask">
                                    <span className="cycle-num">01</span>
                                    <h3>Làm thế nào để mua vé online?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div
                                    className="answer-wrap"
                                    style={activeIndex === 1 ? { height: 896 } : { height: 0 }}
                                >
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p style={{ textAlign: 'center' }}>HƯỚNG DẪN MUA VÉ ONLINE</p>
                                            <p style={{ textAlign: 'center' }}>
                                                <u>Điều kiện:</u>
                                            </p>
                                            <p>- Bạn phải là thành viên Cinestar</p>
                                            <p>
                                                - Nếu không là thành viên vui lòng đăng ký thành viên trên website để
                                                được mua vé
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt=""
                                                    src="https://sv1.uphinhnhanh.com/images/2018/06/11/image97da8.png"
                                                    style={{ width: '624px', height: '351px' }}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <u>Bước 2:</u>
                                            </p>
                                            <p>Đăng nhập tài khoản thành viên</p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt=""
                                                    src="https://sv1.uphinhnhanh.com/images/2018/06/11/image32ff4.png"
                                                    style={{ width: '624px', height: '351px' }}
                                                />
                                            </p>
                                            <p>Đăng nhập</p>
                                            <p>Trường hợp khách hàng&nbsp;đăng nhập không được vui lòng liên hệ:</p>
                                            <p>- Rạp Cinestar QT:</p>
                                            <p>- Rạp Cinestar Hai bà Trưng:</p>
                                            <p>- Rạp Cinestar Đà Lạt:</p>
                                            <p style={{ textAlign: 'center' }}>
                                                <u>Bước 3:</u>
                                            </p>
                                            <p>- Chọn loại vé và số lượng:</p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt=""
                                                    src="https://sv1.uphinhnhanh.com/images/2018/06/11/112.png"
                                                    style={{ width: '800px', height: '450px' }}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <u>Bước 4:</u>
                                            </p>
                                            <p>Chọn ghế:</p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt=""
                                                    src="https://sv1.uphinhnhanh.com/images/2018/06/11/113.png"
                                                    style={{ width: '800px', height: '450px' }}
                                                />
                                            </p>
                                            <p>Chọn thức ăn:</p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt=""
                                                    src="https://sv1.uphinhnhanh.com/images/2018/06/11/114.png"
                                                    style={{ width: '800px', height: '450px' }}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <u>Bước 5:</u>
                                            </p>
                                            <p>- Đồng ý.</p>
                                            <p>- Đồng ý&nbsp; các điều khoản</p>
                                            <p>- Chọn loại thẻ thanh toán.</p>
                                            <p>- Thanh toán.</p>
                                            <p style={{ marginLeft: '54pt', textAlign: 'center' }}>&nbsp;</p>
                                            <p style={{ textAlign: 'center' }}>
                                                B6:&nbsp;&nbsp;&nbsp; Nhập thông tin tài khoản để thanh toán việc mua
                                                online.&nbsp;
                                            </p>
                                            <p style={{ textAlign: 'center' }}>HOÀN TẤT</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleSetShow(2)}>
                                <div className="ask">
                                    <span className="cycle-num">02</span>
                                    <h3>Thủ tục đặt vé online và phương thức thanh toán như thế nào?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div
                                    className="answer-wrap"
                                    style={activeIndex === 2 ? { height: 267 } : { height: 0 }}
                                >
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p style={{ lineHeight: '22.4px' }}>
                                                <b>CÁCH ĐẶT VÉ ONLINE:</b>
                                            </p>
                                            <p style={{ lineHeight: '22.4px' }}>
                                                <strong>1/</strong>&nbsp;Đặt vé online trên mục MUA VÉ ONLINE&nbsp;ở
                                                trang chủ Cinestar Cinema.
                                            </p>
                                            <p style={{ lineHeight: '22.4px' }}>
                                                <strong>2/</strong>&nbsp;Chọn Phim, Rạp, Ngày va&nbsp;Suất chiếu&nbsp;.
                                            </p>
                                            <p style={{ lineHeight: '22.4px' }}>
                                                <strong>3/&nbsp;</strong>Bạn chọn vị trí&nbsp;ghế, nhập thông tin liên
                                                hệ.
                                            </p>
                                            <p style={{ lineHeight: '22.4px' }}>
                                                <strong>4/&nbsp;</strong>Bạn&nbsp;chọn&nbsp;phương thức thanh toán.
                                            </p>
                                            <p style={{ lineHeight: '22.4px' }}>
                                                <img
                                                    alt=""
                                                    src="https://cinestar.com.vn/pictures/3_hoi dap/mua ve/untitled-3.png"
                                                    style={{ width: '526px', height: '454px' }}
                                                />
                                            </p>
                                            <p style={{ lineHeight: '22.4px' }}>
                                                <strong>5</strong>
                                                <strong>/</strong>Sau khi hoàn tất thanh toán hệ thống sẽ gửi thông tin
                                                vé đến liên hệ của bạn. Vui long xuất thông tin đặt vé khi đến rap.
                                            </p>
                                            <p style={{ lineHeight: '22.4px' }}>
                                                <strong>CHÚC BẠN XEM PHIM VUI VẺ</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleSetShow(3)}>
                                <div className="ask">
                                    <span className="cycle-num">03</span>
                                    <h3>Làm sao để được cấp thẻ thành viên?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 3 ? { height: 98 } : { height: 0 }}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p>
                                                Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp Cinestar là đã có thể tạo
                                                thẻ C'Friend&nbsp;
                                                <span style={{ lineHeight: '1.6em' }}>
                                                    và thẻ chỉ có giá trị sử dụng từ lần giao dịch sau.
                                                </span>
                                            </p>
                                            <p>khi bạn tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên thẻ C'vip</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleSetShow(4)}>
                                <div className="ask">
                                    <span className="cycle-num">04</span>
                                    <h3>Lợi ích khi tham gia thẻ thành viên là gì?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div
                                    className="answer-wrap"
                                    style={activeIndex === 4 ? { height: 608 } : { height: 0 }}
                                >
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p>
                                                <span style={{ lineHeight: '1.6em' }}>
                                                    Thẻ thành viên của Cinestar bao gồm 2 hạng mục là C'Friend và C'Vip.
                                                    Cụ thể quyền lợi như sau
                                                </span>
                                            </p>
                                            <p>
                                                Khi điểm của thẻ đạt mức như sau sẽ có thể đổi được phần thưởng tương
                                                ứng.&nbsp;
                                            </p>
                                            <p>
                                                Khi điểm tích lũy của thẻ đạt 10.000 sẽ được nâng cấp lên thẻ&nbsp;C'Vip
                                                (Điểm tích lũy&nbsp;= tổng điểm cộng dồn từ trước đến giờ, không phải
                                                điểm còn lại của thẻ)
                                            </p>
                                            <p>
                                                <img
                                                    alt=""
                                                    src="https://cinestar.com.vn/pictures/moi/2KhuyenMai/1TheThanhVien/mucthuong2.jpg"
                                                    style={{ width: '1920px', height: '1080px' }}
                                                />
                                            </p>
                                            <p>
                                                <strong>Thẻ C’Friend: </strong>
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được cấp lần đầu khi mua 2
                                                vé xem phim bất kỳ tại Cinestar.
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tích lũy điểm theo giá
                                                trị mua hàng hóa dịch vụ như trên.
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được giảm 10% trực tiếp trên
                                                giá trị hóa đơn bắp nước khi mua tại quầy.
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tặng 1 vé xem phim 2D
                                                vào tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật), Điều kiện: tối thiểu
                                                có 500 điểm tích lũy
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tham gia các chương
                                                trình dành cho thành viên.
                                            </p>
                                            <p>
                                                <strong>Thẻ C’VIP:</strong>
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được cấp cho thành viên
                                                C’Friend khi tích lũy được ít nhất 10,000 điểm.
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tích lũy điểm theo giá
                                                trị mua hàng hóa dịch vụ như trên.
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được giảm 15% trực tiếp trên
                                                giá trị hóa đơn bắp nước khi mua tại quầy.
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tặng 2 vé xem phim 2D
                                                và 1 combo gồm coke 16oz + popcorn 32oz vào tuần sinh nhật (tính từ Thứ
                                                Hai đến Chủ Nhật).
                                            </p>
                                            <p>
                                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có cơ hội nhận vé tham gia
                                                Lễ Ra Mắt Phim và các chương trình khuyến mãi khác của Cinestar.
                                            </p>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleSetShow(5)}>
                                <div className="ask">
                                    <span className="cycle-num">05</span>
                                    <h3>Làm sao để biết được số điểm đã tích lũy?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 5 ? { height: 65 } : { height: 0 }}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p>
                                                ​
                                                <span
                                                    style={{
                                                        fontSize: '12.8px',
                                                        color: 'rgb(34, 34, 34)',
                                                        fontFamily: 'arial, sans-serif',
                                                    }}
                                                >
                                                    Khách hàng&nbsp;có thể hỏi nhân viên&nbsp;lúc sử dụng thẻ thành viên
                                                    để mua vé hoặc kiểm tra thông tin khách hàng&nbsp;trên website
                                                    cinestar.com.vn&nbsp;bằng tài khoản online.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 6 ? 'active' : ''} onClick={() => handleSetShow(6)}>
                                <div className="ask">
                                    <span className="cycle-num">06</span>
                                    <h3>Làm thế nào để đăng nhập vào Website khi đã có thẻ C'Friend?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div
                                    className="answer-wrap"
                                    style={activeIndex === 6 ? { height: 336 } : { height: 0 }}
                                >
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p>
                                                <u>
                                                    <strong style={{ fontStyle: 'italic' }}>ĐỐI VỚI C'FRIEND:</strong>
                                                </u>
                                                &nbsp;Bạn thêm "CF" vào trước mã thẻ
                                            </p>
                                            <p>
                                                <strong>Ví dụ:</strong>&nbsp;Thẻ của bạn là 1013484
                                            </p>
                                            <p>Bạn đăng nhập là: CF1013484</p>
                                            <p>Mật khẩu (giống tên đăng nhập): CF1013484</p>
                                            <p>&nbsp;</p>
                                            <p>
                                                <strong style={{ fontStyle: 'italic' }}>
                                                    <u>ĐỐI VỚI C'VIP:</u>&nbsp;
                                                </strong>
                                                Bạn thêm "CV" vào trước mã thẻ
                                                <em>
                                                    <strong>&nbsp;</strong>&amp; thêm 01 số "0" vào dãy số 0
                                                </em>
                                            </p>
                                            <p>
                                                <strong>Ví dụ:</strong> Thẻ của bạn là 1001234
                                            </p>
                                            <p>
                                                Bạn đăng nhập là: CV1<strong>0</strong>001234
                                            </p>
                                            <p>
                                                Mật khẩu (giống tên đăng nhập): CV1<strong>0</strong>001234
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 7 ? 'active' : ''} onClick={() => handleSetShow(7)}>
                                <div className="ask">
                                    <span className="cycle-num">07</span>
                                    <h3>Dolby Atmos là gì?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div
                                    className="answer-wrap"
                                    style={activeIndex === 7 ? { height: 160 } : { height: 0 }}
                                >
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p>
                                                Atmos là một hệ thống âm thanh được phát triển bởi Dolby, về cơ bản, nó
                                                thay đổi cách âm thanh được thiết kế cho các bộ phim và thể hiện chúng
                                                trong rạp chiếu phim. Với Dolby Atmos, nhà làm phim có thể định vị trí
                                                và đưa âm thanh đi khắp nơi trong một rạp hát, thậm chí lên phía trên
                                                đầu, đề cao chủ nghĩa hiện thực và tác động từ mỗi cảnh phim đem lại.
                                                Atmos dùng một phương pháp tiếp cận dựa trên đối tượng để thiết kế âm
                                                thanh, thay vì chỉ bao gồm các kênh âm thanh (channel), trong đó, nhà
                                                làm phim được tự do sáng tạo cho âm thanh "bay quanh" khán giả trong
                                                không gian 3 chiều (3D).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*FAQ-WRAP*/}
                {/*FAQ-FORM*/}
                <div className="section-title">
                    <h2>Gửi câu hỏi</h2>
                </div>
                <div className="faq-form">
                    <form onsubmit="return validatecontact();" id="frm_contact" name="frm_contact" method="post">
                        <div className="require-col">
                            <div className="input-text name">
                                <span className="focus-text">HỌ TÊN (*)</span>
                                <input name="name" defaultValue id="name" type="text" />
                            </div>
                            <div className="input-text tel">
                                <span className="focus-text">ĐIỆN THOẠI (*)</span>
                                <input name="phone" defaultValue id="phone" type="text" />
                            </div>
                            <div className="input-text email">
                                <span className="focus-text">EMAIL (*)</span>
                                <input name="email" defaultValue id="email" type="text" />
                            </div>
                            <div className="input-area">
                                <span className="focus-text">NỘI DUNG (*)</span>
                                <textarea data-holder="NỘI DUNG (*)" id="comments" name="comments" defaultValue={''} />
                            </div>
                            <div className="input-but">
                                <input id="btn-contact-submit" type="button" defaultValue="Gửi" />
                            </div>
                        </div>
                    </form>
                </div>
                {/*FAQ-FORM*/}
                <div
                    className="bg-cover"
                    style={{
                        backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/3HoiDap/Background/hhv2dyu.jpg)',
                    }}
                />
            </div>
        </div>
    );
}

export default Question;
