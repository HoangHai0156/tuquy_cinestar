import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

export default function User() {

    const [selected, setSelected] = useState('');
    const handleSetSelected = (section) =>{
        selected === section ? setSelected('') : setSelected(section)
    }

    return (
        <div className={`register-content ${selected ? 'showbox' : ''}`}>
            <div className="register-wrap">
                {/*//user-nav//*/}
                <ul>
                    <li className="btn-register" style={{ cursor: 'pointer' }} onClick={()=>handleSetSelected('reg')} 
                    >
                        <a data-tmp="Thông tin thành viên">Đăng ký thành viên</a>
                    </li>
                    <li className="btn-login" style={{ cursor: 'pointer' }} onClick={()=>handleSetSelected('log')} 
                    >
                        <a data-tmp="Đăng xuất" >Đăng nhập</a>
                    </li>
                </ul>
                <a className="hotline" href="tel:028 7300 8881">028 7300 8881</a>
                {/*//user-nav//*/}
                {/*//user-form//*/}
                <div className="block-user ">
                    {/*register-tab*/}
                    <Register registerShow={selected === 'reg'} />
                    {/*register-tab*/}
                    {/*login-tab*/}
                    <Login loginShow={selected === 'log'} />
                    {/*login-tab*/}
                </div>
                {/*//user-form//*/}
            </div>
            <div className="hover-box" />
        </div>
    )
}
