import React, { useEffect, useRef, useState } from "react";

export default function Slider() {

    const imageInit = {
        transform: 0,
        transformorigin: 729,
        perspectiveOrigin: 729,
        page: 0,
    }

    const [image, setImage] = useState(imageInit)

    useEffect(() => {
        setTimeout(() => {
            if (image.transform == -4374) {
                setImage(imageInit)
            } else {
                setImage({
                    transform: image.transform - 1458,
                    transformorigin: image.transformorigin + 1458,
                    perspectiveOrigin: image.perspectiveOrigin + 1458,
                    page: image.page + 1
                })
            }
        }, 5000)
    })

    const handleSelectPage = (num) => {
        setImage({
            transform: 0 - 1458*num,
            transformorigin: 729 + 1458*num,
            perspectiveOrigin: 729 + 1458*num,
            page: num
        })
    }

    return (
        <div className="slider-home" data-time={5000}>
            <div
                className="slide-bg slide-slidebox"
                style={{ opacity: 1, display: "inline-block" }}
            >
                <div className="slide-wrapper-outer">
                    <div
                        className="slide-wrapper"
                        style={{
                            width: '11664px',
                            left: "0px",
                            display: "block",
                            transition: "all 0ms ease 0s",
                            transform: `translate3d(${image.transform}px, 0px, 0px)`,
                            transformOrigin: `${image.transformorigin}px center`,
                            perspectiveOrigin: `${image.perspectiveOrigin}px center`,
                        }}
                    >
                        <div className={`slide-item ${image.page == 0 ? 'slide-fade-in' : 'slide-fade-out'}`} style={{ width: "1458px" }}>
                            <div
                                className="bg-home"
                                style={{ width: "1458px", height: "341.719px" }}
                            >
                                <a href="https://cinestar.com.vn/lichchieu">
                                    <img
                                        src="https://cinestar.com.vn/pictures/z2161740555387_88fc044837bea7695ee9ec8320a39cef.jpg"
                                        alt="bg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={`slide-item ${image.page == 1 ? 'slide-fade-in' : 'slide-fade-out'}`} style={{ width: "1458px" }}>
                            <div
                                className="bg-home"
                                style={{ width: "1458px", height: "341.719px" }}
                            >
                                <a href="https://cinestar.com.vn/lichchieu">
                                    <img
                                        src="https://cinestar.com.vn/pictures/z2161740555616_cf6d683f88aa9447af57b89917e84acb.jpg"
                                        alt="bg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={`slide-item ${image.page == 2 ? 'slide-fade-in' : 'slide-fade-out'}`} style={{ width: "1458px" }}>
                            <div
                                className="bg-home"
                                style={{ width: "1458px", height: "341.719px" }}
                            >
                                <a href="https://cinestar.com.vn/lichchieu">
                                    <img
                                        src="https://cinestar.com.vn/pictures/z2161740545178_a8a9f7496b64b022c7303a779f958fc3.jpg"
                                        alt="bg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={`slide-item ${image.page == 3 ? 'slide-fade-in' : 'slide-fade-out'}`} style={{ width: "1458px" }}>
                            <div
                                className="bg-home"
                                style={{ width: "1458px", height: "341.719px" }}
                            >
                                <a href="https://cinestar.com.vn/lichchieu">
                                    <img
                                        src="https://cinestar.com.vn/pictures/z2161740548307_572fb6880f511449ec1b78168c547d3b.jpg"
                                        alt="bg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-controls clickable">
                    <div className="slide-pagination">
                        <div className={`slide-page ${image.page == 0 ? 'active' : ''}`} onClick={()=>handleSelectPage(0)}>
                            <span className />
                        </div>
                        <div className={`slide-page ${image.page == 1 ? 'active' : ''}`} >
                            <span className />
                        </div>
                        <div className={`slide-page ${image.page == 2 ? 'active' : ''}`}>
                            <span className />
                        </div>
                        <div className={`slide-page ${image.page == 3 ? 'active' : ''}`}>
                            <span className />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
