import React from 'react';
import SlideShowMovies from '../SlideShow/SlideShowMovies';
// import LoadingProvider from '../Loading/LoadingProvider';

function MovieDetail(props) {

    // const [showLoading, setShowLoading] = useState(false)


    return (
        <>
            <div className="film-details-content">
                <div className="film-details-wrap">
                    <div className="film-item t-2d">
                        <div className="film-item-pic">
                            <img src="https://res.cloudinary.com/dirtzhdru/image/upload/v1678094868/movie_images/413f50e5-acd4-4ce5-8667-daf80791c5fe.jpg" alt="CHUỘT NHÍ VÀ SỨ MỆNH THẦN BIỂN 2D LT" />
                        </div>

                        <div className="film-item-txt">
                            <h3>CHUỘT NHÍ VÀ SỨ MỆNH THẦN BIỂN 2D LT</h3>
                            <div className="film-overview"><span className="l-title">Khởi chiếu:</span><span className="l-value">2023-03-09</span></div>
                            <div className="film-overview"><span className="l-title">Thể loại:</span><span className="l-value">Hoạt hình</span></div>
                            <div className="film-overview"><span className="l-title">Diễn viên:</span><span className="l-value">David Alaux</span></div>
                            <div className="film-overview"><span className="l-title">Đạo diễn:</span><span className="l-value">Valentino Bisegna, Sara Di Sturco, Chiara Fabiano and Mattia Fabiano</span></div>
                            <div className="film-item-type">
                                <span className="icon-2d" /><span className="icon-am3d" /><span className="icon-3d" />
                            </div>
                            <p>Câu chuyện kể về Bé Tí – một chú chuột nhỏ thông minh luôn mang trong mình một ước mơ to lớn là được trở thành một vị anh hùng thám hiểm như Anh Hùng Biển vĩ đại. Nhưng với Bố Bự - chú mèo đã nhận nuôi cô thì đây là điều hão huyền.</p>
                            <div className="film-overview"><span className="l-title">Đánh giá:</span>
                                <span className="l-comment" />
                                <span className="l-comment" />
                                <span className="l-comment" />
                                <span className="l-comment" />
                                <span className="l-comment" />
                            </div>

                            <div className="film-item-but">
                                <a className="trailler-btn" href="/9GIoMNxQjcE">TRAILER</a>
                                <a className="cart-btn fontsize14" href="/lich-chieu/54b16393-859f-42a3-8f2a-d2b2b181593c">Mua vé</a>
                                <ul className="l-social">
                                    <li>Chia sẻ</li>
                                    <li className="l-facebook">
                                        <a href="http://www.facebook.com/sharer/sharer.php?u=https://cinestar.tk/phim/54b16393-859f-42a3-8f2a-d2b2b181593c" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600');return false;">Facebook</a>
                                    </li>
                                    <li className="l-google">
                                        <a href="https://plus.google.com/share?url=https://cinestar.tk/phim/54b16393-859f-42a3-8f2a-d2b2b181593c" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=450,width=600');return false;">Google</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button onClick={() => setShowLoading(!showLoading)}>
                Loading
            </button> 
            {
                showLoading ? (<LoadingProvider/>) : ''  
            } */}
            </div>
            <SlideShowMovies />
        </>
    );
}

export default MovieDetail;