import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [hide, setHide] = useState();
    useEffect(() => {
        const handleScroll = () => {
            setHide(window.scrollY >= 10);
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header ${hide && 'hide'}`}>
            <div
                className="logo-mb"
                style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }}
            />
            <div className="top">
                <div style={{ display: 'none' }} className="user-peoplexx">
                    <a href="user-detail.html" id="user_01">
                        xem thông tin
                    </a>{' '}
                    Hi: <span>New member !</span>
                </div>
                {/*//logo-part//*/}
                <div
                    className="logo"
                    style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }}
                />
                {/*//logo-part//*/}
                {/*//facilities-part//*/}
                <div className="facilities-nav">
                    {/*search*/}
                    <div className="search-form">
                        <div className="form-row-search">
                            <form id="search" method="get">
                                <input id="qsearch" type="text" className="search-field" defaultValue="Tìm kiếm..." />
                                <input
                                    id="defaultvalue"
                                    type="hidden"
                                    className="search-field"
                                    defaultValue="Tìm kiếm..."
                                />
                                <input type="hidden" id="href_search" defaultValue />
                            </form>
                        </div>
                        <a className="search">Search</a>
                    </div>
                    {/*search*/}
                    {/*laguage*/}
                    <form
                        style={{ display: 'inline' }}
                        id="change_lang"
                        encType="multipart/form-data"
                        method="post"
                        action="https://cinestar.com.vn/index.php?route=common/home"
                    >
                        <a style={{ textTransform: 'uppercase' }} className="language show">
                            en
                        </a>
                        <input type="hidden" defaultValue name="language_code" />
                        <input
                            id="changlanguage_redirect"
                            type="hidden"
                            defaultValue="https://cinestar.com.vn/"
                            name="redirect"
                        />
                    </form>
                    {/*laguage*/}
                </div>
                {/*//facilities-part//*/}
                {/*menu*/}
                <div className="navigation" style={{ height: 'auto' }}>
                    <Link className="link-home" to="/">
                        <h1>Trang chủ</h1>
                    </Link>
                    <div className="nav">
                        <ul>
                            <li>
                                <Link
                                    data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất"
                                    data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    to="/phim"
                                >
                                    <h1>Phim</h1>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất"
                                    data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    to="/lichchieu"
                                >
                                    <h1>Lịch chiếu</h1>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất"
                                    data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    to="/rapvagia"
                                >
                                    <h1>Rạp và giá</h1>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất"
                                    data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    to="/khuyenmai"
                                >
                                    <h1>Khuyến mãi</h1>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất"
                                    data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    to="/hoivadap"
                                >
                                    <h1>Hỏi và đáp</h1>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất"
                                    data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    to="/tintuc"
                                >
                                    <h1>Tin tức</h1>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất"
                                    data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    to="/gioithieu"
                                >
                                    <h1>Giới thiệu</h1>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    data-title="CINESTAR - Hệ thống Rạp chiếu phim giá rẻ, hiện đại bậc nhất"
                                    data-description="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    data-keyword="Hệ thống rạp chiếu phim Cinestar phục vụ khán giả với những thước phim điện ảnh chất lượng, dịch vụ tốt nhất với giá vé chỉ từ 45.000đ. Đặt vé ngay hôm nay để nhận được những ưu đãi bất ngờ từ Cinestar."
                                    to="/lienhe"
                                >
                                    <h1>Liên hệ</h1>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*menu*/}
            </div>
        </div>
    );
}
