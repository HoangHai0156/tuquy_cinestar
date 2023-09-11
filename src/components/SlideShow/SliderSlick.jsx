import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderSlick = () => {
    const settings = {
        dots: true,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true
    };

    const imagePairs = [
        {
            top: 'https://cinestar.com.vn/pictures/webimages/6GioiThieu/website-csv-2.jpg',
            bottom: 'https://cinestar.com.vn/pictures/webimages/6GioiThieu/csv-2.jpg',
        },
        {
            top: 'https://cinestar.com.vn/pictures/webimages/6GioiThieu/csv-3.jpg',
            bottom: 'https://cinestar.com.vn/pictures/webimages/6GioiThieu/csv-4.jpg',
        },
        {
            top: 'https://cinestar.com.vn/pictures/webimages/6GioiThieu/avatar-web.jpg',
            bottom: 'https://cinestar.com.vn/pictures/webimages/6GioiThieu/hinh-anh-hue-2.jpg',
        },
        {
            top: 'https://cinestar.com.vn/pictures/webimages/6GioiThieu/hinh-anh-hue.jpg',
            bottom: 'https://cinestar.com.vn/pictures/moi/5GioiThieu/1HeThong/sanh400x267.jpg',
        },
        {
            top: 'https://cinestar.com.vn/pictures/moi/5GioiThieu/1HeThong/pc4400z267.jpg',
            bottom: 'https://cinestar.com.vn/pictures/moi/5GioiThieu/1HeThong/pc3400x267.jpg',
        },
        {
            top: 'https://cinestar.com.vn/pictures/moi/5GioiThieu/1HeThong/pc1400x267.jpg',
            bottom: 'https://cinestar.com.vn/pictures/moi/5GioiThieu/1HeThong/co400x267.jpg',
        },
        {
            top: 'https://cinestar.com.vn/pictures/moi/5GioiThieu/1HeThong/coffee400x267.jpg',
            bottom: 'https://cinestar.com.vn/pictures/moi/5GioiThieu/1HeThong/sanh3400x267.jpg',
        }
    ];

    return (
        <div style={{ maxWidth: "85%", justifyContent: "center", alignItems:'center', marginLeft:"110px", marginRight:'100px'}}>
            <div className="section-title">
                <h2>Một số hình ảnh của rạp Cinestar</h2>
            </div>
            <Slider {...settings}>
                {imagePairs.map((pair, index) => (
                    <div key={index}>
                        <div className="slide-grid">
                            <div className="top-images">
                                <img src={pair.top} alt={`Top Slide ${index}`} style={{ width: '97%', height: '250px', margin: "15px", border: "3px solid #ab309e" }} />
                            </div>
                            <div className="bottom-images">
                                <img src={pair.bottom} alt={`Bottom Slide ${index}`} style={{ width: '97%', height: '250px', margin: "15px", border: "3px solid #ab309e" }} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderSlick;

