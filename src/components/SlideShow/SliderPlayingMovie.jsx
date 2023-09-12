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
            title: 'NHIỆM VỤ CUỐI CÙNG (T13)',
            description: 'The Moon: Nhiệm Vụ Cuối Cùng lấy mốc thời gian giả định vào năm 2029 khi tàu vũ trụ Woori-ho của Hàn Quốc bắt đầu cuộc hành trình tới Mặt trăng. Điều này đã thu hút sự chú ý của thế giới, nhưng một ngọn lửa Mặt trời bùng lên đã nhấn chìm con tàu vũ trụ, chỉ còn lại duy nhất thành viên phi hành đoàn Hwang Sun-woo (Doh Kyung Soo thủ vai) mắc kẹt tại Mặt trăng. Cựu giám đốc chuyến bay của Trung tâm vũ trụ Naro, Kim Jae-gook (Sul Kyung Gu thủ vai) và giám đốc quỹ đạo Mặt trăng của NASA, Yoon Moon-young (Kim Hee Ae thủ vai) đã tham gia vào một trận chiến khốc liệt chống lại các yếu tố ngoài không gian để đưa Sun-woo trở về an toàn.',
            imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/08-2023/nhiem-vu-cuoi-cung.jpg',
            detail:"https://cinestar.com.vn/phim/2e280d5d-c66e-47ae-881c-04a094b24a56",
            trailer:"https://cinestar.com.vn/trailer?code=LrNdmCiP9ak",
            ticket:"https://cinestar.com.vn/lichchieu/2e280d5d-c66e-47ae-881c-04a094b24a56"
        },
        {
            title: 'GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)',
            description: 'Nội dung bộ phim dựa trên câu chuyện có thật về Jann Mardenborough, một tay đua nổi tiếng tới từ Anh quốc. Vào năm 2011, anh đã đánh bại 90.000 đối thủ để trở thành nhà vô địch thứ ba, đồng thời là nhà vô địch trẻ tuổi nhất trong giải đấu GT Academy. Phần thưởng của Jann là cơ hội được đại diện cho Nissan tại giải đua Dubai 24-Hour.',
            imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/08-2023/tay-dua-cu-phach1.jpg',
            detail:"https://cinestar.com.vn/phim/5b612727-452d-417a-b680-ea5194fa5019",
            trailer:"https://cinestar.com.vn/trailer?code=1EQysxQ_iO4",
            ticket:"https://cinestar.com.vn/lichchieu/5b612727-452d-417a-b680-ea5194fa5019"
        },
        {
            title: 'GIA TỘC CHẾT CHÓC (T16)',
            description: 'Sau khi ly hôn, Liza bị bỏ lại với hai đứa con. Không lâu sau đó, cô gặp một người phụ nữ xưng là họ hàng của cô. Bà nói rằng gia đình họ có một lời nguyền gia tộc và các cậu con trai của Liza đang gặp nguy hiểm tính mạng. Liza từ chối tin vào những nỗi sợ mê tín, nhưng sau khi những linh ảnh kỳ lạ bắt đầu xuất hiện, Liza biết những lời cảnh báo là thật.',
            imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/08-2023/gia-toc-chet-choc.png',
            detail:"https://cinestar.com.vn/phim/452d6f89-0dcb-42b2-acb6-75d27338eb9b",
            trailer:"https://cinestar.com.vn/trailer?code=K1m2pmtqr2Q",
            ticket:"https://cinestar.com.vn/lichchieu/452d6f89-0dcb-42b2-acb6-75d27338eb9b"
        },
        {
            title: '3DCG! SHIN – CẬU BÉ BÚT CHÌ 2D PĐ: ĐẠI CHIẾN SIÊU NĂNG LỰC',
            description: '3DCG! Shin - Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~ Sushi Bay ~. Xoay quanh câu chuyện về hai nguồn sáng đặc biệt từ vũ trụ mang theo siêu năng lực đặc biệt tới Trái Đất. Một nguồn sáng tích cực “nhập” vào nhóc Shin, khiến cặp mông núng nính của cậu trở nên nóng bỏng và có khả năng điều khiển những đồ vật xung quanh theo ý muốn. Một thanh niên trẻ khác tên Mitsuru Hiriya cũng nhận được siêu năng lực này. Đồng thời, một nhà khoa học xấu xa khác nhăm nhe ý định lợi dụng siêu năng lực của Hiriya để trở thành bá chủ.',
            imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg',
            detail:"https://cinestar.com.vn/phim/a0f28ba1-dbaa-4012-9a05-cfd25dc60684",
            trailer:"https://cinestar.com.vn/trailer?code=OIQwmMCmvMI",
            ticket:"https://cinestar.com.vn/lichchieu/a0f28ba1-dbaa-4012-9a05-cfd25dc60684"
        },
        {
            title: 'FINNICK 2D LT (P): NGÔI NHÀ QUÁI VẬT',
            description: 'Finnick là một người dường như không quan tâm đến việc kiếm tiền từ ngôi nhà của mình. Mọi thứ thay đổi khi một gia đình mới đến nhà anh ấy và những mánh khóe của Finnick hoàn toàn không hiệu quả. Anh gặp Christine và những sự kiện không thể giải thích được bắt đầu xảy ra trong thành phố. Finnick và Christine sẽ phải hợp tác và làm việc cùng nhau để giải quyết bí ẩn của các sự kiện và cứu thành phố. Kết thúc hành trình đó liệu cô bé Christine và yêu tinh Finnick có đem lại sự hòa bình cho ngôi làng và ‘một bí ẩn khác’ của Finnick có được phát hiện hay không?',
            imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/08-2023/ngoi-nha-quai-vat.jpg',
            detail:"https://cinestar.com.vn/phim/e8650c68-8952-461f-b187-1117e4665c2f",
            trailer:"https://cinestar.com.vn/trailer?code=Sm46GfOUeWE",
            ticket:"https://cinestar.com.vn/lichchieu/e8650c68-8952-461f-b187-1117e4665c2f"
        },
        {
            title: 'KẺ ẨN DANH (T18)',
            description: 'Chuyện kể về Lâm - người đàn ông chân chất có quá khứ bí mật, luôn đặt vợ con và hạnh phúc gia đình lên hàng đầu. Thế nhưng, cuộc sống yên bình của gia đình anh bỗng chốc bị đảo lộn. Lúc này, Lâm phải bảo vệ những điều mà anh yêu thương bằng mọi giá.',
            imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/08-2023/ke-an-danh-poster.jpg',
            detail:"https://cinestar.com.vn/phim/18a2c270-002e-4946-a721-05cf8dc304d8",
            trailer:"https://cinestar.com.vn/trailer?code=FrboQpjzNwE",
            ticket:"https://cinestar.com.vn/lichchieu/18a2c270-002e-4946-a721-05cf8dc304d8"
        }
        
        // 'https://cinestar.com.vn/pictures/Cinestar/08-2023/nhiem-vu-cuoi-cung.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/08-2023/tay-dua-cu-phach1.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/08-2023/gia-toc-chet-choc.png',
        // 'https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/08-2023/ngoi-nha-quai-vat.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/08-2023/ke-an-danh-poster.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/08-2023/ham-tu-than.png',
        // 'https://cinestar.com.vn/pictures/Cinestar/09-2023/bo-doi-bao-thu1.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/09-2023/thien-ac-doi-dau-3.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/09-2023/ben-pha-xac-song1.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/09-2023/cham-vao-cam-xuc.jpg',
        // 'https://cinestar.com.vn/pictures/Cinestar/09-2023/the-nun-ii.jpg',
    ];

    const slideRef = useRef(null);

    const handleNext = () => {
        slideRef.current.slickNext();
    };

    const handlePrev = () => {
        slideRef.current.slickPrev();
    };

    return (
        <div style={{backgroundColor:'#44003a'}}>
            <div className="section-title" style={{backgroundColor:'#44003a'}}>
                <h2>Các phim đang chiếu</h2>
            </div>
            <div
                className="row"
                style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '100px'}}
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
                                    <img src={pair.imageUrl} style={{ width: '200px', height: '300px', marginLeft:"15px", marginTop:"20px" }} />
                                    <div className="movie-txt" style={{marginBottom:"15px"}}>
                                        <h3>{pair.title}</h3>
                                    </div>
                                    <div className="movie-over">
                                        <a href={pair.detail}>
                                            <p>{pair.description}</p>
                                            <span className="atc">...</span>
                                            <span className="detail-link">Chi tiết</span> 
                                        </a>
                                        <a
                                            className="trailler-btn fontsize13"
                                            href={pair.trailer}
                                        >
                                            Xem trailer
                                        </a>
                                        <a
                                            className="cart-btn fontsize13"
                                            href={pair.ticket}
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
