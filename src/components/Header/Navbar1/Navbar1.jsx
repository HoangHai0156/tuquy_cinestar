import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import nav1Style from './Navbar1.module.css';

export default function Navbar1() {

    const [hide, setHide] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            setHide(window.scrollY >= 10)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={clsx(nav1Style.header, {
            [nav1Style.hide]: hide
        })}>
            <div className={clsx(nav1Style.logoMb)} style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }} />
            <div className={clsx(nav1Style.top)}>
                <div style={{ display: 'none' }} className="user-peoplexx"><a href="user-detail.html" id="user_01">xem thông tin</a> Hi: <span>New member !</span></div>
                {/*//logo-part//*/}
                <div className={clsx(nav1Style.logo)} style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }} />
                {/*//logo-part//*/}
                {/*//facilities-part//*/}
                <div className={clsx(nav1Style.facilitiesNav)}>
                    {/*search*/}
                    <div className={clsx(nav1Style.searchForm)}>
                        <div className={clsx(nav1Style.formRowSearch)}>
                            <form onsubmit="return false;" action id="search" method="get">
                                <input id="qsearch" type="text" className="search-field" placeholder="Tìm kiếm..." />
                                <input id="defaultvalue" type="hidden" className="search-field" placeholder="Tìm kiếm..." />
                                <input type="hidden" id="href_search" defaultValue />
                            </form>
                        </div>
                        <a href="javascript:void(0);" className={clsx(nav1Style.search)}>Search</a>
                    </div>
                    {/*search*/}
                    {/*laguage*/}
                    <form style={{ display: 'inline' }} id="change_lang" encType="multipart/form-data" method="post" action="https://cinestar.com.vn/index.php?route=common/home">
                        <a style={{ textTransform: 'uppercase' }} className={clsx(nav1Style.language, nav1Style.show)} href="javascript:void(0);" onclick="$('input[name=\'language_code\']').attr('value', 'en').submit(); $('#change_lang').submit(); return false;">en</a>
                        <input type="hidden" defaultValue name="language_code" />
                        <input id="changlanguage_redirect" type="hidden" defaultValue="https://cinestar.com.vn/" name="redirect" />
                    </form>
                    {/*laguage*/}
                </div>
                {/*//facilities-part//*/}
                {/*menu*/}
                <div className={clsx(nav1Style.navigation)} style={{ height: 'auto' }}>
                    <a className={clsx(nav1Style.linkHome, nav1Style.current)} href="https://cinestar.com.vn/"><h1>Trang chủ</h1></a>
                    <div className={clsx(nav1Style.nav)}>
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
        </div>
    )
}
