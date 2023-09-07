import React, { useState } from 'react'

export default function CartSection() {

    const [selected, setSelected] = useState('');
    const handleSetSelected = (section) =>{
        selected === section ? setSelected('') : setSelected(section)
    }

    return (
        <div className="cart-content">
            <div className="cart-wrap">
                <div className="block-title">
                    <h2>Mua vé <br />Online</h2>
                </div>
                <div className="block-list">
                    <div className="select-list" data-cate="film">
                        <div className="select-header" onClick={()=>handleSetSelected('movies')}>
                            <span />
                            <h3 data-holder="Chọn phim">Chọn phim</h3>
                        </div>
                        <div className="select-box" style={selected === 'movies' ? {display : 'block'} : {display: 'none'}}>
                            <ul>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/08-2023/ke-an-danh-poster.jpg" data-format="2d" data-id="18a2c270-002e-4946-a721-05cf8dc304d8"><h3>KẺ ẨN DANH (T18)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" data-format="2d" data-id="3cc20272-cf83-42d0-9445-03ce95683632"><h3>TÌNH BẠN DIỆU KỲ 2D PĐ (P)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" data-format="2d" data-id="50982e83-0bb1-4c1d-a030-5761e5e9a65c"><h3>TÌNH BẠN DIỆU KỲ 2D LT (P)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/08-2023/tay-dua-cu-phach1.jpg" data-format="2d" data-id="5b612727-452d-417a-b680-ea5194fa5019"><h3>GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/cham-vao-cam-xuc.jpg" data-format="2d" data-id="6594de8a-d72d-449a-8d5f-9f08ba8cee56"><h3>CHẠM VÀO HẠNH PHÚC (K)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/08-2023/ham-tu-than.png" data-format="2d" data-id="6e5c0efe-6afa-42b1-9bb6-10c16872d5ec"><h3>HÀM TỬ THẦN (T18)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg" data-format="2d" data-id="a0d22936-c3ea-4906-b105-f6e414001660"><h3>3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/thien-ac-doi-dau-3.jpg" data-format="2d" data-id="a525bf6a-e9b9-4044-8a89-5b167f96650c"><h3>THIỆN ÁC ĐỐI ĐẦU 3 (T18)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/bo-doi-bao-thu1.jpg" data-format="2d" data-id="af6013dc-5e12-4f92-8ac9-5ee43f92f96f"><h3>BỘ ĐÔI BÁO THỦ (T16)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/ben-pha-xac-song1.jpg" data-format="2d" data-id="cbdba331-5e8b-488d-9c15-e69c8aeb0279"><h3>BẾN PHÀ XÁC SỐNG (T16)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/the-nun-ii.jpg" data-format="2d" data-id="d8b730d2-b30a-4127-aae3-096aec822f33"><h3>ÁC QUỶ MA SƠ 2 (T18)</h3></a></li>
                                <li><a data-img="https://cinestar.com.vn/pictures/Cinestar/09-2023/dia-dang-sup-do.jpg" data-format="2d" data-id="da4582f2-64af-42ca-91b3-4b23c29440ad"><h3>ĐỊA ĐÀNG SỤP ĐỔ (T16)</h3></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="select-list" data-cate="cine">
                        <div className="select-header" onClick={()=>handleSetSelected('theater')}>
                            <span />
                            <h3 data-holder="Chọn rạp">Chọn rạp</h3>
                        </div>
                        <div className="select-box" style={selected === 'cine' ? {display : 'block'} : {display: 'none'}}>
                            <ul className="warning">
                                <li><a href="javascript:void(0);"><h3>Vui lòng chọn phim</h3></a></li>
                            </ul>
                            <ul>
                            </ul>
                        </div>
                    </div>
                    <div className="select-list" data-cate="day">
                        <div className="select-header" onClick={()=>handleSetSelected('date')}>
                            <span />
                            <h3 data-holder="Chọn ngày">Chọn ngày</h3>
                        </div>
                        <div className="select-box" style={selected === 'date' ? {display : 'block'} : {display: 'none'}}>
                            <ul className="warning">
                                <li><a href="javascript:void(0);"><h3>Vui lòng chọn phim và rạp</h3></a></li>
                            </ul>
                            <ul>
                            </ul>
                        </div>
                    </div>
                    <div className="select-list" data-cate="hour">
                        <div className="select-header" onClick={()=>handleSetSelected('schedules')}>
                            <span />
                            <h3 data-holder="Chọn suất chiếu">Chọn suất chiếu</h3>
                        </div>
                        <div className="select-box" style={selected === 'schedules' ? {display : 'block'} : {display: 'none'}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
