import React, { useEffect, useState } from "react";

export default function Promotion() {

    const [image, setImage] = useState({
        transform: 0,
        page: 0,
    })

    useEffect(() => {
        setTimeout(() => {

            if (image.transform == -722) {
                setImage({
                    transform: 0,
                    page: 0
                }
                )
            } else {
                setImage({
                    transform: image.transform - 361,
                    page: image.page + 1
                })
            }
        }, 5000)
        console.log(image.transform);
    })

    const handleSelectPage = (tran, page) => {
        setImage({
            transform: tran,
            page: page
        })
    }

    return (
        <div className="promotion-content">
            <div className="promotion-wrap">
                <div className="promotion-title">
                    <h2>Ưu đãi</h2>
                </div>
                <div
                    className="promotion-slide slide-slidebox"
                    style={{
                        width: "1084px",
                        marginLeft: "116px",
                        opacity: 1,
                        display: "inline-block",
                    }}
                >
                    <div className="slide-wrapper-outer">
                        <div
                            className="slide-wrapper"
                            style={{
                                width: "3610px",
                                left: "0px",
                                display: "block",
                                marginLeft: "0px",
                                transition: "all 800ms ease 0s",
                                transform: `translate3d(${image.transform}px, 0px, 0px)`,
                            }}
                        >
                            <div className="slide-item" style={{ width: "361px" }}>
                                <div className="promotion-item">
                                    <a href="https://cinestar.com.vn/khuyenmai/cinestarspurpleday">
                                        <div className="promotion-pic">
                                            <img
                                                className="lazyload"
                                                align="CINESTAR'S PURPLE DAY - THỨ 3 TUẦN CUỐI MỖI THÁNG"
                                                src="https://cinestar.com.vn/pictures/0330-web.jpg"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="slide-item" style={{ width: "361px" }}>
                                <div className="promotion-item">
                                    <a href="https://cinestar.com.vn/khuyenmai/c-monday">
                                        <div className="promotion-pic">
                                            <img
                                                className="lazyload"
                                                align="C'MONDAY - ƯU ĐÃI THỨ 2"
                                                src="https://cinestar.com.vn/pictures/c_monday.jpg"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="slide-item" style={{ width: "361px" }}>
                                <div className="promotion-item">
                                    <a href="https://cinestar.com.vn/khuyenmai/c-member">
                                        <div className="promotion-pic">
                                            <img
                                                className="lazyload"
                                                align="C'member - ngày hội thành viên"
                                                src="https://cinestar.com.vn/pictures/Hình%20nền%20CTKM/c'member.jpg"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="slide-item" style={{ width: "361px" }}>
                                <div className="promotion-item">
                                    <a href="https://cinestar.com.vn/khuyenmai/c-student">
                                        <div className="promotion-pic">
                                            <img
                                                className="lazyload"
                                                align="TẸT GA 45K SUỐT TUẦN TOÀN HỆ THỐNG"
                                                style={{ display: "block" }}
                                                src="https://cinestar.com.vn/pictures/Hình%20nền%20CTKM/hssv.jpg"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="slide-item" style={{ width: "361px" }}>
                                <div className="promotion-item">
                                    <a href="https://cinestar.com.vn/khuyenmai/c-ten">
                                        <div className="promotion-pic">
                                            <img
                                                className="lazyload"
                                                align="C'Ten - Khuyến mãi tại mốc 10H"
                                                style={{ display: "block" }}
                                                src="https://cinestar.com.vn/pictures/c_ten.jpg"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-controls clickable">
                        <div className="slide-pagination">
                            <div className={`slide-page ${image.page == 0 || image.page == 1 ? 'active' : ''}`}
                            >
                                <span className />
                            </div>
                            <div className={`slide-page ${image.page == 2 ? 'active' : ''}`}
                            >
                                <span className />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
