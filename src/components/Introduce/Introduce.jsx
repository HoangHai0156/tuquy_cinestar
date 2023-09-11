import React from 'react';

function Introduce() {
    return (
        <div>
            <div className="about-section" style={{ minHeight: '186px', height: 'auto' }}>
                <div className="about-top">
                    <div className="section-title">
                        <h2>Giới thiệu</h2>
                    </div>
                    <div className="sub-tab about">
                        <ul>
                            <li style={{ zIndex: 3 }} className="current">
                                <a
                                    href="https://cinestar.com.vn/gioithieu/he-thong-cinestar"
                                    data-name={1}
                                    data-title="CINESTAR"
                                    data-description
                                    data-keyword="CINESTAR"
                                >
                                    Hệ thống Cinestar
                                </a>
                            </li>
                            <li style={{ zIndex: 2 }}>
                                <a
                                    href="https://cinestar.com.vn/gioithieu/dich-vu"
                                    data-name={3}
                                    data-title="CINESTAR"
                                    data-description
                                    data-keyword="CINESTAR"
                                >
                                    Dịch vụ
                                </a>
                            </li>
                            <li style={{ zIndex: 1 }}>
                                <a
                                    href="https://cinestar.com.vn/gioithieu/cong-nghe-phong-chieu"
                                    data-name={2}
                                    data-title="CINESTAR"
                                    data-description
                                    data-keyword="CINESTAR"
                                >
                                    Công nghệ phòng chiếu
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about-box" data-open={1} style={{ display: 'block', opacity: 1 }}>
                    <div className="intro-wrap">
                        <div className="intro-item">
                            <div className="intro-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/webimages/6GioiThieu/z3981888411257_ec3f43e1704ef01c6e0006df549444ce.jpg"
                                    alt="CINESTAR LÂM ĐỒNG"
                                />
                            </div>
                            <div className="intro-txt">
                                <h3>CINESTAR LÂM ĐỒNG</h3>
                                <p />
                                <p>
                                    Địa chỉ :&nbsp;Tầng 4, Trung tâm Thương mại và Dịch vụ Tài chính Sacombank, 713 Quốc
                                    lộ 20, thị trấn Liên Nghĩa, huyện Đức Trọng, tỉnh Lâm Đồng.
                                </p>
                                <p>Hotline:&nbsp;026 3730 0008 (Bấm phím 0)</p>
                                <p>
                                    <img
                                        src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                                        style={{
                                            boxSizing: 'border-box',
                                            WebkitFontSmoothing: 'antialiased',
                                            margin: '0px',
                                            padding: '0px',
                                            border: '0px',
                                            verticalAlign: 'baseline',
                                            color: 'rgb(255, 255, 255)',
                                            textAlign: 'right',
                                            fontFamily: 'MyriadRegular',
                                            fontSize: '16px',
                                            width: '18px',
                                            height: '18px',
                                        }}
                                    />
                                    &nbsp;
                                    <a href="https://www.facebook.com/CinestarDucTrong">
                                        https://www.facebook.com/CinestarDucTrong
                                    </a>
                                </p>
                                <p />
                            </div>
                        </div>
                        <div className="intro-item">
                            <div className="intro-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/Tin%20tức/cinestar-insight/cinestar-kien-giang.jpg"
                                    alt="Cinestar Kiên Giang"
                                />
                            </div>
                            <div className="intro-txt">
                                <h3>Cinestar Kiên Giang</h3>
                                <p />
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Địa chỉ:&nbsp;Lô A2 - Khu 2 Trung tâm Thương mại Rạch Sỏi, Đường Nguyễn Chí
                                            Thanh, Phường Rạch Sỏi, Thành phố Rạch Giá, Tỉnh Kiên Giang
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Hotline: +84&nbsp;(297)&nbsp;
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                                            fontSize: '15px',
                                        }}
                                    >
                                        730 6588
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <img
                                                src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                                                style={{
                                                    color: 'rgb(255, 255, 255)',
                                                    fontFamily: 'MyriadRegular',
                                                    fontSize: '16px',
                                                    width: '18px',
                                                    height: '18px',
                                                }}
                                            />
                                            <a
                                                href="https://www.facebook.com/CinestarKienGiang"
                                                style={{ fontFamily: 'MyriadRegular', fontSize: '16px' }}
                                            >
                                                https://www.facebook.com/CinestarKienGiang/
                                            </a>
                                        </span>
                                    </span>
                                </p>
                                <p />
                            </div>
                        </div>
                        <div className="intro-item">
                            <div className="intro-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/Cinestar/CMT/cmt-web.jpg"
                                    alt="Cinestar Mỹ Tho"
                                />
                            </div>
                            <div className="intro-txt">
                                <h3>Cinestar Mỹ Tho</h3>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial, helvetica, sans-serif' }}>
                                            Địa chỉ: 52 Đinh Bộ Lĩnh ,P. 3, TP. Mỹ Tho, Tiền Giang
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial, helvetica, sans-serif' }}>
                                            Hotline: +84 (273) 730 8881
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <img
                                            src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                        <a href="https://www.facebook.com/CinestarMyTho/">
                                            https://www.facebook.com/CinestarMyTho/
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="intro-item">
                            <div className="intro-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/Tin%20tức/cinestar-insight/cinestar-sinh-vien.jpg"
                                    alt="Cinestar Sinh Viên"
                                />
                            </div>
                            <div className="intro-txt">
                                <h3>Cinestar Sinh Viên</h3>
                                <p />
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial, helvetica, sans-serif' }}>
                                            Địa chỉ: Nhà Văn Hoá Sinh Viên, Khu đô thị ĐH&nbsp;Quốc Gia Tp. HCM, Tx. Dĩ
                                            An, Bình Dương
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial, helvetica, sans-serif' }}>
                                            Hotline: +84 (28) 7303&nbsp;8881
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <img
                                            src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                        <span style={{ fontFamily: 'arial, helvetica, sans-serif' }}>
                                            :
                                            <a href="https://www.facebook.com/cinestarsv/">
                                                https://www.facebook.com/cinestarsv/
                                            </a>
                                        </span>
                                    </span>
                                </p>
                                <p />
                            </div>
                        </div>
                        <div className="intro-item">
                            <div className="intro-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/Tin%20tức/Nangluongmattroi/cinestar-hue.jpg"
                                    alt="Cinestar Huế"
                                />
                            </div>
                            <div className="intro-txt">
                                <h3>Cinestar Huế</h3>
                                <p />
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ color: '#FFFFFF' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Địa chỉ: 25 Hai Bà Trưng, P. Vĩnh Ninh, Tp. Huế, Thừa Thiên Huế
                                            </span>
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ color: '#FFFFFF' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Hotline: 0234&nbsp;7300 081
                                            </span>
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ color: '#FFFFFF' }}>
                                            <img
                                                src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                                                style={{ width: '18px', height: '18px' }}
                                            />
                                        </span>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <span style={{ color: '#FFFFFF' }}>
                                                :&nbsp;
                                                <a href="https://www.facebook.com/CinestarHue/">
                                                    https://www.facebook.com/CinestarHue/
                                                </a>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p />
                            </div>
                        </div>
                        <div className="intro-item">
                            <div className="intro-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/Tin%20tức/cinestar-insight/52bdebd4335ef100a84f.jpg"
                                    alt="Cinestar Hai Bà Trưng"
                                />
                            </div>
                            <div className="intro-txt">
                                <h3>Cinestar Hai Bà Trưng</h3>
                                <p />
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ color: '#FFFFFF' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Địa chỉ: 135 Hai Bà Trưng, P. Bến Nghé, Q.1, TP.HCM
                                            </span>
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ color: '#FFFFFF' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Hotline: +84 (28) 7300 7279
                                            </span>
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ color: '#FFFFFF' }}>
                                            <img
                                                src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                                                style={{ width: '18px', height: '18px' }}
                                            />
                                        </span>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <span style={{ color: '#FFFFFF' }}>
                                                :&nbsp;
                                                <a href="https://www.facebook.com/CinestarHaiBaTrung/">
                                                    https://www.facebook.com/CinestarHaiBaTrung/
                                                </a>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p />
                            </div>
                        </div>
                        <div className="intro-item">
                            <div className="intro-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/webimages/6GioiThieu/cinestar-da-lat-new-03.jpg"
                                    alt="Cinestar Đà Lạt"
                                />
                            </div>
                            <div className="intro-txt">
                                <h3>Cinestar Đà Lạt</h3>
                                <p />
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Địa chỉ: Quảng trường Lâm Viên, P.10, TP. Đà Lạt, Tỉnh Lâm Đồng
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Hotline: +84 (263) 3969 969
                                        </span>
                                    </span>
                                    <p style={{ boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased' }} />
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '24px',
                                        textSizeAdjust: 'none',
                                        fontFamily: 'MyriadRegular',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '27.6px',
                                    }}
                                >
                                    <span style={{ fontSize: '16px' }}>
                                        <img
                                            src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            :
                                            <a href="https://www.facebook.com/CinestarDaLat/">
                                                https://www.facebook.com/CinestarDaLat/
                                            </a>
                                        </span>
                                    </span>
                                </p>
                                <p />
                            </div>
                        </div>
                        <div className="intro-item">
                            <div className="intro-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/Tin%20tức/cinestar-insight/cinestar-quoc-thanh-1.jpg"
                                    alt="Cinestar Quốc Thanh"
                                />
                            </div>
                            <div className="intro-txt">
                                <h3>Cinestar Quốc Thanh</h3>
                                <p />
                                <p>
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Địa chỉ: 271 Nguyễn Trãi, P.Nguyễn Cư Trinh, Q. 1, TP.HCM
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Hotline:&nbsp;<span style={{ textAlign: 'center' }}>+84 (28)7300 8881</span>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <img
                                        src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                    <span style={{ fontSize: '16px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    WebkitFontSmoothing: 'antialiased',
                                                    margin: '0px',
                                                    padding: '0px',
                                                    border: '0px',
                                                    verticalAlign: 'baseline',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        boxSizing: 'border-box',
                                                        WebkitFontSmoothing: 'antialiased',
                                                        margin: '0px',
                                                        padding: '0px',
                                                        border: '0px',
                                                        verticalAlign: 'baseline',
                                                    }}
                                                >
                                                    :&nbsp;
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <a href="https://www.facebook.com/CinestarQuocThanh/">
                                        https://www.facebook.com/CinestarQuocThanh/
                                    </a>
                                </p>
                                <p />
                            </div>
                        </div>
                    </div>
                    <div className="intro-note">
                        <p>
                            <span style={{ fontSize: '18px' }}>
                                <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                    CINESTAR, KHÔNG GIAN GIẢI TRÍ TRẺ TRUNG VÀ SÔI ĐỘNG&nbsp;VỚI GIÁ CẢ HỢP LÝ
                                </span>
                            </span>
                        </p>
                        <p className="welcom">Hãy đến CineStar Cinema để cảm nhận điện ảnh đích thực</p>
                    </div>
                </div>
                {/*ABOUT-INTRO*/}
                {/*ABOUT-SEVICE*/}
                <div className="about-box" data-open={3} style={{ display: 'none', opacity: 1 }}>
                    <div className="service-wrap">
                        <div className="service-item">
                            <div className="service-pic">
                                <img src="https://cinestar.com.vn/pictures/dich%20vu/350x250.jpg" alt="" />
                            </div>
                            <div className="service-txt">
                                <div className="service-title">
                                    <h3>NHÀ HÁT - DALAT OPERA HOUSE</h3>
                                </div>
                                <p>
                                    <span style={{ color: '#FFFFFF' }}>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Nhà hát nằm trong công trình Bông Hoa Dã Quỳ, tọa lạc bên bờ Hồ Xuân
                                                Hương - một trong những vị trí đẹp nhất của thành phố.{' '}
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ color: '#FFFFFF' }}>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Điểm diễn này được cải tạo lại từ cung nghệ thuật, do UBND tỉnh Lâm Đồng
                                                đầu tư xây dựng trước đây, cùng các hạng mục khác trong công trình quảng
                                                trường Lâm Viên.
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ color: '#FFFFFF' }}>
                                        <span style={{ fontSize: '14px' }}>
                                            <font face="arial, helvetica, sans-serif">
                                                Địa chỉ: Quảng Trường Lâm Viên, Tp. Đà Lạt
                                            </font>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ color: '#FFFFFF' }}>
                                            <font face="arial, helvetica, sans-serif">Fanpage:&nbsp;</font>
                                        </span>
                                        <a href="https://www.facebook.com/DalatOperaHouse">
                                            <span style={{ color: '#FFFFFF' }}>
                                                https://www.facebook.com/DalatOperaHouse
                                            </span>
                                        </a>
                                        <span style={{ color: '#FFFFFF' }}>&nbsp;</span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <span style={{ color: '#FFFFFF' }}>Hotline: 035 621 3536</span>
                                        </span>
                                    </span>
                                </p>
                                <div
                                    className="j83agx80"
                                    style={{
                                        display: 'flex',
                                        fontFamily: '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                                        color: 'rgb(28, 30, 33)',
                                        fontSize: '12px',
                                    }}
                                >
                                    <div
                                        className="pybr56ya hv4rvrfc f9o22wc5 j83agx80"
                                        style={{
                                            marginLeft: 'auto',
                                            paddingRight: '16px',
                                            display: 'flex',
                                            paddingTop: '12px',
                                            fontFamily: 'inherit',
                                        }}
                                    >
                                        <div
                                            aria-label="Chỉnh sửa"
                                            className="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l"
                                            role="button"
                                            style={{
                                                outline: 'none',
                                                listStyle: 'none',
                                                borderWidth: '0px',
                                                borderStyle: 'solid',
                                                borderTopColor: 'var(--always-dark-overlay)',
                                                borderLeftColor: 'var(--always-dark-overlay)',
                                                borderBottomColor: 'var(--always-dark-overlay)',
                                                borderRightColor: 'var(--always-dark-overlay)',
                                                padding: '0px',
                                                userSelect: 'none',
                                                flexDirection: 'row',
                                                margin: '0px',
                                                zIndex: 0,
                                                touchAction: 'manipulation',
                                                backgroundColor: 'transparent',
                                                alignItems: 'stretch',
                                                minWidth: '0px',
                                                textAlign: 'inherit',
                                                position: 'relative',
                                                flexBasis: 'auto',
                                                cursor: 'pointer',
                                                WebkitTapHighlightColor: 'transparent',
                                                flexShrink: 0,
                                                display: 'inline-flex',
                                                boxSizing: 'border-box',
                                                minHeight: '0px',
                                                fontFamily: 'inherit',
                                            }}
                                            tabIndex={-1}
                                        >
                                            &nbsp;
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="dwo3fsh8 g5ia77u1 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv q9uorilb kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h k4urcfbm"
                                    style={{
                                        borderWidth: '0px',
                                        padding: '0px',
                                        margin: '0px',
                                        appearance: 'none',
                                        width: '360px',
                                        position: 'relative',
                                        display: 'inline-block',
                                        boxSizing: 'border-box',
                                        fontFamily: '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                                        color: 'rgb(28, 30, 33)',
                                        fontSize: '12px',
                                    }}
                                >
                                    <div
                                        className="j83agx80 cbu4d94t sj5x9vvc cxgpxx05"
                                        style={{
                                            flexDirection: 'column',
                                            paddingTop: '8px',
                                            display: 'flex',
                                            paddingBottom: '8px',
                                            fontFamily: 'inherit',
                                        }}
                                    >
                                        <div
                                            className="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw jifvfom9 ll8tlv6m owycx6da btwxx1t3 hv4rvrfc dati1w0a jb3vyjys b5q2rw42 lq239pai mysgfdmx hddg9phg"
                                            style={{
                                                margin: '-6px',
                                                flexFlow: 'row nowrap',
                                                paddingLeft: '16px',
                                                zIndex: 0,
                                                paddingRight: '16px',
                                                display: 'flex',
                                                paddingTop: '0px',
                                                justifyContent: 'flex-start',
                                                position: 'relative',
                                                alignItems: 'flex-start',
                                                flexShrink: 0,
                                                boxSizing: 'border-box',
                                                fontFamily: 'inherit',
                                            }}
                                        >
                                            <div
                                                className="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt"
                                                style={{
                                                    flexDirection: 'column',
                                                    maxWidth: '100%',
                                                    zIndex: 0,
                                                    minWidth: '0px',
                                                    padding: '6px',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    flexShrink: 0,
                                                    boxSizing: 'border-box',
                                                    fontFamily: 'inherit',
                                                }}
                                            >
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-pic">
                                <img src="https://cinestar.com.vn/pictures/dich%20vu/gamexu.jpg" alt="" />
                            </div>
                            <div className="service-txt">
                                <div className="service-title">
                                    <h3>HỆ THỐNG C'GAME - GAME XU GẮP THÚ</h3>
                                </div>
                                <p>
                                    Với nhiều trò chơi game xu đa dạng hấp dẫn, phù hợp với mọi lứa tuổi thuộc hệ thống
                                    của Cinestar
                                </p>
                                <p>Hiện nay chúng tôi đã phát triển tại các chi nhánh:</p>
                                <p>- C'Game Huế</p>
                                <p>- C'Game Đà Lạt&nbsp;&nbsp;</p>
                                <p>- C'Game Quốc Thanh</p>
                                <p>- C'Game Mỹ Tho</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-pic">
                                <img src="https://cinestar.com.vn/pictures/dich%20vu/monngon.jpg" alt="" />
                            </div>
                            <div className="service-txt">
                                <div className="service-title">
                                    <h3>HỆ THỐNG NHÀ HÀNG MÓN NGON</h3>
                                </div>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>1.&nbsp;Nhà hàng Món ngon Đà Lạt</strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Nhà hàng Món ngon Đà Lạt có sức chứa 400 thực khách, phục vụ hơn 200 món ăn
                                            khác nhau.
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Nhà hàng Món ngon hân hạnh phục vụ khách du lịch và địa phương, mang đến
                                            trải nghiệm ẩm thực đa dạng các món ăn trong nước và quốc tế.
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Địa chỉ: Tầng trệt, Quảng Trường Lâm Viên, Đà Lạt.
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>Hotline: 0263 3969 999</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Fanpage:{' '}
                                                    <a href="https://www.facebook.com/monngondalat.com.vn">
                                                        https://www.facebook.com/monngondalat.com.vn
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>2. Nhà hàng Món ngon Huế </strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Nhà hàng Món ngon Huế hội tu tinh hoa ẩm thực với hương vị đậm chất Huế và
                                            những món ăn Á – Âu được chế biến từ những đôi tay tài hoa của đầu bếp địa
                                            phương.
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Với không gian rộng rãi, màn hình LED và hệ thống âm thanh hiện đại, Nhà
                                            hàng Món ngon Huế cũng là nơi thường xuyên được lựa chọn tổ chức các tiệc
                                            Hội nghị, gặp gỡ, sinh nhật,...&nbsp;
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Địa chỉ: Tầng trệt tòa nhà Cinestar,&nbsp;25 Hai Bà Trưng, Phường
                                                    Vĩnh Ninh, Tp. Huế
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Hotline: 0234 6 53 53 53 - 0975 90 90 43
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Fanpage:{' '}
                                                    <a href="https://www.facebook.com/monngonhue.cinestar">
                                                        https://www.facebook.com/monngonhue.cinestar
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-pic">
                                <img src="https://cinestar.com.vn/pictures/dich%20vu/bowling.jpg" alt="" />
                            </div>
                            <div className="service-txt">
                                <div className="service-title">
                                    <h3>HỆ THỐNG C'BOWLING </h3>
                                </div>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>1. C’Bowling Đà Lạt</strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Giới thiệu: C’Bowling Đà Lạt có 10 lane bowling, phục vụ hàng trăm lượt
                                            khách mỗi ngày, điểm đến giải trí, vận động lành mạnh cho mọi lứa tuổi.
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Địa chỉ: Lầu 1 ,quảng trường Lâm Viên, P.10, TP. Đà Lạt
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>Hotline: 0263 3858 899</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Fampage:&nbsp;
                                                    <a href="https://www.facebook.com/CinestarBowling">
                                                        https://www.facebook.com/CinestarBowling
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>2. C’Bowling&nbsp;Huế</strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Trung tâm C'Bowling lớn nhất Việt Nam với 18 lane bowling, thường xuyên tổ
                                            chức các giải đấu Quốc gia, quy tụ các VĐV Bowling Việt Nam,&nbsp;phục vụ
                                            hàng trăm lượt khách mỗi ngày, C’Bowling Huế là địa điểm giải trí, thể thao
                                            lành mạnh.
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Địa chỉ: Tầng 3&nbsp;tòa nhà Cinestar, 25 Hai Bà Trưng, Phường Vĩnh
                                                    Ninh, Tp Huế
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>Hotline: 0234 6297 777</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFF0F5' }}>
                                                    Fanpage:{' '}
                                                    <a href="https://www.facebook.com/Bowlingbidahue">
                                                        https://www.facebook.com/Bowlingbidahue
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-pic">
                                <img src="https://cinestar.com.vn/pictures/dich%20vu/kidzone.jpg" alt="" />
                            </div>
                            <div className="service-txt">
                                <div className="service-title">
                                    <h3>HỆ THỐNG KHU VUI CHƠI TRẺ EM C'KIDZONE</h3>
                                </div>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>1. C’Kidzone Huế </strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Với diện tích hơn 800m2, sức chứa hơn 400 bé và hơn 60 trò chơi hấp dẫn, đầy
                                            màu sắc. C’Kidzone Huế là địa điểm lý tưởng để gia đình vui chơi cùng con
                                            yêu.
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Địa chỉ: Tầng 2 tòa nhà Cinestar, 25 Hai Bà Trưng, Phường Vĩnh Ninh,
                                                    Tp Huế
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Hotline: 0234 629 7777 - 0234 7300 081
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Fanpage:&nbsp;
                                                    <a href="https://www.facebook.com/Cgamecentrehue">
                                                        https://www.facebook.com/Cgamecentrehue
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>2. C’Kidzone Đà Lạt </strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Là khu vui chơi trong nhà dành cho trẻ em đầu tiên tại Đà Lạt, C’Kidzone Đà
                                            Lạt rộng 1000m2 với hơn 65 trò chơi khác nhau được chia theo từng khu vực
                                            riêng lẻ, rộng rãi cho các bé thỏa sức vui chơi.
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Địa chỉ: Quảng trường Lâm Viên, Tp. Đà Lạt
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>Hotline: 0263 3971 668</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Fanpage:&nbsp;
                                                    <a href="https://www.facebook.com/Cgamedalat">
                                                        https://www.facebook.com/Cgamedalat
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>3. C’Kidzone Mỹ Tho </strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            C’Kidzone đa dạng với đa dạng hơn 60 trò chơi như Đệm nhún Trampoline, Đu
                                            quay, khu vực Tô màu, Hóa trang, Sân cát, Leo núi… phù hợp với các bé từ 3 –
                                            12 tuổi thỏa sức vui chơi, vận động cơ thể và kích thích sự sáng tạo.
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Địa chỉ: Tầng 1 Cinestar, 52 Đinh Bộ Lĩnh ,P. 3, TP. Mỹ Tho, Tiền
                                                    Giang
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>Hotline: 028 7303 8881</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    &nbsp;Fanpage:&nbsp;
                                                    <a href="https://www.facebook.com/Ckidzonemytho">
                                                        https://www.facebook.com/Ckidzonemytho
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-pic">
                                <img src="https://cinestar.com.vn/pictures/dich%20vu/gymq1.jpg" alt="" />
                            </div>
                            <div className="service-txt">
                                <div className="service-title">
                                    <h3>HỆ THỐNG C'GYM</h3>
                                </div>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>1. C’Gym Quận 1:</strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Tọa lạc ngay tại trung tâm Thể dục Thể thao Quận 1, phòng tập C’Gym với đa
                                            dạng các thiết bị tập luyện chuyên dụng cùng đội ngũ PT nhiệt tình, kinh
                                            nghiệm luôn hỗ trợ khách hàng trong suốt quá trình tập luyện nâng cao sức
                                            khỏe và đem lại vóc dáng hoàn hảo.
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Địa chỉ: 01 Huyền Trân Công Chúa, Phường Bến Thành, Quận 1, Thành
                                                    phố Hồ Chí Minh
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>Hotline: 028 6275 1196</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Fanpage:{' '}
                                                    <a href="https://www.facebook.com/cgymq1">
                                                        https://www.facebook.com/cgymq1
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <strong>2. C’Gym Đà Lạt</strong>
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: '14px' }}>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            Nằm trong khuôn viên Quảng trường Lâm Viên, phòng tập C’Gym không chỉ có vị
                                            trí thuận tiện tại trung tâm Đà Lạt mà còn sở hữu không gian rộng rãi,
                                            thoáng đãng, các trang thiết bị hiện đại. C’Gym có các gói tập membership và
                                            gói tập HLV đa dạng với mức phí hợp lý cùng các dịch vụ đi kèm. Ngoài ra hệ
                                            thống C’Gym Đà Lạt còn có phòng xông hơi cho khách hàng thư giãn sau thời
                                            gian tập luyện.
                                        </span>
                                    </span>
                                </p>
                                <ul>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Địa chỉ: Quảng trường Lâm Viên, Đà Lạt
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>Hotline: 091 333 0982</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ fontSize: '14px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ color: '#FFFFFF' }}>
                                                    Fanpage:{' '}
                                                    <a href="https://www.facebook.com/CGymDaLat">
                                                        https://www.facebook.com/CGymDaLat
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/webimages/Coffee/cinestar-coffee-385-x-305px-05.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="service-txt">
                                <div className="service-title">
                                    <h3>HỆ THỐNG C'COFFEE</h3>
                                </div>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        Nằm trong chuỗi các dự án được đầu tư tâm huyết,&nbsp;CINESTAR COFFEE&nbsp;là
                                        một mô hình hoàn toàn mới khi có sự kết hợp giữa Rạp Chiếu Phim và cửa hàng
                                        coffee shop -&nbsp;vừa sở hữu&nbsp;nét&nbsp;điện ảnh, vừa đậm chất nghệ thuật
                                        thưởng thức cà phê.&nbsp;Với&nbsp;không gian mở &amp; bày trí hiện đại, bạn có
                                        thể dễ dàng lựa chọn một góc thư giãn&nbsp;với nhiều loại thức uống có&nbsp;mức
                                        giá trung bình từ 30.000đ&nbsp;- 50.000đ tại CINESTAR COFFEE.
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        <span
                                            style={{
                                                boxSizing: 'border-box',
                                                WebkitFontSmoothing: 'antialiased',
                                                margin: '0px',
                                                padding: '0px',
                                                border: '0px',
                                                verticalAlign: 'baseline',
                                            }}
                                        >
                                            CINESTAR COFFEE,&nbsp;Trải nghiệm tiện lợi - Thoải mái thư giãn,&nbsp;hứa
                                            hẹn sẽ trở thành&nbsp;một nơi lý tưởng dành cho các bạn trẻ &amp; giới văn
                                            phòng.
                                        </span>
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        <em
                                            style={{
                                                boxSizing: 'border-box',
                                                WebkitFontSmoothing: 'antialiased',
                                                margin: '0px',
                                                padding: '0px',
                                                border: '0px',
                                                verticalAlign: 'baseline',
                                                lineHeight: 1,
                                            }}
                                        >
                                            Hệ thống CINESTAR COFFEE đã có mặt tại:
                                        </em>
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        <strong>1.&nbsp;TP. Hồ Chí Minh:&nbsp;</strong>
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        + 271 Nguyễn Trãi, Q.1- Tel: (028) 7300 8881
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        + 135 Hai Bà Trưng, Q.1 - Tel: (028) 7300 7279
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        + Nhà Văn Hóa Sinh Viên ĐHQG TP.HCM
                                        <span
                                            style={{
                                                fontFamily:
                                                    '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                                                fontSize: '15px',
                                                whiteSpace: 'pre-wrap',
                                            }}
                                        >
                                            , P. Đông Hoà, TP. Dĩ An, Bình Dương - Tel: (
                                        </span>
                                        <span
                                            style={{
                                                fontFamily:
                                                    '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                                                fontSize: '15px',
                                            }}
                                        >
                                            0263) 3969 969
                                        </span>
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        <strong>​2. Đà Lạt:&nbsp;</strong>
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        <span
                                            style={{
                                                boxSizing: 'border-box',
                                                WebkitFontSmoothing: 'antialiased',
                                                margin: '0px',
                                                padding: '0px',
                                                border: '0px',
                                                verticalAlign: 'baseline',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    WebkitFontSmoothing: 'antialiased',
                                                    margin: '0px',
                                                    padding: '0px',
                                                    border: '0px',
                                                    verticalAlign: 'baseline',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                + Quảng trường Lâm Viên, P.10, TP. Đà Lạt&nbsp;- Tel: (0263) 3969 969
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        <strong>
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    WebkitFontSmoothing: 'antialiased',
                                                    margin: '0px',
                                                    padding: '0px',
                                                    border: '0px',
                                                    verticalAlign: 'baseline',
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        boxSizing: 'border-box',
                                                        WebkitFontSmoothing: 'antialiased',
                                                        margin: '0px',
                                                        padding: '0px',
                                                        border: '0px',
                                                        verticalAlign: 'baseline',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    3. Mỹ Tho:&nbsp;
                                                </span>
                                            </span>
                                        </strong>
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        <span
                                            style={{
                                                boxSizing: 'border-box',
                                                WebkitFontSmoothing: 'antialiased',
                                                margin: '0px',
                                                padding: '0px',
                                                border: '0px',
                                                verticalAlign: 'baseline',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    WebkitFontSmoothing: 'antialiased',
                                                    margin: '0px',
                                                    padding: '0px',
                                                    border: '0px',
                                                    verticalAlign: 'baseline',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                +&nbsp;
                                            </span>
                                        </span>
                                        <span
                                            style={{
                                                fontFamily:
                                                    '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                                                fontSize: '17px',
                                            }}
                                        >
                                            52 Đinh Bộ Lĩnh, P.3, TP. Mỹ Tho,Tiền Giang - Tel: (
                                        </span>
                                        <span
                                            style={{
                                                fontFamily:
                                                    '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                                                fontSize: '15px',
                                            }}
                                        >
                                            0273) 7308 881
                                        </span>
                                    </span>
                                </p>
                                <p
                                    style={{
                                        boxSizing: 'border-box',
                                        WebkitFontSmoothing: 'antialiased',
                                        margin: '0px 0px 10px',
                                        padding: '0px',
                                        border: '0px',
                                        verticalAlign: 'baseline',
                                        fontSize: '15px',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                        lineHeight: '22.4px',
                                        color: 'rgb(0, 0, 0)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    <span style={{ color: '#FFF0F5' }}>
                                        <span
                                            style={{
                                                boxSizing: 'border-box',
                                                WebkitFontSmoothing: 'antialiased',
                                                margin: '0px',
                                                padding: '0px',
                                                border: '0px',
                                                verticalAlign: 'baseline',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    boxSizing: 'border-box',
                                                    WebkitFontSmoothing: 'antialiased',
                                                    margin: '0px',
                                                    padding: '0px',
                                                    border: '0px',
                                                    verticalAlign: 'baseline',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Xem thêm thông tin tại fanpage:&nbsp;
                                            </span>
                                        </span>
                                    </span>
                                    <a href="https://www.facebook.com/cinestarcoffeeshop/">
                                        https://www.facebook.com/cinestarcoffeeshop/
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-cover"
                        style={{
                            backgroundImage:
                                'url(https://cinestar.com.vn/pictures/moi/5GioiThieu/3DichVu/Background/a.jpg)',
                        }}
                    />
                </div>
                {/*ABOUT-SEVICE*/}
                {/*ABOUT-TECHNOLOGY*/}
                <div className="about-box" data-open={2} style={{ display: 'none', opacity: 1 }}>
                    <div className="technology-wrap">
                        <div className="technology-item">
                            <div className="technology-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/moi/5GioiThieu/2CongNghe/92-10-t1200.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="technology-txt">
                                <div
                                    className="scrollT"
                                    tabIndex={0}
                                    style={{ overflow: 'hidden', outline: 'none', cursor: 'grab' }}
                                >
                                    <h3>Công nghệ 3D</h3>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                So với công nghệ chiếu phim 2D Digital (Kỹ thuật số 2 chiều), công nghệ
                                                3D Digital (Kỹ thuật số 3 chiều) cho phép khán giả cảm nhận thêm chiều
                                                sâu của hình ảnh, giúp cho không gian điện ảnh trở nên sống động như
                                                không gian thực mà chúng ta đang sống.
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Phim 3D được quay từ tối thiểu hai máy cùng một lúc, từ hai góc nhìn
                                                khác nhau tương ứng với hoạt động của hai mắt người. Khi xem phim khán
                                                giả sẽ cần đeo kính 3D để lọc hình ảnh cho mỗi mắt, khi qua não bộ sẽ
                                                chập lại tạo thành hình ảnh không gian ba chiều.
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Các phòng chiếu phim 3D Digital này đều sử dụng màn hình tráng bạc để
                                                giảm thiểu lượng hao hụt ánh sáng một cách tối đa.
                                            </span>
                                        </span>
                                    </p>
                                </div>
                                <div
                                    id="ascrail2004"
                                    className="nicescroll-rails"
                                    style={{
                                        paddingRight: '10px',
                                        width: '20px',
                                        zIndex: 1,
                                        background: 'rgba(255, 255, 255, 0)',
                                        cursor: 'grab',
                                        position: 'absolute',
                                        top: '0px',
                                        left: '80px',
                                        height: '300px',
                                        display: 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'relative',
                                            top: '0px',
                                            float: 'right',
                                            width: '8px',
                                            height: '0px',
                                            backgroundColor: 'rgb(172, 138, 146)',
                                            border: '1px solid rgba(0, 0, 0, 0)',
                                            backgroundClip: 'padding-box',
                                            borderRadius: '5px',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="technology-item">
                            <div className="technology-pic">
                                <img
                                    src="https://cinestar.com.vn/pictures/moi/5GioiThieu/2CongNghe/sweetbox425x274.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="technology-txt">
                                <div
                                    className="scrollT"
                                    tabIndex={1}
                                    style={{ overflow: 'hidden', outline: 'none', cursor: 'grab' }}
                                >
                                    <h3>SWEETBOX</h3>
                                    <p>
                                        <span style={{ display: 'none' }}>&nbsp;</span>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ lineHeight: '19.32px' }}>
                                                    Cinestar có thể&nbsp;mang đến cho bạn những giây phút thư giãn
                                                    cùng&nbsp;những bộ phim hấp dẫn trong không gian nhẹ nhàng, ấm áp
                                                    cùng người yêu thương và gia đình.&nbsp;Hãy tận hưởng những giây
                                                    phút ngọt ngào nhất tại Cinestar bằng ghế đôi SWEETBOX.
                                                </span>
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ lineHeight: '21px' }}>
                                                    Với nỗ lực không ngừng mang đến cho người yêu phim Việt Nam trải
                                                    nghiệm điện ảnh tốt nhất, Cinestar&nbsp;mang đến loại ghế
                                                    đôi&nbsp;SWEETBOX cực kỳ độc đáo và mới&nbsp;lạ. SWEETBOX được đặt ở
                                                    hàng ghế cuối cùng trong phòng chiếu. Với vách ngăn cao cũng như sự
                                                    khéo léo trong thiết kế giấu đi tay gác chính giữa giúp cho đôi bạn
                                                    càng thêm gần gũi và ấm áp, tạo không gian hoàn hảo cho các cặp
                                                    đôi.&nbsp;Hãy đến và trải nghiệm không gian hoàn hảo cho các cặp đôi
                                                    với&nbsp;SWEETBOX.
                                                </span>
                                            </span>
                                        </span>
                                        <span style={{ display: 'none' }}>&nbsp;</span>
                                    </p>
                                </div>
                                <div
                                    id="ascrail2005"
                                    className="nicescroll-rails"
                                    style={{
                                        paddingRight: '10px',
                                        width: '20px',
                                        zIndex: 1,
                                        background: 'rgba(255, 255, 255, 0)',
                                        cursor: 'grab',
                                        position: 'absolute',
                                        top: '0px',
                                        left: '80px',
                                        height: '300px',
                                        display: 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'relative',
                                            top: '0px',
                                            float: 'right',
                                            width: '8px',
                                            height: '0px',
                                            backgroundColor: 'rgb(172, 138, 146)',
                                            border: '1px solid rgba(0, 0, 0, 0)',
                                            backgroundClip: 'padding-box',
                                            borderRadius: '5px',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="technology-item">
                            <div className="technology-pic">
                                <a className="video-icon" href="https://cinestar.com.vn/viewvideo?id=7">
                                    <span>Video</span>
                                </a>
                                <img
                                    src="https://cinestar.com.vn/pictures/moi/5GioiThieu/2CongNghe/bolbyatmos425-x274.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="technology-txt">
                                <div
                                    className="scrollT"
                                    tabIndex={2}
                                    style={{ overflow: 'hidden', outline: 'none', cursor: 'grab' }}
                                >
                                    <h3>Dolby Atmos</h3>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <strong>
                                                    Dolby Atmos – sự phát triển đáng kể nhất trong công nghệ âm thanh kể
                                                    từ âm thanh vòm, đang tạo ra sự thay đổi độc đáo trong kĩ thuật
                                                    thiết kế âm thanh phân lớp, hiện đã có mặt tại Việt Nam và sẵn sàng
                                                    phục vụ khán giả tại CineStar
                                                </strong>
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Dolby Atmos sử dụng thiết kế phân lớp tân tiến để tạo nên các rãnh âm
                                                thanh. Lớp nền bao gồm các dải âm thanh môi trường tĩnh được phối theo
                                                phương pháp âm thanh phân luồng quen thuộc. Các lớp trên trần bao gồm
                                                các yếu tố âm thanh động được định hướng và thay đổi một cách chính xác
                                                theo hình ảnh hiển thị trên màn hình trong rạp. Bằng cách lắp đặt hệ
                                                thống loa ở trên đầu và xung quanh, Dolby Atmos có thể khiến khán giả
                                                trải nghiệm những âm thanh trung thực và tự nhiên như thật của bộ phim.
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                Làm Thế Nào Atmos Có Thể Tạo Nên Trải Nghiệm Điện Ảnh Khác Biệt:
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                - Âm thanh rõ ràng và được định hướng một cách chính xác hơn; Sự trộn âm
                                                có định hướng đối tượng từ các yếu tố âm thanh theo lớp độc lập đến âm
                                                thanh phân luồng.
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                - Kết nối ý đồ của đạo diễn từ dữ liệu mô tả và phát lại theo công nghệ
                                                âm thanh được trang bị cho từng phòng chiếu.
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                - Tự động tạo ra các rãnh âm thanh tối ưu cho các phòng chiếu 5.1 và 7.1
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                - Tạo ra trải nghiệm âm thanh sống động, trung thực thông qua 128 yếu tố
                                                âm thanh đồng thời và không bị mất đi khi phối âm.
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                - Quy mô được điều chỉnh theo kích cỡ của từng phòng chiếu với hệ thống
                                                lên đến 64 loa độc lập với nhau.
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '16px' }}>
                                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                                <span style={{ lineHeight: '1.6em' }}>
                                                    Hiện tại, chỉ có 25 quốc gia trên toàn thế giới được trang bị hệ
                                                    thống ưu việt này. Riêng Việt Nam, chỉ có 2 cụm rạp trên toàn quốc
                                                    sở hữu hệ thống, trong đó có CineStar Cinema. Hiện tại, chỉ có 25
                                                    quốc gia trên toàn thế giới được trang bị hệ thống ưu việt này.
                                                    Riêng Việt Nam, chỉ có 2 cụm rạp trên toàn quốc sở hữu hệ thống,
                                                    trong đó có CineStar Cinema.
                                                </span>
                                            </span>
                                        </span>
                                    </p>
                                </div>
                                <div
                                    id="ascrail2006"
                                    className="nicescroll-rails"
                                    style={{
                                        paddingRight: '10px',
                                        width: '20px',
                                        zIndex: 1,
                                        background: 'rgba(255, 255, 255, 0)',
                                        cursor: 'grab',
                                        position: 'absolute',
                                        top: '0px',
                                        left: '80px',
                                        height: '300px',
                                        display: 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'relative',
                                            top: '0px',
                                            float: 'right',
                                            width: '8px',
                                            height: '0px',
                                            backgroundColor: 'rgb(172, 138, 146)',
                                            border: '1px solid rgba(0, 0, 0, 0)',
                                            backgroundClip: 'padding-box',
                                            borderRadius: '5px',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="technology-item">
                            <div className="technology-pic">
                                <a className="video-icon" href="https://cinestar.com.vn/viewvideo?id=12">
                                    <span>Video</span>
                                </a>
                                <img
                                    src="https://cinestar.com.vn/pictures/moi/5GioiThieu/2CongNghe/digital-cinema-projector-4k-main-image-1.png"
                                    alt=""
                                />
                            </div>
                            <div className="technology-txt">
                                <div
                                    className="scrollT"
                                    tabIndex={3}
                                    style={{ overflow: 'hidden', outline: 'none', cursor: 'grab' }}
                                >
                                    <h3>Máy chiếu Christie</h3>
                                    <p>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <span style={{ fontSize: '16px' }}>
                                                Máy chiếu Christie là giải pháp hình ảnh cao cấp cho nhu cầu giải trí,
                                                với&nbsp;độ phân giải 1080p -&nbsp;4k. ( có số điểm ảnh bề ngang cao gấp
                                                4 lần so với chuẩn full HD)
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <span style={{ fontSize: '16px' }}>
                                                ngoài ra máy còn mang đến cho khán giả những trải nghiệm hình ảnh chân
                                                thật hơn nhờ hệ thống thấu kính của mình
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                            <span style={{ fontSize: '16px' }}>
                                                Đây thực sự là đỉnh cao trong các phòng chiếu
                                            </span>
                                        </span>
                                    </p>
                                    <p>&nbsp;</p>
                                </div>
                                <div
                                    id="ascrail2007"
                                    className="nicescroll-rails"
                                    style={{
                                        paddingRight: '10px',
                                        width: '20px',
                                        zIndex: 1,
                                        background: 'rgba(255, 255, 255, 0)',
                                        cursor: 'grab',
                                        position: 'absolute',
                                        top: '0px',
                                        left: '80px',
                                        height: '300px',
                                        display: 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'relative',
                                            top: '0px',
                                            float: 'right',
                                            width: '8px',
                                            height: '0px',
                                            backgroundColor: 'rgb(172, 138, 146)',
                                            border: '1px solid rgba(0, 0, 0, 0)',
                                            backgroundClip: 'padding-box',
                                            borderRadius: '5px',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-cover"
                        style={{
                            backgroundImage:
                                'url(https://cinestar.com.vn/pictures/moi/5GioiThieu/2CongNghe/Background/bg.png)',
                        }}
                    />
                </div>
                {/*ABOUT-TECHNOLOGY*/}
            </div>
            {/*PLAYING-MOVIE*/}

            {/* <div className="section-title"><h2>Các phim đang chiếu</h2></div>
      <div className="movie-content on-page">
        <div className="movie-wrap">
          <div className="movie-slide slide-slidebox" style={{ opacity: 1, display: 'inline-block' }}>
            <div className="slide-wrapper-outer"><div className="slide-wrapper" style={{ width: '7680px', left: '0px', display: 'block', marginLeft: '0px', transition: 'all 800ms ease 0s', transform: 'translate3d(-1440px, 0px, 0px)' }}><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
              <div className="movie-pic"><img className="lazyload" alt="GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)" src="https://cinestar.com.vn/pictures/Cinestar/08-2023/tay-dua-cu-phach1.jpg" style={{ display: 'block' }} /></div>
              <div className="movie-txt">
                <h3>GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)</h3>3
              </div>
              <div className="movie-over">
                <a href="https://cinestar.com.vn/phim/5b612727-452d-417a-b680-ea5194fa5019">
                  <p>Nội dung bộ phim dựa trên câu chuyện có thật về Jann Mardenborough, một tay đua nổi tiếng tới từ Anh quốc. Vào năm 2011, anh đã đánh bại 90.000 đối thủ để trở thành nhà vô địch thứ ba, đồng thời là nhà vô địch trẻ tuổi nhất trong giải đấu GT Academy. Phần thưởng của Jann là cơ hội được đại diện cho Nissan tại giải đua Dubai 24-Hour.</p><span className="atc">...</span>
                  <span className="detail-link">Chi tiết</span>
                </a>
                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=1EQysxQ_iO4">Xem trailer</a>
                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/5b612727-452d-417a-b680-ea5194fa5019">Mua vé</a>
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
              </div>
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d hide">
              <div className="movie-pic"><img className="lazyload" alt="3DCG! SHIN – CẬU BÉ BÚT CHÌ 2D PĐ: ĐẠI CHIẾN SIÊU NĂNG LỰC ~ SUSHI BAY ~" src="https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg" style={{ display: 'block' }} /></div>
              <div className="movie-txt">
                <h3>3DCG! SHIN – CẬU BÉ BÚT CHÌ 2D PĐ: ĐẠI CHIẾN SIÊU NĂNG LỰC ~ SUSHI BAY ~</h3>
              </div>
              <div className="movie-over">
                <a href="https://cinestar.com.vn/phim/a0f28ba1-dbaa-4012-9a05-cfd25dc60684">
                  <p>3DCG! Shin - Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~ Sushi Bay ~. Xoay quanh câu chuyện về hai nguồn sáng đặc biệt từ vũ trụ mang theo siêu năng lực đặc biệt tới Trái Đất. Một nguồn sáng tích cực “nhập” vào nhóc Shin, khiến cặp mông núng nính của cậu trở nên nóng bỏng và có khả năng điều khiển những đồ vật xung quanh theo ý muốn. Một thanh niên trẻ khác tên Mitsuru Hiriya cũng nhận được siêu năng lực này. Đồng thời, một nhà khoa học xấu xa khác nhăm nhe ý định lợi dụng siêu năng lực của Hiriya để trở thành bá chủ.</p><span className="atc" style={{ display: 'block' }}>...</span>
                  <span className="detail-link">Chi tiết</span>
                </a>
                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=OIQwmMCmvMI">Xem trailer</a>
                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/a0f28ba1-dbaa-4012-9a05-cfd25dc60684">Mua vé</a>
              </div>
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d hide">
              <div className="movie-pic"><img className="lazyload" alt="FINNICK 2D LT (P): NGÔI NHÀ QUÁI VẬT" src="https://cinestar.com.vn/pictures/Cinestar/08-2023/ngoi-nha-quai-vat.jpg" style={{ display: 'block' }} /></div>
              <div className="movie-txt">
                <h3>FINNICK 2D LT (P): NGÔI NHÀ QUÁI VẬT</h3>
              </div>
              <div className="movie-over">
                <a href="https://cinestar.com.vn/phim/e8650c68-8952-461f-b187-1117e4665c2f">
                  <p>Finnick là một người dường như không quan tâm đến việc kiếm tiền từ ngôi nhà của mình. Mọi thứ thay đổi khi một gia đình mới đến nhà anh ấy và những mánh khóe của Finnick hoàn toàn không hiệu quả. Anh gặp Christine và những sự kiện không thể giải thích được bắt đầu xảy ra trong thành phố. Finnick và Christine sẽ phải hợp tác và làm việc cùng nhau để giải quyết bí ẩn của các sự kiện và cứu thành phố. Kết thúc hành trình đó liệu cô bé Christine và yêu tinh Finnick có đem lại sự hòa bình cho ngôi làng và ‘một bí ẩn khác’ của Finnick có được phát hiện hay không?</p><span className="atc" style={{ display: 'block' }}>...</span>
                  <span className="detail-link">Chi tiết</span>
                </a>
                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=Sm46GfOUeWE">Xem trailer</a>
                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/e8650c68-8952-461f-b187-1117e4665c2f">Mua vé</a>
              </div>
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d hide">
              <div className="movie-pic"><img className="lazyload" alt="3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg" /></div>
              <div className="movie-txt">
                <h3>3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</h3>
              </div>
              <div className="movie-over">
                <a href="https://cinestar.com.vn/phim/a0d22936-c3ea-4906-b105-f6e414001660">
                  <p>3DCG! Shin Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~Sushi Bay~ xoay quanh câu chuyện về hai nguồn sáng đặc biệt từ vũ trụ mang theo siêu năng lực đặc biệt tới Trái Đất. Một nguồn sáng tích cực “nhập” vào nhóc Shin, khiến cặp mông núng nính của cậu chàng trở nên nóng bỏng và có khả năng điều khiển những đồ vật xung quanh theo ý muốn.</p><span className="atc" style={{ display: 'block' }}>...</span>
                  <span className="detail-link">Chi tiết</span>
                </a>
                <a className="trailler-btn fontsize13" href="https://cinestar.com.vn/trailer?code=OIQwmMCmvMI">Xem trailer</a>
                <a className="cart-btn fontsize13" href="https://cinestar.com.vn/lichchieu/a0d22936-c3ea-4906-b105-f6e414001660">Mua vé</a>
              </div>
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            </div></div><div className="slide-item" style={{ width: '240px' }}><div className="movie-item n_2d">
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
            <div className="slide-controls clickable"><div className="slide-pagination"><div className="slide-page"><span className /></div><div className="slide-page active"><span className /></div><div className="slide-page"><span className /></div><div className="slide-page"><span className /></div></div><div className="slide-buttons"><div className="slide-prev">prev</div><div className="slide-next">next</div></div></div></div>                  </div>
      </div> */}

            {/*PLAYING-MOVIE*/}
        </div>
    );
}

export default Introduce;
