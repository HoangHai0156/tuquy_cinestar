import React from 'react';

function Contact() {
    return (
        <div className="content-page">
            <div className="contact-info-content" style={{ width: '100%', height: '1186.46px' }}>
                <div
                    className="bg-cover"
                    style={{
                        backgroundImage: 'url("https://cinestar.com.vn/pictures/webimages/7LienHe/650x250.jpg")',
                        width: '100%',
                        height: '1186.46px',
                    }}
                />
                <div className="section-title">
                    <h2>Liên hệ</h2>
                </div>
                <div className="contact-info-wrap">
                    <h3>CINESTAR CINEMAS</h3>
                    <h2>&nbsp;</h2>
                    <h2>&nbsp;</h2>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>&nbsp;</h2>
                    <h2>&nbsp;</h2>
                    <h2>
                        <strong>
                            <font color="#ffffff">
                                <span style={{ fontSize: '36px' }}>HEADQUATERS</span>
                            </font>
                        </strong>
                    </h2>
                    <p>&nbsp;</p>
                    <h2>
                        <strong>
                            <span style={{ fontSize: '36px' }}>
                                <span style={{ color: '#FFFFFF' }}>
                                    Địa chỉ: 135 Hai Bà Trưng, P. Bến Nghé, Q.1, TP.HCM
                                </span>
                            </span>
                        </strong>
                    </h2>
                    <p>&nbsp;</p>
                    <h2>
                        <strong>
                            <span style={{ fontSize: '36px' }}>
                                <span style={{ color: '#FFFFFF' }}>Hotline: +84 (28) 7300 7279</span>
                            </span>
                        </strong>
                    </h2>
                    <p>&nbsp;</p>
                    <h2>
                        <img
                            src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/72/social-facebook-box-blue-icon.png"
                            style={{ width: '18px', height: '18px' }}
                        />
                        :&nbsp;
                        <a href="https://www.facebook.com/CinestarVietnam">https://www.facebook.com/CinestarVietnam</a>
                    </h2>
                </div>
            </div>
            {/*CONTACT-FORM*/}
            <div className="section-title">
                <h2>GỬI NỘI DUNG LIÊN HỆ</h2>
            </div>
            <div className="contact-form">
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
            {/*CONTACT-FORM*/}
            {/*ADVERTISMENT*/}
            <div
                className="advertisement-content"
                style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/6LienHe/Background/3.jpg)' }}
            >
                <div className="advertisement-wrap">
                    <h3>LIÊN HỆ QUẢNG CÁO +84 966 252 325</h3>
                    <p className="marketing-email">
                        <span>icon</span>
                        <a href="ads@cinestar.com.vn">ads@cinestar.com.vn</a>
                    </p>
                </div>
            </div>
            {/*ADVERTISMENT*/}
            {/*RECRUITMENT*/}
            <div
                className="recruitment-content"
                style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/6LienHe/Background/1.jpg)' }}
            >
                <div className="section-title">
                    <h2>LIÊN HỆ QUẢNG CÁO - SỰ KIỆN - GROUPSALE</h2>
                </div>
                <div className="recruitment-wrap">
                    <div data-block="true" data-offset-key="ej6d7-0-0">
                        <div data-offset-key="ej6d7-0-0" style={{ textAlign: 'justify' }}>
                            <p align="center">
                                <span style={{ textAlign: '-webkit-center' }}>THÔNG TIN LIÊN HỆ:</span>
                            </p>
                            <p align="center">
                                SỐ ĐIỆN THOẠI:&nbsp;<span style={{ fontSize: '22px' }}>+84 966 252 325</span>
                            </p>
                            <p align="center">
                                <span style={{ fontSize: '22px' }}>EMAIL: ads@cinestar.com.vn</span>
                            </p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*RECRUITMENT*/}
        </div>
    );
}

export default Contact;
