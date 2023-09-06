import React from 'react'

function Home() {
    return (
        <div>
            {/*LOAD-PAGE*/}
            <div className="all-pics" />
            <div className="all-album" />
            <div className="allvideo" />
            <div className="overlay-album" />
            <div className="overlay-video" />
            <div className="overlay-dark" />
            {/*LOAD-PAGE*/}
            {/*POPUP*/}
            {/* <div class="popup-pics">
    <div class="close-popup"></div>
	
    <img style="cursor: pointer; max-width: 600px;" data-href="https://cinestar.com.vn/lichchieu" src="https://cinestar.com.vn/pictures/popup/popup-18-26.jpg" alt="popup">
    </div> */}
            {/*POPUP*/}
            <div className="nav-click" style={{ display: 'none', opacity: 0 }} />
            {/*HEAD*/}
            <div className="header">
                <div className="logo-mb" style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }} />
                <div className="top">
                    <div style={{ display: 'none' }} className="user-peoplexx"><a href="user-detail.html" id="user_01">xem thông tin</a> Hi: <span>New member !</span></div>
                    {/*//logo-part//*/}
                    <div className="logo" style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }} />
                    {/*//logo-part//*/}
                    {/*//facilities-part//*/}
                    <div className="facilities-nav">
                        {/*search*/}
                        <div className="search-form">
                            <div className="form-row-search">
                                <form onsubmit="return false;" action id="search" method="get">
                                    <input id="qsearch" type="text" className="search-field" defaultValue="Tìm kiếm..." />
                                    <input id="defaultvalue" type="hidden" className="search-field" defaultValue="Tìm kiếm..." />
                                    <input type="hidden" id="href_search" defaultValue />
                                </form>
                            </div>
                            <a href="javascript:void(0);" className="search">Search</a>
                        </div>
                        {/*search*/}
                        {/*laguage*/}
                        <form style={{ display: 'inline' }} id="change_lang" encType="multipart/form-data" method="post" action="https://cinestar.com.vn/index.php?route=common/home">
                            <a style={{ textTransform: 'uppercase' }} className="language show" href="javascript:void(0);" onclick="$('input[name=\'language_code\']').attr('value', 'en').submit(); $('#change_lang').submit(); return false;">en</a>
                            <input type="hidden" defaultValue name="language_code" />
                            <input id="changlanguage_redirect" type="hidden" defaultValue="https://cinestar.com.vn/" name="redirect" />
                        </form>
                        {/*laguage*/}
                    </div>
                    {/*//facilities-part//*/}
                    {/*menu*/}
                    <div className="navigation" style={{ height: 'auto' }}>
                        <a className="link-home current" href="https://cinestar.com.vn/"><h1>Trang chủ</h1></a>
                        <div className="nav">
                            <ul>
                                <li><a data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất" data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." href="https://cinestar.com.vn/phim"><h1>Phim</h1></a></li>
                                <li><a data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất" data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." href="https://cinestar.com.vn/lichchieu"><h1>Lịch chiếu</h1></a></li>
                                <li><a data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất" data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." href="https://cinestar.com.vn/rapvagia"><h1>Rạp và giá</h1></a></li>
                                <li><a data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất" data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." href="https://cinestar.com.vn/khuyenmai"><h1>Khuyến mãi</h1></a></li>
                                <li><a data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất" data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." href="https://cinestar.com.vn/hoivadap"><h1>Hỏi và đáp</h1></a></li>
                                <li><a data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất" data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." href="https://cinestar.com.vn/tintuc"><h1>Tin tức</h1></a></li>
                                <li><a data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất" data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." href="https://cinestar.com.vn/gioithieu"><h1>Giới thiệu</h1></a></li>
                                <li><a data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất" data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar." href="https://cinestar.com.vn/lienhe"><h1>Liên hệ</h1></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*menu*/}
                </div>
            </div>    {/*HEAD*/}
            {/*CONTAINER*/}
            <div className="container" style={{ minHeight: '302px', opacity: 1 }}>
                <div className="container-bg">
                    <div className="scroll-down-desktop" style={{ top: '470.016px' }}>scroll down</div>
                    {/*USER-SECTION*/}
                    <div className="register-content">
                        <div className="register-wrap">
                            {/*//user-nav//*/}
                            <ul>
                                <li className="btn-register"><a data-tmp="Thông tin thành viên" href="javascript:void(0);">Đăng ký thành viên</a></li>
                                <li className="btn-login"><a data-tmp="Đăng xuất" href="javascript:void(0);">Đăng nhập</a></li>
                            </ul>
                            <a className="hotline" href="tel:028 7300 8881">028 7300 8881</a>
                            {/*//user-nav//*/}
                            {/*//user-form//*/}
                            <div className="block-user">
                                {/*register-tab*/}
                                <div className="tab-register" style={{ top: 'auto', left: '-139.6px', marginLeft: 'auto' }}>
                                    <div className="user-form register">
                                        <div className="icon-arrow" style={{ left: '295.6px' }} />
                                        <h3 className="user-title">Vui lòng nhập thông tin</h3>
                                        <form id="register-top">
                                            <div className="require-col">
                                                <label className="gender"><input type="radio" name="gender" defaultValue={1} /><span className="gender-name">Nam</span><span className="gender-shape" /></label>
                                                <label className="gender"><input type="radio" name="gender" defaultValue={0} /><span className="gender-name">Nữ</span><span className="gender-shape" /></label>
                                            </div>
                                            <div className="require-col">
                                                <div className="input-text name">
                                                    <span className="focus-text">HỌ TÊN (*)</span>
                                                    <input id="member_name" name="name" type="text" defaultValue />
                                                </div>
                                                <div className="input-text birth">
                                                    <span className="focus-text">DD/MM/YYYY ( Ngày sinh*)</span>
                                                    <input id="member_birthday" name="birthday" type="text" defaultValue />
                                                </div>
                                                <div className="input-text address">
                                                    <span className="focus-text">ĐỊA CHỈ (*)</span>
                                                    <input id="member_address" name="address" type="text" defaultValue />
                                                </div>
                                                <div className="input-text code">
                                                    <span className="focus-text">SỐ CMNN/BẰNG LÁI (*)</span>
                                                    <input id="member_cmnn" name="cmnn" type="text" defaultValue />
                                                </div>
                                                <div className="input-text tel">
                                                    <span className="focus-text">ĐIỆN THOẠI (*)</span>
                                                    <input id="member_phone" name="phone" type="text" defaultValue />
                                                </div>
                                                <div className="input-text email">
                                                    <span className="focus-text">EMAIL (*)</span>
                                                    <input id="member_email" name="email" type="text" defaultValue />
                                                </div>
                                                <div className="input-text username">
                                                    <span className="focus-text">TÊN ĐĂNG NHẬP (*)</span>
                                                    <input id="member_username" name="username" type="text" defaultValue />
                                                </div>
                                                <div className="input-text password">
                                                    <span className="focus-text">MẬT KHẨU (*)</span>
                                                    <input id="member_password" name="password" type="password" defaultValue />
                                                </div>
                                                <div className="input-text confirmpass">
                                                    <span className="focus-text">NHẬP LẠI MẬT KHẨU (*)</span>
                                                    <input id="member_password_confirm" name="password_confirm" type="password" defaultValue />
                                                </div>
                                                <div className="terms_condition_paypal" style={{ color: '#666' }}>
                                                    <div>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'center' }}><strong>CHÍNH SÁCH BẢO MẬT THÔNG TIN</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>1. TỔNG QUAN VỀ CHÍNH SÁCH BẢO MẬT</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>CINESTAR hiểu rằng Khách Hàng quan tâm đến việc dữ liệu cá nhân của Khách Hàng sẽ được sử dụng và chia sẻ như thế nào. CINESTAR rất coi trọng sự tin tưởng của Khách Hàng, vì vậy CINESTAR sẽ sử dụng những dữ liệu mà Khách Hàng cung cấp một cách cẩn thận và hợp lý, phù hợp với quy định của pháp luật.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Website: www.cinestar.com.vn thuộc quyền sở hữu của Công ty Cổ phần Giải trí – Phát hành phim – Rạp chiếu phim Ngôi Sao (CINESTAR), địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM. Website này được quản lý điều hành bởi CINESTAR. Website này được sử dụng cho các hoạt động của CINESTAR, các chi nhánh trực thuộc, các công ty thành viên và các tổ chức liên quan (được gọi là CINESTAR trong văn bản này).</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>CINESTAR cam kết tôn trọng quyền riêng tư và những vấn đề cá nhân của tất cả Khách Hàng trên website của CINESTAR (sau đây gọi là "Website”). CINESTAR nhận thức được tầm quan trọng của các dữ liệu cá nhân mà Khách Hàng đã cung cấp cho CINESTAR và tin rằng trách nhiệm của CINESTAR là quản lý đúng cách, bảo vệ và xử lý dữ liệu cá nhân của Khách Hàng.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Chính Sách Bảo Mật Dữ Liệu Cá Nhân (sau đây gọi tắt là "Chính Sách Bảo Mật" hay "Chính Sách") được tạo ra nhằm cung cấp các thông tin tổng quát về việc CINESTAR sẽ xử lý dữ liệu cá nhân bao gồm việc: thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có liên quan mà Khách Hàng đã cung cấp cho CINESTAR khi tham gia truy cập, giao dịch trên Website của CINESTAR như thế nào, cho dù ở hiện tại hay trong tương lai; cũng như cách mà CINESTAR sẽ hỗ trợ Khách Hàng trước khi đưa ra bất cứ quyết định nào liên quan đến việc cung cấp dữ liệu cá nhân của Khách Hàng cho CINESTAR.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>"Dữ liệu cá nhân" là các thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể. Dữ liệu cá nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá nhân của Khách Hàng sau đây được gọi chung là “Thông Tin Khách Hàng”.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Bằng cách sử dụng dịch vụ, đăng ký tài khoản với CINESTAR, ghé thăm Website của CINESTAR, hoặc truy cập vào dịch vụ, thực hiện giao dịch trên Website của CINESTAR hoặc các sản phẩm liên quan của CINESTAR và đánh dấu vào ô đồng ý với nội dung Chính Sách được hiểu là Khách Hàng đã được đọc, hiểu, thừa nhận và đồng ý các yêu cầu, và/hoặc các Chính Sách, thực tiễn áp dụng nêu trong Chính Sách Bảo Mật này (kể cả các phiên bản sửa đổi, bổ sung của Chính Sách), và Khách Hàng đồng ý với CINESTAR về việc xử lý dữ liệu cá nhân của Khách Hàng theo cách được mô tả trong tài liệu này.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Nếu Khách Hàng không đồng ý với Chính Sách Bảo Mật này, vui lòng không sử dụng dịch vụ của CINESTAR hoặc truy cập Website của CINESTAR. Nếu CINESTAR thay đổi Chính Sách Bảo Mật, CINESTAR sẽ cập nhật thay đổi hoặc sửa đổi đó trên Website của CINESTAR. Phiên bản sửa đổi, bổ sung Chính Sách này (nếu có) sẽ có hiệu lực kể từ ngày việc sửa đổi, bổ sung Chính Sách được đăng tải, thông báo trên Website. CINESTAR bảo lưu quyền sửa đổi Chính Sách Bảo Mật này vào bất cứ lúc nào.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>CINESTAR kính mong Khách Hàng vui lòng đọc Chính Sách Bảo Mật một cách cẩn thận. Nếu Khách Hàng có bất kỳ câu hỏi liên quan đến các thông tin này hoặc thực tiễn bảo mật của CINESTAR, xin vui lòng liên hệ với CINESTAR theo thông tin ở phần cuối của Chính Sách Bảo Mật này.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>2. PHẠM VI XỬ LÝ THÔNG TIN</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Thông tin do Khách Hàng cung cấp: CINESTAR thu thập tất cả những thông tin, dữ liệu cá nhân (“Thông Tin Khách Hàng”) mà Khách Hàng đăng tải hoặc các thao tác mà Khách Hàng thực hiện trên Website của CINESTAR.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Dữ liệu cá nhân được thu thập trong phạm vi thực hiện Chính Sách này là “Dữ liệu cá nhân cơ bản” bao gồm 09 thông tin cá nhân được liệt kê sau đây:</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>1. Họ và tên;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>2. Ngày, tháng, năm sinh;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>3. Giới tính</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>4. Địa chỉ cư trú;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>5. Số điện thoại;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>6. Số chứng minh nhân dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>7. Thông tin về tài khoản số thanh toán của cá nhân; và</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>8. Địa chỉ email.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng cam kết cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý với Chính Sách Bảo Mật này. Trong trường hợp (các) dữ liệu được cung cấp không chính xác thì Khách Hàng tự chịu trách nhiệm đối với mọi thiệt hại phát sinh cho CINESTAR và/hoặc bên thứ ba bất kỳ và tự chịu trách nhiệm trước pháp luật.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><u>Lưu ý:</u> Khách Hàng là người dưới 16 tuổi chỉ được đánh dấu vào ô đồng ý sau khi được sự đồng ý của cha, mẹ hoặc người giám hộ hợp pháp. Bằng việc đánh dấu vào ô đồng ý, CINESTAR được hiểu rằng Khách Hàng và người người giám hộ hợp pháp của mình đã đồng ý với Chính Sách Bảo Mật này và do đó CINESTAR được quyền miễn trừ mọi hậu quả pháp lý phát sinh (nếu có) trong trường hợp phát hiện có sự gian dối, không trung thực từ phía Khách Hàng tại mục này.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>3. MỤC ĐÍCH XỬ LÝ THÔNG TIN</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Mục đích thu thập, xử lý Thông Tin Khách Hàng bao gồm các hoạt động sau đây:</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>1. Cung cấp các dịch vụ, sản phẩm theo nhu cầu của Khách Hàng;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>2. Liên hệ xác nhận khi Khách Hàng đăng ký sử dụng dịch vụ, xác lập giao dịch trên Website;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>3. Thực hiện việc quản lý Website, gửi thông tin cập nhật về Website, các chương trình khuyến mại, ưu đãi/tri ân tới Khách Hàng;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>4. Bảo đảm quyền lợi của Khách Hàng khi phát hiện các hành động giả mạo, phá hoại tài khoản, lừa đảo Khách Hàng;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>5. Liên lạc, hỗ trợ, giải quyết với Khách Hàng trong các trường hợp đặc biệt.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>CINESTAR chỉ sử dụng Thông Tin Khách Hàng cho các mục đích nêu trên hoặc mục đích khác (nếu có) với điều kiện đã thông báo và được sự đồng ý của Khách Hàng.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng hiểu và đồng ý rằng CINESTAR có nghĩa vụ phải cung cấp Thông Tin Khách Hàng theo yêu cầu/quyết định của Cơ quan nhà nước có thẩm quyền và/hoặc quy định pháp luật. CINESTAR sẽ được miễn trừ mọi trách nhiệm liên quan đến bảo mật thông tin trong trường hợp này.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Để tránh nghi ngờ, trong quá trình giao dịch thanh toán tại Website, CINESTAR chỉ lưu giữ thông tin chi tiết về đơn hàng đã thanh toán của khách hàng, các thông tin về tài khoản ngân hàng của khách hàng sẽ không được lưu giữ.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>4. LƯU GIỮ VÀ BẢO MẬT THÔNG TIN</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>- Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa Khách Hàng và CINESTAR, đều được lưu giữ và bảo mật bởi hệ thống của CINESTAR.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>- CINESTAR sẽ lưu trữ Thông Tin Khách Hàng theo quy định pháp luật hiện hành. Nếu Khách Hàng ngừng sử dụng Website, hoặc việc cho phép Khách Hàng sử dụng Website và/hoặc các dịch vụ bị chấm dứt, CINESTAR có thể tiếp tục lưu trữ, sử dụng và/hoặc tiết lộ Thông Tin Khách Hàng phù hợp với Chính Sách Bảo Mật và nghĩa vụ của CINESTAR theo quy định của pháp luật.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>- Khách Hàng tuyệt đối không được có bất kỳ hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay đổi cấu trúc dữ liệu của CINESTAR, cũng như bất kỳ hành vi nào khác nhằm phát tán, cổ vũ cho các hoạt động với mục đích can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống CINESTAR, cũng như các các hành vi mà pháp luật Việt Nam nghiêm cấm. Trong trường hợp CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán các thông tin trái phép,… CINESTAR có quyền chuyển Thông Tin Khách Hàng theo yêu cầu của cơ quan có thẩm quyền để xử lý theo quy định pháp luật.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>5. THỜI GIAN LƯU TRỮ THÔNG TIN</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Thông Tin Khách Hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện đóng tài khoản. Đối với các tài khoản đã đóng, CINESTAR vẫn lưu trữ Thông Tin Khách Hàng và truy cập của Khách Hàng để phục vụ cho mục đích phòng chống gian lận, điều tra, giải đáp thắc mắc ...</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Các thông tin này sẽ được CINESTAR lưu trữ trong hệ thống máy chủ tối đa mười hai (12) tháng kể từ ngày Khách Hàng đóng tài khoản trên CINESTAR. Sau khi thời hạn này kết thúc, CINESTAR có thể tiến hành xóa vĩnh viễn thông tin cá nhân của Khách Hàng.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>6. TỔ CHỨC, CÁ NHÂN ĐƯỢC XỬ LÝ THÔNG TIN</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>CINESTAR và các công ty thành viên, các chi nhánh của mình sẽ thực hiện xử lý dữ liệu thông tin cá nhân của Khách Hàng theo các mục nêu trên. CINESTAR không cung cấp Thông Tin Khách Hàng cho bất kỳ bên thứ ba nào khác trừ các trường hợp ngoại lệ không cần sự đồng ý của Khách Hàng theo quy định của pháp luật.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Các tổ chức, cá nhân được liệt kê sau đây có thể được xử lý dữ liệu cá nhân sau khi được sự đồng ý của Khách Hàng:</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>- Nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên thứ ba khác mà CINESTAR sử dụng để hỗ trợ hoạt động kinh doanh của CINESTAR</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>- Các đối tác có ký kết thỏa thuận liên kết chăm sóc khách hàng với CINESTAR. Việc chia sẻ này giúp CINESTAR có thể cung cấp cho Khách Hàng các thông tin về các sản phẩm và dịch vụ, liên quan đến hàng hóa, dịch vụ và vấn đề khác mà Khách Hàng có thể quan tâm. Trong trường hợp các chi nhánh, công ty thành viên của CINESTAR và các công ty liên kết của CINESTAR được cấp quyền truy cập Thông Tin Khách Hàng, họ sẽ phải tuân thủ nghiêm ngặt các quy định được mô tả trong Chính Sách Bảo Mật này.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>- Các bên thứ ba là đối tác, đại lý của CINESTAR: CINESTAR có thể chuyển Thông Tin Khách Hàng cho các đại lý và nhà thầu phụ để làm phân tích dữ liệu, tiếp thị, quảng cáo và hỗ trợ dịch vụ khách hàng.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>- Các đơn vị kinh doanh khác mà CINESTAR có kế hoạch sáp nhập hoặc mua lại: Trong trường hợp này, CINESTAR sẽ yêu cầu những đơn vị đó tuân thủ nghiêm ngặt theo Chính Sách Bảo Mật này.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Chính Sách Bảo Mật này không phải là một lời hứa rằng dữ liệu cá nhân của Khách Hàng sẽ không bao giờ được tiết lộ, ngoại trừ như được mô tả trong Chính Sách Bảo Mật này.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>7. QUYỀN VÀ NGHĨA VỤ CỦA KHÁCH HÀNG</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Trừ trường hợp pháp luật có quy định khác, quyền và nghĩa vụ của Khách Hàng đối với dữ liệu cá nhân được quy định chi tiết như sau:</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>A. Quyền của Khách Hàng</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>1. Quyền được biết</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng được biết về hoạt động xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>2. Quyền đồng ý</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của mình, trừ trường hợp pháp luật cho phép CINESTAR xử lý mà không cần có sự đồng ý của Khách Hàng.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>3. Quyền truy cập</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng được truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>4. Quyền rút lại sự đồng ý</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng được quyền rút lại sự đồng ý của mình, trừ trường hợp luật có quy định khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>5. Quyền xóa dữ liệu</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng được xóa hoặc yêu cầu xóa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>6. Quyền hạn chế xử lý dữ liệu</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>a) Khách Hàng được yêu cầu hạn chế xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>b) Việc hạn chế xử lý dữ liệu được thực hiện trong 72 giờ sau khi có yêu cầu của Khách Hàng, với toàn bộ dữ liệu cá nhân mà chủ thể dữ liệu yêu cầu hạn chế, trừ trường hợp luật có quy định khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>7. Quyền cung cấp dữ liệu</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng được yêu cầu CINESTAR và các bên liên quan cung cấp cho bản thân dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>8. Quyền phản đối xử lý dữ liệu</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>a) Khách Hàng được phản đối CINESTAR và các bên liên quan nhằm ngăn chặn hoặc hạn chế tiết lộ dữ liệu cá nhân hoặc sử dụng cho mục đích quảng cáo, tiếp thị, trừ trường hợp luật có quy định khác;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>b) CINESTAR và các bên liên quan thực hiện yêu cầu của Khách Hàng trong 72 giờ sau khi nhận được yêu cầu, trừ trường hợp luật có quy định khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>9. Quyền khiếu nại, tố cáo, khởi kiện</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>10. Quyền yêu cầu bồi thường thiệt hại</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng có quyền yêu cầu bồi thường thiệt hại theo quy định của pháp luật khi xảy ra vi phạm quy định về bảo vệ dữ liệu cá nhân của mình, trừ trường hợp các bên có thỏa thuận khác hoặc luật có quy định khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>11. Quyền tự bảo vệ</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự, luật khác có liên quan, hoặc yêu cầu cơ quan, tổ chức có thẩm quyền thực hiện các phương thức bảo vệ quyền dân sự theo quy định tại Điều 11 Bộ luật Dân sự.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>B. Nghĩa vụ của Khách Hàng</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>1. Tự bảo vệ dữ liệu cá nhân của mình; yêu cầu các tổ chức, cá nhân khác có liên quan bảo vệ dữ liệu cá nhân của mình.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>2. Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>3. Cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý cho phép xử lý dữ liệu cá nhân.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>4. Tham gia tuyên truyền, phổ biến kỹ năng bảo vệ dữ liệu cá nhân.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>5. Thực hiện quy định của pháp luật về bảo vệ dữ liệu cá nhân và tham gia phòng, chống các hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>8. THÔNG BÁO VÀ SỬA ĐỔI</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Do CINESTAR liên tục cải thiện dịch vụ và sản phẩm để phục vụ Khách Hàng tốt hơn, nên Chính Sách Bảo Mật, Điều Kiện và Điều Khoản Giao Dịch, Quy Định Chung sẽ thường xuyên được thay đổi và cập nhật. CINESTAR có thể đăng tải trên Website hoặc có thể gửi email thông báo cho Khách Hàng về những thay đổi trong những chính sách của CINESTAR. Tuy nhiên, CINESTAR cũng khuyến khích Khách Hàng thường xuyên theo dõi trên Website để cập nhật những thay đổi trong chính sách của CINESTAR. Trừ trường hợp có văn bản với nội dung khác, Chính Sách Bảo Mật hiện tại của CINESTAR được áp dụng cho tất cả những thông tin mà CINESTAR có trong phạm vi xử lý Thông Tin Khách Hàng.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>9. CAM KẾT CHUNG</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Mọi thông tin cá nhân của Khách Hàng thu thập được từ Website sẽ được lưu giữ an toàn, chỉ có Khách Hàng mới có thể truy cập vào tài khoản cá nhân của mình bằng tên đăng nhập và mật khẩu do Khách Hàng chọn.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>CINESTAR cam kết bảo mật thông tin, không chia sẻ, tiết lộ, chuyển giao Thông Tin Khách Hàng, thông tin giao dịch trực tuyến trên Website cho bất kỳ bên thứ ba nào khi chưa được sự đồng ý của Khách Hàng, trừ các trường hợp pháp luật cho phép CINESTAR xử lý thông tin mà không cần đến sự đồng ý của Khách Hàng.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>CINESTAR, bằng nỗ lực tốt nhất của mình, sẽ áp dụng các giải pháp công nghệ để ngăn chặn các hành vi đánh cắp hoặc tiếp cận thông tin trái phép; sử dụng, thay đổi hoặc phá hủy thông tin trái phép. Tuy nhiên, CINESTAR không thể cam kết sẽ ngăn chặn được tất cả các hành vi xâm phạm, sử dụng thông tin cá nhân trái phép nằm ngoài khả năng kiểm soát của CINESTAR. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với bất kỳ khiếu nại, tranh chấp hoặc thiệt hại nào phát sinh từ hoặc liên quan đến việc truy cập, xâm nhập, sử dụng thông tin trái phép như vậy.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát Thông Tin Khách Hàng, gây ảnh hưởng xấu đến Khách Hàng, CINESTAR sẽ ngay lập tức thông báo cho Khách Hàng và trình vụ việc cho cơ quan chức năng điều tra xử lý.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng có nghĩa vụ bảo mật tên đăng ký, mật khẩu và hộp thư điện tử của mình. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với các thiệt hại, tổn thất (nếu có) do Khách Hàng không tuân thủ quy định bảo mật này.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Khách Hàng tuyệt đối không được có các hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay dổi dữ liệu của CINESTAR. Trong trường hợp CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán thông tin cá nhân trái phép… CINESTAR có quyền chuyển thông tin cá nhân của Khách Hàng cho các cơ quan có thẩm quyền để xử lý theo quy định của pháp luật.</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong>10. THÔNG TIN LIÊN HỆ</strong></p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Bất kỳ lúc nào Khách Hàng có bất kỳ câu hỏi, cần hỗ trợ, cần giải thích, khiếu nại hoặc quan tâm về việc bảo mật của CINESTAR hoặc các giao dịch của Khách Hàng với CINESTAR, xin vui lòng liên hệ CINESTAR theo thông tin sau:</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>&nbsp;</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Mã số thuế: 0312742744</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Hotline: 028.7300 8881</p>
                                                        <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', fontSize: '17px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}>Email: cskh@cinestar.com.vn</p>
                                                    </div>
                                                </div>
                                                <div className="input-check">
                                                    <input id="member_accept" name="accept" defaultValue={1} type="checkbox" /><span />Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên Cinestar                          </div>
                                                <div className="input-but">
                                                    <input type="button" defaultValue="ĐĂNG KÝ" id="btn-register-top" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="user-form modify">
                                        <div className="icon-arrow" style={{ left: '295.6px' }} />
                                        <h3 className="user-title">Chỉnh sửa thông tin cá nhân</h3>
                                        <form id="modify-top">
                                            <div className="require-col">
                                                <label className="gender"><input type="radio" name="gender" defaultValue={1} defaultChecked /><span className="gender-name">Nam</span><span className="gender-shape" /></label>
                                                <label className="gender"><input type="radio" name="gender" defaultValue={0} /><span className="gender-name">Nữ</span><span className="gender-shape" /></label>
                                            </div>
                                            <div className="require-col">
                                                <div className="input-text name">
                                                    <span className="focus-text">HỌ TÊN (*)</span>
                                                    <input type="text" defaultValue />
                                                </div>
                                                <div className="input-text birth">
                                                    <span className="focus-text">DD/MM/YYYY ( Ngày sinh*)</span>
                                                    <input type="text" defaultValue />
                                                </div>
                                                <div className="input-text address">
                                                    <span className="focus-text">ĐỊA CHỈ (*)</span>
                                                    <input type="text" defaultValue />
                                                </div>
                                                <div className="input-text code">
                                                    <span className="focus-text">SỐ CMNN/BẰNG LÁI (*)</span>
                                                    <input type="text" defaultValue />
                                                </div>
                                                <div className="input-text tel">
                                                    <span className="focus-text">ĐIỆN THOẠI (*)</span>
                                                    <input type="text" defaultValue />
                                                </div>
                                                <div className="input-text email">
                                                    <span className="focus-text">EMAIL (*)</span>
                                                    <input type="text" defaultValue />
                                                </div>
                                                <div className="input-text username">
                                                    <span className="focus-text">TÊN ĐĂNG NHẬP (*)</span>
                                                    <input type="text" defaultValue />
                                                </div>
                                                <div className="input-text password">
                                                    <span className="focus-text">MẬT KHẨU (*)</span>
                                                    <input type="password" defaultValue />
                                                </div>
                                                <div className="input-text confirmpass">
                                                    <span className="focus-text">NHẬP LẠI MẬT KHẨU (*)</span>
                                                    <input type="password" defaultValue />
                                                </div>
                                                <div className="input-but">
                                                    <input type="button" defaultValue="LƯU LẠI" id="btn-save-tab" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/*register-tab*/}
                                {/*login-tab*/}
                                <div className="tab-login" style={{ top: 'auto', left: '113px', right: 'auto', marginLeft: 'auto' }}>
                                    <div className="user-form login">
                                        <div className="icon-arrow" style={{ left: '50%' }} />
                                        <h3 className="user-title">Vui lòng nhập tên người dùng(email) và mật khẩu</h3>
                                        <form id="login-top">
                                            <div className="require-col">
                                                <div className="input-text username">
                                                    <input name="username" id="login_email" type="text" defaultValue />
                                                </div>
                                                <div className="input-text password">
                                                    <input name="password" id="login_password" type="password" defaultValue />
                                                </div>
                                                <div className="input-but">
                                                    <input type="button" defaultValue="Đăng nhập" id="btn-login-tab" />
                                                    <a className="user-link" href="javascript:void(0);">Tìm lại mật khẩu</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="user-form forgot">
                                        <div className="icon-arrow" style={{ left: '50%' }} />
                                        <h3 className="user-title">Vui lòng nhập địa chỉ email của bạn vào ô bên dưới.<br />
                                            Bạn sẽ nhận được một liên kết để thiết lập lại mật khẩu.</h3>
                                        <form id="forgot-top">
                                            <div className="require-col">
                                                <div className="input-text email">
                                                    <input id="forgot_email" name="email" type="text" defaultValue />
                                                </div>
                                                <div className="input-text authentication-img">
                                                    <a href="#" onclick="refreshcaptcha(); return false;"><img className="captcha_image" src="https://cinestar.com.vn/?route=information/contact/captcha&id=1693975417114" alt="authentication" /></a>
                                                </div>
                                                <div className="input-text authentication">
                                                    <input type="text" name="captcha" id="captcha" defaultValue />
                                                    <input type="hidden" name="captcha_bk" id="captcha_bk" defaultValue="a4bced" />
                                                </div>
                                                <div className="input-but">
                                                    <input type="button" defaultValue="Gửi" id="btn-send-top" />
                                                    <a className="user-link" href="javascript:void(0);">Quay lại trang đăng nhập</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/*login-tab*/}
                            </div>
                            {/*//user-form//*/}
                        </div>
                        <div className="hover-box" /></div>            {/*USER-SECTION*/}
                    {/*SLIDER*/}
                    <div className="slider-home" data-time={5000}>
                        <div className="slide-bg slide-slidebox" style={{ opacity: 1, display: 'inline-block' }}>
                            <div className="slide-wrapper-outer"><div className="slide-wrapper" style={{ width: '12152px', left: '0px', display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(-3038px, 0px, 0px)', transformOrigin: '3797.5px center', perspectiveOrigin: '3797.5px center' }}><div className="slide-item" style={{ width: '1519px' }}><div className="bg-home" style={{ width: '1519px', height: '356.016px' }}>
                                <a href="https://cinestar.com.vn/lichchieu">
                                    <img src="https://cinestar.com.vn/pictures/z2161740555387_88fc044837bea7695ee9ec8320a39cef.jpg" alt="bg" /></a>
                            </div></div><div className="slide-item" style={{ width: '1519px' }}><div className="bg-home" style={{ width: '1519px', height: '356.016px' }}>
                                <a href="https://cinestar.com.vn/lichchieu">
                                    <img src="https://cinestar.com.vn/pictures/z2161740555616_cf6d683f88aa9447af57b89917e84acb.jpg" alt="bg" /></a>
                            </div></div><div className="slide-item active" style={{ width: '1519px' }}><div className="bg-home" style={{ width: '1519px', height: '356.016px' }}>
                                <a href="https://cinestar.com.vn/lichchieu">
                                    <img src="https://cinestar.com.vn/pictures/z2161740545178_a8a9f7496b64b022c7303a779f958fc3.jpg" alt="bg" /></a>
                            </div></div><div className="slide-item" style={{ width: '1519px' }}><div className="bg-home" style={{ width: '1519px', height: '356.016px' }}>
                                <a href="https://cinestar.com.vn/lichchieu">
                                    <img src="https://cinestar.com.vn/pictures/z2161740548307_572fb6880f511449ec1b78168c547d3b.jpg" alt="bg" /></a>
                            </div></div></div></div>
                            <div className="slide-controls clickable"><div className="slide-pagination"><div className="slide-page"><span className /></div><div className="slide-page"><span className /></div><div className="slide-page active"><span className /></div><div className="slide-page"><span className /></div></div></div></div>
                    </div>
                    {/*SLIDER*/}
                    {/*CART-SECTION-*/}
                    <div className="cart-content">
                        <div className="cart-wrap">
                            <div className="block-title">
                                <h2>Mua vé <br />Online</h2>
                            </div>
                            <div className="block-list">
                                <div className="select-list" data-cate="film">
                                    <div className="select-header">
                                        <span />
                                        <h3 data-holder="Chọn phim">Chọn phim</h3>
                                    </div>
                                    <div className="select-box">
                                        <ul>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/08-2023/ke-an-danh-poster.jpg" data-format="2d" data-id="18a2c270-002e-4946-a721-05cf8dc304d8"><h3>KẺ ẨN DANH (T18)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" data-format="2d" data-id="3cc20272-cf83-42d0-9445-03ce95683632"><h3>TÌNH BẠN DIỆU KỲ 2D PĐ (P)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" data-format="2d" data-id="50982e83-0bb1-4c1d-a030-5761e5e9a65c"><h3>TÌNH BẠN DIỆU KỲ 2D LT (P)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/08-2023/tay-dua-cu-phach1.jpg" data-format="2d" data-id="5b612727-452d-417a-b680-ea5194fa5019"><h3>GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/cham-vao-cam-xuc.jpg" data-format="2d" data-id="6594de8a-d72d-449a-8d5f-9f08ba8cee56"><h3>CHẠM VÀO HẠNH PHÚC (K)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/08-2023/ham-tu-than.png" data-format="2d" data-id="6e5c0efe-6afa-42b1-9bb6-10c16872d5ec"><h3>HÀM TỬ THẦN (T18)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg" data-format="2d" data-id="a0d22936-c3ea-4906-b105-f6e414001660"><h3>3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/thien-ac-doi-dau-3.jpg" data-format="2d" data-id="a525bf6a-e9b9-4044-8a89-5b167f96650c"><h3>THIỆN ÁC ĐỐI ĐẦU 3 (T18)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/bo-doi-bao-thu1.jpg" data-format="2d" data-id="af6013dc-5e12-4f92-8ac9-5ee43f92f96f"><h3>BỘ ĐÔI BÁO THỦ (T16)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/ben-pha-xac-song1.jpg" data-format="2d" data-id="cbdba331-5e8b-488d-9c15-e69c8aeb0279"><h3>BẾN PHÀ XÁC SỐNG (T16)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/the-nun-ii.jpg" data-format="2d" data-id="d8b730d2-b30a-4127-aae3-096aec822f33"><h3>ÁC QUỶ MA SƠ 2 (T18)</h3></a></li>
                                            <li><a href="javascript:void(0);" data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/dia-dang-sup-do.jpg" data-format="2d" data-id="da4582f2-64af-42ca-91b3-4b23c29440ad"><h3>ĐỊA ĐÀNG SỤP ĐỔ (T16)</h3></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="select-list" data-cate="cine">
                                    <div className="select-header">
                                        <span />
                                        <h3 data-holder="Chọn rạp">Chọn rạp</h3>
                                    </div>
                                    <div className="select-box">
                                        <ul className="warning">
                                            <li><a href="javascript:void(0);"><h3>Vui lòng chọn phim</h3></a></li>
                                        </ul>
                                        <ul>
                                        </ul>
                                    </div>
                                </div>
                                <div className="select-list" data-cate="day">
                                    <div className="select-header">
                                        <span />
                                        <h3 data-holder="Chọn ngày">Chọn ngày</h3>
                                    </div>
                                    <div className="select-box">
                                        <ul className="warning">
                                            <li><a href="javascript:void(0);"><h3>Vui lòng chọn phim và rạp</h3></a></li>
                                        </ul>
                                        <ul>
                                        </ul>
                                    </div>
                                </div>
                                <div className="select-list" data-cate="hour">
                                    <div className="select-header">
                                        <span />
                                        <h3 data-holder="Chọn suất chiếu">Chọn suất chiếu</h3>
                                    </div>
                                    <div className="select-box">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>            {/*CART-SECTION-*/}
                    {/*CONTENT-PAGE*/}
                    <div className="content-page">
                        <div className="nav-icon-content">
                            <div className="nav-icon-wrap">
                                <ul>
                                    <li><a href="javscript:void(0);" data-name={1}><img src="https://cinestar.com.vn/pictures/moi/8DinhDang/dolby.png" alt="DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ" /></a></li>
                                    <li><a href="javscript:void(0);" data-name={2}><img src="https://cinestar.com.vn/pictures/moi/8DinhDang/christie.png" alt="Máy chiếu CHRISTIE" /></a></li>
                                    <li><a href="javscript:void(0);" data-name={3}><img src="https://cinestar.com.vn/pictures/moi/8DinhDang/2d.png" alt="Công nghệ chiếu phim 2D Digital" /></a></li>
                                    <li><a href="javscript:void(0);" data-name={4}><img src="https://cinestar.com.vn/pictures/moi/8DinhDang/3d3.png" alt="Công nghệ chiếu phim 3D Digital" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sub-tab">
                            <ul>
                                <li style={{ zIndex: 3 }} className="current"><a href="https://cinestar.com.vn/getmoviehomepage" data-name="playing">Phim đang chiếu</a></li>
                                <li style={{ zIndex: 2 }}><a href="https://cinestar.com.vn/getmoviehomepage" data-name="coming">Phim sắp chiếu</a></li>
                                <li style={{ zIndex: 1 }}><a href="https://cinestar.com.vn/getmoviehomepage" data-name="special">Suất chiếu đặc biệt</a></li>
                            </ul>
                        </div>
                        {/*movie*/}
                        <div className="movie-content">
                            <div className="movie-wrap">
                                <div className="movie-load" style={{ opacity: 1 }}>{/*loading by ajax*/}<div className="movie-slide slide-slidebox" style={{ opacity: 1, display: 'inline-block' }}>
                                    <div className="slide-wrapper-outer"><div className="slide-wrapper" style={{ width: '7680px', left: '0px', display: 'block', marginLeft: '0px' }}><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/2e280d5d-c66e-47ae-881c-04a094b24a56">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/5b612727-452d-417a-b680-ea5194fa5019">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/452d6f89-0dcb-42b2-acb6-75d27338eb9b">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/a0f28ba1-dbaa-4012-9a05-cfd25dc60684">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/e8650c68-8952-461f-b187-1117e4665c2f">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg" alt="3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/a0d22936-c3ea-4906-b105-f6e414001660">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/08-2023/ke-an-danh-poster.jpg" alt="KẺ ẨN DANH (T18)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/18a2c270-002e-4946-a721-05cf8dc304d8">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/09-2023/dia-dang-sup-do.jpg" alt="ĐỊA ĐÀNG SỤP ĐỔ (T16)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/da4582f2-64af-42ca-91b3-4b23c29440ad">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/08-2023/ham-tu-than.png" alt="HÀM TỬ THẦN (T18)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/6e5c0efe-6afa-42b1-9bb6-10c16872d5ec">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/09-2023/bo-doi-bao-thu1.jpg" alt="BỘ ĐÔI BÁO THỦ (T16)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/af6013dc-5e12-4f92-8ac9-5ee43f92f96f">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" alt="TÌNH BẠN DIỆU KỲ 2D PĐ (P)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/3cc20272-cf83-42d0-9445-03ce95683632">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/09-2023/thien-ac-doi-dau-3.jpg" alt="THIỆN ÁC ĐỐI ĐẦU 3 (T18)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/a525bf6a-e9b9-4044-8a89-5b167f96650c">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/09-2023/ben-pha-xac-song1.jpg" alt="BẾN PHÀ XÁC SỐNG (T16)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/cbdba331-5e8b-488d-9c15-e69c8aeb0279">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" alt="TÌNH BẠN DIỆU KỲ 2D LT (P)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/50982e83-0bb1-4c1d-a030-5761e5e9a65c">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/09-2023/cham-vao-cam-xuc.jpg" alt="CHẠM VÀO HẠNH PHÚC (K)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/6594de8a-d72d-449a-8d5f-9f08ba8cee56">Mua vé</a> */}
                                        </div>
                                    </div></div><div className="slide-item loading" style={{ width: '240px' }}><div className="movie-item n_2d">
                                        <div className="movie-pic"><img className="lazyload" data-src="https://cinestar.com.vn/pictures/Cinestar/09-2023/the-nun-ii.jpg" alt="ÁC QUỶ MA SƠ 2 (T18)" style={{ display: 'none' }} /></div>
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
                                            {/* <a  class="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/d8b730d2-b30a-4127-aae3-096aec822f33">Mua vé</a> */}
                                        </div>
                                    </div></div></div></div>
                                    <div className="slide-controls clickable"><div className="slide-pagination"><div className="slide-page active"><span className /></div><div className="slide-page"><span className /></div><div className="slide-page"><span className /></div><div className="slide-page"><span className /></div></div><div className="slide-buttons"><div className="slide-prev">prev</div><div className="slide-next">next</div></div></div></div></div>
                            </div>
                        </div>
                        {/*movie*/}
                        {/*PROMOTION-SECTION*/}
                        <div className="promotion-content">
                            <div className="promotion-wrap">
                                <div className="promotion-title">
                                    <h2>Ưu đãi</h2>
                                </div>
                                <div className="promotion-slide slide-slidebox" style={{ width: '1084px', marginLeft: '116px', opacity: 1, display: 'inline-block' }}>
                                    <div className="slide-wrapper-outer"><div className="slide-wrapper" style={{ width: '3610px', left: '0px', display: 'block', marginLeft: '0px', transition: 'all 800ms ease 0s', transform: 'translate3d(-361px, 0px, 0px)' }}><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
                                        <a href="https://cinestar.com.vn/khuyenmai/cinestarspurpleday">
                                            <div className="promotion-pic"><img className="lazyload" align="CINESTAR'S PURPLE DAY - THỨ 3 TUẦN CUỐI MỖI THÁNG" src="https://cinestar.com.vn/pictures/0330-web.jpg" style={{ display: 'block' }} /></div>
                                        </a>
                                    </div></div><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
                                        <a href="https://cinestar.com.vn/khuyenmai/c-monday">
                                            <div className="promotion-pic"><img className="lazyload" align="C'MONDAY - ƯU ĐÃI THỨ 2" src="https://cinestar.com.vn/pictures/c_monday.jpg" style={{ display: 'block' }} /></div>
                                        </a>
                                    </div></div><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
                                        <a href="https://cinestar.com.vn/khuyenmai/c-member">
                                            <div className="promotion-pic"><img className="lazyload" align="C'member - ngày hội thành viên" src="https://cinestar.com.vn/pictures/Hình%20nền%20CTKM/c'member.jpg" style={{ display: 'block' }} /></div>
                                        </a>
                                    </div></div><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
                                        <a href="https://cinestar.com.vn/khuyenmai/c-student">
                                            <div className="promotion-pic"><img className="lazyload" align="TẸT GA 45K SUỐT TUẦN TOÀN HỆ THỐNG" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Hình%20nền%20CTKM/hssv.jpg" /></div>
                                        </a>
                                    </div></div><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
                                        <a href="https://cinestar.com.vn/khuyenmai/c-ten">
                                            <div className="promotion-pic"><img className="lazyload" align="C'Ten - Khuyến mãi tại mốc 10H" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/c_ten.jpg" /></div>
                                        </a>
                                    </div></div></div></div>
                                    <div className="slide-controls clickable"><div className="slide-pagination"><div className="slide-page active"><span className /></div><div className="slide-page"><span className /></div></div></div></div>
                            </div>
                        </div>                {/*PROMOTION-SECTION*/}
                        {/*news*/}
                        <div className="news-content">
                            <div className="news-wrap">
                                <div className="news-title"><h2>Tin tức</h2></div>
                                <div className="news-list" style={{ width: '1084px', marginLeft: '116px' }}>
                                    <div className="news-row">
                                        <div className="link-page" style={{ height: '186px' }}>
                                            <a href="https://cinestar.com.vn/tintuc/rapphimcinestartuyennhanvienpartime" />
                                            <div className="pic"><img src="https://cinestar.com.vn/pictures/Tin%20tức/c'hunt.jpg" alt="RẠP PHIM CINESTAR TUYỂN NHÂN VIÊN PARTIME " /></div>
                                            <div className="txt">
                                                <h3>RẠP PHIM CINESTAR TUYỂN NHÂN VIÊN PARTIME </h3>
                                                <p>Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!</p>
                                            </div>
                                        </div>
                                        <div className="link-page" style={{ height: '186px' }}>
                                            <a href="https://cinestar.com.vn/tintuc/cinestarlamdongductrongtuyendungnhansu" />
                                            <div className="pic"><img src="https://cinestar.com.vn/pictures/tuyỂn-dỤng-Đt-ld-.png" alt="CINESTAR LÂM ĐỒNG (ĐỨC TRỌNG) - TUYỂN DỤNG NHÂN SỰ" /></div>
                                            <div className="txt">
                                                <h3>CINESTAR LÂM ĐỒNG (ĐỨC TRỌNG) - TUYỂN DỤNG NHÂN SỰ</h3>
                                                <p>Cinestar Lâm Đồng (Đức Trọng) tuyển dụng các ứng viên tiềm năng, đam mê phim ảnh giải trí và làm việc trong môi trường năng động, chuyên nghiệp mong muốn được cống hiến và phát triển bản thân. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-row">
                                        <div className="link-page" style={{ height: '186px' }}>
                                            <a href="https://cinestar.com.vn/tintuc/MissPetiteVietnam2023" />
                                            <div className="pic"><img src="https://cinestar.com.vn/pictures/Tin%20tức/cinestar-da-lat-1.jpeg" alt="Chung kết Hoa hậu Nhân ái Việt Nam 2023 sẽ diễn ra tại Đà Lạt" /></div>
                                            <div className="txt">
                                                <h3>Chung kết Hoa hậu Nhân ái Việt Nam 2023 sẽ diễn ra tại Đà Lạt</h3>
                                                <p>(NSMT) - Miss Petite Vietnam – Hoa hậu Nhân ái Việt Nam 2023 được Uỷ Ban nhân dân tỉnh Lâm Đồng cấp giấy phép số 1676/UBND-VX4, do Công ty cổ phẩn Giải trí Tiếp thị Truyền thông Tân Thành Công phối hợp với Công ty Cổ phần Truyền thông Giải trí Kim Lợi Global tổ chức.</p>
                                            </div>
                                        </div>
                                        <div className="link-page" style={{ height: '186px' }}>
                                            <a href="https://cinestar.com.vn/tintuc/nangluongmatroi-cinestarhue" />
                                            <div className="pic"><img src="https://cinestar.com.vn/pictures/Tin%20tức/Nangluongmattroi/cinestar-hue.jpg" alt="CÓ THỂ BẠN CHƯA BIẾT CINESTAR HUẾ ĐANG SỬ DỤNG 100% ĐIỆN NĂNG LƯỢNG MẶT TRỜI" /></div>
                                            <div className="txt">
                                                <h3>CÓ THỂ BẠN CHƯA BIẾT CINESTAR HUẾ ĐANG SỬ DỤNG 100% ĐIỆN NĂNG LƯỢNG MẶT TRỜI</h3>
                                                <p>Hướng đến sự phát triển bền vững, khách hàng có thể trải nghiệm những thước phim điện ảnh chất lượng tại Cinestar Huế với 100% điện năng lượng mặt trời thân thiện với môi trường và sẽ đầu tư cho toàn hệ thống trong tương lai.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*news*/}
                    </div>
                    {/*CONTENT-PAGE*/}
                    {/*BOTTOM*/}
                    <div className="bottom">
                        <div className="bottom-nav">
                            <div className="logo-footer" style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/cache/moi/9Logo/trang-100x100.png)' }} />
                            <div className="bottom-wrap">
                                <div className="social">
                                    <h2>Liên kết</h2>
                                    <ul>
                                        {/*li><a href="" target="_blank" class="google">Google</a></li*/}
                                        <li><a href="https://www.facebook.com/CinestarVietNam" target="_blank" className="facebook">Facebook</a></li>
                                        <li><a href="https://www.youtube.com/channel/UCMZgMHS9vFfXoe3UA6eanyQ" target="_blank" className="youtube">Youtube</a></li>
                                    </ul>
                                    <h2>Hotline</h2>
                                    <a className="hotline-tel" href="tel:028 7300 8881">028 7300 8881</a>
                                </div>
                                <div className="cinestart-price">
                                    <h2>Hệ thống rạp</h2>
                                    <ul>
                                        <li data-name="8f3a5832-8340-4a43-89bc-6653817162f1"><a href="https://cinestar.com.vn/rapvagia/8f3a5832-8340-4a43-89bc-6653817162f1">CineStar Quốc Thanh</a></li>
                                        <li className="current" data-name="e08f986a-1937-419e-b1b1-759b7c74728b"><a href="https://cinestar.com.vn/rapvagia/e08f986a-1937-419e-b1b1-759b7c74728b">CineStar Đà Lạt</a></li>
                                        <li data-name="667c7727-857e-4aac-8aeb-771a8f86cd14"><a href="https://cinestar.com.vn/rapvagia/667c7727-857e-4aac-8aeb-771a8f86cd14">CineStar Hai Bà Trưng (TP.HCM)</a></li>
                                        <li className="current" data-name="cf13e1ce-2c1f-4c73-8ce5-7ef65472db3c"><a href="https://cinestar.com.vn/rapvagia/cf13e1ce-2c1f-4c73-8ce5-7ef65472db3c">CineStar Bình Dương(Sinh Viên)</a></li>
                                        <li className="current" data-name="f8a60463-5c34-49a9-9ae8-52081e387bb8"><a href="https://cinestar.com.vn/rapvagia/f8a60463-5c34-49a9-9ae8-52081e387bb8">CineStar Huế</a></li>
                                        <li data-name="8f54df74-3796-42ea-896e-cd638eec1fe3"><a href="https://cinestar.com.vn/rapvagia/8f54df74-3796-42ea-896e-cd638eec1fe3">Cinestar Mỹ Tho</a></li>
                                        <li data-name="4a51b9ee-f143-4411-9dbb-5f54a1c382c0"><a href="https://cinestar.com.vn/rapvagia/4a51b9ee-f143-4411-9dbb-5f54a1c382c0">CineStar Kiên Giang</a></li>
                                        <li data-name="104509be-034e-47c1-bf1b-aba7f2df4f28"><a href="https://cinestar.com.vn/rapvagia/104509be-034e-47c1-bf1b-aba7f2df4f28">CineStar Đức Trọng</a></li>
                                    </ul>
                                </div>
                                <div className="cinestart">
                                    <h2>CINESTAR</h2>
                                    <ul>
                                        <li data-name="212_2"><a href="https://cinestar.com.vn/phimdangchieu">Phim đang chiếu</a></li>
                                        <li data-name="212_1"><a href="https://cinestar.com.vn/phimsapchieu">Phim sắp chiếu</a></li>
                                        <li data-name="212_3"><a href="https://cinestar.com.vn/suatchieudacbiet">Suất chiếu đặc biệt</a></li>
                                        <li data-name={213}><a href="https://cinestar.com.vn/lichchieu">Lịch chiếu</a></li>
                                        <li data-name={211}><a href="https://cinestar.com.vn/khuyenmai">Khuyến mãi</a></li>
                                    </ul>
                                </div>
                                <div className="info">
                                    <h2>Thông tin</h2>
                                    <ul>
                                        <li data-name={207}><a href="https://cinestar.com.vn/gioithieu">Giới thiệu</a></li>
                                        <li data-name={209}><a href="https://cinestar.com.vn/tintuc">Tin tức</a></li>
                                        <li data-name={210}><a href="https://cinestar.com.vn/hoivadap">Hỏi và đáp</a></li>
                                        <li data-name={118}><a href="https://cinestar.com.vn/lienhe">Liên hệ</a></li>
                                    </ul>
                                </div>
                                <div className="info terms_and_condition">
                                    <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
                                    <ul>
                                        <li><a href="javascript:void(0);" data-name="terms_and_condition_2">Quy định chung</a></li>
                                        <li><a href="javascript:void(0);" data-name="terms_and_condition_3">Điều khoản giao dịch</a></li>
                                        <li><a href="javascript:void(0);" data-name="terms_and_condition_4">Chính sách bảo mật</a></li>
                                        <li><a href="javascript:void(0);" data-name="terms_and_condition_5">Thông tin công ty</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-nav-icon">
                            <ul>
                                <li><a href="javascript:void(0);" data-name={1}><img src="https://cinestar.com.vn/pictures/moi/8DinhDang/dolby2.png" align="DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ" /></a></li>
                                <li><a href="javascript:void(0);" data-name={2}><img src="https://cinestar.com.vn/pictures/moi/8DinhDang/crhistie.png" align="Máy chiếu CHRISTIE" /></a></li>
                                <li><a href="javascript:void(0);" data-name={3}><img src="https://cinestar.com.vn/pictures/moi/8DinhDang/2d.jpg" align="Công nghệ chiếu phim 2D Digital" /></a></li>
                                <li><a href="javascript:void(0);" data-name={4}><img src="https://cinestar.com.vn/pictures/moi/8DinhDang/3d.png" align="Công nghệ chiếu phim 3D Digital" /></a></li>
                                <li><a href="javascript:void(0);" data-name={5}><img src="https://cinestar.com.vn/pictures/webimages/Coffee/cinestar-coffee-02.png" align="Cinestar Coffee" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*BOTTOM*/}
                </div>
                {/*FOOTER*/}
                <div className="footer">
                    {/*//payment-part//-*/}
                    <div className="payment">
                        <h2>Chấp nhận thanh toán</h2>
                        <ul>
                            <li><a href="javascript:void(0);"><img src="https://cinestar.com.vn/pictures/cache/webimages/9Rest/1Logo/napas-40.png" alt="Thẻ thanh toán nội địa" /></a></li>
                            <li><a href="javascript:void(0);"><img src="https://cinestar.com.vn/pictures/moi/ThanhToan/payment-visa.png" alt="Visa" /></a></li>
                            <li><a href="javascript:void(0);"><img src="https://cinestar.com.vn/pictures/moi/ThanhToan/payment-mastercard.png" alt="mastercard" /></a></li>
                            <li><a href="javascript:void(0);"><img src="https://cinestar.com.vn/pictures/webimages/momo.jpg" alt="Ví MoMo" /></a></li>
                        </ul>
                    </div>
                    {/*//payment-part//-*/}
                    {/*//copyright-part//*/}
                    <div className="copyright">
                        <p><a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=51406" target="_blank"><img width="150px" src="https://cinestar.com.vn/catalog/view/theme/default/images/dathongbao.png" alt=" đã được duyệt" /></a> </p>
                        <p>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO<br />
                            Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM<br />
                            Giấy CNĐKDN số: 0312742744, đăng ký lần đầu ngày 18/04/2014, đăng ký thay đổi lần thứ 2 ngày 15/09/2014, cấp bởi Sở KH&amp;ĐT TP.HCM<br /><br />
                            2015 © <strong>CINESTAR</strong>. All rights reserved.</p>
                        {/*h2><a href="javascript:void(0);" data-name="terms_condition">Điều khoản chung</a></h2>
        <p>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO<br>
Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM<br>
Giấy CNĐKDN số: 0312742744, đăng ký lần đầu ngày 18/04/2014, đăng ký thay đổi lần thứ 2 ngày 15/09/2014, cấp bởi Sở KH&ĐT TP.HCM<br><br>
2015 © <strong>CINESTAR</strong>. All rights reserved. <a href="http://www.btq.vn" target="_blank">DEVELOPED BY 3GRAPHIC</a></p*/}
                    </div>
                    {/*//copyright-part//*/}
                </div>
                {/*FOOTER*/}
            </div>
            {/*CONTAINER*/}
            {/*//ORDER-SECTION//*/}
            <div className="section-order">
                <a className="close-order" href="javascript:void(0);" />
                {/*//movie-part//*/}
                <div className="order-title">
                    <div className="order-wrap">
                        {/*<div class="order-pic"><img src="https://cinestar.com.vn/pictures/films/6.jpg" /></div>*/}
                        <div className="order-overview">
                            <h2><strong>Tên phim</strong><br /><span /></h2>
                            <ul className="about-ticket">
                                <li><p className="caption">Chọn suất chiếu</p><p className="value" /></li>
                                <li><p className="caption">Ngày</p><p className="value" /></li>
                                <li><p className="caption">Số lượng</p><p className="value"><span>0</span><sub>vé</sub></p></li>
                                <li><p className="caption">Tổng số tiền</p><p className="value"><span>0</span><sup>đ</sup></p></li>
                            </ul>
                            <ul className="about-seat">
                                <li>Số ghế</li>
                                <li className="seat-number" />
                            </ul>
                        </div>
                        <div className="order-clock">
                            <span className="title">Thời gian giữ ghế</span>
                            <div className="clock" data-time={60} />
                        </div>
                    </div>
                </div>
                {/*//movie-part//*/}
                <div className="order-content">
                    {/*//payment-part//*/}
                    <div className="final-content">
                        {/*confirm*/}
                        <div className="final-confirm">
                            <p>Cảm ơn quý khách đã đến với <strong>Cinestar</strong> !<br /> Xin quý khách vui lòng kiểm tra lại thông tin đặt vé </p>
                            <div className="confirm-box">
                                {/*div class="confirm-cons-promotion">
            <p>Quý khách vui lòng nhập mã giảm giá (nếu có)</p>
            <div class="cons-promotion-icon"><span>%</span>mã giảm giá</div>
            <div class="confirm-value"><input type="text" value="MG001" /></div>
            </div>

            <div class="confirm-total-promotion">
            <div class="confirm-mark">Số tiền giảm</div>
            <div class="confirm-value"><span>27.000</span><sup>đ</sup></div>
            </div>

            <div class="confirm-total-pay">
            <div class="confirm-mark">Số tiền cần thanh toán</div>
            <div class="confirm-value"><span>200.000</span><sup>đ</sup></div>
            </div*/}
                                <div className="cons-print"><a href="javascript:void(0);" onclick="PrintBill()">Print</a> </div>
                            </div>
                        </div>
                        {/*confirm*/}
                        <div className="final-form">
                            <form id="final">
                                <div className="input-text">
                                    <h2>Điều khoản chung</h2>
                                    <div className="terms_condition_paypal">
                                        <p>&nbsp;</p>
                                        <div>
                                            <div>
                                                <ul>
                                                    <li>Việc bạn sử dụng website này đồng nghĩa với việc bạn đồng ý với những thỏa thuận dưới đây.</li>
                                                    <li>Nếu bạn không đồng ý, xin vui lòng không sử dụng website.</li>
                                                </ul>
                                            </div>
                                            <div><strong>1. Trách nhiệm của người sử dụng:</strong>
                                                <p>Khi truy cập vào trang web này, bạn đồng ý chấp nhận mọi rủi ro. Cinestar&nbsp;và các bên đối tác khác không chịu trách nhiệm về bất kỳ tổn thất nào do những hậu quả trực tiếp, tình cờ hay gián tiếp; những thất thoát, chi phí (bao gồm chi phí pháp lý, chi phí tư vấn hoặc các khoản chi tiêu khác) có thể phát sinh trực tiếp hoặc gián tiếp do việc truy cập trang web hoặc khi tải dữ liệu về máy; những tổn hại gặp phải do virus, hành động phá hoại trực tiếp hay gián tiếp của hệ thống máy tính khác, đường dây điện thoại, phần cứng, phần mềm, lỗi chương trình, hoặc bất kì các lỗi nào khác; đường truyền dẫn của máy tính hoặc nối kết mạng bị chậm…</p>
                                            </div>
                                            <div><strong>2. Về nội dung trên trang web:</strong>
                                                <p>Tất cả những thông tin ở đây được cung cấp cho bạn một cách trung thực như bản thân sự việc.&nbsp;Cinestar&nbsp;và các bên liên quan không bảo đảm, hay có bất kỳ tuyên bố nào liên quan đến tính chính xác, tin cậy của việc sử dụng hay kết quả của việc sử dụng nội dung trên trang web này. Nột dung trên website được cung cấp vì lợi ích của cộng đồng và có tính phi thương mại. Các cá nhân và tổ chức không được phếp sử dụng nội dung trên website này với mục đích thương mại mà không có sự ưng thuận của&nbsp;Cinestar&nbsp;bằng văn bản. Mặc dù&nbsp;Cinestar&nbsp;luôn cố gắng cập nhật thường xuyên các nội dung tại trang web, nhưng chúng tôi không bảo đảm rằng các thông tin đó là mới nhất, chính xác hay đầy đủ. Tất cả các nội dung website có thể được thay đổi bất kỳ lúc nào.</p>
                                            </div>
                                            <div><strong>3. Về bản quyền:</strong>
                                                <p>Cinestar&nbsp;là chủ bản quyền của trang web này. Việc chỉnh sửa trang, nội dung, và sắp xếp thuộc về thẩm quyền của&nbsp;Cinestar. Sự chỉnh sửa, thay đổi, phân phối hoặc tái sử dụng những nội dung trong trang này vì bất kì mục đích nào khác được xem như vi phạm quyền lợi hợp pháp của&nbsp;Cinestar.</p>
                                            </div>
                                            <div><strong>4. Về việc sử dụng thông tin:</strong>
                                                <p>Chúng tôi sẽ không sử dụng thông tin cá nhân của bạn trên website này nếu không được phép. Nếu bạn đồng ý cung cấp thông tin cá nhân, bạn sẽ được bảo vệ. Thông tin của bạn sẽ được sử dụng với mục đích, liên lạc với bạn để thông báo các thông tin cập nhật của&nbsp;Cinestar&nbsp;như lịch chiếu phim, khuyến mại qua email hoặc bưu điện. Thông tin cá nhân của bạn sẽ không được gửi cho bất kỳ ai sử dụng ngoài trang web&nbsp;Cinestar, ngoại trừ những mở rộng cần thiết để bạn có thể tham gia vào trang web (những nhà cung cấp dịch vụ, đối tác, các công ty quảng cáo) và yêu cầu cung cấp bởi luật pháp. Nếu chúng tôi chia sẻ thông tin cá nhân của bạn cho các nhà cung cấp dịch vụ, công ty quảng cáo, các công ty đối tác liên quan, thì chúng tôi cũng yêu cầu họ bảo vệ thông tin cá nhân của bạn như cách chúng tôi thực hiện.</p>
                                            </div>
                                            <div><strong>5. Vể việc tải dữ liệu:</strong>
                                                <p>Nếu bạn tải về máy những phần mềm từ trang này, thì phần mềm và các dữ liệu tải sẽ thuộc bản quyền của&nbsp;Cinestar&nbsp;và cho phép bạn sử dụng. Bạn không được sở hữu những phầm mềm đã tải và&nbsp;Cinestar&nbsp;không nhượng quyền cho bạn. Bạn cũng không được phép bán, phân phối lại, hay bẻ khóa phần mềm…</p>
                                            </div>
                                            <div><strong>6. Thay đổi nội dung:</strong>
                                                <p>Cinestar&nbsp;giữ quyền thay đổi, chỉnh sửa và loại bỏ những thông tin hợp pháp vào bất kỳ thời điểm nào vì bất kỳ lý do nào.</p>
                                            </div>
                                            <div><strong>7. Liên kết với các trang khác:</strong>
                                                <p>Mặc dù trang web này có thể được liên kết với những trang khác,&nbsp;Cinestar&nbsp;không trực tiếp hoặc gián tiếp tán thành, tổ chức, tài trợ, đứng sau hoặc sát nhập với những trang đó, trừ phi điều này được nêu ra rõ ràng. Khi truy cập vào trang web bạn phải hiểu và chấp nhận rằng&nbsp;Cinestar&nbsp;không thể kiểm soát tất cả những trang liên kết với trang&nbsp;Cinestar&nbsp;và cũng không chịu trách nhiệm cho nội dung của những trang liên kết.</p>
                                            </div>
                                            <div><strong>8. Đưa thông tin lên trang web:</strong>
                                                <p>Bạn không được đưa lên, hoặc chuyển tải lên trang web tất cả những hình ảnh, từ ngữ khiêu dâm, thô tục, xúc phạm, phỉ báng, bôi nhọ, đe dọa, những thông tin không hợp pháp hoặc những thông tin có thể đưa đến việc vi phạm pháp luật, trách nhiệm pháp lý.&nbsp;Cinestar&nbsp;và tất cả các bên có liên quan đến việc xây dựng và quản lý trang web không chịu trách nhiệm hoặc có nghĩa vụ pháp lý đối với những phát sinh từ nội dung do bạn tải lên trang web.</p>
                                            </div>
                                            <div><strong>9. Luật áp dụng:</strong>
                                                <p>Mọi hoạt động phát sinh từ trang web có thể sẽ được phân tích và đánh giá theo luật pháp Việt Nam và toà án Tp. Hồ Chí Minh. Và bạn phải đồng ý tuân theo các điều khoản riêng của các toà án này.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment_check">
                                        <div><input className="check_terms_condition" type="checkbox" defaultValue="Tôi bảo đảm mua vé xem phim này theo đúng độ tuổi quy định" /><span className="check_terms_condition_icon" />Tôi bảo đảm mua vé xem phim này theo đúng độ tuổi quy định</div>
                                        {/*<div><input class="check_terms_condition_1" type="checkbox" value="" /><span class="check_terms_condition_icon"></span>Tôi bảo đảm mua vé xem phim này theo đúng độ tuổi quy định</div>*/}
                                    </div>
                                    <div className="payment_method">
                                        <div><input type="radio" className="payment_method_radio" defaultValue="qt" name="payment_method" /><span className="payment_method_icon" /> Quốc tế</div>
                                        <div><input type="radio" className="payment_method_radio" defaultValue="nd" name="payment_method" /><span className="payment_method_icon" /> Nội địa</div>
                                        <div><input type="radio" className="payment_method_radio" defaultValue="zalopay" name="payment_method" /><span className="payment_method_icon" /> Ví ZaloPay</div>
                                        <div><input type="radio" className="payment_method_radio" defaultValue="momo" name="payment_method" /><span className="payment_method_icon" /> Thanh toán qua ví MoMo</div>
                                    </div>
                                </div>
                                <div style={{ width: '100%' }} className="confirm-cus">
                                    <h3 className="user-title">Vui lòng nhập tên, điện thoại và email</h3>
                                    <div className="require-col">
                                        <div className="input-text username">
                                            <span style={{ paddingLeft: '68px' }} className="focus-text">HỌ TÊN (*)</span>
                                            <input maxLength={50} name="name" id="not_login_name" type="text" defaultValue />
                                            <div className="not_login_name_error" />
                                        </div>
                                        <div style={{ float: 'none!important', width: '100%!important' }} className="input-text email">
                                            <span style={{ paddingLeft: '68px' }} className="focus-text">EMAIL (*)</span>
                                            <input maxLength={50} name="email" id="not_login_email" type="text" defaultValue />
                                            <div className="not_login_email_error" />
                                        </div>
                                        <div className="input-text phone">
                                            <span style={{ paddingLeft: '68px' }} className="focus-text">ĐIỆN THOẠI (*)</span>
                                            <input maxLength={50} name="phone" id="not_login_phone" type="text" defaultValue />
                                            <div className="not_login_phone_error" />
                                        </div>
                                    </div>
                                    <p style={{ color: 'red', fontSize: '15px', padding: '0 5px 10px 5px' }}>Lưu ý: nhập chính xác email và điện thoại để nhận mã đặt vé</p>
                                </div>
                                <div className="input-but">
                                    <input type="button" className="cancel" defaultValue="Quay lại" id="payment-back" />
                                    <input type="button" className="ok" defaultValue="Thanh toán" id="payment-next" data-link="https://cinestar.com.vn/datve" />
                                    <span />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*//payment-part//*/}
                    {/*//ticket-part//*/}
                    <div className="ticket-content">
                        <div className="ticket-wrap">
                            <div className="tbl-wrap">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Loại vé</th>
                                            <th>Số lượng</th>
                                            <th>Giá (VNĐ)</th>
                                            <th>Tổng tiền (VNĐ)</th>
                                        </tr>
                                    </thead>
                                    <tbody id="content-price">
                                        {/* getPrice get-price-movie */}
                                    </tbody>
                                </table>
                            </div>
                            <ul className="ticket-cal">
                                <li className="total-ticket-num">Số lượng:<span>0</span><mark>vé</mark></li>
                                <li className="total-ticket-amount">Tổng số tiền:<span>0,00</span><sup>đ</sup></li>
                            </ul>
                            <div className="ticket-request">
                                <p />
                            </div>
                            <div className="input-but"><input type="button" defaultValue="Quay lại" id="ticket-back" /><input type="button" defaultValue="Chọn ghế" id="ticket-next" /></div>
                        </div>
                    </div>
                    {/*//ticket-part//*/}
                    {/*//user-part//*/}
                    <div className="user-content">
                        {/*user-tab*/}
                        <div className="user-tab">
                            <ul>
                                <li className="li-login active">Đăng nhập</li>
                                <li className="li-register">Đăng ký thành viên</li>
                            </ul>
                            {/*tab-login*/}
                            <div className="tab-login">
                                <div className="user-form login">
                                    <h3 className="user-title">Vui lòng nhập tên người dùng(email) và mật khẩu</h3>
                                    <form id="login">
                                        <div className="require-col">
                                            <div className="input-text username">
                                                <input name="username" id="login_email1" type="text" defaultValue />
                                            </div>
                                            <div className="input-text password">
                                                <input name="password" id="login_password1" type="password" defaultValue />
                                            </div>
                                            <div className="input-but">
                                                <input type="button" defaultValue="Đăng nhập" id="btn-login-top" />
                                                <a className="user-link" href="javascript:void(0);">Tìm lại mật khẩu</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="user-form forgot">
                                    <h3 className="user-title">Vui lòng nhập địa chỉ email của bạn vào ô bên dưới.<br />
                                        Bạn sẽ nhận được một liên kết để thiết lập lại mật khẩu.</h3>
                                    <form id="forgot">
                                        <div className="require-col">
                                            <div className="input-text email">
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-text authentication-img">
                                                <a href="#" onclick="refreshcaptcha(); return false;"><img className="captcha_image" src="https://cinestar.com.vn/?route=information/contact/captcha&id=1693975417114" alt="authentication" /></a>
                                            </div>
                                            <div className="input-text authentication">
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-but">
                                                <input type="button" defaultValue="Gửi" id="btn-send" />
                                                <a className="user-link" href="javascript:void(0);">Quay lại trang đăng nhập</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*tab-login*/}
                            {/*tab-register*/}
                            <div className="tab-register">
                                <div className="user-form register">
                                    <h3 className="user-title">Vui lòng nhập thông tin</h3>
                                    <form id="register">
                                        <div className="require-col">
                                            <label className="gender"><input type="radio" name="gender" defaultValue={1} /><span className="gender-name">Nam</span><span className="gender-shape" /></label>
                                            <label className="gender"><input type="radio" name="gender" defaultValue={0} /><span className="gender-name">Nữ</span><span className="gender-shape" /></label>
                                        </div>
                                        <div className="require-col">
                                            <div className="input-text name">
                                                <span className="focus-text">HỌ TÊN (*)</span>
                                                <input id="member_name1" name="name" type="text" defaultValue />
                                            </div>
                                            <div className="input-text birth">
                                                <span className="focus-text">DD/MM/YYYY ( Ngày sinh*)</span>
                                                <input id="member_birthday1" name="birthday" type="text" defaultValue />
                                            </div>
                                            <div className="input-text address">
                                                <span className="focus-text">ĐỊA CHỈ (*)</span>
                                                <input id="member_address1" name="address" type="text" defaultValue />
                                            </div>
                                            <div className="input-text code">
                                                <span className="focus-text">SỐ CMNN/BẰNG LÁI (*)</span>
                                                <input id="member_cmnn1" name="cmnn" type="text" defaultValue />
                                            </div>
                                            <div className="input-text tel">
                                                <span className="focus-text">ĐIỆN THOẠI (*)</span>
                                                <input id="member_phone1" name="phone" type="text" defaultValue />
                                            </div>
                                            <div className="input-text email">
                                                <span className="focus-text">EMAIL (*)</span>
                                                <input id="member_email1" name="email" type="text" defaultValue />
                                            </div>
                                            <div className="input-text username">
                                                <span className="focus-text">TÊN ĐĂNG NHẬP (*)</span>
                                                <input id="member_username1" name="username" type="text" defaultValue />
                                            </div>
                                            <div className="input-text password">
                                                <span className="focus-text">MẬT KHẨU (*)</span>
                                                <input id="member_password1" name="password" type="password" defaultValue />
                                            </div>
                                            <div className="input-text confirmpass">
                                                <span className="focus-text">NHẬP LẠI MẬT KHẨU (*)</span>
                                                <input id="member_password_confirm1" name="password_confirm" type="password" defaultValue />
                                            </div>
                                            <div className="input-check">
                                                <input id="member_accept1" name="accept" defaultValue={1} type="checkbox" /><span />Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên Cinestar                              </div>
                                            <div className="input-but">
                                                <input type="button" defaultValue="ĐĂNG KÝ" id="btn-register-tab" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="user-form modify">
                                    <h3 className="user-title">Chỉnh sửa thông tin cá nhân</h3>
                                    <form id="modify">
                                        <div className="require-col">
                                            <label className="gender"><input type="radio" name="gender" defaultValue={1} defaultChecked /><span className="gender-name">Nam</span><span className="gender-shape" /></label>
                                            <label className="gender"><input type="radio" name="gender" defaultValue={0} /><span className="gender-name">Nữ</span><span className="gender-shape" /></label>
                                        </div>
                                        <div className="require-col">
                                            <div className="input-text name">
                                                <span className="focus-text">HỌ TÊN (*)</span>
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-text birth">
                                                <span className="focus-text">DD/MM/YYYY ( Ngày sinh*)</span>
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-text address">
                                                <span className="focus-text">ĐỊA CHỈ (*)</span>
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-text code">
                                                <span className="focus-text">SỐ CMNN/BẰNG LÁI (*)</span>
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-text tel">
                                                <span className="focus-text">ĐIỆN THOẠI (*)</span>
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-text email">
                                                <span className="focus-text">EMAIL (*)</span>
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-text username">
                                                <span className="focus-text">TÊN ĐĂNG NHẬP (*)</span>
                                                <input type="text" defaultValue />
                                            </div>
                                            <div className="input-text password">
                                                <span className="focus-text">MẬT KHẨU (*)</span>
                                                <input type="password" defaultValue />
                                            </div>
                                            <div className="input-text confirmpass">
                                                <span className="focus-text">NHẬP LẠI MẬT KHẨU (*)</span>
                                                <input type="password" defaultValue />
                                            </div>
                                            <div className="input-but">
                                                <input type="button" defaultValue="LƯU LẠI" id="btn-save-top" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*tab-register*/}
                        </div>
                        {/*//user-part//*/}
                    </div>
                    {/*BLOCK - LOGIN*/}
                    {/*//cinema-part//*/}
                    <div id="cinema-content" className="cinema-content">
                        {/* getSeats */}
                    </div>
                    {/*COMBO*/}
                    <div className="cons-content">
                        <div className="cons-box">
                            <ul>
                            </ul>
                        </div>
                        <div className="cons-input">
                            <input type="button" className="cons-cancel" id="cons-cancel" defaultValue="Hủy" />
                            <input type="button" className="cons-ok" id="cons-ok" defaultValue="Đồng ý" />
                        </div>
                        <div className="cons-top">
                            <div className="cons-icon" />
                            <div className="cons-total"><div className="cons-value"><span /><sup>đ</sup></div><div className="cons-text" /></div>
                        </div>
                    </div>
                    {/*COMBO*/}
                    {/*//cinema-part//*/}
                </div>
            </div>
            {/*//ORDER-SECTION//*/}
            <div className="term-pop" data-show={1} style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={0}>
                    <div className="term-bg">
                        <h2>DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ</h2>
                        <p style={{ boxSizing: 'border-box', margin: '15px 0px 5px', padding: '0px', color: 'rgb(99, 99, 99)', fontFamily: 'Verdana, Arial, sans-serif', lineHeight: '21px', backgroundColor: 'rgb(253, 252, 240)' }}>Dolby Atmos – sự phát triển đáng kể nhất trong công nghệ âm thanh kể từ âm thanh vòm, đang tạo ra sự thay đổi độc đáo trong kĩ thuật thiết kế âm thanh phân lớp, hiện đã có mặt tại Việt Nam và sẵn sàng phục vụ khách hàng tại CineStar Cinema</p>
                        <p style={{ boxSizing: 'border-box', margin: '15px 0px 5px', padding: '0px', color: 'rgb(99, 99, 99)', fontFamily: 'Verdana, Arial, sans-serif', lineHeight: '21px', backgroundColor: 'rgb(253, 252, 240)' }}>Dolby Atmos sử dụng thiết kế phân lớp tân tiến để tạo nên các rãnh âm thanh. Lớp nền bao gồm các dải âm thanh môi trường tĩnh được phối theo phương pháp âm thanh phân luồng quen thuộc. Các lớp trên trần bao gồm các yếu tố âm thanh động được định hướng và thay đổi một cách chính xác theo hình ảnh hiển thị trên màn hình trong rạp. Bằng cách lắp đặt hệ thống loa ở trên đầu và xung quanh, Dolby Atmos có thể khiến khán giả trải nghiệm những âm thanh trung thực và tự nhiên như thật của bộ phim.</p>
                        <p style={{ boxSizing: 'border-box', margin: '15px 0px 5px', padding: '0px', color: 'rgb(99, 99, 99)', fontFamily: 'Verdana, Arial, sans-serif', lineHeight: '21px', backgroundColor: 'rgb(253, 252, 240)' }}><span style={{ fontSize: '20px' }}>TẠI SAO&nbsp;DOLBY ATMOS CÓ THỂ TẠO NÊN SỰ KHÁC BIỆT KHI TRẢI NGHIỆM ĐIỆN ẢNH</span></p>
                        <p style={{ boxSizing: 'border-box', margin: '15px 0px 5px', padding: '0px', color: 'rgb(99, 99, 99)', fontFamily: 'Verdana, Arial, sans-serif', lineHeight: '21px', backgroundColor: 'rgb(253, 252, 240)' }}><span style={{ fontStyle: 'italic', fontFamily: 'sans-serif, Arial, Verdana, "Trebuchet MS"', lineHeight: '1.6em', backgroundColor: 'rgb(255, 255, 255)' }}>- Âm thanh rõ ràng và được định hướng một cách chính xác hơn; Sự trộn âm có định hướng đối tượng từ các yếu tố âm thanh theo lớp độc lập đến âm thanh phân luồng.</span></p>
                        <p style={{ boxSizing: 'border-box', margin: '15px 0px 5px', padding: '0px', color: 'rgb(99, 99, 99)', fontFamily: 'Verdana, Arial, sans-serif', lineHeight: '21px', backgroundColor: 'rgb(253, 252, 240)' }}><span style={{ fontStyle: 'italic', fontFamily: 'sans-serif, Arial, Verdana, "Trebuchet MS"', lineHeight: '1.6em', backgroundColor: 'rgb(255, 255, 255)' }}>- Kết nối ý đồ của đạo diễn từ dữ liệu mô tả và phát lại theo công nghệ âm thanh được trang bị cho từng phòng chiếu.</span></p>
                        <p style={{ boxSizing: 'border-box', margin: '0px', padding: '10px 0px', listStyle: 'disc', fontStyle: 'italic', color: 'rgb(51, 51, 51)' }}>- Tự động tạo ra các rãnh âm thanh tối ưu cho các phòng chiếu 5.1 và 7.1</p>
                        <p style={{ boxSizing: 'border-box', margin: '0px', padding: '10px 0px', listStyle: 'disc', fontStyle: 'italic', color: 'rgb(51, 51, 51)' }}>- Tạo ra trải nghiệm âm thanh sống động, trung thực thông qua 128 yếu tố âm thanh đồng thời và không bị mất đi khi phối âm.</p>
                        <p style={{ boxSizing: 'border-box', margin: '0px', padding: '10px 0px', listStyle: 'disc', fontStyle: 'italic', color: 'rgb(51, 51, 51)' }}><span style={{ lineHeight: '1.6em' }}>- Quy mô được điều chỉnh theo kích cỡ của từng phòng chiếu với hệ thống lên đến 64 loa độc lập với nhau.</span></p>
                        <p>Trên thế giới hiện tại chỉ có 25 rạp trang bị hệ thống Dolby Atmos, và CineStar rất hân hạnh là một thành viên trong số đó.</p>
                    </div>
                </div>
                <div id="ascrail2000" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show={2} style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={1}>
                    <div className="term-bg">
                        <h2>Máy chiếu CHRISTIE</h2>
                        <p><span style={{ fontSize: '16px' }}><span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>Máy chiếu Christie là giải pháp hình ảnh cao cấp cho nhu cầu giải trí, với&nbsp;độ phân giải 1080p -&nbsp;4k. ( có số điểm ảnh bề ngang cao gấp 4 lần so với chuẩn full HD).&nbsp;</span></span><span style={{ fontFamily: 'arial, helvetica, sans-serif', fontSize: '16px', lineHeight: '1.6em' }}>Ngoài ra máy còn mang đến cho khán giả những trải nghiệm hình ảnh chân thật hơn nhờ hệ thống thấu kính của mình.</span></p>
                        <h2 style={{ boxSizing: 'border-box', margin: '20px 0px', padding: '0px', fontSize: '24px', fontFamily: 'Verdana, Arial, sans-serif', lineHeight: '1.2', textRendering: 'optimizeLegibility', backgroundColor: 'rgb(253, 252, 240)' }}><span style={{ fontSize: '16px' }}><span style={{ fontFamily: 'arial,helvetica,sans-serif' }}><span style={{ lineHeight: '20.5333px', backgroundColor: 'rgb(252, 252, 255)' }}>Với hệ thống máy chiếu Christie đã được trang bị, CineStar Cinema hy vọng sẽ mang lại những trải nghiệm điện ảnh đích thực dành cho khán giả.</span></span></span></h2>
                    </div>
                </div>
                <div id="ascrail2001" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show={3} style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={2}>
                    <div className="term-bg">
                        <h2>Công nghệ chiếu phim 2D Digital</h2>
                        <p><span style={{ lineHeight: '1.6em' }}>Công nghệ chiếu phim 2D Digital là công nghệ chiếu phim kỹ thuật số 2 chiều, mang tới hình ảnh rõ nét cho khán giả yêu điện ảnh. Khán giả&nbsp;</span><span style={{ lineHeight: '1.6em' }}>sẽ k</span><span style={{ lineHeight: '1.6em' }}>hông phải mang kính khi xem phim 2D Digital.</span></p>
                        <p>S<span style={{ lineHeight: '1.6em' }}>o với c</span><span style={{ lineHeight: '1.6em' }}>ông nghệ chiếu phim 35mm sử dụng bản phim nhựa, thì định dạng 2D Digital sẽ giải quyết trọn vẹn vấn đề xước bản phim gây khó ch</span><span style={{ lineHeight: '1.6em' }}>ịu cho khán giả, mang lại hình ảnh sắc nét hơn.</span></p>
                        <p>Hiện tại, tất cả phòng chiếu của CineStar đều trang bị công nghệ chiếu phim 2D Digital.</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div id="ascrail2002" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show={4} style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={3}>
                    <div className="term-bg">
                        <h2>Công nghệ chiếu phim 3D Digital</h2>
                        <div>
                            <p>So với công nghệ chiếu phim 2D Digital (Kỹ thuật số 2 chiều), công nghệ 3D Digital (Kỹ thuật số 3 chiều) cho phép khán giả cảm nhận thêm chiều sâu của hình ảnh, giúp cho không gian điện ảnh trở nên sống động như không gian thực mà chúng ta đang sống.</p>
                            <p>&nbsp;</p>
                            <p>Phim 3D được quay từ tối thiểu hai máy cùng một lúc, từ hai góc nhìn khác nhau tương ứng với hoạt động của hai mắt người. Khi xem phim khán giả sẽ cần đeo kính 3D để lọc hình ảnh cho mỗi mắt, khi qua não bộ sẽ chập lại tạo thành hình ảnh không gian ba chiều.</p>
                            <p>&nbsp;</p>
                            <p>Các phòng chiếu phim 3D Digital này đều sử dụng màn hình tráng bạc để giảm thiểu lượng hao hụt ánh sáng một cách tối đa.</p>
                            <p><img alt="" src="https://cinestar.com.vn/pictures/moi/8DinhDang/3d2.jpg" style={{ width: '599px', height: '426px' }} /></p>
                        </div>
                    </div>
                </div>
                <div id="ascrail2003" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show={5} style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={4}>
                    <div className="term-bg">
                        <h2>Cinestar Coffee</h2>
                        <p style={{ lineHeight: '22.4px', textAlign: 'justify' }}>Nằm trong chuỗi các dự án được đầu tư tâm huyết,&nbsp;CINESTAR COFFEE&nbsp;là một mô hình hoàn toàn mới khi có sự kết hợp giữa Rạp Chiếu Phim và cửa hàng coffee shop -&nbsp;vừa sở hữu&nbsp;nét&nbsp;điện ảnh, vừa đậm chất nghệ thuật thưởng thức cà phê.&nbsp;Với&nbsp;không gian mở &amp; bày trí hiện đại, bạn có thể dễ dàng lựa chọn một góc thư giãn&nbsp;với nhiều loại thức uống có&nbsp;mức giá trung bình từ 30.000đ&nbsp;- 50.000đ tại CINESTAR COFFEE.</p>
                        <p style={{ lineHeight: '22.4px', textAlign: 'justify' }}><span style={{ textAlign: 'justify' }}>CINESTAR COFFEE,&nbsp;Trải nghiệm tiện lợi - Thoải mái thư giãn,&nbsp;hứa hẹn sẽ trở thành&nbsp;một nơi lý tưởng dành cho các bạn trẻ &amp; giới văn phòng.</span></p>
                        <p style={{ lineHeight: '22.4px', textAlign: 'justify' }}><em>Hệ thống CINESTAR COFFEE đã có mặt tại:</em></p>
                        <p style={{ lineHeight: '22.4px', textAlign: 'justify' }}>+ 271 Nguyễn Trãi, Q.1, TPHCM - Tel: (028) 7300 8881</p>
                        <p style={{ lineHeight: '22.4px', textAlign: 'justify' }}>+ 135 Hai Bà Trưng, Q.1, TPHCM - Tel: (028) 7300 7279</p>
                        <p style={{ lineHeight: '22.4px', textAlign: 'justify' }}><span style={{ fontSize: '14px' }}><span style={{ fontFamily: 'arial, helvetica, sans-serif', textAlign: 'center' }}>+ Quảng trường Lâm Viên, P.10, TP. Đà Lạt, Tỉnh Lâm Đồng - Tel: (0263) </span></span>&nbsp;3969 969</p>
                        <p style={{ lineHeight: '22.4px', textAlign: 'justify' }}><span style={{ fontSize: '14px' }}><span style={{ fontFamily: 'arial, helvetica, sans-serif', textAlign: 'center' }}>+ Thêm thông tin tại:&nbsp;</span></span>https://www.facebook.com/cinestarcoffeeshop/</p>
                    </div>
                </div>
                <div id="ascrail2004" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show="terms_condition" style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={5}>
                    <div className="term-bg">
                        <h2>Điều khoản chung</h2>
                        <p>&nbsp;</p>
                        <div>
                            <div>
                                <ul>
                                    <li>Việc bạn sử dụng website này đồng nghĩa với việc bạn đồng ý với những thỏa thuận dưới đây.</li>
                                    <li>Nếu bạn không đồng ý, xin vui lòng không sử dụng website.</li>
                                </ul>
                            </div>
                            <div><strong>1. Trách nhiệm của người sử dụng:</strong>
                                <p>Khi truy cập vào trang web này, bạn đồng ý chấp nhận mọi rủi ro. Cinestar&nbsp;và các bên đối tác khác không chịu trách nhiệm về bất kỳ tổn thất nào do những hậu quả trực tiếp, tình cờ hay gián tiếp; những thất thoát, chi phí (bao gồm chi phí pháp lý, chi phí tư vấn hoặc các khoản chi tiêu khác) có thể phát sinh trực tiếp hoặc gián tiếp do việc truy cập trang web hoặc khi tải dữ liệu về máy; những tổn hại gặp phải do virus, hành động phá hoại trực tiếp hay gián tiếp của hệ thống máy tính khác, đường dây điện thoại, phần cứng, phần mềm, lỗi chương trình, hoặc bất kì các lỗi nào khác; đường truyền dẫn của máy tính hoặc nối kết mạng bị chậm…</p>
                            </div>
                            <div><strong>2. Về nội dung trên trang web:</strong>
                                <p>Tất cả những thông tin ở đây được cung cấp cho bạn một cách trung thực như bản thân sự việc.&nbsp;Cinestar&nbsp;và các bên liên quan không bảo đảm, hay có bất kỳ tuyên bố nào liên quan đến tính chính xác, tin cậy của việc sử dụng hay kết quả của việc sử dụng nội dung trên trang web này. Nột dung trên website được cung cấp vì lợi ích của cộng đồng và có tính phi thương mại. Các cá nhân và tổ chức không được phếp sử dụng nội dung trên website này với mục đích thương mại mà không có sự ưng thuận của&nbsp;Cinestar&nbsp;bằng văn bản. Mặc dù&nbsp;Cinestar&nbsp;luôn cố gắng cập nhật thường xuyên các nội dung tại trang web, nhưng chúng tôi không bảo đảm rằng các thông tin đó là mới nhất, chính xác hay đầy đủ. Tất cả các nội dung website có thể được thay đổi bất kỳ lúc nào.</p>
                            </div>
                            <div><strong>3. Về bản quyền:</strong>
                                <p>Cinestar&nbsp;là chủ bản quyền của trang web này. Việc chỉnh sửa trang, nội dung, và sắp xếp thuộc về thẩm quyền của&nbsp;Cinestar. Sự chỉnh sửa, thay đổi, phân phối hoặc tái sử dụng những nội dung trong trang này vì bất kì mục đích nào khác được xem như vi phạm quyền lợi hợp pháp của&nbsp;Cinestar.</p>
                            </div>
                            <div><strong>4. Về việc sử dụng thông tin:</strong>
                                <p>Chúng tôi sẽ không sử dụng thông tin cá nhân của bạn trên website này nếu không được phép. Nếu bạn đồng ý cung cấp thông tin cá nhân, bạn sẽ được bảo vệ. Thông tin của bạn sẽ được sử dụng với mục đích, liên lạc với bạn để thông báo các thông tin cập nhật của&nbsp;Cinestar&nbsp;như lịch chiếu phim, khuyến mại qua email hoặc bưu điện. Thông tin cá nhân của bạn sẽ không được gửi cho bất kỳ ai sử dụng ngoài trang web&nbsp;Cinestar, ngoại trừ những mở rộng cần thiết để bạn có thể tham gia vào trang web (những nhà cung cấp dịch vụ, đối tác, các công ty quảng cáo) và yêu cầu cung cấp bởi luật pháp. Nếu chúng tôi chia sẻ thông tin cá nhân của bạn cho các nhà cung cấp dịch vụ, công ty quảng cáo, các công ty đối tác liên quan, thì chúng tôi cũng yêu cầu họ bảo vệ thông tin cá nhân của bạn như cách chúng tôi thực hiện.</p>
                            </div>
                            <div><strong>5. Vể việc tải dữ liệu:</strong>
                                <p>Nếu bạn tải về máy những phần mềm từ trang này, thì phần mềm và các dữ liệu tải sẽ thuộc bản quyền của&nbsp;Cinestar&nbsp;và cho phép bạn sử dụng. Bạn không được sở hữu những phầm mềm đã tải và&nbsp;Cinestar&nbsp;không nhượng quyền cho bạn. Bạn cũng không được phép bán, phân phối lại, hay bẻ khóa phần mềm…</p>
                            </div>
                            <div><strong>6. Thay đổi nội dung:</strong>
                                <p>Cinestar&nbsp;giữ quyền thay đổi, chỉnh sửa và loại bỏ những thông tin hợp pháp vào bất kỳ thời điểm nào vì bất kỳ lý do nào.</p>
                            </div>
                            <div><strong>7. Liên kết với các trang khác:</strong>
                                <p>Mặc dù trang web này có thể được liên kết với những trang khác,&nbsp;Cinestar&nbsp;không trực tiếp hoặc gián tiếp tán thành, tổ chức, tài trợ, đứng sau hoặc sát nhập với những trang đó, trừ phi điều này được nêu ra rõ ràng. Khi truy cập vào trang web bạn phải hiểu và chấp nhận rằng&nbsp;Cinestar&nbsp;không thể kiểm soát tất cả những trang liên kết với trang&nbsp;Cinestar&nbsp;và cũng không chịu trách nhiệm cho nội dung của những trang liên kết.</p>
                            </div>
                            <div><strong>8. Đưa thông tin lên trang web:</strong>
                                <p>Bạn không được đưa lên, hoặc chuyển tải lên trang web tất cả những hình ảnh, từ ngữ khiêu dâm, thô tục, xúc phạm, phỉ báng, bôi nhọ, đe dọa, những thông tin không hợp pháp hoặc những thông tin có thể đưa đến việc vi phạm pháp luật, trách nhiệm pháp lý.&nbsp;Cinestar&nbsp;và tất cả các bên có liên quan đến việc xây dựng và quản lý trang web không chịu trách nhiệm hoặc có nghĩa vụ pháp lý đối với những phát sinh từ nội dung do bạn tải lên trang web.</p>
                            </div>
                            <div><strong>9. Luật áp dụng:</strong>
                                <p>Mọi hoạt động phát sinh từ trang web có thể sẽ được phân tích và đánh giá theo luật pháp Việt Nam và toà án Tp. Hồ Chí Minh. Và bạn phải đồng ý tuân theo các điều khoản riêng của các toà án này.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ascrail2005" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show="terms_and_condition_2" style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={6}>
                    <div className="term-bg">
                        <h2>Quy định chung</h2>
                        <p>​</p>
                        <p>Chào mừng và cảm ơn Quý khách hàng đến với website: <a href="http://www.cinestar.com.vn/">www.cinestar.com.vn</a>.</p>
                        <p>Website này thuộc quyền sở hữu của Công ty Cổ phần Giải trí – Phát hành phim – Rạp chiếu phim Ngôi Sao (CINESTAR), địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM. Website này được sử dụng cho các hoạt động của CINESTAR, các chi nhánh trực thuộc, các công ty thành viên và các tổ chức liên quan (được gọi là CINESTAR trong văn bản này).</p>
                        <p>Khi truy cập vào website: <a href="http://www.cinestar.com.vn/">www.cinestar.com.vn</a> ("Website"), quý khách hàng phải có độ tuổi từ 18 tuổi trở lên hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp.</p>
                        <p>Xin quý khách hàng vui lòng đọc kỹ những Quy Định Chung, Điều Kiên và Điều Khoản Giao Dịch, Chính Sách Bảo Mật và những quy định khác được đăng tải trên Website này trước khi quý khách hàng chính thức sử dụng dịch vụ của CINESTAR. Khi quý khách hàng tiếp tục truy cập và sử dụng Website này và các sản phẩm liên quan đến CINESTAR có nghĩa là quý khách hàng đã đồng ý và chấp nhận với những ràng buộc về mặt pháp lý và tuân thủ những Quy Định Chung, Điều Kiên và Điều Khoản Giao Dịch, Chính Sách Bảo Mật và những quy định khác của CINESTAR được đăng tải trên Website này. Nếu quý khách hàng không đồng ý, vui lòng không sử dụng dịch vụ trên Website của CINESTAR.</p>
                        <p>CINESTAR có quyền thay đổi, bổ sung Quy Định Chung, Điều Kiên và Điều Khoản Giao Dịch, Chính Sách Bảo Mật và những quy định khác trên Website vào bất cứ lúc nào. Người sử dụng có trách nhiệm cập nhật và theo dõi những thay đổi mới nhất trên Website của CINESTAR. Nếu quý khách hàng không đồng ý với những thay đổi mới nhất, quý khách hàng có quyền yêu cầu ngưng sử dụng tài khoản tại Website của CINESTAR.</p>
                        <p>Tài khoản của quý khách hàng trên CINESTAR không dùng để trao đổi, mua bán với mục đích thương mại.</p>
                        <p><strong>1. Tạo tài khoản:</strong></p>
                        <p>Khi đăng ký tham gia thành viên CINESTAR, quý khách hàng vui lòng:</p>
                        <ul>
                            <li>Cung cấp những thông tin chính xác, đầy đủ theo bản đăng ký mẫu của CINESTAR.</li>
                            <li>Duy trì và cập nhật những thông tin, thay đổi mới nhất một cách chính xác và đầy đủ.</li>
                        </ul>
                        <p>Trong trường hợp những thông tin quý khách hàng cung cấp không chính xác có thể làm quý khách hàng không tận dụng được hết những sản phẩm và dịch vụ của CINESTAR cung cấp.</p>
                        <p>Trong một số trường hợp đặc biệt, CINESTAR có quyền từ chối cung cấp dịch vụ cho quý khách hàng và đình chỉ tài khoản của quý khách hàng vào thời điểm hiện tại và trong tương lai nếu những thông tin mà quý khách hàng cung cấp không chính xác hoặc CINESTAR có lý do nghi ngờ tính trung thực của những thông tin mà quý khách hàng cung cấp.</p>
                        <p>Khách Hàng có thể lựa chọn cung cấp hoặc không cung cấp cho CINESTAR một số thông tin nhất định. Tuy nhiên, không cung cấp thì cũng có thể đồng nghĩa với việc Khách Hàng không tận dụng được tất cả các tính năng mà CINESTAR cung cấp cho Khách Hàng.</p>
                        <p>CINESTAR sẽ không sử dụng những thông tin cá nhân của quý khách hàng ngoài những mục đích nêu tại Chính Sách Bảo Mật nếu chưa được sự cho phép của quý khách hàng. Quý khách hàng có thể yên tâm rằng khi quý khách hàng cung cấp thông tin cho CINESTAR, thông tin của quý khách hàng luôn được bảo mật tuyệt đối.</p>
                        <p>Quyền truy cập và sử dụng tài khoản chỉ dành riêng cho cá nhân có thẩm quyền. Mọi hành vi cố ý truy cập trái phép đều có thể bị xử lý theo quy định của pháp luật.</p>
                        <p><strong>2. Trách nhiệm của người sử dụng: </strong></p>
                        <p>Khi truy cập vào Website này, quý khách hàng đồng ý chấp nhận mọi rủi ro. CINESTAR&nbsp;và các bên đối tác khác không chịu trách nhiệm về bất kỳ tổn thất nào do những hậu quả trực tiếp, tình cờ hay gián tiếp; những thất thoát, chi phí (bao gồm chi phí pháp lý, chi phí tư vấn hoặc các khoản chi tiêu khác) có thể phát sinh trực tiếp hoặc gián tiếp do việc truy cập Website hoặc khi tải dữ liệu về máy tính, thiết bị di động thông minh; những tổn hại gặp phải do virus, hành động phá hoại trực tiếp hay gián tiếp của hệ thống máy tính khác, đường dây điện thoại, phần cứng, phần mềm, lỗi chương trình, hoặc bất kì các lỗi nào khác; đường truyền dẫn của máy tính hoặc nối kết mạng bị chậm…</p>
                        <p>CINESTAR yêu cầu quý khách hàng khi đăng ký là thành viên của CINESTAR phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, email, điện thoại, số tài khoản, số thẻ thanh toán …. và tự chịu trách nhiệm về tính pháp lý của những thông tin trên. CINESTAR không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của thành viên đó nếu xét thấy một phần hoặc tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.</p>
                        <p><strong>3. Về nội dung trên Website: </strong></p>
                        <p>Tất cả những thông tin được đăng tải trên Website được cung cấp cho quý khách hàng một cách trung thực như bản thân sự việc, tuy nhiên, CINESTAR không kèm theo bất kỳ cam kết nào.&nbsp;CINESTAR&nbsp;và các bên liên quan không bảo đảm, hay có bất kỳ tuyên bố nào liên quan đến tính chính xác, độ xác thực, độ tin cậy của việc sử dụng hay kết quả của việc sử dụng nội dung trên Website này. CINESTAR luôn cố gắng cập nhật toàn bộ thông tin một cách thường xuyên, kịp thời nhưng CINESTAR không bảo đảm rằng những nội dung hiện tại là mới nhất, chính xác hay đầy đủ nhất.</p>
                        <p>Tất cả các nội dung Website có thể được thay đổi bất kỳ lúc nào. CINESTAR&nbsp;giữ quyền thay đổi, chỉnh sửa và loại bỏ những thông tin hợp pháp vào bất kỳ thời điểm nào vì bất kỳ lý do nào.</p>
                        <p>CINESTAR lưu ý: Quý khách hàng vui lòng cập nhật thường xuyên Website để biết những thay đổi hoặc đọc kỹ lại các Quy Định Chung, Điều Kiện và Điều Khoản Giao Dịch, Chính Sách Bảo Mật và những quy định khác trước khi thực hiện giao dịch.</p>
                        <p>Tất cả thông tin, bao gồm nội dung, phần mềm, dữ liệu… được đăng tải lên Website và các sản phẩm liên quan của CINESTAR đều thuộc bản quyền của CINESTAR, quý khách hàng có thể tải về và sử dụng. Nhưng những nội dung đó không thuộc quyền sở hữu của quý khách hàng, nên CINESTAR nghiêm cấm mua bán, phân phối, bẻ khoá, sao chép, sửa đổi hay sử dụng bất kỳ nội dung nào mà không có sự đồng ý của CINESTAR.</p>
                        <p>Quý khách hàng có thể sử dụng những thông tin thuộc quyền sở hữu của CINESTAR để chia sẻ trên mạng với điều kiện phải trích rõ nguồn và chủ sở hữu thông tin.</p>
                        <p>Cá nhân và tổ chức không được phép sử dụng nội dung trên Website này với mục đích thương mại mà không có sự chấp thuận của&nbsp;CINESTAR&nbsp;bằng văn bản.</p>
                        <p><strong>4. Về việc thu thập, sử dụng, chia sẻ, bảo mật thông tin:</strong></p>
                        <p>CINESTAR sẽ sử dụng thông tin cá nhân của quý khách hàng trên Website này với các mục đích: Cung cấp các dịch vụ, sản phẩm theo nhu cầu của Khách Hàng; Liên hệ xác nhận khi Khách Hàng đăng ký sử dụng dịch vụ, xác lập giao dịch trên Website; Thực hiện việc quản lý Website, gửi thông tin cập nhật về Website, các chương trình khuyến mại, ưu đãi/tri ân tới Khách Hàng; Bảo đảm quyền lợi của Khách Hàng khi phát hiện các hành động giả mạo, phá hoại tài khoản, lừa đảo Khách Hàng; Liên lạc, hỗ trợ, giải quyết với Khách Hàng trong các trường hợp đặc biệt; …</p>
                        <p>Việc thu thập, sử dụng, chia sẻ, bảo mật thông tin của quý khách hàng được quy định cụ thể tại Chính Sách Bảo Mật thông tin được đăng tải trên Website này.</p>
                        <p><strong>5. Sự cố phát sinh:</strong></p>
                        <p>Khi đã sử dụng dịch vụ của CINESTAR, quý khách hàng đã chấp nhận một số sự cố có thể phát sinh trong quá trình truy cập, và đồng ý rằng CINESTAR và các đối tác liên quan sẽ không chịu trách nhiệm pháp lý về những thất thoát, thiệt hại xảy ra một cách trực tiếp hay gián tiếp trong khi truy cập vào Website và các sản phẩm liên quan, khi tải dữ liệu, không loại trừ những tổn hại do virus, những tác động ảnh hưởng đến hệ thống máy tính, đường dây điện thoại, huỷ hoại các chương trình phần cứng, phần mềm, các trở ngại của đường truyền máy vi tính hoặc kết nối mạng.</p>
                        <p><strong>6. Ý kiến, bình luận, tranh chấp của người sử dụng</strong></p>
                        <p>CINESTAR không chịu trách nhiệm sàng lọc, chỉnh sửa hoặc giám sát nội dung được người sử dụng đăng tải lên website và các sản phẩm liên quan, cũng như không thể đảm bảo tính chính xác của những ý kiến, bình luận này. Nếu nhận được thông tin về những vi phạm, gây tổn hại hoặc bất hợp pháp, CINESTAR có quyền điều tra những cáo buộc trên để xác minh, và có quyền quyết định chấm dứt cung cấp dịch vụ đối với thành viên vi phạm những điều khoản sử dụng.</p>
                        <p>Quý khách hàng không được đưa lên, hoặc chuyển tải lên Website tất cả những hình ảnh, từ ngữ khiêu dâm, thô tục, xúc phạm, phỉ báng, bôi nhọ, đe dọa, những thông tin không hợp pháp hoặc những thông tin có thể đưa đến việc vi phạm pháp luật, trách nhiệm pháp lý.&nbsp;CINESTAR&nbsp;và tất cả các bên có liên quan đến việc xây dựng và quản lý Website không chịu trách nhiệm hoặc có nghĩa vụ pháp lý đối với những phát sinh từ nội dung do quý khách hàng tải lên Website.</p>
                        <p>Mặc dù đã có những quy định nêu trên, nhưng CINESTAR cũng như những cá thể, tập thể liên quan không thể bảo đảm có thể chỉnh sửa hoặc xoá bỏ lập tức những nội dung vi phạm. Cũng như CINESTAR không phải chịu trách nhiệm pháp lý đối với những nội dung do quý khách hàng đăng tải trên Website của CINESTAR. Đồng thời, quý khách hàng cũng có trách nhiệm cho mối liên hệ giữa quý khách hàng và những người dùng khác. CINESTAR có quyền, nhưng không có nghĩa vụ theo dõi các tranh chấp giữa các người dùng với nhau.</p>
                        <p><strong>7. Ngưng cung cấp dịch vụ:</strong></p>
                        <p>CINESTAR có quyền ngưng cung cấp dịch vụ cho Khách Hàng nếu vi phạm những điều sau đây:</p>
                        <ul>
                            <li>Thông tin quý khách hàng cung cấp không chính xác, không đầy đủ, không trung thực, hoặc CINESTAR có căn cứ để nghi ngờ độ chính xác của thông tin.</li>
                            <li>Đăng tải lên Website và các sản phẩm liên quan những nội dung không phù hợp như những nội dung có tính chất khiêu dâm, đồi truỵ, phỉ báng, thô tục, gây hiểu lầm, hoặc phạm pháp.</li>
                            <li>Quấy rối, đe doạ hoặc phân biệt một cá nhân hoặc một tập thể vì lý do giới tính, tôn giáo, khuynh hướng tình dục, chủng tộc, dân tộc, tuổi tác hoặc khuyết tật.</li>
                            <li>"Spam", quảng cáo trái phép hoặc bất kỳ hình thức xổ số, cờ bạc nào.</li>
                            <li>Sử dụng tài khoản cá nhân với mục đích thương mại.</li>
                            <li>Vi phạm những điều khoản khác của CINESTAR.</li>
                        </ul>
                        <p>CINESTAR không chịu trách nhiệm với những nội dung do thành viên đăng tải và sẽ cung cấp những nội dung này cho các cơ quan có thẩm quyền trong trường hợp cần thiết.</p>
                        <p><strong>8. Về bản quyền:</strong></p>
                        <p>CINESTAR là chủ sở hữu bản quyền của Website này và các sản phẩm liên quan. CINESTAR có quyền chỉnh sửa, thay đổi, sắp xếp lại nội dung Website và các sản phẩm liên quan. Việc chỉnh sửa, thay đổi, sắp xếp lại hoặc tái sử dụng những nội dung trong Website này vì bất kỳ mục đích nào khác mà không có sự đồng ý của CINESTAR đều là vi phạm quyền lợi hợp pháp của CINESTAR.</p>
                        <p>CINESTAR luôn tôn trọng sở hữu trí tuệ của người khác, và CINESTAR yêu cầu Khách Hàng của CINESTAR cũng làm như vậy. CINESTAR luôn cố gắng đảm bảo những dữ liệu trên Website và các sản phẩm liên quan đều là hợp pháp, tuy nhiên, CINESTAR không chắc chắn có thể kiểm soát tất cả thông tin trên Website và các sản phẩm liên quan. Khi phát hiện được bất kỳ hành vi vi phạm bản quyền nào trên Website và các sản phẩm liên quan, CINESTAR sẽ xoá nội dung đó khỏi Website một cách nhanh nhất có thể.</p>
                        <p><strong>9. Liên kết với các trang website khác:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>Website này có thể được liên kết với những trang website khác, CINESTAR không trực tiếp hay gián tiếp quản lý những website liên kết. CINESTAR không hợp tác, tài trợ, xác thực, đứng sau hay sát nhập với những website đó, trừ khi sự hợp tác đó được công bố rõ ràng. Khi truy cập vào Website, CINESTAR hy vọng quý khách hàng có thể hiểu rằng CINESTAR không kiểm soát, quản lý những trang liên kết và không chịu trách nhiệm về nội dung của bất kỳ website liên kết nào.</p>
                        <p><strong>10. Luật áp dụng và giải quyết tranh chấp:</strong></p>
                        <p>Mọi hoạt động phát sinh từ Website của CINESTAR sẽ được phân tích và đánh giá theo luật pháp Việt Nam.</p>
                        <p>Mọi tranh chấp, khác biệt, khiếu nại phát sinh từ/hoặc liên quan đến nội dung tại Website này sẽ được ưu tiên giải quyết thông qua thương lượng, hòa giải. Trường hợp các bên không tự giải quyết, tranh chấp sẽ được đưa ra giải quyết tại Tòa án có thẩm quyền tại Thành phố Hồ Chí Minh.</p>
                        <p><strong>11. Thông tin liên hệ:</strong></p>
                        <p>Mọi câu hỏi, thắc mắc, cần hỗ trợ, cần giải thích, khiếu nại hoặc quan tâm về các dịch vụ/hàng hóa trên Website của CINESTAR, xin quý khách hàng vui lòng liên hệ CINESTAR theo thông tin sau:</p>
                        <ul>
                            <li>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO</li>
                            <li>Mã số thuế: 0312742744</li>
                            <li>Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</li>
                            <li>Hotline: 028.7300 8881&nbsp;</li>
                            <li>Email: <a href="mailto:cskh@cinestar.com.vn">cskh@cinestar.com.vn</a></li>
                        </ul>
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div id="ascrail2006" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show="terms_and_condition_3" style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={7}>
                    <div className="term-bg">
                        <h2>Điều khoản giao dịch</h2>
                        <p>​</p>
                        <p>Chào mừng và cảm ơn Quý khách hàng đến với website: <a href="http://www.cinestar.com.vn/">www.cinestar.com.vn</a>.</p>
                        <p>Website này thuộc quyền sở hữu của Công ty Cổ phần Giải trí – Phát hành phim – Rạp chiếu phim Ngôi Sao (CINESTAR), địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM. Website này được sử dụng cho các hoạt động của CINESTAR, các chi nhánh trực thuộc, các công ty thành viên và các tổ chức liên quan (được gọi là CINESTAR trong văn bản này).</p>
                        <p>Khi truy cập vào website: <a href="http://www.cinestar.com.vn/">www.cinestar.com.vn</a> ("Website"), quý khách hàng phải có độ tuổi từ 18 tuổi trở lên hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp.</p>
                        <p><strong>Khi quý khách hàng sử dụng sản phẩm và dịch vụ do CINESTAR cung cấp trên Website này, quý khách hàng xác định là đã đọc kỹ, hiểu rõ và đồng ý với những điều khoản sử dụng (gọi chung là Điều Kiện và Điều Khoản Giao Dịch) sau đây:</strong></p>
                        <p><strong>1. PHẠM VI ÁP DỤNG</strong></p>
                        <p>Điều Kiện và Điều Khoản Giao Dịch được áp dụng cho chức năng mua vé xem phim và hàng hóa (đồ ăn, nước uống…) trực tuyến tại Website.</p>
                        <p>Khách hàng tại Điều Kiện và Điều Khoản Giao Dịch này bao gồm:</p>
                        <p>-Mọi cá nhân từ đủ 18 tuổi trở lên, có năng lực hành vi dân sự phù hợp để thực hiện giao dịch thông qua CINESTAR;</p>
                        <p>-Cá nhân từ đủ 15 tuổi đến dưới 18 tuổi với sự giám sát, đồng ý của cha mẹ hay người giám hộ hợp pháp;</p>
                        <p>-Mọi tổ chức được thành lập và hoạt động hợp pháp theo quy định của pháp luật Việt Nam.</p>
                        <p>Khi sử dụng chức năng để đặt chỗ và mua vé, mua hàng hóa (đồ ăn, thức uống…), quý khách hàng mặc nhiên đã chấp thuận và tuân thủ tất cả các chỉ dẫn, điều khoản, điều kiện và những lưu ý được đăng tải trên Website, bao gồm nhưng không giới hạn bởi các Quy Định Chung, Điều Kiện và Điều Khoản Giao Dịch, Chính Sách Bảo Mật,... Nếu quý khách hàng không có ý định mua vé hoặc hàng hóa trực tuyến hay không đồng ý với bất kỳ điều khoản hay điều kiện nào nêu trong Điều Kiện và Điều Khoản Giao Dịch thì xin vui lòng không sử dụng chức năng này.</p>
                        <p><strong>2. BẢN QUYỀN</strong></p>
                        <p>Tất cả mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký), tất cả nội dung thông tin được hiển thị trên Website và các sản phẩm liên quan CINESTAR dưới bất kỳ hình thức nào như thiết kế, văn bản, đồ họa, phần mềm, hình ảnh, video clip, logo, âm nhạc, âm thanh, biên dịch phần mềm, mã nguồn, phần mềm cơ bản, ký tự… đều là tài sản thuộc quyền sở hữu của CINESTAR. Sự biên soạn và hiển thị các nội dung này thông qua CINESTAR là tài sản riêng của CINESTAR. Toàn bộ nội dung của Website được bảo vệ theo pháp luật về sở hữu trí tuệ nói riêng và pháp luật Việt Nam nói chung và các Công ước, điều ước quốc tế mà Việt Nam tham gia hoặc là thành viên.</p>
                        <p>CINESTAR là chủ sở hữu bản quyền của Website này. Bất kỳ việc chỉnh sửa, thay đổi sắp xếp trang Website hay nội dung đều thuộc thẩm quyền của CINESTAR. Sự chỉnh sửa, thay đổi, sắp xếp, phân phối hoặc tái sử dụng những nội dung trong Website này vì bất kì mục đích nào khác được xem như xâm phạm quyền lợi hợp pháp của CINESTAR.</p>
                        <p>Nếu quý khách hàng tải về máy tính, thiết bị di động những phần mềm từ Website này, thì phần mềm và các dữ liệu được tải về vẫn thuộc bản quyền của CINESTAR và CINESTAR cho phép quý khách hàng sử dụng. Quý khách hàng không được sở hữu những phầm mềm đã tải và CINESTAR cũng không nhượng quyền cho quý khách hàng. Quý khách hàng không được phép bán, nhượng quyền, phân phối lại, hay bẻ khóa phần mềm…</p>
                        <p><strong>3. TÀI KHOẢN CỦA KHÁCH HÀNG</strong></p>
                        <p>Nếu quý khách hàng sử dụng dịch vụ của CINESTAR, quý khách hàng phải đăng ký tài khoản với thông tin xác thực về bản thân và phải cập nhật nếu có bất kỳ thay đổi nào.</p>
                        <p>Việc thu thập dữ liệu chủ yếu trên Website bao gồm: họ tên, số chứng minh nhân dân, email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ quý khách hàng (thành viên). Đây là các thông tin mà CINESTAR cần quý khách hàng cung cấp bắt buộc với tư cách là thành viên khi đăng ký sử dụng dịch vụ và để CINESTAR liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch vụ trên Website nhằm đảm bảo quyền lợi cho thành viên.</p>
                        <p>Quý khách hàng phải có trách nhiệm duy trì sự bảo mật tài khoản và mật khẩu của mình. Quý khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, tài khoản, số điện thoại đăng ký, mật khẩu, hộp thư điện tử của mình và hoạt động của mình trên Website.</p>
                        <p>Quý khách hàng có trách nhiệm thông báo ngay lập tức cho CINESTAR về những bất thường như hành vi truy cập, sử dụng và/hoặc chiếm giữ trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để CINESTAR có biện pháp giải quyết phù hợp. CINESTAR không chịu bất kỳ trách nhiệm nào, dù trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra do quý khách hàng khi quý khách hàng không tuân thủ những quy định này.</p>
                        <p>Quý khách hàng có trách nhiệm đảm bảo các bộ phim, chương trình, hoặc sản phẩm quý khách hàng mua từ CINESTAR phù hợp với độ tuổi của quý khách hàng. CINESTAR có quyền đơn phương từ chối cung cấp dịch vụ, đóng tài khoản cá nhân, xóa bỏ hoặc thay đổi nội dung, hoặc hủy đơn hàng của quý khách hàng khi phát hiện quý khách hàng có những vi phạm các&nbsp;quy định tại Điều Kiện và Điều Khoản Giao Dịch&nbsp;này.</p>
                        <p><strong>4. QUYỀN TRUY CẬP</strong></p>
                        <p>Với điều kiện quý khách hàng đồng ý và tuân thủ theo các&nbsp;Điều Kiện và Điều Khoản Giao Dịch, quý khách hàng có quyền truy cập và sử dụng các dịch vụ của CINESTAR. Quyền truy cập này không bao gồm bất kỳ giao dịch mua đi bán lại hoặc sử dụng vì mục đích thương mại các dịch vụ và nội dung của CINESTAR; các thông tin mô tả, đánh giá, bình luận; bất kỳ sự sao chép hoặc tải (download) thông tin để phục vụ lợi ích của bên thứ ba; hoặc việc sử dụng các công cụ khai thác dữ liệu.</p>
                        <p>CINESTAR có quyền khiếu nại tất cả các hành động sao chép, sử dụng với mục đích thương mại mà không được sự đồng ý từ CINESTAR. Quý khách hàng có thể bị tước quyền truy cập vào CINESTAR nếu quý khách hàng không tuân theo các&nbsp;Điều Kiện và Điều Khoản Giao Dịch&nbsp;này.</p>
                        <p><strong>5. ĐẶT VÉ TRỰC TUYẾN</strong></p>
                        <p>Tính năng đặt vé trực tuyến hiện chỉ áp dụng cho thành viên của CINESTAR. Quý khách hàng vui lòng tham khảo thông tin đăng ký thành viên trên Website.</p>
                        <p>Thông thường, CINESTAR mở bán vé trực tuyến trước ngày chiếu phim, tuy nhiên điều này phụ thuộc vào lịch chiếu mỗi phim, mỗi rạp. Nếu suất chiếu quý khách hàng muốn đặt chưa được hiển thị trên Website vào thời điểm quý khách hàng đặt vé, xin vui lòng quay lại sau, hoặc liên hệ tới số điện thoại hotline: 028.7300 8881 để biết thêm thông tin chi tiết.</p>
                        <p>Thời gian đóng chức năng mua vé trực tuyến là 30 phút trước giờ chiếu phim hoặc khi suất chiếu đã được bán hết vé. Sau thời gian này, quý khách hàng có thể đến liên hệ trực tiếp tại Quầy bán vé của rạp chiếu phim để mua vé.</p>
                        <p>CINESTAR không cam kết giữ chỗ ngồi cho quý khách hàng cho đến khi quý khách hàng hoàn tất thanh toán cho đơn hàng của mình.</p>
                        <p>Quý khách hàng có thể đặt chỗ cho tối đa 10 vé trong mỗi lần thực hiện.</p>
                        <p>Khi tiến hành các bước thanh toán, cần đọc kĩ các thông tin trên màn hình về rạp chiếu phim, tên phim, ngày chiếu, suất chiếu, giá thành, chỗ ngồi và đồ ăn (nếu có), thông tin email. Số điện thoại di động… trước khi hoàn tất việc xác nhận tất cả các thông tin về vé, đồ ăn.</p>
                        <p>Quý khách hàng thanh toán giao dịch đặt vé/hàng hóa theo quy định về Thanh toán tại Điều Kiện và Điều Khoản Giao Dịch này trước khi nhận mã đặt vé của giao dịch đó. Khi quý khách hàng nhấn (click) vào ô “Thanh toán” để tiến hành thanh toán đơn hàng có nghĩa là quý khách hàng xác nhận đã rà soát thông tin đơn hàng; và quý khách hàng đồng ý là các quy định trong Điều Kiện và Điều Khoản Giao Dịch này sẽ được áp dụng cho giao dịch mua vé/hàng hóa (đồ ăn, nước uống) trong giao dịch đó.</p>
                        <p>Email và tin nhắn (SMS) xác nhận đặt vé/hàng hóa: sau khi hoàn thành việc thanh toán vé/hàng hóa trực tuyến, quý khách hàng sẽ nhận được thư xác nhận thông tin chi tiết vé/hàng hóa đã thanh toán thông qua địa chỉ thư điện tử (email) và/hoặc số điện thoại di động mà quý khách hàng đã cung cấp cho CINESTAR. Email xác nhận thông tin đặt vé/hàng hóa có thể đi vào hộp thư rác (spam mail) của quý khách hàng, vì vậy hãy kiểm tra chúng thật kỹ trước khi liên lạc với CINESTAR.</p>
                        <p>Bằng việc thanh toán qua Website này, quý khách hàng chấp nhận vị trí ghế ngồi mà quý khách hàng đã đặt. Quý khách hàng đồng ý rằng, trong những trường hợp có sự thay đổi về chương trình phim hoặc bất khả kháng, CINESTAR có quyền hoàn trả lại bất kỳ vé nào từ việc mua bán qua Website này hoặc thực hiện việc chuyển vé cho quý khách hàng qua suất chiếu khác theo yêu cầu của quý khách hàng.</p>
                        <p>Trong suốt quá trình đăng ký, quý khách hàng đồng ý nhận email quảng cáo từ Website. Sau đó, nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách tắt chức năng này.</p>
                        <p><strong>6. XÁC LẬP GIAO DỊCH</strong></p>
                        <p>Mọi thông tin về phim/hàng hóa đưa ra trên Website trong bất kỳ trường hợp nào không được hiểu là đề nghị giao kết hợp đồng của CINESTAR tới quý khách hàng. Để sử dụng được tính năng của Website, quý khách hàng phải thực hiện việc đăng ký thành viên theo hướng dẫn tại Website.</p>
                        <p>Các bước hình thành giao dịch như sau:</p>
                        <p>Bước 1: Khách Hàng đặt hàng và thanh toán trên Website sẽ hình thành một đơn đặt chỗ/hàng hóa ("<strong>Đơn hàng</strong>").</p>
                        <p>Bước 2: CINESTAR gửi&nbsp;<strong>xác nhận</strong>&nbsp;mã xác nhận Đơn hàng thông qua một trong các phương thức sau:</p>
                        <p>-&nbsp;Qua địa chỉ email mà Khách Hàng đã đăng ký tại Website; hoặc</p>
                        <p>- Qua tin nhắn (SMS) tới số điện thoại di động của Khách Hàng với nội dung: mã đơn hàng, xác nhận xử lý thành công, thông tin liên lạc.</p>
                        <p>Giao dịch giữa CINESTAR và Khách Hàng chỉ xác lập và có hiệu lực kể từ thời điểm CINESTAR gửi xác nhận như nêu tại Bước 2.</p>
                        <p><strong><u>Lưu ý</u></strong><strong>:</strong>&nbsp;Trong quá trình xử lý Đơn hàng của Khách Hàng, CINESTAR có quyền không xác nhận Đơn hàng trong một số trường hợp bao gồm nhưng không giới hạn: CINESTAR không thể đáp ứng các điều kiện giao dịch trong Đơn hàng của Khách Hàng do nguyên nhân khách quan, do lỗi kỹ thuật từ hệ thống hoặc do sự kiện bất khả kháng;</p>
                        <p>CINESTAR sẽ cập nhật thông tin trạng thái Đơn hàng không được xác nhận trong hệ thống quản lý tài khoản của Khách Hàng trên Website để Khách Hàng theo dõi.</p>
                        <p><strong>7. CÁCH THỨC THỰC HIỆN GIAO DỊCH </strong></p>
                        <p>Quý khách hàng khi mua vé/hàng hóa trực tuyến tại Website này phải đăng nhập tài khoản thành viên CINESTAR và thực hiện các thao tác theo trình tự sau:</p>
                        <p>Bước 1: Khách Hàng lựa chọn phim, rạp chiếu phim, ngày chiếu, suất chiếu.</p>
                        <p>Bước 2: Khách Hàng lựa chọn loại vé, số lượng vé.</p>
                        <p>Bước 3: Khách Hàng chọn ghế, chọn đồ ăn, nước uống (nếu cần).</p>
                        <p>Bước 4: Thanh toán bằng các hình thức thanh toán online qua thẻ tín dụng (Visa, Master card..), thẻ ATM, ZaloPay,Momo.</p>
                        <p>Bước 5: Khách Hàng nhận mã đặt chỗ (xác nhận Đơn hàng) qua email và tin nhắn (SMS).</p>
                        <p>Bước 6: Khách Hàng cung cấp mã đặt vé (xác nhận Đơn hàng) và các thông tin tài khoản thành viên CINESTAR dùng để đặt vé để nhận vé/hàng hóa tại Quầy bán vé của rạp chiếu phim. Khách Hàng chỉ có thể nhận vé/hàng hóa tại rạp chiếu phim đã đặt vé xem phim. Nếu Khách Hàng không cung cấp được thông tin tài khoản CINESTAR và mã đặt vé (xác nhận Đơn hàng), CINESTAR có quyền từ chối xuất vé/giao hàng hóa cho Khách Hàng.</p>
                        <p><strong>8. THÔNG TIN PHIM, HÀNG HÓA, CHƯƠNG TRÌNH, SỰ KIỆN</strong></p>
                        <p>CINESTAR luôn cố gắng cung cấp cho quý khách hàng những thông tin chính xác và đa chiều về các bộ phim, hàng hóa hoặc các chương trình, sự kiện trên Website.</p>
                        <p>Trong trường hợp vé, hàng hóa của quý khách hàng nhận được không tương ứng với chỗ ngồi hay đúng như mô tả trong phần thông tin sản phẩm khi đặt mua trên Website, quý khách hàng vui lòng liên hệ với Bộ phận chăm sóc khách hàng của CINESTAR tại quầy vé trong thời gian sớm nhất kể từ khi nhận vé, hàng hóa, nhưng phải trước giờ chiếu phim ít nhất 30 phút, đồng thời đảm bảo sản phẩm trong tình trạng chưa qua sử dụng để được hỗ trợ đổi trả.</p>
                        <p>CINESTAR không chịu bất kỳ trách nhiệm nào liên quan đến mức độ yêu thích của quý khách hàng đối với bộ phim, hàng hóa, chương trình, hoặc sự kiện.</p>
                        <p><strong>9. TIÊU CHÍ PHÂN LOẠI PHIM THEO LỨA TUỔI</strong></p>
                        <p>Căn cứ Thông tư 12/2015/TT-BVHTTDL của Bộ Văn hóa, Thể thao và Du lịch về việc sửa đổi, bổ sung một số điều của Quy chế thẩm định và cấp giấy phép phổ biến phim ban hành kèm theo Quyết định 49/2008/QĐ-BVHTTDL ngày 09/07/2008 của Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch có hiệu lực thi hành từ ngày 01/01/2017, tiêu chí phân loại phim theo lứa tuổi được quy định như sau:</p>
                        <ul>
                            <li>
                                <p>P: Phim được phép phổ biến rộng rãi đến mọi đối tượng;</p>
                            </li>
                            <li>
                                <p>C13: Phim cấm phổ biến đến khán giả ở lứa tuổi dưới 13;</p>
                            </li>
                            <li>
                                <p>C16: Phim cấm phổ biến đến khán giả ở lứa tuổi dưới 16;</p>
                            </li>
                            <li>
                                <p>C18: Phim cấm phổ biến đến khán giả ở lứa tuổi dưới 18.</p>
                            </li>
                        </ul>
                        <p>Mức độ phổ biến phim được duyệt bởi Cục Điện Ảnh thuộc Bộ Văn hóa Thể thao và Du lịch. Do đó, khi quý khách hàng tiến hành đặt vé và thanh toán, quý khách hàng phải hoàn toàn chịu trách nhiệm với việc độ tuổi của quý khách hàng được phép xem bộ phim mà quý khách hàng lựa chọn. Khi đến lấy vé tại quầy vé, nhân viên CINESTAR có thể yêu cầu quý khách hàng xuất trình giấy tờ tùy thân để chứng minh độ tuổi qui định.</p>
                        <p>Vì vậy, quý khách hàng khi xem phim thuộc các phân loại trên vui lòng mang theo giấy tờ tùy thân thể hiện ngày tháng năm sinh và có dán ảnh để nhận diện nhằm đảm bảo việc tuân thủ theo quy định, cụ thể như:</p>
                        <ul>
                            <li>
                                <p>C13: Hộ chiếu, Thẻ học sinh, Thẻ bảo hiểm y tế, Thẻ thư viện, … còn hiệu lực;</p>
                            </li>
                            <li>
                                <p>C16: CMND, Hộ chiếu, Thẻ học sinh, Thẻ thư viện,… còn hiệu lực;</p>
                            </li>
                            <li>
                                <p>C18: CMND, Hộ chiếu, Bằng lái xe, Thẻ HSSV, … còn hiệu lực.</p>
                            </li>
                        </ul>
                        <p>Quý khách hàng vui lòng chứng minh được độ tuổi phù hợp với phim được phân loại như trên. CINESTAR có quyền từ chối việc bán vé hoặc từ chối cho vào phòng chiếu nếu quý khách hàng không tuân thủ đúng theo quy định.</p>
                        <p><strong>10. GIÁ CẢ</strong></p>
                        <p>Trừ khi có ghi chú khác bằng văn bản, mức giá được hiển thị cho mỗi loại sản phẩm trên Website của CINESTAR là mức giá bán lẻ cuối cùng của sản phẩm đã bao gồm thuế Giá trị gia tăng (VAT).</p>
                        <p>Giá vé có thể thay đổi tùy thời điểm và chương trình khuyến mãi kèm theo và sẽ được hiển thị rõ tại Website khi quý khách hàng tiến hành đặt hàng.</p>
                        <p>CINESTAR không cam kết mức giá của chỗ ngồi quý khách hàng đặt sẽ không thay đổi cho đến khi quý khách hàng đặt vé. Tuy nhiên, đối với những chỗ ngồi bị sai giá, nếu như mức giá của chỗ ngồi trên thực tế cao hơn mức giá hiển thị trên CINESTAR, thì CINESTAR sẽ liên lạc trực tiếp với quý khách hàng về vấn đề này.</p>
                        <p><strong>11. TÌNH TRẠNG CHỖ NGỒI</strong></p>
                        <p>CINESTAR không cam kết chỗ ngồi quý khách hàng đang chọn chưa được khách hàng khác đặt cho đến khi quý khách hàng bắt đầu thanh toán cho Đơn hàng của mình. Tuy nhiên, nếu quý khách hàng không nhận được đúng số ghế mà quý khách hàng đã đặt vì bất kỳ lý do gì, quý khách hàng vui lòng liên lạc với với Bộ phận chăm sóc khách hàng của CINESTAR tại Quầy vé hoặc số điện thoại hotline: 028.7300 8881 hoặc qua email: cskh<a href="mailto:hotro@cinestar.com.vn">@cinestar.com.vn</a>.</p>
                        <p><strong>12. THANH TOÁN</strong></p>
                        <p>Xin quý khách hàng vui lòng đọc kỹ các điều khoản về thanh toán cẩn thận trước khi sử dụng dịch vụ thanh toán trực tuyến. Với việc truy cập vào phần này của Website, quý khách hàng đã đồng ý với các điều khoản sử dụng của CINESTAR. Các điều khoản này có thể thay đổi theo thời gian và quý khách hàng sẽ phải tuân theo các điều khoản được hiển thị từ thời điểm quý khách hàng đọc được các điều khoản này.</p>
                        <p>CINESTAR cung cấp các hình thức thanh toán trực tuyến: Thẻ thanh toán quốc tế, Thẻ thanh toán nội địa, ZaloPay, Momo.</p>
                        <p>Trừ một số trường hợp có ghi chú riêng, thông thường quý khách hàng có thể lựa chọn một trong các hình thức thanh toán trên khi tiến hành đặt vé.</p>
                        <p>CINESTAR có quyền từ chối chấp nhận cho quý khách hàng thanh toán bằng Thẻ tín dụng trong một số trường hợp theo quyết định của CINESTAR.</p>
                        <p>Để đảm bảo an toàn thanh toán, quý khách hàng cần lưu ý:</p>
                        <p>-Chỉ thực hiện thanh toán trực tuyến tại cửa sổ liên kết từ CINESTAR chuyển đến.</p>
                        <p>-Sử dụng và bảo quản thẻ (thẻ tín dụng, thẻ ATM,…) và thông tin tài khoản/thông tin thẻ cẩn thận.</p>
                        <p>-Không cho người khác mượn hoặc sử dụng thẻ/tài khoản thành viên để mua vé/hàng hóa tại CINESTAR. Ngay khi phát hiện giao dịch phát sinh bất thường nào tại CINESTAR, quý khách hàng cần liên hệ ngay với Bộ phận chăm sóc khách hàng của CINESTAR để được xử lý kịp thời.</p>
                        <p>Trong mọi trường hợp, với thẻ tín dụng/ghi nợ quốc tế, quý khách hàng vui lòng không để lộ mã số bảo mật, bộ ba kí tự số được in ở mặt sau của thẻ để bảo mật thông tin thẻ.</p>
                        <p>Kiểm tra tài khoản ngân hàng của mình thường xuyên để đảm bảo tất cả giao dịch qua thẻ đều nằm trong tầm kiểm soát.</p>
                        <p><strong>13. THƯ VÀ TIN NHẮN XÁC NHẬN ĐẶT VÉ</strong></p>
                        <p>Trong 30 phút kể từ khi thanh toán thành công, quý khách hàng sẽ nhận được thư xác nhận thông tin chi tiết vé đã thanh toán thông qua địa chỉ thư điện tử (email) mà quý khách hàng đã cung cấp cho CINESTAR. Ngoài ra, CINESTAR cũng sẽ gửi một tin nhắn (SMS) miễn phí, xác nhận mã số đặt vé/hàng hóa (đơn hàng) đến số điện thoại di động của quý khách hàng đã cung cấp cho CINESTAR. Lưu ý rằng tin nhắn này chỉ có tính chất dự phòng và CINESTAR chỉ chấp nhận số điện thoại di động tại Việt Nam.</p>
                        <p>CINESTAR không chịu trách nhiệm trong trường hợp các thông tin về địa chỉ email/số điện thoại di động quý khách hàng nhập không chính xác dẫn đến không nhận được thư xác nhận của CINESTAR. Quý khách hàng vui lòng kiểm tra kỹ lại các thông tin này trước khi thực hiện thanh toán.</p>
                        <p>Nếu quý khách hàng cần hỗ trợ hay thắc mắc, khiếu nại về thư xác nhận mã đặt vé (mã Đơn hàng) thì vui lòng gọi đến số điện thoại hotline: <strong>028.7300 8881</strong> và/hoặc gửi email đến địa chỉ: <a href="mailto:cskh@cinestar.com.vn"><strong>cskh@cinestar.com.vn</strong></a> để được xử lý. Đối với khiếu nại thì cơ sở để giải quyết khiếu nại là thông qua email và CINESTAR chỉ chấp nhận khi khiếu nại được gửi từ email. Vì vậy, nếu quý khách hàng có bất kỳ khiếu nại gì liên quan đến thư xác nhận mã đặt vé (mã Đơn hàng) thì ngoài việc gọi điện thoại đến số hotline, quý khách hàng vui lòng gửi email đến địa chỉ email nêu trên để được xử lý. Sau 60 phút kể từ khi giao dịch thanh toán thành công, nếu CINESTAR không nhận được email nào từ phía quý khách hàng thì coi như mọi trách nhiệm của CINESTAR đã hoàn thành. CINESTAR không chấp nhận giải quyết bất kỳ khiếu nại, khiếu kiện nào sau khoảng thời gian trên.</p>
                        <p>CINESTAR không hỗ trợ xử lý và sẽ không chịu trách nhiệm trong trường hợp đã gửi thư xác nhận mã vé đến địa chỉ email của quý khách hàng nhưng vì một lý do nào đó mà quý khách hàng không thể đến xem phim.</p>
                        <p>Email xác nhận thông tin đặt vé có thể đi vào hộp thư rác (spam mail) của quý khách hàng, vì vậy hãy kiểm tra chúng thật kỹ trước khi liên lạc với CINESTAR.</p>
                        <p><strong>14. NHẬN VÉ, HÀNG HÓA</strong></p>
                        <p>Quý khách hàng vui lòng kiểm tra lại những xác nhận trực tuyến, trong email và/hoặc trên thiết bị di động của quý khách hàng một cách cẩn thận vì chúng sẽ cung cấp cho quý khách hàng những thông tin quan trọng để nhận vé cho suất chiếu hoặc hàng hóa mà quý khách hàng đã chọn.</p>
                        <p>CINESTAR không cung ứng dịch vụ và cũng không có nghĩa vụ giao vé/hàng hóa đến địa chỉ của quý khách hàng.</p>
                        <p>Khi tới Quầy vé của rạp chiếu phim tương ứng, quý khách hàng hãy tìm các bảng chỉ dẫn tới khu vực Quầy bán vé để đổi vé cứng (vé được in trên giấy). Bên cạnh đó, quý khách hàng cần mang theo giấy tờ tùy thân có dán ảnh như: CMND, Hộ chiếu, Bằng lái xe, Thẻ sinh viên, Thẻ học sinh … để kiểm tra, đối chiếu khi cần thiết.</p>
                        <p>Rủi ro và quyền sở hữu vé/hàng hóa sẽ được chuyển cho quý khách hàng từ thời điểm quý khách hàng nhận vé/hàng hóa.</p>
                        <p>Trong mọi trường hợp, CINESTAR không chịu trách nhiệm đối với mọi thiệt hại/mất mát/tổn thất/hư hỏng mà quý khách hàng phải chịu sau thời điểm rủi ro được chuyển từ CINESTAR sang quý khách hàng, trừ khi do lỗi của CINESTAR gây ra.</p>
                        <p><strong>15. CHÍNH SÁCH HOÀN VÉ HAY ĐỔI VÉ</strong></p>
                        <p>Hiện tại, CINESTAR chưa có dịch vụ và chính sách hủy/đổi trả/hoàn tiền hoặc thay đổi thông tin vé/hàng hóa sau khi đã thanh toán trực tuyến thành công.</p>
                        <p>Hệ thống đặt vé trực tuyến của CINESTAR có liên kết với rất nhiều đối tác khác, bao gồm Cổng thanh toán ONEPAY, các ngân hàng, tổ chức tín dụng nội địa và quốc tế. Việc thanh toán thành công hay không phụ thuộc rất nhiều vào kết nối mạng của quý khách hàng, việc truyền dẫn, nhận và trả tín hiệu của các tổ chức đối tác trên.</p>
                        <p>CINESTAR chỉ thực hiện hoàn tiền trong trường hợp khi giao dịch, tài khoản của quý khách hàng đã bị trừ tiền nhưng hệ thống của CINESTAR không ghi nhận việc đặt vé của quý khách hàng và quý khách hàng không nhận được xác nhận đặt vé thành công. Khi đó, quý khách hàng vui lòng liên hệ với CINESTAR số điện thoại hotline: <strong>028.7300 8881</strong> và đồng thời gửi thông tin qua email: <a href="mailto:cskh@cinestar.com.vn"><strong>cskh@cinestar.com.vn</strong></a> để được hỗ trợ và xử lý.</p>
                        <p>Sau khi đã xác nhận các thông tin của quý khách hàng cung cấp về giao dịch không thành công, tùy theo từng loại tài khoản quý khách hàng sử dụng mà việc hoàn tiền sẽ có thời gian khác nhau:</p>
                        <ul>
                            <li>
                                <p>Thẻ ATM của các ngân hàng (nội địa): hoàn tiền trong 07 ngày làm việc.</p>
                            </li>
                            <li>
                                <p>Thẻ VISA/ MasterCard (Nội địa): hoàn tiền từ 30 đến 45 ngày làm việc.</p>
                            </li>
                        </ul>
                        <p>Lưu ý: Thời gian hoàn tiền không tính các ngày Thứ 7, Chủ nhật và Lễ, Tết</p>
                        <p>Trước khi thanh toán vé trực tuyến, CINESTAR khuyên quý khách hàng nên xác nhận lại tên phim, giờ chiếu và rạp chiếu phim của phim mà quý khách hàng muốn xem.</p>
                        <p><strong>16. QUY ĐỊNH VỀ BẢO MẬT</strong></p>
                        <p>CINESTAR coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin và việc thanh toán của thành viên. Thông tin cá nhân của thành viên trên Website được CINESTAR cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của CINESTAR. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của thành viên đó, trừ những trường hợp pháp luật có quy định khác.</p>
                        <p>Thông tin của thành viên trong quá trình thanh toán sẽ được mã hóa để đảm bảo an toàn.</p>
                        <p>Quý khách hàng không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Website cũng nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị đưa ra giải quyết trước pháp luật nếu cần thiết.</p>
                        <p>CINESTAR không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ ba nào về thông tin cá nhân của thành viên khi không có sự cho phép, đồng ý từ thành viên (quy định cụ thể tại Chính Sách Bảo Mật thông tin khách hàng được đăng tải trên Website này). Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trường hợp buộc phải cung cấp theo yêu cầu của tòa án, cơ quan nhà nước có thẩm quyền hoặc tuân theo quy định của pháp luật.</p>
                        <p>Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân thành viên, CINESTAR sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho quý khách hàng được biết.</p>
                        <p>Chi tiết quy định về bảo mật thông tin của thành viên được thực hiện theo&nbsp;<a href="https://www.adayroi.com/help/chinh-sach-bao-mat-thong-tin">Chính Sách Bảo Mật</a>&nbsp;đăng tải trên Website.</p>
                        <p><strong>17. TRÁCH NHIỆM PHÁP LÝ</strong></p>
                        <p>Trừ phi có ghi chú khác bằng văn bản, tất cả dịch vụ, thông tin, nội dung, công cụ, sản phẩm (bao gồm cả phần mềm) của CINESTAR hoặc được hiển thị trên Website và các sản phẩm liên quan của CINESTAR được cung cấp dựa trên các quy chế hoạt động của CINESTAR.</p>
                        <p>Quý khách hàng đồng ý rằng việc sử dụng các dịch vụ, thông tin, nội dung, công cụ và sản phẩm của CINESTAR hoặc được hiển thị trên Website và các sản phẩm liên quan của CINESTAR thuộc phạm trù rủi ro riêng của quý khách hàng. CINESTAR không bảo đảm cho bất kỳ dịch vụ, thông tin, nội dung, công cụ của CINESTAR hoặc được hiển thị trên Website và các sản phẩm liên quan của CINESTAR. Dữ liệu, phần mềm và các thông điệp truyền thông được gửi đi từ CINESTAR không chứa virut hay bất kỳ tác nhân gây hại nào cho quý khách hàng.</p>
                        <p>Trừ phi có ghi chú khác bằng văn bản, CINESTAR từ chối trách nhiệm pháp lý cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng các dịch vụ, thông tin, nội dung, công cụ và sản phẩm của CINESTAR hoặc được hiển thị trên Website và các sản phẩm liên quan của CINESTAR.</p>
                        <p>Nếu có bất kỳ nội dung quy định nào về từ chối bảo đảm và trách nhiệm pháp lý trái với các quy định pháp luật hiện hành, thì những nội dung quy định đó không có hiệu lực áp dụng đối với quý khách hàng.</p>
                        <p><strong>18. CHĂM SÓC KHÁCH HÀNG VÀ XỬ LÝ KHIẾU NẠI</strong></p>
                        <p>Trong trường hợp có bất kỳ thắc mắc hay khiếu nại nào, bao gồm nhưng không giới hạn ở chất lượng hàng hóa/dịch vụ, việc giao vé/hàng hóa, thái độ của nhân viên,… Quý khách hàng có thể liên hệ với Bộ Phận Chăm Sóc Khách Hàng của CINESTAR&nbsp;theo số điện thoại hotline:&nbsp;<strong>028.7300 8881</strong>&nbsp;hoặc email:&nbsp;<a href="mailto:cskh@cinestar.com.vn"><strong>cskh@cinestar.com.vn</strong></a>. Khi liên hệ với&nbsp;Bộ Phận Chăm Sóc Khách Hàng của CINESTAR, quý khách hàng phải cung cấp mã số Đơn hàng ghi trong email hoặc tin nhắn (SMS) xác nhận mã Đơn hàng mà CINESTAR gửi cho quý khách hàng.&nbsp;Bộ Phận Chăm Sóc Khách Hàng&nbsp;sẽ tiếp nhận và phản hồi lại cho quý khách hàng trong thời gian sớm nhất.</p>
                        <p><strong>19. BÌNH LUẬN, ĐÁNH GIÁ VÀ NHỮNG NỘI DUNG KHÁC</strong></p>
                        <p>Quý khách hàng có thể đăng tải các bình luận, nhận xét, đánh giá và gửi các gợi ý, ý tưởng, bình luận, câu hỏi, hoặc những loại thông tin khác nếu như những thông tin này không chứa các nội dung bất hợp pháp, đồi trụy, vi phạm thuần phong mỹ tục, đe dọa, khủng bố, phỉ báng, xâm phạm quyền riêng tư cá nhân, xâm phạm quyền sở hữu trí tuệ, hoặc những nội dung gây hại cho bên thứ ba và không chứa virus, nội dung vận động chính trị, nội dung mang tính thương mại, hoặc bất kỳ hình thức thư rác nào.</p>
                        <p>Khi quý khách hàng đăng tải thông tin hoặc gửi các loại tài liệu cho CINESTAR, thì CINESTAR có toàn quyền sử dụng, sao chép, thay đổi, biên dịch, công bố, hiển thị nội dung đó cho tất cả mọi người dưới bất kỳ hình thức nào trừ trường hợp có thỏa thuận khác giữa CINESTAR và người dùng.</p>
                        <p>Đồng thời, quý khách hàng cũng cho phép CINESTAR có quyền được sử dụng tên đi kèm với nội dung mà quý khách hàng gửi hoặc đăng tải. Quý khách hàng đảm bảo rằng quý khách hàng sở hữu và có toàn quyền sử dụng nội dung mà quý khách hàng đăng tải; rằng nội dung được đăng tải là hợp pháp và chính xác; rằng việc sử dụng các nội dung quý khách hàng cung cấp không vi phạm Điều Kiện và Điều Khoản Giao Dịch này và không gây hại cho bất kỳ bên thứ ba nào; và rằng quý khách hàng sẽ bồi thường cho CINESTAR nếu như có bất kỳ khiếu kiện nào phát sinh từ những nội dung mà quý khách hàng cung cấp. CINESTAR có quyền nhưng không phải là nghĩa vụ kiểm soát và thay đổi hoặc xóa bỏ bất kỳ nội dung nào. CINESTAR không chịu bất kỳ trách nhiệm pháp lý nào cho những nội dung được đăng tải từ người dùng hoặc bất kỳ bên thứ ba nào.</p>
                        <p><strong>20. LUẬT ÁP DỤNG VÀ GIẢI QUYẾT TRANH CHẤP</strong></p>
                        <p>Điều Kiện và Điều Khoản Giao Dịch này và các điều kiện, điều khoản, nội dung của Website và mọi vấn đề phát sinh trong quan hệ giao dịch giữa CINESTAR và Khách Hàng sẽ được điều chỉnh và giải thích theo luật pháp Việt Nam.</p>
                        <p>Mọi tranh chấp, khác biệt, khiếu nại phát sinh từ/hoặc liên quan đến nội dung của Điều Kiện và Điều Khoản Giao Dịch được thực hiện tại Website này sẽ được ưu tiên giải quyết thông qua thương lượng, hòa giải trên tinh thần thiện chí trong vòng ba mươi (30) ngày. Trường hợp các bên không tự giải quyết được, tranh chấp sẽ được đưa ra giải quyết tại Tòa án có thẩm quyền tại Thành phố Hồ Chí Minh.</p>
                        <p><strong>21. ĐIỀU KHOẢN CHUNG</strong></p>
                        <p>Các quy định được dẫn chiếu trong Điều Kiện và Điều Khoản Giao Dịch này là một phần không thể tách rời của Điều Kiện và Điều Khoản Giao Dịch. Nếu có bất cứ sự không thống nhất nào giữa Điều Kiện và Điều Khoản Giao Dịch này với bất cứ quy định nào khác về cùng một nội dung, nội dung của Điều Kiện và Điều Khoản Giao Dịch này sẽ được ưu tiên áp dụng.</p>
                        <p>Nếu có bất kỳ phần hay điều khoản, nội dung nào của Điều Kiện và Điều Khoản Giao Dịch này bị cơ quan nhà nước có thẩm quyền tuyên là không hợp pháp, vô hiệu theo pháp luật Việt Nam hoặc không thể thực hiện được toàn bộ hoặc một phần thì sẽ không làm ảnh hưởng đến tính hiệu lực của các phần, điều khoản, nội dung khác của Điều Kiện và Điều Khoản Giao Dịch này. Tất cả các nội dung, điều khoản còn lại của Điều Kiện và Điều Khoản Giao Dịch vẫn giữ nguyên hiệu lực.</p>
                        <p>CINESTAR cấp quyền sử dụng và truy cập Website để quý khách hàng có thể mua sắm các sản phẩm và dịch vụ trên Website theo các điều khoản và điều kiện quy định tại Website này.</p>
                        <p>Khi quý khách hàng truy cập và mua hàng trên Website đồng nghĩa với việc đồng ý thực hiện mọi nghĩa vụ quy định tại Điều Kiện và Điều Khoản Giao Dịch này. CINESTAR có quyền thay đổi, sửa đổi, bổ sung hoặc bỏ bớt bất kỳ nội dung nào trong Điều Kiện và Điều Khoản Giao Dịch vào bất kỳ lúc nào. Những thay đổi có hiệu lực áp dụng ngay khi được đăng tải trên Website mà không cần phải thông báo trước cho quý khách hàng. Sau khi những thay đổi được đăng tải trên Website và quý khách hàng vẫn tiếp tục thực hiện giao dịch trên Website có nghĩa là quý khách đồng ý, chấp nhận những thay đổi đó.</p>
                        <p>Một lần nữa, CINESTAR lưu ý: Quý khách hàng vui lòng cập nhật thường xuyên Website để biết những thay đổi hoặc đọc kỹ lại Điều Kiện và Điều Khoản Giao Dịch trước khi thực hiện giao dịch.</p>
                        <p>Nghiêm cấm sử dụng bất kỳ phần nào của Website với mục đích thương mại hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không được CINESTAR đồng ý và cho phép bằng văn bản.</p>
                        <p><strong>22. THÔNG TIN VỀ CINESTAR:</strong></p>
                        <ul>
                            <li>
                                <p>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO</p>
                            </li>
                            <li>
                                <p>Mã số thuế: 0312742744</p>
                            </li>
                            <li>
                                <p>Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</p>
                            </li>
                            <li>
                                <p>Hotline: 028.7300 8881&nbsp;</p>
                            </li>
                            <li>
                                <p>Email: <a href="mailto:cskh@cinestar.com.vn">cskh@cinestar.com.vn</a></p>
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div id="ascrail2007" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show="terms_and_condition_4" style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={8}>
                    <div className="term-bg">
                        <h2>Chính sách bảo mật</h2>
                        <p align="center"><strong>CHÍNH SÁCH BẢO MẬT THÔNG TIN</strong></p>
                        <p>&nbsp;</p>
                        <p><strong>1. TỔNG QUAN VỀ CHÍNH SÁCH BẢO MẬT</strong></p>
                        <p>&nbsp;</p>
                        <p>CINESTAR hiểu rằng Khách Hàng quan tâm đến việc dữ liệu cá nhân của Khách Hàng sẽ được sử dụng và chia sẻ như thế nào. CINESTAR rất coi trọng sự tin tưởng của Khách Hàng, vì vậy CINESTAR sẽ sử dụng những dữ liệu mà Khách Hàng cung cấp một cách cẩn thận và hợp lý, phù hợp với quy định của pháp luật.</p>
                        <p>&nbsp;</p>
                        <p>Website: www.cinestar.com.vn thuộc quyền sở hữu của Công ty Cổ phần Giải trí – Phát hành phim – Rạp chiếu phim Ngôi Sao (CINESTAR), địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM. Website này được quản lý điều hành bởi CINESTAR. Website này được sử dụng cho các hoạt động của CINESTAR, các chi nhánh trực thuộc, các công ty thành viên và các tổ chức liên quan (được gọi là CINESTAR trong văn bản này).</p>
                        <p>&nbsp;</p>
                        <p>CINESTAR cam kết tôn trọng quyền riêng tư và những vấn đề cá nhân của tất cả Khách Hàng trên website của CINESTAR (sau đây gọi là "Website”). CINESTAR nhận thức được tầm quan trọng của các dữ liệu cá nhân mà Khách Hàng đã cung cấp cho CINESTAR và tin rằng trách nhiệm của CINESTAR là quản lý đúng cách, bảo vệ và xử lý dữ liệu cá nhân của Khách Hàng.</p>
                        <p>&nbsp;</p>
                        <p>Chính Sách Bảo Mật Dữ Liệu Cá Nhân (sau đây gọi tắt là "Chính Sách Bảo Mật" hay "Chính Sách") được tạo ra nhằm cung cấp các thông tin tổng quát về việc CINESTAR sẽ xử lý dữ liệu cá nhân bao gồm việc: thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có liên quan mà Khách Hàng đã cung cấp cho CINESTAR khi tham gia truy cập, giao dịch trên Website của CINESTAR như thế nào, cho dù ở hiện tại hay trong tương lai; cũng như cách mà CINESTAR sẽ hỗ trợ Khách Hàng trước khi đưa ra bất cứ quyết định nào liên quan đến việc cung cấp dữ liệu cá nhân của Khách Hàng cho CINESTAR.</p>
                        <p>&nbsp;</p>
                        <p>"Dữ liệu cá nhân" là các thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể. Dữ liệu cá nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá nhân của Khách Hàng sau đây được gọi chung là “Thông Tin Khách Hàng”.</p>
                        <p>&nbsp;</p>
                        <p>Bằng cách sử dụng dịch vụ, đăng ký tài khoản với CINESTAR, ghé thăm Website của CINESTAR, hoặc truy cập vào dịch vụ, thực hiện giao dịch trên Website của CINESTAR hoặc các sản phẩm liên quan của CINESTAR và đánh dấu vào ô đồng ý với nội dung Chính Sách được hiểu là Khách Hàng đã được đọc, hiểu, thừa nhận và đồng ý các yêu cầu, và/hoặc các Chính Sách, thực tiễn áp dụng nêu trong Chính Sách Bảo Mật này (kể cả các phiên bản sửa đổi, bổ sung của Chính Sách), và Khách Hàng đồng ý với CINESTAR về việc xử lý dữ liệu cá nhân của Khách Hàng theo cách được mô tả trong tài liệu này.</p>
                        <p>&nbsp;</p>
                        <p>Nếu Khách Hàng không đồng ý với Chính Sách Bảo Mật này, vui lòng không sử dụng dịch vụ của CINESTAR hoặc truy cập Website của CINESTAR. Nếu CINESTAR thay đổi Chính Sách Bảo Mật, CINESTAR sẽ cập nhật thay đổi hoặc sửa đổi đó trên Website của CINESTAR. Phiên bản sửa đổi, bổ sung Chính Sách này (nếu có) sẽ có hiệu lực kể từ ngày việc sửa đổi, bổ sung Chính Sách được đăng tải, thông báo trên Website. CINESTAR bảo lưu quyền sửa đổi Chính Sách Bảo Mật này vào bất cứ lúc nào.</p>
                        <p>&nbsp;</p>
                        <p>CINESTAR kính mong Khách Hàng vui lòng đọc Chính Sách Bảo Mật một cách cẩn thận. Nếu Khách Hàng có bất kỳ câu hỏi liên quan đến các thông tin này hoặc thực tiễn bảo mật của CINESTAR, xin vui lòng liên hệ với CINESTAR theo thông tin ở phần cuối của Chính Sách Bảo Mật này.</p>
                        <p>&nbsp;</p>
                        <p><strong>2. PHẠM VI XỬ LÝ THÔNG TIN</strong></p>
                        <p>&nbsp;</p>
                        <p>Thông tin do Khách Hàng cung cấp: CINESTAR thu thập tất cả những thông tin, dữ liệu cá nhân (“Thông Tin Khách Hàng”) mà Khách Hàng đăng tải hoặc các thao tác mà Khách Hàng thực hiện trên Website của CINESTAR.</p>
                        <p>&nbsp;</p>
                        <p>Dữ liệu cá nhân được thu thập trong phạm vi thực hiện Chính Sách này là “Dữ liệu cá nhân cơ bản” bao gồm 09 thông tin cá nhân được liệt kê sau đây:</p>
                        <p>&nbsp;</p>
                        <p>1. Họ và tên;</p>
                        <p>2. Ngày, tháng, năm sinh;</p>
                        <p>3. Giới tính</p>
                        <p>4. Địa chỉ cư trú;</p>
                        <p>5. Số điện thoại;</p>
                        <p>6. Số chứng minh nhân dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe;</p>
                        <p>7. Thông tin về tài khoản số thanh toán của cá nhân; và</p>
                        <p>8. Địa chỉ email.</p>
                        <p>&nbsp;</p>
                        <p>Khách Hàng cam kết cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý với Chính Sách Bảo Mật này. Trong trường hợp (các) dữ liệu được cung cấp không chính xác thì Khách Hàng tự chịu trách nhiệm đối với mọi thiệt hại phát sinh cho CINESTAR và/hoặc bên thứ ba bất kỳ và tự chịu trách nhiệm trước pháp luật.</p>
                        <p>&nbsp;</p>
                        <p><u>Lưu ý:</u> Khách Hàng là người dưới 16 tuổi chỉ được đánh dấu vào ô đồng ý sau khi được sự đồng ý của cha, mẹ hoặc người giám hộ hợp pháp. Bằng việc đánh dấu vào ô đồng ý, CINESTAR được hiểu rằng Khách Hàng và người người giám hộ hợp pháp của mình đã đồng ý với Chính Sách Bảo Mật này và do đó CINESTAR được quyền miễn trừ mọi hậu quả pháp lý phát sinh (nếu có) trong trường hợp phát hiện có sự gian dối, không trung thực từ phía Khách Hàng tại mục này.</p>
                        <p>&nbsp;</p>
                        <p><strong>3. MỤC ĐÍCH XỬ LÝ THÔNG TIN</strong></p>
                        <p>&nbsp;</p>
                        <p>Mục đích thu thập, xử lý Thông Tin Khách Hàng bao gồm các hoạt động sau đây:</p>
                        <p>&nbsp;</p>
                        <p>1. Cung cấp các dịch vụ, sản phẩm theo nhu cầu của Khách Hàng;</p>
                        <p>2. Liên hệ xác nhận khi Khách Hàng đăng ký sử dụng dịch vụ, xác lập giao dịch trên Website;</p>
                        <p>3. Thực hiện việc quản lý Website, gửi thông tin cập nhật về Website, các chương trình khuyến mại, ưu đãi/tri ân tới Khách Hàng;</p>
                        <p>4. Bảo đảm quyền lợi của Khách Hàng khi phát hiện các hành động giả mạo, phá hoại tài khoản, lừa đảo Khách Hàng;</p>
                        <p>5. Liên lạc, hỗ trợ, giải quyết với Khách Hàng trong các trường hợp đặc biệt.</p>
                        <p>&nbsp;</p>
                        <p>CINESTAR chỉ sử dụng Thông Tin Khách Hàng cho các mục đích nêu trên hoặc mục đích khác (nếu có) với điều kiện đã thông báo và được sự đồng ý của Khách Hàng.</p>
                        <p>&nbsp;</p>
                        <p>Khách Hàng hiểu và đồng ý rằng CINESTAR có nghĩa vụ phải cung cấp Thông Tin Khách Hàng theo yêu cầu/quyết định của Cơ quan nhà nước có thẩm quyền và/hoặc quy định pháp luật. CINESTAR sẽ được miễn trừ mọi trách nhiệm liên quan đến bảo mật thông tin trong trường hợp này.</p>
                        <p>&nbsp;</p>
                        <p>Để tránh nghi ngờ, trong quá trình giao dịch thanh toán tại Website, CINESTAR chỉ lưu giữ thông tin chi tiết về đơn hàng đã thanh toán của khách hàng, các thông tin về tài khoản ngân hàng của khách hàng sẽ không được lưu giữ.</p>
                        <p>&nbsp;</p>
                        <p><strong>4. LƯU GIỮ VÀ BẢO MẬT THÔNG TIN</strong></p>
                        <p>&nbsp;</p>
                        <p>- Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa Khách Hàng và CINESTAR, đều được lưu giữ và bảo mật bởi hệ thống của CINESTAR.</p>
                        <p>&nbsp;</p>
                        <p>- CINESTAR sẽ lưu trữ Thông Tin Khách Hàng theo quy định pháp luật hiện hành. Nếu Khách Hàng ngừng sử dụng Website, hoặc việc cho phép Khách Hàng sử dụng Website và/hoặc các dịch vụ bị chấm dứt, CINESTAR có thể tiếp tục lưu trữ, sử dụng và/hoặc tiết lộ Thông Tin Khách Hàng phù hợp với Chính Sách Bảo Mật và nghĩa vụ của CINESTAR theo quy định của pháp luật.</p>
                        <p>&nbsp;</p>
                        <p>- Khách Hàng tuyệt đối không được có bất kỳ hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay đổi cấu trúc dữ liệu của CINESTAR, cũng như bất kỳ hành vi nào khác nhằm phát tán, cổ vũ cho các hoạt động với mục đích can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống CINESTAR, cũng như các các hành vi mà pháp luật Việt Nam nghiêm cấm. Trong trường hợp CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán các thông tin trái phép,… CINESTAR có quyền chuyển Thông Tin Khách Hàng theo yêu cầu của cơ quan có thẩm quyền để xử lý theo quy định pháp luật.</p>
                        <p>&nbsp;</p>
                        <p><strong>5. THỜI GIAN LƯU TRỮ THÔNG TIN</strong></p>
                        <p>&nbsp;</p>
                        <p>Thông Tin Khách Hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện đóng tài khoản. Đối với các tài khoản đã đóng, CINESTAR vẫn lưu trữ Thông Tin Khách Hàng và truy cập của Khách Hàng để phục vụ cho mục đích phòng chống gian lận, điều tra, giải đáp thắc mắc ...</p>
                        <p>Các thông tin này sẽ được CINESTAR lưu trữ trong hệ thống máy chủ tối đa mười hai (12) tháng kể từ ngày Khách Hàng đóng tài khoản trên CINESTAR. Sau khi thời hạn này kết thúc, CINESTAR có thể tiến hành xóa vĩnh viễn thông tin cá nhân của Khách Hàng.</p>
                        <p>&nbsp;</p>
                        <p><strong>6. TỔ CHỨC, CÁ NHÂN ĐƯỢC XỬ LÝ THÔNG TIN</strong></p>
                        <p>&nbsp;</p>
                        <p>CINESTAR và các công ty thành viên, các chi nhánh của mình sẽ thực hiện xử lý dữ liệu thông tin cá nhân của Khách Hàng theo các mục nêu trên. CINESTAR không cung cấp Thông Tin Khách Hàng cho bất kỳ bên thứ ba nào khác trừ các trường hợp ngoại lệ không cần sự đồng ý của Khách Hàng theo quy định của pháp luật.</p>
                        <p>&nbsp;</p>
                        <p>Các tổ chức, cá nhân được liệt kê sau đây có thể được xử lý dữ liệu cá nhân sau khi được sự đồng ý của Khách Hàng:</p>
                        <p>&nbsp;</p>
                        <p>- Nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên thứ ba khác mà CINESTAR sử dụng để hỗ trợ hoạt động kinh doanh của CINESTAR</p>
                        <p>- Các đối tác có ký kết thỏa thuận liên kết chăm sóc khách hàng với CINESTAR. Việc chia sẻ này giúp CINESTAR có thể cung cấp cho Khách Hàng các thông tin về các sản phẩm và dịch vụ, liên quan đến hàng hóa, dịch vụ và vấn đề khác mà Khách Hàng có thể quan tâm. Trong trường hợp các chi nhánh, công ty thành viên của CINESTAR và các công ty liên kết của CINESTAR được cấp quyền truy cập Thông Tin Khách Hàng, họ sẽ phải tuân thủ nghiêm ngặt các quy định được mô tả trong Chính Sách Bảo Mật này.</p>
                        <p>- Các bên thứ ba là đối tác, đại lý của CINESTAR: CINESTAR có thể chuyển Thông Tin Khách Hàng cho các đại lý và nhà thầu phụ để làm phân tích dữ liệu, tiếp thị, quảng cáo và hỗ trợ dịch vụ khách hàng.</p>
                        <p>- Các đơn vị kinh doanh khác mà CINESTAR có kế hoạch sáp nhập hoặc mua lại: Trong trường hợp này, CINESTAR sẽ yêu cầu những đơn vị đó tuân thủ nghiêm ngặt theo Chính Sách Bảo Mật này.</p>
                        <p>&nbsp;</p>
                        <p>Chính Sách Bảo Mật này không phải là một lời hứa rằng dữ liệu cá nhân của Khách Hàng sẽ không bao giờ được tiết lộ, ngoại trừ như được mô tả trong Chính Sách Bảo Mật này.</p>
                        <p>&nbsp;</p>
                        <p><strong>7. QUYỀN VÀ NGHĨA VỤ CỦA KHÁCH HÀNG</strong></p>
                        <p>&nbsp;</p>
                        <p>Trừ trường hợp pháp luật có quy định khác, quyền và nghĩa vụ của Khách Hàng đối với dữ liệu cá nhân được quy định chi tiết như sau:</p>
                        <p>&nbsp;</p>
                        <p>A. Quyền của Khách Hàng</p>
                        <p>1. Quyền được biết</p>
                        <p>Khách Hàng được biết về hoạt động xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                        <p>2. Quyền đồng ý</p>
                        <p>Khách Hàng được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của mình, trừ trường hợp pháp luật cho phép CINESTAR xử lý mà không cần có sự đồng ý của Khách Hàng.</p>
                        <p>3. Quyền truy cập</p>
                        <p>Khách Hàng được truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                        <p>4. Quyền rút lại sự đồng ý</p>
                        <p>Khách Hàng được quyền rút lại sự đồng ý của mình, trừ trường hợp luật có quy định khác.</p>
                        <p>5. Quyền xóa dữ liệu</p>
                        <p>Khách Hàng được xóa hoặc yêu cầu xóa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                        <p>6. Quyền hạn chế xử lý dữ liệu</p>
                        <p>a) Khách Hàng được yêu cầu hạn chế xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác;</p>
                        <p>b) Việc hạn chế xử lý dữ liệu được thực hiện trong 72 giờ sau khi có yêu cầu của Khách Hàng, với toàn bộ dữ liệu cá nhân mà chủ thể dữ liệu yêu cầu hạn chế, trừ trường hợp luật có quy định khác.</p>
                        <p>7. Quyền cung cấp dữ liệu</p>
                        <p>Khách Hàng được yêu cầu CINESTAR và các bên liên quan cung cấp cho bản thân dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                        <p>8. Quyền phản đối xử lý dữ liệu</p>
                        <p>a) Khách Hàng được phản đối CINESTAR và các bên liên quan nhằm ngăn chặn hoặc hạn chế tiết lộ dữ liệu cá nhân hoặc sử dụng cho mục đích quảng cáo, tiếp thị, trừ trường hợp luật có quy định khác;</p>
                        <p>b) CINESTAR và các bên liên quan thực hiện yêu cầu của Khách Hàng trong 72 giờ sau khi nhận được yêu cầu, trừ trường hợp luật có quy định khác.</p>
                        <p>9. Quyền khiếu nại, tố cáo, khởi kiện</p>
                        <p>Khách Hàng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật.</p>
                        <p>10. Quyền yêu cầu bồi thường thiệt hại</p>
                        <p>Khách Hàng có quyền yêu cầu bồi thường thiệt hại theo quy định của pháp luật khi xảy ra vi phạm quy định về bảo vệ dữ liệu cá nhân của mình, trừ trường hợp các bên có thỏa thuận khác hoặc luật có quy định khác.</p>
                        <p>11. Quyền tự bảo vệ</p>
                        <p>Khách Hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự, luật khác có liên quan, hoặc yêu cầu cơ quan, tổ chức có thẩm quyền thực hiện các phương thức bảo vệ quyền dân sự theo quy định tại Điều 11 Bộ luật Dân sự.</p>
                        <p>&nbsp;</p>
                        <p>B. Nghĩa vụ của Khách Hàng</p>
                        <p>1. Tự bảo vệ dữ liệu cá nhân của mình; yêu cầu các tổ chức, cá nhân khác có liên quan bảo vệ dữ liệu cá nhân của mình.</p>
                        <p>2. Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.</p>
                        <p>3. Cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý cho phép xử lý dữ liệu cá nhân.</p>
                        <p>4. Tham gia tuyên truyền, phổ biến kỹ năng bảo vệ dữ liệu cá nhân.</p>
                        <p>5. Thực hiện quy định của pháp luật về bảo vệ dữ liệu cá nhân và tham gia phòng, chống các hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân.</p>
                        <p>&nbsp;</p>
                        <p><strong>8. THÔNG BÁO VÀ SỬA ĐỔI</strong></p>
                        <p>&nbsp;</p>
                        <p>Do CINESTAR liên tục cải thiện dịch vụ và sản phẩm để phục vụ Khách Hàng tốt hơn, nên Chính Sách Bảo Mật, Điều Kiện và Điều Khoản Giao Dịch, Quy Định Chung sẽ thường xuyên được thay đổi và cập nhật. CINESTAR có thể đăng tải trên Website hoặc có thể gửi email thông báo cho Khách Hàng về những thay đổi trong những chính sách của CINESTAR. Tuy nhiên, CINESTAR cũng khuyến khích Khách Hàng thường xuyên theo dõi trên Website để cập nhật những thay đổi trong chính sách của CINESTAR. Trừ trường hợp có văn bản với nội dung khác, Chính Sách Bảo Mật hiện tại của CINESTAR được áp dụng cho tất cả những thông tin mà CINESTAR có trong phạm vi xử lý Thông Tin Khách Hàng.</p>
                        <p>&nbsp;</p>
                        <p><strong>9. CAM KẾT CHUNG</strong></p>
                        <p>&nbsp;</p>
                        <p>Mọi thông tin cá nhân của Khách Hàng thu thập được từ Website sẽ được lưu giữ an toàn, chỉ có Khách Hàng mới có thể truy cập vào tài khoản cá nhân của mình bằng tên đăng nhập và mật khẩu do Khách Hàng chọn.</p>
                        <p>&nbsp;</p>
                        <p>CINESTAR cam kết bảo mật thông tin, không chia sẻ, tiết lộ, chuyển giao Thông Tin Khách Hàng, thông tin giao dịch trực tuyến trên Website cho bất kỳ bên thứ ba nào khi chưa được sự đồng ý của Khách Hàng, trừ các trường hợp pháp luật cho phép CINESTAR xử lý thông tin mà không cần đến sự đồng ý của Khách Hàng.</p>
                        <p>&nbsp;</p>
                        <p>CINESTAR, bằng nỗ lực tốt nhất của mình, sẽ áp dụng các giải pháp công nghệ để ngăn chặn các hành vi đánh cắp hoặc tiếp cận thông tin trái phép; sử dụng, thay đổi hoặc phá hủy thông tin trái phép. Tuy nhiên, CINESTAR không thể cam kết sẽ ngăn chặn được tất cả các hành vi xâm phạm, sử dụng thông tin cá nhân trái phép nằm ngoài khả năng kiểm soát của CINESTAR. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với bất kỳ khiếu nại, tranh chấp hoặc thiệt hại nào phát sinh từ hoặc liên quan đến việc truy cập, xâm nhập, sử dụng thông tin trái phép như vậy.</p>
                        <p>&nbsp;</p>
                        <p>Trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát Thông Tin Khách Hàng, gây ảnh hưởng xấu đến Khách Hàng, CINESTAR sẽ ngay lập tức thông báo cho Khách Hàng và trình vụ việc cho cơ quan chức năng điều tra xử lý.</p>
                        <p>&nbsp;</p>
                        <p>Khách Hàng có nghĩa vụ bảo mật tên đăng ký, mật khẩu và hộp thư điện tử của mình. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với các thiệt hại, tổn thất (nếu có) do Khách Hàng không tuân thủ quy định bảo mật này.</p>
                        <p>&nbsp;</p>
                        <p>Khách Hàng tuyệt đối không được có các hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay dổi dữ liệu của CINESTAR. Trong trường hợp CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán thông tin cá nhân trái phép… CINESTAR có quyền chuyển thông tin cá nhân của Khách Hàng cho các cơ quan có thẩm quyền để xử lý theo quy định của pháp luật.</p>
                        <p>&nbsp;</p>
                        <p><strong>10. THÔNG TIN LIÊN HỆ</strong></p>
                        <p>&nbsp;</p>
                        <p>Bất kỳ lúc nào Khách Hàng có bất kỳ câu hỏi, cần hỗ trợ, cần giải thích, khiếu nại hoặc quan tâm về việc bảo mật của CINESTAR hoặc các giao dịch của Khách Hàng với CINESTAR, xin vui lòng liên hệ CINESTAR theo thông tin sau:</p>
                        <p>&nbsp;</p>
                        <p>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO</p>
                        <p>Mã số thuế: 0312742744</p>
                        <p>Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</p>
                        <p>Hotline: 028.7300 8881</p>
                        <p>Email: cskh@cinestar.com.vn</p>
                    </div>
                </div>
                <div id="ascrail2008" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <div className="term-pop" data-show="terms_and_condition_5" style={{ height: '242px', marginTop: '-121px' }}>
                <a className="close-popup" href="javascript:void(0);" />
                <div className="scrollB" style={{ width: '960px', height: '202px', overflow: 'hidden', outline: 'none' }} tabIndex={9}>
                    <div className="term-bg">
                        <h2>Thông tin công ty</h2>
                        <ul>
                            <li>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO</li>
                            <li>Giấy CNĐKDN số: 0312742744, đăng ký lần đầu ngày 18/04/2014, đăng ký thay đổi lần thứ 2 ngày 15/09/2014, cấp bởi Sở KH&amp;ĐT TP.HCM</li>
                            <li>Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</li>
                            <li>Hotline: 028.7300 8881&nbsp;</li>
                            <li>COPYRIGHT 2015 CINESTAR. All RIGHTS RESERVED</li>
                        </ul>
                    </div>
                </div>
                <div id="ascrail2009" className="nicescroll-rails" style={{ width: '10px', zIndex: 2000, background: 'rgba(255, 255, 255, 0)', cursor: 'default', position: 'absolute', top: '0px', left: '950px', height: '202px', display: 'none' }}><div style={{ position: 'relative', top: '0px', float: 'right', width: '8px', height: '0px', backgroundColor: 'rgb(172, 138, 146)', border: '1px solid rgba(0, 0, 0, 0)', backgroundClip: 'padding-box', borderRadius: '5px' }} /></div></div>
            <form id="payment" method="post" action="https://cinestar.com.vn/redirectpayment">
                <input type="hidden" defaultValue name="amount" id="amount" />
                <input type="hidden" defaultValue name="seats" id="seats" />
                <input type="hidden" defaultValue name="combos" id="combos" />
                <input type="hidden" defaultValue name="cinema_id" id="cinema_id" />
                <input type="hidden" defaultValue name="cinema_name" id="cinema_name" />
                <input type="hidden" defaultValue name="movie_name" id="movie_name" />
                <input type="hidden" defaultValue name="payment_method" id="payment_method" />
                <input type="hidden" defaultValue name="movie_hour" id="movie_hour" />
                <input type="hidden" defaultValue name="movie_date" id="movie_date" />
                <input type="hidden" defaultValue name="pseats" id="pseats" />
                <input type="hidden" defaultValue name="room_name" id="room_name_01" />
                <input type="hidden" defaultValue name="coupon_code" id="coupon-code" />
                <input type="hidden" defaultValue name="coupon_box" id="coupon-box" />
                <input type="hidden" defaultValue name="coupon_con" id="coupon-con" />
                <input type="hidden" defaultValue name="coupon_discounted" id="coupon-discounted" />
                <input type="hidden" defaultValue name="user_name" id="user_name" />
                <input type="hidden" defaultValue name="user_email" id="user_email" />
                <input type="hidden" defaultValue name="user_phone" id="user_phone" />
            </form>
            <div className="overlay-menu" />
            <div className="go-top" style={{ display: 'none', opacity: 0 }} />
            <div className="scroll-down" style={{ display: 'none', opacity: 0 }} />
            <input type="hidden" defaultValue="https://cinestar.com.vn/" id="BASE_URL" />
        </div>
    )
}

export default Home