import React from 'react'

export default function Login(props) {

    const { loginShow } = props;

    return (
        <div className="tab-login" style={loginShow ? 
        { top: 'auto', left: '113px', right: 'auto', marginLeft: 'auto', display: 'block', opacity: '1' } : 
        { top: 'auto', left: '113px', right: 'auto', marginLeft: 'auto' }}>
            <div className="user-form login">
                <div className="icon-arrow" style={{ left: '50%' }} />
                <h3 className="user-title">Vui lòng nhập tên người dùng(email) và mật khẩu</h3>
                <form id="login-top">
                    <div className="require-col">
                        <div className="input-text username" >
                            <input name="username" id="login_email" type="text" placeholder='user@gmail.com' />
                        </div>
                        <div className="input-text password">
                            <input name="password" id="login_password" type="password" placeholder='******' />
                        </div>
                        <div className="input-but">
                            <input type="button" defaultValue="Đăng nhập" id="btn-login-tab" />
                            <a className="user-link">Tìm lại mật khẩu</a>
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
                            <a href="#" ><img className="captcha_image" src="https://cinestar.com.vn/?route=information/contact/captcha&id=1693983835670" alt="authentication" /></a>
                        </div>
                        <div className="input-text authentication">
                            <input type="text" name="captcha" id="captcha" defaultValue />
                            <input type="hidden" name="captcha_bk" id="captcha_bk" defaultValue="aec69c" />
                        </div>
                        <div className="input-but">
                            <input type="button" defaultValue="Gửi" id="btn-send-top" />
                            <a className="user-link">Quay lại trang đăng nhập</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
