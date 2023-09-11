import React, { useRef, useState } from "react";
import CFriend from "./CFriend";
import CVip from "./CVip";
import CThank from "./CThank";

export default function MemberSlide() {

    const [transform, setTransform] = useState(0);
    const [selected, setSelected] = useState('');

    const handleSetTransform = () => {
        transform === 0 ? setTransform(-591) : setTransform(0)
    }

    const handleSetSelected = (section) => {
        selected === section ? setSelected('') : setSelected(section)
    }

    const handleShow = (section) => {
        handleSetSelected(section);
        window.scrollTo(0, 1897.5999755859375);
    }

    return (
        <>
            <div className="section-title">
                <h2>Thành viên</h2>
            </div>
            <div className="member-content">
                <div className="member-wrap">
                    <div
                        className="member-slide slide-slidebox"
                        style={{ opacity: 1, display: "inline-block" }}
                    >
                        <div className="slide-wrapper-outer">
                            <div
                                className="slide-wrapper"
                                style={{
                                    width: "3546px",
                                    left: "0px",
                                    display: "block",
                                    marginLeft: "0px",
                                    transition: "all 1000ms ease 0s",
                                    transform: `translate3d(${transform}px, 0px, 0px)`,
                                }}
                            >
                                <div className="slide-item" style={{ width: "591px" }} onClick={() => handleShow('friend')}>
                                    <div className="member-item">
                                        <div className="member-pic">
                                            <img
                                                className="lazyload"
                                                src="https://cinestar.com.vn/pictures/webimages/3Khuyenmai/member/friend.png"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                        <div className="member-txt">
                                            <a href="https://cinestar.com.vn/khuyenmai/c-friend">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-item" style={{ width: "591px" }} onClick={() => handleShow('vip')}>
                                    <div className="member-item">
                                        <div className="member-pic">
                                            <img
                                                className="lazyload"
                                                src="https://cinestar.com.vn/pictures/webimages/3Khuyenmai/member/vip.png"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                        <div className="member-txt">
                                            <a href="https://cinestar.com.vn/khuyenmai/c-vip">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-item" style={{ width: "591px" }}>
                                    <div className="member-item" onClick={() => handleShow('thank')}>
                                        <div className="member-pic">
                                            <img
                                                className="lazyload"
                                                style={{ display: "block" }}
                                                src="https://cinestar.com.vn/pictures/webimages/3Khuyenmai/member/the-dsv-web.jpg"
                                            />
                                        </div>
                                        <div className="member-txt">
                                            <a href="https://cinestar.com.vn/khuyenmai/the-thanh-vien-phong-chong-ma-tuy">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-controls clickable">
                            <div className="slide-pagination">
                                <div className="slide-page active">
                                    <span className />
                                </div>
                                <div className="slide-page">
                                    <span className />
                                </div>
                            </div>
                            <div className="slide-buttons">
                                <div className="slide-prev" onClick={() => handleSetTransform()}>prev</div>
                                <div className="slide-next" onClick={() => handleSetTransform()}>next</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selected === 'friend' && <CFriend handleShow={handleShow} />}
            {selected === 'vip' && <CVip handleShow={handleShow} />}
            {selected === 'thank' && <CThank handleShow={handleShow} />}
        </>
    );
}
