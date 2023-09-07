import React from 'react';

function FormLogin(props) {
    const {showFormLogin} = props;
    return (
        <div className="user-form login" style={{ display: showFormLogin }}>
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
    );
}

export default FormLogin;