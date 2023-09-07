import React from 'react';

function PlayingMovie() {
    return (
        <div className="movie-col active" data-open="playing" style={{ opacity: 1 }}>
            <div className="col-inr" id="playing">
                <div className="film-item cl-org t-2d" style={{ height: '476px' }}>
                    <a href="/phim/06df76bc-0d53-4b37-928d-ec6d41fa37f0">
                        <div className="film-item-pic">
                            <img src="https://res.cloudinary.com/dirtzhdru/image/upload/v1678071813/movie_images/deac59c7-1387-4f82-adf2-90679dc72483.jpg" alt="NGƯỜI KIẾN VÀ CHIẾN BINH ONG (C13): THẾ GIỚI LƯỢNG TỬ" />
                        </div>
                        <div className="film-item-txt">
                            <h3>NGƯỜI KIẾN VÀ CHIẾN BINH ONG (C13): THẾ GIỚI LƯỢNG TỬ</h3>
                            <p>Scott Lang và Hope Van Dyne trở lại tiếp tục cuộc phiêu lưu của họ với vai trò Người Kiến và Chiến binh Ong. Cùng với cha mẹ của Hope, họ sẽ có chuyến khám phá Lượng Tử Giới, gặp gỡ những sinh vật mới lạ và bắt đầu cuộc hành trình vào thế giới lượng tử.</p>
                        </div>
                    </a>
                    <div className="film-item-type">
                        <span className="icon-2d" />
                        <span className="icon-am3d" />
                        <span className="icon-3d" />
                    </div>
                    <div className="film-item-but">
                        <a className="trailler-btn fontsize13" href="/s3UD3qvJdao">TRAILER</a>
                        <a className="cart-btn fontsize13" href="/lich-chieu/06df76bc-0d53-4b37-928d-ec6d41fa37f0">Muavé</a>
                    </div>
                </div>

                <div className="film-item cl-ppl t-2d" style={{ height: '476px' }}>
                    <a href="/phim/276e10d6-3c79-4031-943d-05ee9ee273bb">
                        <div className="film-item-pic">
                            <img src="https://res.cloudinary.com/dirtzhdru/image/upload/v1678095716/movie_images/bbb414f6-9f22-4ba1-b784-ca5705de2cd1.jpg" alt="NỮ DANH CA HUYỀN THOẠI" />
                        </div>
                        <div className="film-item-txt">
                            <h3>NỮ DANH CA HUYỀN THOẠI</h3>
                            <p>I Wanna Dance with Somebody là bộ phim sắp ra mắt về biểu tượng âm nhạc quá cố, Whitney Houston. Naomi Ackie vào vai chính Whitney Houston trong bộ phim tiểu sử âm nhạc, dựa trên cuộc đời nữ ca sĩ nổi tiếng. Do Kasi Lemmons đạo diễn và kịch của người từng nhận đề cử Oscar là Anthony McCarten, tác phẩm sẽ đưa khán giả vào một cuộc hành trình đầy cảm xúc, tràn đầy năng lượng thông qua sự nghiệp và âm nhạc của Houston.</p>
                        </div>
                    </a>
                    <div className="film-item-type">
                        <span className="icon-2d" />
                        <span className="icon-am3d" />
                        <span className="icon-3d" />
                    </div>
                    <div className="film-item-but">
                        <a className="trailler-btn fontsize13" href="/5aQE_xqoR0Y">TRAILER</a>
                        <a className="cart-btn fontsize13" href="/lich-chieu/276e10d6-3c79-4031-943d-05ee9ee273bb">Muavé</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlayingMovie;