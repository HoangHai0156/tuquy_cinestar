import React from 'react'
import userStyle from './User.module.css'
import clsx from 'clsx'

export default function User() {
  return (
    <div className={clsx(userStyle.registerContent, 'mt-5')}>
      <div className={clsx(userStyle.registerWrap)}>
        {/* user-nav */}
        <ul>
          <li className="btn-register"><a data-tmp="Thông tin thành viên" href="javascript:void(0);">Đăng ký thành viên</a></li>
          <li className="btn-login"><a data-tmp="Đăng xuất" href="javascript:void(0);">Đăng nhập</a></li>
        </ul>
        <a className={clsx(userStyle.hotline)} href="tel:028 7300 8881">028 7300 8881</a>
      </div>
      <div className={clsx(userStyle.hoverBox)}></div>
    </div>
  )
}
