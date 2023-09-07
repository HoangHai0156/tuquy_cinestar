import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

export default function User() {

    const [show, setShow] = useState({
        loginShow: false,
        registerShow: false
    })

    const handleSetRegShow = () =>{
        let showReg = show.registerShow ? false : true;
        setShow({
            ...show,
            registerShow: showReg,
            loginShow: false
        })
    }

    const handleSetLogShow = () =>{
        let showLog = show.loginShow ? false : true;
        setShow({
            ...show,
            loginShow: showLog,
            registerShow: false
        })
    }

    return (
        <div className={`register-content ${show.loginShow || show.registerShow ? 'showbox':''}`}>
            <div className="register-wrap">
                {/*//user-nav//*/}
                <ul>
                    <li className="btn-register" style={{ cursor: 'pointer' }} onClick={()=>handleSetRegShow()}>
                        <a data-tmp="Thông tin thành viên">Đăng ký thành viên</a>
                    </li>
                    <li className="btn-login" style={{ cursor: 'pointer' }} onClick={()=>handleSetLogShow()}>
                        <a data-tmp="Đăng xuất" >Đăng nhập</a>
                    </li>
                </ul>
                <a className="hotline" href="tel:028 7300 8881">028 7300 8881</a>
                {/*//user-nav//*/}
                {/*//user-form//*/}
                <div className="block-user ">
                    {/*register-tab*/}
                    <Register registerShow={show.registerShow} />
                    {/*register-tab*/}
                    {/*login-tab*/}
                    <Login loginShow={show.loginShow} />
                    {/*login-tab*/}
                </div>
                {/*//user-form//*/}
            </div>
            <div className="hover-box" />
        </div>
    )
}
