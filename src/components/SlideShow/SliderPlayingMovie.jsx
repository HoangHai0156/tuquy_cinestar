import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderPlayingMovie = () => {
    const settings = {
        dots: false,
        speed: 800,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
    };

    const imagePairs = [
        {
            title: 'Phim 1',
            description: 'Mô tả phim 1',
            releaseDate: 'Ngày công chiếu 1',
            imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/08-2023/nhiem-vu-cuoi-cung.jpg',
        },
        'https://cinestar.com.vn/pictures/Cinestar/08-2023/nhiem-vu-cuoi-cung.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/08-2023/tay-dua-cu-phach1.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/08-2023/gia-toc-chet-choc.png',
        'https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/08-2023/ngoi-nha-quai-vat.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/08-2023/ke-an-danh-poster.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/08-2023/ham-tu-than.png',
        'https://cinestar.com.vn/pictures/Cinestar/09-2023/bo-doi-bao-thu1.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/09-2023/thien-ac-doi-dau-3.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/09-2023/ben-pha-xac-song1.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/09-2023/cham-vao-cam-xuc.jpg',
        'https://cinestar.com.vn/pictures/Cinestar/09-2023/the-nun-ii.jpg',
    ];

    const slideRef = useRef(null);

    const handleNext = () => {
        slideRef.current.slickNext();
    };

    const handlePrev = () => {
        slideRef.current.slickPrev();
    };

    return (
        <div>
            <div className="section-title">
                <h2>Các phim đang chiếu</h2>
            </div>
            <div
                className="row"
                style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '100px' }}
            >
                <img
                    style={{
                        position: 'absolute',
                        left: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#ab309e',
                        cursor: 'pointer',
                    }}
                    src="https://cinestar.com.vn/catalog/view/theme/default/images/icon-start.png"
                    alt=""
                    onClick={handlePrev}
                />
                <div
                    style={{
                        maxWidth: '85%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '110px',
                        marginRight: '100px',
                    }}
                >
                    <Slider {...settings} ref={slideRef}>
                        {imagePairs.map((pair, index) => (
                            <div key={index}>
                                <div
                                    className="top-images"
                                    style={{ position: 'relative', overflow: 'hidden', margin: '10px' }}
                                >
                                    <img src={pair} style={{ width: '88%', height: '300px' }} />
                                    <div className="movie-txt">
                                        <h3>NHIỆM VỤ CUỐI CÙNG (T13)</h3>
                                    </div>
                                    <div className="movie-over mb-4">
                                        <a href="https://cinestar.com.vn/phim/2e280d5d-c66e-47ae-881c-04a094b24a56">
                                            <p>ề an toàn.</p>
                                            <span className="atc">...</span>
                                            <span className="detail-link">Chi tiết</span>
                                        </a>
                                        <a
                                            className="trailler-btn fontsize13"
                                            href="https://cinestar.com.vn/trailer?code=LrNdmCiP9ak"
                                        >
                                            Xem trailer
                                        </a>
                                        <a
                                            className="cart-btn fontsize13"
                                            href="https://cinestar.com.vn/lichchieu/2e280d5d-c66e-47ae-881c-04a094b24a56"
                                        >
                                            Mua vé
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <img
                    style={{
                        position: 'absolute',
                        right: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#ab309e',
                        cursor: 'pointer',
                    }}
                    src="https://cinestar.com.vn/catalog/view/theme/default/images/icon-start.png"
                    alt=""
                    onClick={handleNext}
                />
            </div>
        </div>
    );
};

export default SliderPlayingMovie;
