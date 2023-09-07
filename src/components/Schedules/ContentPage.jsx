import React, { useState } from 'react'


function ContentPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSetShow = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }
    return (
        <div className="content-page">
            {/*FAQ-CONTENT*/}
            <div className="faq-content">
                <div className="section-title"><h2>Hỏi và đáp</h2></div>
                {/*FAQ-WRAP*/}
                <div className="faq-wrap">
                    <div className="faq">
                        <ul>
                            <li className={activeIndex === 1 ? 'active' : ''}
                                onClick={() => handleSetShow(1)}
                            >
                                <div className="ask">
                                    <span className="cycle-num">01</span>
                                    <h3>Làm thế nào để mua vé online?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 1 ?{height: 896} : {height: 0}}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p style={{ textAlign: 'center' }}>HƯỚNG DẪN MUA VÉ ONLINE</p>
                                            <p style={{ textAlign: 'center' }}><u>Điều kiện:</u></p>
                                            <p>- Bạn phải là thành viên Cinestar</p>
                                            <p>- Nếu không là thành viên vui lòng đăng ký thành viên trên website để được mua vé</p>
                                            <p style={{ textAlign: 'center' }}><img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/image97da8.png" style={{ width: '624px', height: '351px' }} /></p>
                                            <p style={{ textAlign: 'center' }}><u>Bước 2:</u></p>
                                            <p>Đăng nhập tài khoản thành viên</p>
                                            <p style={{ textAlign: 'center' }}><img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/image32ff4.png" style={{ width: '624px', height: '351px' }} /></p>
                                            <p>Đăng nhập</p>
                                            <p>Trường hợp khách hàng&nbsp;đăng nhập không được vui lòng liên hệ:</p>
                                            <p>- Rạp Cinestar QT:</p>
                                            <p>- Rạp Cinestar Hai bà Trưng:</p>
                                            <p>- Rạp Cinestar Đà Lạt:</p>
                                            <p style={{ textAlign: 'center' }}><u>Bước 3:</u></p>
                                            <p>- Chọn loại vé và số lượng:</p>
                                            <p style={{ textAlign: 'center' }}><img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/112.png" style={{ width: '800px', height: '450px' }} /></p>
                                            <p style={{ textAlign: 'center' }}><u>Bước 4:</u></p>
                                            <p>Chọn ghế:</p>
                                            <p style={{ textAlign: 'center' }}><img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/113.png" style={{ width: '800px', height: '450px' }} /></p>
                                            <p>Chọn thức ăn:</p>
                                            <p style={{ textAlign: 'center' }}><img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/114.png" style={{ width: '800px', height: '450px' }} /></p>
                                            <p style={{ textAlign: 'center' }}><u>Bước 5:</u></p>
                                            <p>- Đồng ý.</p>
                                            <p>- Đồng ý&nbsp; các điều khoản</p>
                                            <p>- Chọn loại thẻ thanh toán.</p>
                                            <p>- Thanh toán.</p>
                                            <p style={{ marginLeft: '54pt', textAlign: 'center' }}>&nbsp;</p>
                                            <p style={{ textAlign: 'center' }}>B6:&nbsp;&nbsp;&nbsp; Nhập thông tin tài khoản để thanh toán việc mua online.&nbsp;</p>
                                            <p style={{ textAlign: 'center' }}>HOÀN TẤT</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 2 ? 'active' : ''}
                                onClick={() => handleSetShow(2)}
                            >
                                <div className="ask">
                                    <span className="cycle-num">02</span>
                                    <h3>Thủ tục đặt vé online và phương thức thanh toán như thế nào?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 2 ?{height: 267} : {height: 0}}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p style={{ lineHeight: '22.4px' }}><b>CÁCH ĐẶT VÉ ONLINE:</b></p>
                                            <p style={{ lineHeight: '22.4px' }}><strong>1/</strong>&nbsp;Đặt vé online trên mục MUA VÉ ONLINE&nbsp;ở trang chủ Cinestar Cinema.</p>
                                            <p style={{ lineHeight: '22.4px' }}><strong>2/</strong>&nbsp;Chọn Phim, Rạp, Ngày va&nbsp;Suất chiếu&nbsp;.</p>
                                            <p style={{ lineHeight: '22.4px' }}><strong>3/&nbsp;</strong>Bạn chọn vị trí&nbsp;ghế, nhập thông tin liên hệ.</p>
                                            <p style={{ lineHeight: '22.4px' }}><strong>4/&nbsp;</strong>Bạn&nbsp;chọn&nbsp;phương thức thanh toán.</p>
                                            <p style={{ lineHeight: '22.4px' }}><img alt="" src="https://cinestar.com.vn/pictures/3_hoi dap/mua ve/untitled-3.png" style={{ width: '526px', height: '454px' }} /></p>
                                            <p style={{ lineHeight: '22.4px' }}><strong>5</strong><strong>/</strong>Sau khi hoàn tất thanh toán hệ thống sẽ gửi thông tin vé đến liên hệ của bạn. Vui long xuất thông tin đặt vé khi đến rap.</p>
                                            <p style={{ lineHeight: '22.4px' }}><strong>CHÚC BẠN XEM PHIM VUI VẺ</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 3 ? 'active' : ''}
                                onClick={() => handleSetShow(3)}>
                                <div className="ask">
                                    <span className="cycle-num">03</span>
                                    <h3>Làm sao để được cấp thẻ thành viên?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 3 ?{height: 98} : {height: 0}}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p>Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp Cinestar là đã có thể tạo thẻ C'Friend&nbsp;<span style={{ lineHeight: '1.6em' }}>và thẻ chỉ có giá trị sử dụng từ lần giao dịch sau.</span></p>
                                            <p>khi bạn tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên thẻ C'vip</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 4 ? 'active' : ''}
                                onClick={() => handleSetShow(4)}>
                                <div className="ask">
                                    <span className="cycle-num">04</span>
                                    <h3>Lợi ích khi tham gia thẻ thành viên là gì?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 4 ?{height: 608} : {height: 0}}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p><span style={{ lineHeight: '1.6em' }}>Thẻ thành viên của Cinestar bao gồm 2 hạng mục là C'Friend và C'Vip. Cụ thể quyền lợi như sau</span></p>
                                            <p>Khi điểm của thẻ đạt mức như sau sẽ có thể đổi được phần thưởng tương ứng.&nbsp;</p>
                                            <p>Khi điểm tích lũy của thẻ đạt 10.000 sẽ được nâng cấp lên thẻ&nbsp;C'Vip (Điểm tích lũy&nbsp;= tổng điểm cộng dồn từ trước đến giờ, không phải điểm còn lại của thẻ)</p>
                                            <p><img alt="" src="https://cinestar.com.vn/pictures/moi/2KhuyenMai/1TheThanhVien/mucthuong2.jpg" style={{ width: '1920px', height: '1080px' }} /></p>
                                            <p><strong>Thẻ C’Friend: </strong></p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.</p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tích lũy điểm theo giá trị mua hàng hóa dịch vụ như trên.</p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được giảm 10% trực tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.</p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tặng 1 vé xem phim 2D vào tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật), Điều kiện: tối thiểu có 500 điểm tích lũy</p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tham gia các chương trình dành cho thành viên.</p>
                                            <p><strong>Thẻ C’VIP:</strong></p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được cấp cho thành viên C’Friend khi tích lũy được ít nhất 10,000 điểm.</p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tích lũy điểm theo giá trị mua hàng hóa dịch vụ như trên.</p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được giảm 15% trực tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.</p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được tặng 2 vé xem phim 2D và 1 combo gồm coke 16oz + popcorn 32oz vào tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật).</p>
                                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có cơ hội nhận vé tham gia Lễ Ra Mắt Phim và các chương trình khuyến mãi khác của Cinestar.</p>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 5 ? 'active' : ''}
                                onClick={() => handleSetShow(5)}>
                                <div className="ask">
                                    <span className="cycle-num">05</span>
                                    <h3>Làm sao để biết được số điểm đã tích lũy?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 5 ?{height: 65} : {height: 0}}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p>​<span style={{ fontSize: '12.8px', color: 'rgb(34, 34, 34)', fontFamily: 'arial, sans-serif' }}>Khách hàng&nbsp;có thể hỏi nhân viên&nbsp;lúc sử dụng thẻ thành viên để mua vé hoặc kiểm tra thông tin khách hàng&nbsp;trên website cinestar.com.vn&nbsp;bằng tài khoản online.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 6 ? 'active' : ''}
                                onClick={() => handleSetShow(6)}>
                                <div className="ask">
                                    <span className="cycle-num">06</span>
                                    <h3>Làm thế nào để đăng nhập vào Website khi đã có thẻ C'Friend?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 6 ?{height: 336} : {height: 0}}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p><u><strong style={{ fontStyle: 'italic' }}>ĐỐI VỚI C'FRIEND:</strong></u>&nbsp;Bạn thêm "CF" vào trước mã thẻ</p>
                                            <p><strong>Ví dụ:</strong>&nbsp;Thẻ của bạn là 1013484</p>
                                            <p>Bạn đăng nhập là: CF1013484</p>
                                            <p>Mật khẩu (giống tên đăng nhập): CF1013484</p>
                                            <p>&nbsp;</p>
                                            <p><strong style={{ fontStyle: 'italic' }}><u>ĐỐI VỚI C'VIP:</u>&nbsp;</strong>Bạn thêm "CV" vào trước mã thẻ<em><strong>&nbsp;</strong>&amp; thêm 01 số "0" vào dãy số 0</em></p>
                                            <p><strong>Ví dụ:</strong> Thẻ của bạn là 1001234</p>
                                            <p>Bạn đăng nhập là: CV1<strong>0</strong>001234</p>
                                            <p>Mật khẩu (giống tên đăng nhập): CV1<strong>0</strong>001234</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={activeIndex === 7 ? 'active' : ''}
                                onClick={() => handleSetShow(7)}>
                                <div className="ask">
                                    <span className="cycle-num">07</span>
                                    <h3>Dolby Atmos là gì?</h3>
                                    <span className="st-arrow" />
                                </div>
                                <div className="answer-wrap" style={activeIndex === 7 ?{height: 160} : {height: 0}}>
                                    <div className="answer">
                                        <span className="cycle-num">Trả lời</span>
                                        <div className="answer-detail">
                                            <p>Atmos là một hệ thống âm thanh được phát triển bởi Dolby, về cơ bản, nó thay đổi cách âm thanh được thiết kế cho các bộ phim và thể hiện chúng trong rạp chiếu phim. Với Dolby Atmos, nhà làm phim có thể định vị trí và đưa âm thanh đi khắp nơi trong một rạp hát, thậm chí lên phía trên đầu, đề cao chủ nghĩa hiện thực và tác động từ mỗi cảnh phim đem lại. Atmos dùng một phương pháp tiếp cận dựa trên đối tượng để thiết kế âm thanh, thay vì chỉ bao gồm các kênh âm thanh (channel), trong đó, nhà làm phim được tự do sáng tạo cho âm thanh "bay quanh" khán giả trong không gian 3 chiều (3D).</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*FAQ-WRAP*/}
                {/*FAQ-FORM*/}
                <div className="section-title"><h2>Gửi câu hỏi</h2></div>
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
                                <textarea data-holder="NỘI DUNG (*)" id="comments" name="comments" defaultValue={""} />
                            </div>
                            <div className="input-but">
                                <input id="btn-contact-submit" type="button" defaultValue="Gửi" />
                            </div>
                        </div>
                    </form>
                </div>
                {/*FAQ-FORM*/}
                <div className="bg-cover" style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/3HoiDap/Background/hhv2dyu.jpg)' }} />
            </div>
            {/*FAQ-CONTENT*/}
            {/*PLAYING-MOVIE*/}
            {/* <div className="movie-content on-page">
                <div className="section-title"><h2>Các phim đang chiếu</h2></div>
                <div className="movie-wrap">
                    <div className="movie-slide slide-slidebox" style={{ opacity: 1, display: 'inline-block' }}>
                        <div className="slide-wrapper-outer"><div className="slide-wrapper" style={{ width: '7424px', left: '0px', display: 'block', marginLeft: '0px', transition: 'all 800ms ease 0s', transform: 'translate3d(-464px, 0px, 0px)' }}><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="NHIỆM VỤ CUỐI CÙNG (T13)" src="https://cinestar.com.vn/pictures/Cinestar/08-2023/nhiem-vu-cuoi-cung.jpg" style={{ display: 'block' }} /></div>
                            <div className="movie-txt">
                                <h3>NHIỆM VỤ CUỐI CÙNG (T13)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/2e280d5d-c66e-47ae-881c-04a094b24a56">
                                    <p>The Moon: Nhiệm Vụ Cuối Cùng lấy mốc thời gian giả định vào năm 2029 khi tàu vũ trụ Woori-ho của Hàn Quốc bắt đầu cuộc hành trình tới Mặt trăng. Điều này đã thu hút sự chú ý của thế giới, nhưng một ngọn lửa Mặt trời bùng lên đã nhấn chìm con tàu vũ trụ, chỉ còn lại duy nhất thành viên phi hành đoàn Hwang Sun-woo (Doh Kyung Soo thủ vai) mắc kẹt tại Mặt trăng. Cựu giám đốc chuyến bay của Trung tâm vũ trụ Naro, Kim Jae-gook (Sul Kyung Gu thủ vai) và giám đốc quỹ đạo Mặt trăng của NASA, Yoon Moon-young (Kim Hee Ae thủ vai) đã tham gia vào một trận chiến khốc liệt chống lại các yếu tố ngoài không gian để đưa Sun-woo trở về an toàn.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=LrNdmCiP9ak">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/2e280d5d-c66e-47ae-881c-04a094b24a56">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)" src="https://cinestar.com.vn/pictures/Cinestar/08-2023/tay-dua-cu-phach1.jpg" style={{ display: 'block' }} /></div>
                            <div className="movie-txt">
                                <h3>GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/5b612727-452d-417a-b680-ea5194fa5019">
                                    <p>Nội dung bộ phim dựa trên câu chuyện có thật về Jann Mardenborough, một tay đua nổi tiếng tới từ Anh quốc. Vào năm 2011, anh đã đánh bại 90.000 đối thủ để trở thành nhà vô địch thứ ba, đồng thời là nhà vô địch trẻ tuổi nhất trong giải đấu GT Academy. Phần thưởng của Jann là cơ hội được đại diện cho Nissan tại giải đua Dubai 24-Hour.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=1EQysxQ_iO4">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/5b612727-452d-417a-b680-ea5194fa5019">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="GIA TỘC CHẾT CHÓC (T16)" src="https://cinestar.com.vn/pictures/Cinestar/08-2023/gia-toc-chet-choc.png" style={{ display: 'block' }} /></div>
                            <div className="movie-txt">
                                <h3>GIA TỘC CHẾT CHÓC (T16)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/452d6f89-0dcb-42b2-acb6-75d27338eb9b">
                                    <p>Sau khi ly hôn, Liza bị bỏ lại với hai đứa con. Không lâu sau đó, cô gặp một người phụ nữ xưng là họ hàng của cô. Bà nói rằng gia đình họ có một lời nguyền gia tộc và các cậu con trai của Liza đang gặp nguy hiểm tính mạng. Liza từ chối tin vào những nỗi sợ mê tín, nhưng sau khi những linh ảnh kỳ lạ bắt đầu xuất hiện, Liza biết những lời cảnh báo là thật.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=K1m2pmtqr2Q">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/452d6f89-0dcb-42b2-acb6-75d27338eb9b">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="3DCG! SHIN – CẬU BÉ BÚT CHÌ 2D PĐ: ĐẠI CHIẾN SIÊU NĂNG LỰC ~ SUSHI BAY ~" src="https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg" style={{ display: 'block' }} /></div>
                            <div className="movie-txt">
                                <h3>3DCG! SHIN – CẬU BÉ BÚT CHÌ 2D PĐ: ĐẠI CHIẾN SIÊU NĂNG LỰC ~ SUSHI BAY ~</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/a0f28ba1-dbaa-4012-9a05-cfd25dc60684">
                                    <p>3DCG! Shin - Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~ Sushi Bay ~. Xoay quanh câu chuyện về hai nguồn sáng đặc biệt từ vũ trụ mang theo siêu năng lực đặc biệt tới Trái Đất. Một nguồn sáng tích cực “nhập” vào nhóc Shin, khiến cặp mông núng nính của cậu trở nên nóng bỏng và có khả năng điều khiển những đồ vật xung quanh theo ý muốn. Một thanh niên trẻ khác tên Mitsuru Hiriya cũng nhận được siêu năng lực này. Đồng thời, một nhà khoa học xấu xa khác nhăm nhe ý định lợi dụng siêu năng lực của Hiriya để trở thành bá chủ.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=OIQwmMCmvMI">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/a0f28ba1-dbaa-4012-9a05-cfd25dc60684">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="FINNICK 2D LT (P): NGÔI NHÀ QUÁI VẬT" src="https://cinestar.com.vn/pictures/Cinestar/08-2023/ngoi-nha-quai-vat.jpg" style={{ display: 'block' }} /></div>
                            <div className="movie-txt">
                                <h3>FINNICK 2D LT (P): NGÔI NHÀ QUÁI VẬT</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/e8650c68-8952-461f-b187-1117e4665c2f">
                                    <p>Finnick là một người dường như không quan tâm đến việc kiếm tiền từ ngôi nhà của mình. Mọi thứ thay đổi khi một gia đình mới đến nhà anh ấy và những mánh khóe của Finnick hoàn toàn không hiệu quả. Anh gặp Christine và những sự kiện không thể giải thích được bắt đầu xảy ra trong thành phố. Finnick và Christine sẽ phải hợp tác và làm việc cùng nhau để giải quyết bí ẩn của các sự kiện và cứu thành phố. Kết thúc hành trình đó liệu cô bé Christine và yêu tinh Finnick có đem lại sự hòa bình cho ngôi làng và ‘một bí ẩn khác’ của Finnick có được phát hiện hay không?</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=Sm46GfOUeWE">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/e8650c68-8952-461f-b187-1117e4665c2f">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg" /></div>
                            <div className="movie-txt">
                                <h3>3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/a0d22936-c3ea-4906-b105-f6e414001660">
                                    <p>3DCG! Shin Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~Sushi Bay~ xoay quanh câu chuyện về hai nguồn sáng đặc biệt từ vũ trụ mang theo siêu năng lực đặc biệt tới Trái Đất. Một nguồn sáng tích cực “nhập” vào nhóc Shin, khiến cặp mông núng nính của cậu chàng trở nên nóng bỏng và có khả năng điều khiển những đồ vật xung quanh theo ý muốn.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=OIQwmMCmvMI">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/a0d22936-c3ea-4906-b105-f6e414001660">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="KẺ ẨN DANH (T18)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/08-2023/ke-an-danh-poster.jpg" /></div>
                            <div className="movie-txt">
                                <h3>KẺ ẨN DANH (T18)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/18a2c270-002e-4946-a721-05cf8dc304d8">
                                    <p>Chuyện kể về Lâm - người đàn ông chân chất có quá khứ bí mật, luôn đặt vợ con và hạnh phúc gia đình lên hàng đầu. Thế nhưng, cuộc sống yên bình của gia đình anh bỗng chốc bị đảo lộn. Lúc này, Lâm phải bảo vệ những điều mà anh yêu thương bằng mọi giá.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=FrboQpjzNwE">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/18a2c270-002e-4946-a721-05cf8dc304d8">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="ĐỊA ĐÀNG SỤP ĐỔ (T16)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/09-2023/dia-dang-sup-do.jpg" /></div>
                            <div className="movie-txt">
                                <h3>ĐỊA ĐÀNG SỤP ĐỔ (T16)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/da4582f2-64af-42ca-91b3-4b23c29440ad">
                                    <p>Sau trận động đất dữ dội, ở trung tâm Seoul chỉ còn lại một tòa nhà chung cư có thể đứng vững, được gọi là Khu căn hộ Hwang Gung. Thời gian trôi qua, những người bên ngoài bắt đầu đến đây để cố gắng thoát khỏi cái lạnh khắc nghiệt. Chẳng bao lâu, cư dân chung cư không thể đối phó với số lượng ngày càng tăng và khi cảm thấy mối đe dọa đối với sự sống còn của mình, họ quyết định ban hành một biện pháp đặc biệt</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/da4582f2-64af-42ca-91b3-4b23c29440ad">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="HÀM TỬ THẦN (T18)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/08-2023/ham-tu-than.png" /></div>
                            <div className="movie-txt">
                                <h3>HÀM TỬ THẦN (T18)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/6e5c0efe-6afa-42b1-9bb6-10c16872d5ec">
                                    <p>Trên chuyến hành trình xuyên biển đoàn tụ gia đình, một cơn bão buộc Naomi rời khỏi lộ trình và vướng vào phi vụ nguy hiểm dưới lòng đại dương. Nhiệm vụ khó thành, hàm tử thần chực chờ nuốt chửng, liệu Naomi có thể thoát khỏi biển máu!?</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/6e5c0efe-6afa-42b1-9bb6-10c16872d5ec">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="BỘ ĐÔI BÁO THỦ (T16)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/09-2023/bo-doi-bao-thu1.jpg" /></div>
                            <div className="movie-txt">
                                <h3>BỘ ĐÔI BÁO THỦ (T16)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/af6013dc-5e12-4f92-8ac9-5ee43f92f96f">
                                    <p>Bộ Đôi Báo Thủ xoay quanh hành trình giải cứu một đồng nghiệp bị mất tích ở Lebanon 20 tháng trước của nhà ngoại giao Min-jun (Ha Jung-woo). Là một nhiệm vụ không chính thức rất nguy hiểm, nhưng Min-jun vẫn chấp nhận bởi anh khao khát được thăng chức tới Mỹ sau 5 năm chôn chân tại Vụ Trung Đông, Bộ Ngoại giao. Ngay khi đặt chân xuống sân bay Lebanon, Min-jun đã bị truy đuổi ráo riết bởi cảnh sát địa phương và cả bọn xã hội đen, khiến anh bất đắc dĩ phải dựa vào sự giúp đỡ của người Hàn Quốc duy nhất tại đây - tài xế Pan-su (Ju Ji-hoon).</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=6IROx_piOyI">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/af6013dc-5e12-4f92-8ac9-5ee43f92f96f">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="TÌNH BẠN DIỆU KỲ 2D PĐ (P)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" /></div>
                            <div className="movie-txt">
                                <h3>TÌNH BẠN DIỆU KỲ 2D PĐ (P)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/3cc20272-cf83-42d0-9445-03ce95683632">
                                    <p>Một cuộc phiêu lưu kỳ thú tại thành phố New York hoa lệ của chú rối bỏ trốn với trí tưởng tượng vô biên - Don và món đồ chơi thú nhồi bông bị bỏ rơi - DJ Doggy Dog tại Công viên Trung tâm. Trải qua bao buồn vui, thăng trầm, cuộc phiêu lưu này đã gắn kết hai mảnh đời dường như chẳng liên quan đến nhau ấy, tạo nên một câu chuyện đẹp về tình bạn.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=pOx2vKVRosw">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/3cc20272-cf83-42d0-9445-03ce95683632">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="THIỆN ÁC ĐỐI ĐẦU 3 (T18)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/09-2023/thien-ac-doi-dau-3.jpg" /></div>
                            <div className="movie-txt">
                                <h3>THIỆN ÁC ĐỐI ĐẦU 3 (T18)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/a525bf6a-e9b9-4044-8a89-5b167f96650c">
                                    <p>Robert McCall chuyển đến sinh sống tại miền Nam nước Ý nhưng phát hiện ra bạn bè của mình bị một tổ chức mafia ở địa phương kiểm soát. Khi tính mạng của họ bị đe dọa, ông buộc phải quay trở lại con đường sát thủ để bảo vệ bạn bè.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=MsRtQstxXwY">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/a525bf6a-e9b9-4044-8a89-5b167f96650c">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="BẾN PHÀ XÁC SỐNG (T16)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/09-2023/ben-pha-xac-song1.jpg" /></div>
                            <div className="movie-txt">
                                <h3>BẾN PHÀ XÁC SỐNG (T16)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/cbdba331-5e8b-488d-9c15-e69c8aeb0279">
                                    <p>Nội dung “Bến Phà Xác Sống” xoay quanh cuộc chạy trốn của nhóm người của Công (Huỳnh Đông) khỏi sự bùng phát của dịch bệnh và cố gắng chạy đến chuyến phà cuối cùng ở vùng hạ lưu sông Mekong. Thế nhưng, trong quá trình chạy trốn, họ một lần thất lạc khi xuất hiện sự biến chất và phá bĩnh của Diễm (Ốc Thanh Vân) khiến nhóm người buộc phải tách ra. Và cuộc tấn công của Zombie đổ bộ cù lao, đối mặt giữa sống và chết, các nhân vật nhận ra không phải dịch bệnh, chính sự tồn tại của tính ích kỷ và oán hận mới là thứ đẩy họ vào những thử thách sống còn.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=FY81I9lih48">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/cbdba331-5e8b-488d-9c15-e69c8aeb0279">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="TÌNH BẠN DIỆU KỲ 2D LT (P)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" /></div>
                            <div className="movie-txt">
                                <h3>TÌNH BẠN DIỆU KỲ 2D LT (P)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/50982e83-0bb1-4c1d-a030-5761e5e9a65c">
                                    <p>Một cuộc phiêu lưu kỳ thú tại thành phố New York hoa lệ của chú rối bỏ trốn với trí tưởng tượng vô biên - Don và món đồ chơi thú nhồi bông bị bỏ rơi - DJ Doggy Dog tại Công viên Trung tâm. Trải qua bao buồn vui, thăng trầm, cuộc phiêu lưu này đã gắn kết hai mảnh đời dường như chẳng liên quan đến nhau ấy, tạo nên một câu chuyện đẹp về tình bạn.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=pOx2vKVRosw">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/50982e83-0bb1-4c1d-a030-5761e5e9a65c">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="CHẠM VÀO HẠNH PHÚC (K)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/09-2023/cham-vao-cam-xuc.jpg" /></div>
                            <div className="movie-txt">
                                <h3>CHẠM VÀO HẠNH PHÚC (K)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/6594de8a-d72d-449a-8d5f-9f08ba8cee56">
                                    <p>Chạm Vào Hạnh Phúc là bộ phim điện ảnh Việt Nam nói về cuộc hành trình tìm kiếm hạnh phúc của cuộc sống, tình yêu và khát vọng, khai thác những tình cảm gia đình đầy ý nghĩa. Cùng xem lịch chiếu Chạm Vào Hạnh Phúc mới nhất, giá vé Chạm Vào Hạnh Phúc chi tiết tại rạp. Review phim và mua vé xem phim Chạm Vào Hạnh Phúc tại các Rạp Chiếu Phim.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/6594de8a-d72d-449a-8d5f-9f08ba8cee56">Mua vé</a>
                            </div>
                        </div></div><div className="slide-item" style={{ width: '232px' }}><div className="movie-item n_2d">
                            <div className="movie-pic"><img className="lazyload" alt="ÁC QUỶ MA SƠ 2 (T18)" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/09-2023/the-nun-ii.jpg" /></div>
                            <div className="movie-txt">
                                <h3>ÁC QUỶ MA SƠ 2 (T18)</h3>
                            </div>
                            <div className="movie-over">
                                <a href="https://cinestar.com.vn/phim/d8b730d2-b30a-4127-aae3-096aec822f33">
                                    <p>Bốn năm sau sự kiện tại tu viện St. Carta, sơ Irene trở lại một lần nữa để đối mặt với thế lực hắc ám của ác quỷ ma sơ Valak.</p><span className="atc">...</span>
                                    <span className="detail-link">Chi tiết</span>
                                </a>
                                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=2_e-ECI-9EA">Xem trailer</a>
                                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/d8b730d2-b30a-4127-aae3-096aec822f33">Mua vé</a>
                            </div>
                        </div></div></div></div>
                        <div className="slide-controls clickable"><div className="slide-pagination"><div className="slide-page active"><span className /></div><div className="slide-page"><span className /></div><div className="slide-page"><span className /></div><div className="slide-page"><span className /></div></div><div className="slide-buttons"><div className="slide-prev">prev</div><div className="slide-next">next</div></div></div></div>                  </div>
            </div> */}
            {/*PLAYING-MOVIE*/}
        </div>
    )
}

export default ContentPage