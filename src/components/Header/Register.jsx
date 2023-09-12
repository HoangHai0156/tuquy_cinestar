import React, { useRef } from 'react';

export default function Register(props) {
    const { registerShow } = props;

    return (
        <div
            className="tab-register"
            style={
                registerShow
                    ? { top: 'auto', left: '-108.8px', marginLeft: 'auto', display: 'block', opacity: '1' }
                    : { top: 'auto', left: '-108.8px', marginLeft: 'auto' }
            }
        >
            <div className="user-form register">
                <div className="icon-arrow" style={{ left: '264.8px' }} />
                <h3 className="user-title">Vui lòng nhập thông tin</h3>
                <form id="register-top">
                    <div className="require-col">
                        <label className="gender">
                            <input type="radio" name="gender" defaultValue={1} />
                            <span className="gender-name">Nam</span>
                            <span className="gender-shape" />
                        </label>
                        <label className="gender">
                            <input type="radio" name="gender" defaultValue={0} />
                            <span className="gender-name">Nữ</span>
                            <span className="gender-shape" />
                        </label>
                    </div>
                    <div className="require-col">
                        <div className="input-text name">
                            <input id="member_name" name="name" type="text" placeholder='HỌ TÊN (*)' />
                        </div>
                        <div className="input-text birth">
                            <input id="member_birthday" name="birthday" type="text" placeholder='DD/MM/YYYY ( Ngày sinh*)' />
                        </div>
                        <div className="input-text address">
                            <input id="member_address" name="address" type="text" placeholder='ĐỊA CHỈ (*)' />
                        </div>
                        <div className="input-text code">
                            <input id="member_cmnn" name="cmnn" type="text" placeholder='SỐ CMNN/BẰNG LÁI (*)' />
                        </div>
                        <div className="input-text tel">
                            <input id="member_phone" name="phone" type="text" placeholder='ĐIỆN THOẠI (*)' />
                        </div>
                        <div className="input-text email">
                            <input id="member_email" name="email" type="text" placeholder='EMAIL (*)' />
                        </div>
                        <div className="input-text username">
                            <input id="member_username" name="username" type="text" placeholder='TÊN ĐĂNG NHẬP (*)' />
                        </div>
                        <div className="input-text password">
                            <input id="member_password" name="password" type="password" placeholder='MẬT KHẨU (*)' />
                        </div>
                        <div className="input-text confirmpass">
                            <input id="member_password_confirm" name="password_confirm" type="password" placeholder='NHẬP LẠI MẬT KHẨU (*)' />
                        </div>
                        <div className="terms_condition_paypal" style={{ color: '#666' }}>
                            <div>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'center',
                                    }}
                                >
                                    <strong>CHÍNH SÁCH BẢO MẬT THÔNG TIN</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>1. TỔNG QUAN VỀ CHÍNH SÁCH BẢO MẬT</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    CINESTAR hiểu rằng Khách Hàng quan tâm đến việc dữ liệu cá nhân của Khách Hàng sẽ
                                    được sử dụng và chia sẻ như thế nào. CINESTAR rất coi trọng sự tin tưởng của Khách
                                    Hàng, vì vậy CINESTAR sẽ sử dụng những dữ liệu mà Khách Hàng cung cấp một cách cẩn
                                    thận và hợp lý, phù hợp với quy định của pháp luật.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Website: www.cinestar.com.vn thuộc quyền sở hữu của Công ty Cổ phần Giải trí – Phát
                                    hành phim – Rạp chiếu phim Ngôi Sao (CINESTAR), địa chỉ: 135 Hai Bà Trưng, phường
                                    Bến Nghé, Quận 1, TP.HCM. Website này được quản lý điều hành bởi CINESTAR. Website
                                    này được sử dụng cho các hoạt động của CINESTAR, các chi nhánh trực thuộc, các công
                                    ty thành viên và các tổ chức liên quan (được gọi là CINESTAR trong văn bản này).
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    CINESTAR cam kết tôn trọng quyền riêng tư và những vấn đề cá nhân của tất cả Khách
                                    Hàng trên website của CINESTAR (sau đây gọi là "Website”). CINESTAR nhận thức được
                                    tầm quan trọng của các dữ liệu cá nhân mà Khách Hàng đã cung cấp cho CINESTAR và tin
                                    rằng trách nhiệm của CINESTAR là quản lý đúng cách, bảo vệ và xử lý dữ liệu cá nhân
                                    của Khách Hàng.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Chính Sách Bảo Mật Dữ Liệu Cá Nhân (sau đây gọi tắt là "Chính Sách Bảo Mật" hay
                                    "Chính Sách") được tạo ra nhằm cung cấp các thông tin tổng quát về việc CINESTAR sẽ
                                    xử lý dữ liệu cá nhân bao gồm việc: thu thập, ghi, phân tích, xác nhận, lưu trữ,
                                    chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao
                                    chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các
                                    hành động khác có liên quan mà Khách Hàng đã cung cấp cho CINESTAR khi tham gia truy
                                    cập, giao dịch trên Website của CINESTAR như thế nào, cho dù ở hiện tại hay trong
                                    tương lai; cũng như cách mà CINESTAR sẽ hỗ trợ Khách Hàng trước khi đưa ra bất cứ
                                    quyết định nào liên quan đến việc cung cấp dữ liệu cá nhân của Khách Hàng cho
                                    CINESTAR.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    "Dữ liệu cá nhân" là các thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm
                                    thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể
                                    hoặc giúp xác định một con người cụ thể. Dữ liệu cá nhân bao gồm dữ liệu cá nhân cơ
                                    bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá nhân của Khách Hàng sau đây được gọi
                                    chung là “Thông Tin Khách Hàng”.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Bằng cách sử dụng dịch vụ, đăng ký tài khoản với CINESTAR, ghé thăm Website của
                                    CINESTAR, hoặc truy cập vào dịch vụ, thực hiện giao dịch trên Website của CINESTAR
                                    hoặc các sản phẩm liên quan của CINESTAR và đánh dấu vào ô đồng ý với nội dung Chính
                                    Sách được hiểu là Khách Hàng đã được đọc, hiểu, thừa nhận và đồng ý các yêu cầu,
                                    và/hoặc các Chính Sách, thực tiễn áp dụng nêu trong Chính Sách Bảo Mật này (kể cả
                                    các phiên bản sửa đổi, bổ sung của Chính Sách), và Khách Hàng đồng ý với CINESTAR về
                                    việc xử lý dữ liệu cá nhân của Khách Hàng theo cách được mô tả trong tài liệu này.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Nếu Khách Hàng không đồng ý với Chính Sách Bảo Mật này, vui lòng không sử dụng dịch
                                    vụ của CINESTAR hoặc truy cập Website của CINESTAR. Nếu CINESTAR thay đổi Chính Sách
                                    Bảo Mật, CINESTAR sẽ cập nhật thay đổi hoặc sửa đổi đó trên Website của CINESTAR.
                                    Phiên bản sửa đổi, bổ sung Chính Sách này (nếu có) sẽ có hiệu lực kể từ ngày việc
                                    sửa đổi, bổ sung Chính Sách được đăng tải, thông báo trên Website. CINESTAR bảo lưu
                                    quyền sửa đổi Chính Sách Bảo Mật này vào bất cứ lúc nào.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    CINESTAR kính mong Khách Hàng vui lòng đọc Chính Sách Bảo Mật một cách cẩn thận. Nếu
                                    Khách Hàng có bất kỳ câu hỏi liên quan đến các thông tin này hoặc thực tiễn bảo mật
                                    của CINESTAR, xin vui lòng liên hệ với CINESTAR theo thông tin ở phần cuối của Chính
                                    Sách Bảo Mật này.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>2. PHẠM VI XỬ LÝ THÔNG TIN</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Thông tin do Khách Hàng cung cấp: CINESTAR thu thập tất cả những thông tin, dữ liệu
                                    cá nhân (“Thông Tin Khách Hàng”) mà Khách Hàng đăng tải hoặc các thao tác mà Khách
                                    Hàng thực hiện trên Website của CINESTAR.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Dữ liệu cá nhân được thu thập trong phạm vi thực hiện Chính Sách này là “Dữ liệu cá
                                    nhân cơ bản” bao gồm 09 thông tin cá nhân được liệt kê sau đây:
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    1. Họ và tên;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    2. Ngày, tháng, năm sinh;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    3. Giới tính
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    4. Địa chỉ cư trú;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    5. Số điện thoại;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    6. Số chứng minh nhân dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    7. Thông tin về tài khoản số thanh toán của cá nhân; và
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    8. Địa chỉ email.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng cam kết cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý với Chính
                                    Sách Bảo Mật này. Trong trường hợp (các) dữ liệu được cung cấp không chính xác thì
                                    Khách Hàng tự chịu trách nhiệm đối với mọi thiệt hại phát sinh cho CINESTAR và/hoặc
                                    bên thứ ba bất kỳ và tự chịu trách nhiệm trước pháp luật.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <u>Lưu ý:</u> Khách Hàng là người dưới 16 tuổi chỉ được đánh dấu vào ô đồng ý sau
                                    khi được sự đồng ý của cha, mẹ hoặc người giám hộ hợp pháp. Bằng việc đánh dấu vào ô
                                    đồng ý, CINESTAR được hiểu rằng Khách Hàng và người người giám hộ hợp pháp của mình
                                    đã đồng ý với Chính Sách Bảo Mật này và do đó CINESTAR được quyền miễn trừ mọi hậu
                                    quả pháp lý phát sinh (nếu có) trong trường hợp phát hiện có sự gian dối, không
                                    trung thực từ phía Khách Hàng tại mục này.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>3. MỤC ĐÍCH XỬ LÝ THÔNG TIN</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Mục đích thu thập, xử lý Thông Tin Khách Hàng bao gồm các hoạt động sau đây:
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    1. Cung cấp các dịch vụ, sản phẩm theo nhu cầu của Khách Hàng;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    2. Liên hệ xác nhận khi Khách Hàng đăng ký sử dụng dịch vụ, xác lập giao dịch trên
                                    Website;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    3. Thực hiện việc quản lý Website, gửi thông tin cập nhật về Website, các chương
                                    trình khuyến mại, ưu đãi/tri ân tới Khách Hàng;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    4. Bảo đảm quyền lợi của Khách Hàng khi phát hiện các hành động giả mạo, phá hoại
                                    tài khoản, lừa đảo Khách Hàng;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    5. Liên lạc, hỗ trợ, giải quyết với Khách Hàng trong các trường hợp đặc biệt.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    CINESTAR chỉ sử dụng Thông Tin Khách Hàng cho các mục đích nêu trên hoặc mục đích
                                    khác (nếu có) với điều kiện đã thông báo và được sự đồng ý của Khách Hàng.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng hiểu và đồng ý rằng CINESTAR có nghĩa vụ phải cung cấp Thông Tin Khách
                                    Hàng theo yêu cầu/quyết định của Cơ quan nhà nước có thẩm quyền và/hoặc quy định
                                    pháp luật. CINESTAR sẽ được miễn trừ mọi trách nhiệm liên quan đến bảo mật thông tin
                                    trong trường hợp này.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Để tránh nghi ngờ, trong quá trình giao dịch thanh toán tại Website, CINESTAR chỉ
                                    lưu giữ thông tin chi tiết về đơn hàng đã thanh toán của khách hàng, các thông tin
                                    về tài khoản ngân hàng của khách hàng sẽ không được lưu giữ.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>4. LƯU GIỮ VÀ BẢO MẬT THÔNG TIN</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    - Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa Khách Hàng và CINESTAR,
                                    đều được lưu giữ và bảo mật bởi hệ thống của CINESTAR.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    - CINESTAR sẽ lưu trữ Thông Tin Khách Hàng theo quy định pháp luật hiện hành. Nếu
                                    Khách Hàng ngừng sử dụng Website, hoặc việc cho phép Khách Hàng sử dụng Website
                                    và/hoặc các dịch vụ bị chấm dứt, CINESTAR có thể tiếp tục lưu trữ, sử dụng và/hoặc
                                    tiết lộ Thông Tin Khách Hàng phù hợp với Chính Sách Bảo Mật và nghĩa vụ của CINESTAR
                                    theo quy định của pháp luật.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    - Khách Hàng tuyệt đối không được có bất kỳ hành vi sử dụng công cụ, chương trình để
                                    can thiệp trái phép vào hệ thống hay làm thay đổi cấu trúc dữ liệu của CINESTAR,
                                    cũng như bất kỳ hành vi nào khác nhằm phát tán, cổ vũ cho các hoạt động với mục đích
                                    can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống CINESTAR, cũng như các các
                                    hành vi mà pháp luật Việt Nam nghiêm cấm. Trong trường hợp CINESTAR phát hiện Khách
                                    Hàng có hành vi cố tình giả mạo, gian lận, phát tán các thông tin trái phép,…
                                    CINESTAR có quyền chuyển Thông Tin Khách Hàng theo yêu cầu của cơ quan có thẩm quyền
                                    để xử lý theo quy định pháp luật.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>5. THỜI GIAN LƯU TRỮ THÔNG TIN</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Thông Tin Khách Hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành
                                    viên đăng nhập và thực hiện đóng tài khoản. Đối với các tài khoản đã đóng, CINESTAR
                                    vẫn lưu trữ Thông Tin Khách Hàng và truy cập của Khách Hàng để phục vụ cho mục đích
                                    phòng chống gian lận, điều tra, giải đáp thắc mắc ...
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Các thông tin này sẽ được CINESTAR lưu trữ trong hệ thống máy chủ tối đa mười hai
                                    (12) tháng kể từ ngày Khách Hàng đóng tài khoản trên CINESTAR. Sau khi thời hạn này
                                    kết thúc, CINESTAR có thể tiến hành xóa vĩnh viễn thông tin cá nhân của Khách Hàng.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>6. TỔ CHỨC, CÁ NHÂN ĐƯỢC XỬ LÝ THÔNG TIN</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    CINESTAR và các công ty thành viên, các chi nhánh của mình sẽ thực hiện xử lý dữ
                                    liệu thông tin cá nhân của Khách Hàng theo các mục nêu trên. CINESTAR không cung cấp
                                    Thông Tin Khách Hàng cho bất kỳ bên thứ ba nào khác trừ các trường hợp ngoại lệ
                                    không cần sự đồng ý của Khách Hàng theo quy định của pháp luật.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Các tổ chức, cá nhân được liệt kê sau đây có thể được xử lý dữ liệu cá nhân sau khi
                                    được sự đồng ý của Khách Hàng:
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    - Nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên thứ ba khác mà CINESTAR sử dụng
                                    để hỗ trợ hoạt động kinh doanh của CINESTAR
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    - Các đối tác có ký kết thỏa thuận liên kết chăm sóc khách hàng với CINESTAR. Việc
                                    chia sẻ này giúp CINESTAR có thể cung cấp cho Khách Hàng các thông tin về các sản
                                    phẩm và dịch vụ, liên quan đến hàng hóa, dịch vụ và vấn đề khác mà Khách Hàng có thể
                                    quan tâm. Trong trường hợp các chi nhánh, công ty thành viên của CINESTAR và các
                                    công ty liên kết của CINESTAR được cấp quyền truy cập Thông Tin Khách Hàng, họ sẽ
                                    phải tuân thủ nghiêm ngặt các quy định được mô tả trong Chính Sách Bảo Mật này.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    - Các bên thứ ba là đối tác, đại lý của CINESTAR: CINESTAR có thể chuyển Thông Tin
                                    Khách Hàng cho các đại lý và nhà thầu phụ để làm phân tích dữ liệu, tiếp thị, quảng
                                    cáo và hỗ trợ dịch vụ khách hàng.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    - Các đơn vị kinh doanh khác mà CINESTAR có kế hoạch sáp nhập hoặc mua lại: Trong
                                    trường hợp này, CINESTAR sẽ yêu cầu những đơn vị đó tuân thủ nghiêm ngặt theo Chính
                                    Sách Bảo Mật này.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Chính Sách Bảo Mật này không phải là một lời hứa rằng dữ liệu cá nhân của Khách Hàng
                                    sẽ không bao giờ được tiết lộ, ngoại trừ như được mô tả trong Chính Sách Bảo Mật
                                    này.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>7. QUYỀN VÀ NGHĨA VỤ CỦA KHÁCH HÀNG</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Trừ trường hợp pháp luật có quy định khác, quyền và nghĩa vụ của Khách Hàng đối với
                                    dữ liệu cá nhân được quy định chi tiết như sau:
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    A. Quyền của Khách Hàng
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    1. Quyền được biết
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng được biết về hoạt động xử lý dữ liệu cá nhân của mình, trừ trường hợp
                                    luật có quy định khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    2. Quyền đồng ý
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của mình,
                                    trừ trường hợp pháp luật cho phép CINESTAR xử lý mà không cần có sự đồng ý của Khách
                                    Hàng.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    3. Quyền truy cập
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng được truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu cá nhân
                                    của mình, trừ trường hợp luật có quy định khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    4. Quyền rút lại sự đồng ý
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng được quyền rút lại sự đồng ý của mình, trừ trường hợp luật có quy định
                                    khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    5. Quyền xóa dữ liệu
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng được xóa hoặc yêu cầu xóa dữ liệu cá nhân của mình, trừ trường hợp luật
                                    có quy định khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    6. Quyền hạn chế xử lý dữ liệu
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    a) Khách Hàng được yêu cầu hạn chế xử lý dữ liệu cá nhân của mình, trừ trường hợp
                                    luật có quy định khác;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    b) Việc hạn chế xử lý dữ liệu được thực hiện trong 72 giờ sau khi có yêu cầu của
                                    Khách Hàng, với toàn bộ dữ liệu cá nhân mà chủ thể dữ liệu yêu cầu hạn chế, trừ
                                    trường hợp luật có quy định khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    7. Quyền cung cấp dữ liệu
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng được yêu cầu CINESTAR và các bên liên quan cung cấp cho bản thân dữ liệu
                                    cá nhân của mình, trừ trường hợp luật có quy định khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    8. Quyền phản đối xử lý dữ liệu
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    a) Khách Hàng được phản đối CINESTAR và các bên liên quan nhằm ngăn chặn hoặc hạn
                                    chế tiết lộ dữ liệu cá nhân hoặc sử dụng cho mục đích quảng cáo, tiếp thị, trừ
                                    trường hợp luật có quy định khác;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    b) CINESTAR và các bên liên quan thực hiện yêu cầu của Khách Hàng trong 72 giờ sau
                                    khi nhận được yêu cầu, trừ trường hợp luật có quy định khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    9. Quyền khiếu nại, tố cáo, khởi kiện
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    10. Quyền yêu cầu bồi thường thiệt hại
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng có quyền yêu cầu bồi thường thiệt hại theo quy định của pháp luật khi xảy
                                    ra vi phạm quy định về bảo vệ dữ liệu cá nhân của mình, trừ trường hợp các bên có
                                    thỏa thuận khác hoặc luật có quy định khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    11. Quyền tự bảo vệ
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự, luật khác có liên
                                    quan, hoặc yêu cầu cơ quan, tổ chức có thẩm quyền thực hiện các phương thức bảo vệ
                                    quyền dân sự theo quy định tại Điều 11 Bộ luật Dân sự.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    B. Nghĩa vụ của Khách Hàng
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    1. Tự bảo vệ dữ liệu cá nhân của mình; yêu cầu các tổ chức, cá nhân khác có liên
                                    quan bảo vệ dữ liệu cá nhân của mình.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    2. Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    3. Cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý cho phép xử lý dữ liệu cá
                                    nhân.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    4. Tham gia tuyên truyền, phổ biến kỹ năng bảo vệ dữ liệu cá nhân.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    5. Thực hiện quy định của pháp luật về bảo vệ dữ liệu cá nhân và tham gia phòng,
                                    chống các hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>8. THÔNG BÁO VÀ SỬA ĐỔI</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Do CINESTAR liên tục cải thiện dịch vụ và sản phẩm để phục vụ Khách Hàng tốt hơn,
                                    nên Chính Sách Bảo Mật, Điều Kiện và Điều Khoản Giao Dịch, Quy Định Chung sẽ thường
                                    xuyên được thay đổi và cập nhật. CINESTAR có thể đăng tải trên Website hoặc có thể
                                    gửi email thông báo cho Khách Hàng về những thay đổi trong những chính sách của
                                    CINESTAR. Tuy nhiên, CINESTAR cũng khuyến khích Khách Hàng thường xuyên theo dõi
                                    trên Website để cập nhật những thay đổi trong chính sách của CINESTAR. Trừ trường
                                    hợp có văn bản với nội dung khác, Chính Sách Bảo Mật hiện tại của CINESTAR được áp
                                    dụng cho tất cả những thông tin mà CINESTAR có trong phạm vi xử lý Thông Tin Khách
                                    Hàng.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>9. CAM KẾT CHUNG</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Mọi thông tin cá nhân của Khách Hàng thu thập được từ Website sẽ được lưu giữ an
                                    toàn, chỉ có Khách Hàng mới có thể truy cập vào tài khoản cá nhân của mình bằng tên
                                    đăng nhập và mật khẩu do Khách Hàng chọn.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    CINESTAR cam kết bảo mật thông tin, không chia sẻ, tiết lộ, chuyển giao Thông Tin
                                    Khách Hàng, thông tin giao dịch trực tuyến trên Website cho bất kỳ bên thứ ba nào
                                    khi chưa được sự đồng ý của Khách Hàng, trừ các trường hợp pháp luật cho phép
                                    CINESTAR xử lý thông tin mà không cần đến sự đồng ý của Khách Hàng.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    CINESTAR, bằng nỗ lực tốt nhất của mình, sẽ áp dụng các giải pháp công nghệ để ngăn
                                    chặn các hành vi đánh cắp hoặc tiếp cận thông tin trái phép; sử dụng, thay đổi hoặc
                                    phá hủy thông tin trái phép. Tuy nhiên, CINESTAR không thể cam kết sẽ ngăn chặn được
                                    tất cả các hành vi xâm phạm, sử dụng thông tin cá nhân trái phép nằm ngoài khả năng
                                    kiểm soát của CINESTAR. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào
                                    đối với bất kỳ khiếu nại, tranh chấp hoặc thiệt hại nào phát sinh từ hoặc liên quan
                                    đến việc truy cập, xâm nhập, sử dụng thông tin trái phép như vậy.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát Thông Tin
                                    Khách Hàng, gây ảnh hưởng xấu đến Khách Hàng, CINESTAR sẽ ngay lập tức thông báo cho
                                    Khách Hàng và trình vụ việc cho cơ quan chức năng điều tra xử lý.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng có nghĩa vụ bảo mật tên đăng ký, mật khẩu và hộp thư điện tử của mình.
                                    CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với các thiệt hại,
                                    tổn thất (nếu có) do Khách Hàng không tuân thủ quy định bảo mật này.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Khách Hàng tuyệt đối không được có các hành vi sử dụng công cụ, chương trình để can
                                    thiệp trái phép vào hệ thống hay làm thay dổi dữ liệu của CINESTAR. Trong trường hợp
                                    CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán thông
                                    tin cá nhân trái phép… CINESTAR có quyền chuyển thông tin cá nhân của Khách Hàng cho
                                    các cơ quan có thẩm quyền để xử lý theo quy định của pháp luật.
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <strong>10. THÔNG TIN LIÊN HỆ</strong>
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Bất kỳ lúc nào Khách Hàng có bất kỳ câu hỏi, cần hỗ trợ, cần giải thích, khiếu nại
                                    hoặc quan tâm về việc bảo mật của CINESTAR hoặc các giao dịch của Khách Hàng với
                                    CINESTAR, xin vui lòng liên hệ CINESTAR theo thông tin sau:
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    &nbsp;
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Mã số thuế: 0312742744
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Hotline: 028.7300 8881
                                </p>
                                <p
                                    style={{
                                        marginTop: '6.0pt',
                                        marginRight: '0in',
                                        marginBottom: '6.0pt',
                                        marginLeft: '0in',
                                        fontSize: '17px',
                                        fontFamily: '"Times New Roman",serif',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Email: cskh@cinestar.com.vn
                                </p>
                            </div>
                        </div>
                        <div className="input-check">
                            <input id="member_accept" name="accept" defaultValue={1} type="checkbox" />
                            <span />
                            Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên Cinestar{' '}
                        </div>
                        <div className="input-but">
                            <input type="button" defaultValue="ĐĂNG KÝ" id="btn-register-top" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="user-form modify">
                <div className="icon-arrow" style={{ left: '264.8px' }} />
                <h3 className="user-title">Chỉnh sửa thông tin cá nhân</h3>
                <form id="modify-top">
                    <div className="require-col">
                        <label className="gender">
                            <input type="radio" name="gender" defaultValue={1} defaultChecked />
                            <span className="gender-name">Nam</span>
                            <span className="gender-shape" />
                        </label>
                        <label className="gender">
                            <input type="radio" name="gender" defaultValue={0} />
                            <span className="gender-name">Nữ</span>
                            <span className="gender-shape" />
                        </label>
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
    );
}
