import React, { useState } from 'react';

function FormRegister(props) {

    const { showFormRegister } = props

    return (
        <>
            <div className="user-form register" style={{ display: showFormRegister }}>
                <div className="icon-arrow" style={{ left: '50%' }} />
                <h3 className="user-title">Vui lòng nhập thông tin</h3>
                <form id="register-top">
                    <div className="require-col">
                        <label className="gender"><input type="radio" name="gender" defaultValue={1} /><span className="gender-name">Nam</span><span className="gender-shape" /></label>
                        <label className="gender"><input type="radio" name="gender" defaultValue={0} /><span className="gender-name">Nữ</span><span className="gender-shape" /></label>
                    </div>
                    <div className="require-col">
                        <div className="input-text name">
                            <span className="focus-text">HỌ TÊN (*)</span>
                            <input id="member_name" name="name" type="text"  />
                        </div>
                        <div className="input-text birth">
                            <span className="focus-text">DD/MM/YYYY ( Ngày sinh*)</span>
                            <input id="member_birthday" name="birthday" type="text"  />
                        </div>
                        <div className="input-text address">
                            <span className="focus-text">ĐỊA CHỈ (*)</span>
                            <input id="member_address" name="address" type="text"  />
                        </div>
                        <div className="input-text code">
                            <span className="focus-text">SỐ CMNN/BẰNG LÁI (*)</span>
                            <input id="member_cmnn" name="cmnn" type="text"  />
                        </div>
                        <div className="input-text tel">
                            <span className="focus-text">ĐIỆN THOẠI (*)</span>
                            <input id="member_phone" name="phone" type="text"  />
                        </div>
                        <div className="input-text email">
                            <span className="focus-text">EMAIL (*)</span>
                            <input id="member_email" name="email" type="text"  />
                        </div>
                        <div className="input-text username">
                            <span className="focus-text">TÊN ĐĂNG NHẬP (*)</span>
                            <input id="member_username" name="username" type="text"  />
                        </div>
                        <div className="input-text password">
                            <span className="focus-text">MẬT KHẨU (*)</span>
                            <input id="member_password" name="password" type="password"  />
                        </div>
                        <div className="input-text confirmpass">
                            <span className="focus-text">NHẬP LẠI MẬT KHẨU (*)</span>
                            <input id="member_password_confirm" name="password_confirm" type="password"  />
                        </div>
                        <div className="input-but">
                            <input type="button" defaultValue="ĐĂNG KÝ" id="btn-register-top" />
                        </div>
                    </div>
                </form>
            </div>


        </>
    );
}

export default FormRegister;