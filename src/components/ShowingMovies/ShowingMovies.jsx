import React, { useState } from 'react'
import SubTabFilm from './SubTabFilm';
import SpecialFilm from './SpecialFilm';
import PlayingMovie from './PlayingMovie';
import ComingFilm from './ComingFilm';
import FormRegister from '../Register/FormRegister';
import FormLogin from '../Login/FormLogin';

export default function ShowingMovies() {
  const [showFormRegister, setShowFormRegister] = useState(false);
  const [showFormLogin, setShowFormLogin] = useState(false);

  const handleShowFormRegister = () => {
    setShowFormRegister(!showFormRegister)
  }
  const handleShowFormLogin = () => {
    setShowFormRegister(!showFormLogin)
  }
  return (

    <div id="film-page">
      <SubTabFilm />
      <div className="tab-movie">

        <PlayingMovie />

        <ComingFilm />

        <SpecialFilm />


      </div>
      {
        showFormRegister ? (<FormRegister showFormRegister={showFormRegister} />) : ('')
      }
      {
        showFormLogin ? (<FormLogin showFormRegister={showFormLogin} />) : ('')
      }
    </div>




    // <>
    //   <div id="film-page">
    //     <div className="sub-tab film">
    //       <ul>
    //       <li style={{ zIndex: 4 }} className="">
    //           <a role='button' data-name="playing" onClick={handleShowFormRegister}>Đăng ký
    //           </a>
    //         </li>
    //         <li style={{ zIndex: 3 }} className="current">
    //           <a data-href="https://cinestar.com.vn/phimdangchieu" data-name="playing">Phim đang chiếu
    //           </a>
    //         </li>
    //         <li style={{ zIndex: 2 }} className>
    //           <a href="javascript:void(0);" data-href="https://cinestar.com.vn/phimsapchieu" data-name="coming">Phim sắp chiếu
    //           </a>
    //         </li>
    //         <li style={{ zIndex: 1 }} className>
    //           <a href="javascript:void(0);" data-href="https://cinestar.com.vn/suatchieudacbiet" data-name="special">Suất chiếu đặc biệt
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="tab-movie">
    //       <div className="movie-col active" data-open="playing" style={{ opacity: 1 }}>
    //         <div className="col-inr" id="playing">
    //           <div className="film-item cl-org t-2d" style={{ height: '476px' }}>
    //             <a href="/phim/06df76bc-0d53-4b37-928d-ec6d41fa37f0">
    //               <div className="film-item-pic">
    //                 <img src="https://res.cloudinary.com/dirtzhdru/image/upload/v1678071813/movie_images/deac59c7-1387-4f82-adf2-90679dc72483.jpg" alt="NGƯỜI KIẾN VÀ CHIẾN BINH ONG (C13): THẾ GIỚI LƯỢNG TỬ" />
    //               </div>
    //               <div className="film-item-txt">
    //                 <h3>NGƯỜI KIẾN VÀ CHIẾN BINH ONG (C13): THẾ GIỚI LƯỢNG TỬ</h3>
    //                 <p>Scott Lang và Hope Van Dyne trở lại tiếp tục cuộc phiêu lưu của họ với vai trò Người Kiến và Chiến binh Ong. Cùng với cha mẹ của Hope, họ sẽ có chuyến khám phá Lượng Tử Giới, gặp gỡ những sinh vật mới lạ và bắt đầu cuộc hành trình vào thế giới lượng tử.</p>
    //               </div>
    //             </a>
    //             <div className="film-item-type">
    //               <span className="icon-2d" />
    //               <span className="icon-am3d" />
    //               <span className="icon-3d" />
    //             </div>
    //             <div className="film-item-but">
    //               <a className="trailler-btn fontsize13" href="/s3UD3qvJdao">TRAILER</a>
    //               <a className="cart-btn fontsize13" href="/lich-chieu/06df76bc-0d53-4b37-928d-ec6d41fa37f0">Muavé</a>
    //             </div>
    //           </div>

    //           <div className="film-item cl-ppl t-2d" style={{ height: '476px' }}>
    //             <a href="/phim/276e10d6-3c79-4031-943d-05ee9ee273bb">
    //               <div className="film-item-pic">
    //                 <img src="https://res.cloudinary.com/dirtzhdru/image/upload/v1678095716/movie_images/bbb414f6-9f22-4ba1-b784-ca5705de2cd1.jpg" alt="NỮ DANH CA HUYỀN THOẠI" />
    //               </div>
    //               <div className="film-item-txt">
    //                 <h3>NỮ DANH CA HUYỀN THOẠI</h3>
    //                 <p>I Wanna Dance with Somebody là bộ phim sắp ra mắt về biểu tượng âm nhạc quá cố, Whitney Houston. Naomi Ackie vào vai chính Whitney Houston trong bộ phim tiểu sử âm nhạc, dựa trên cuộc đời nữ ca sĩ nổi tiếng. Do Kasi Lemmons đạo diễn và kịch của người từng nhận đề cử Oscar là Anthony McCarten, tác phẩm sẽ đưa khán giả vào một cuộc hành trình đầy cảm xúc, tràn đầy năng lượng thông qua sự nghiệp và âm nhạc của Houston.</p>
    //               </div>
    //             </a>
    //             <div className="film-item-type">
    //               <span className="icon-2d" />
    //               <span className="icon-am3d" />
    //               <span className="icon-3d" />
    //             </div>
    //             <div className="film-item-but">
    //               <a className="trailler-btn fontsize13" href="/5aQE_xqoR0Y">TRAILER</a>
    //               <a className="cart-btn fontsize13" href="/lich-chieu/276e10d6-3c79-4031-943d-05ee9ee273bb">Muavé</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>


    //       <div className="movie-col" data-open="coming" style={{ opacity: 0 }}>
    //         <div className="col-inr" id="coming">
    //           <div className="film-item cl-org t-2d" style={{ height: '476px' }}>
    //             <a href="/phim/63c09a3d-ad5d-4f71-94f3-985462e4db91">
    //               <div className="film-item-pic">
    //                 <img src="https://res.cloudinary.com/dirtzhdru/image/upload/v1682046757/movie_images/30442d59-7e07-43b6-90c7-ebf6a373dcc6.jpg" alt="MÈO SIÊU QUẬY Ở VIỆN BẢO TÀNG" />
    //               </div>
    //               <div className="film-item-txt">
    //                 <h3>MÈO SIÊU QUẬY Ở VIỆN BẢO TÀNG</h3>
    //                 <p>Câu chuyện xoay quanh tình bạn của chú mèo Vincent và chú chuột Maurice. Vincent vừa nhận được công việc bảo vệ kiệt tác tranh Mona Lisa trong một viện bảo tàng, còn Maurice lại có niềm đam mê gặm nhấm bức tranh này. Mọi chuyện phức tạp hơn khi có người cũng đang nung nấu ý định cướp lấy tuyệt tác Mona Lisa. Liệu Vincent và đồng đội của mình có thể cứu lấy những kiệt tác của Davinci và bảo vệ danh cho bảo tàng không?
    //                 </p>
    //               </div>
    //             </a>
    //             <div className="film-item-type">
    //               <span className="icon-2d" />
    //               <span className="icon-am3d" />
    //               <span className="icon-3d" />
    //             </div>
    //             <div className="film-item-but">
    //               <a className="trailler-btn fontsize13" href="/wk7dOWMZQFo">TRAILER</a>
    //               <a className="cart-btn fontsize13" href="/lich-chieu/63c09a3d-ad5d-4f71-94f3-985462e4db91">Muavé</a>
    //             </div>
    //           </div>
    //           <div className="film-item cl-ppl-dark t-2d" style={{ height: '476px' }}>
    //             <a href="/phim/2d671082-ab74-4470-8f0d-d65861b9aabf">
    //               <div className="film-item-pic">
    //                 <img src="https://res.cloudinary.com/dirtzhdru/image/upload/v1683635592/movie_images/56b9880c-102c-4ba5-9362-8cc75b1afb22.jpg" alt="Qui ut est harum ni" />
    //               </div>
    //               <div className="film-item-txt">
    //                 <h3>Qui ut est harum ni</h3>
    //                 <p>Aperiam sed in vero </p>
    //               </div>
    //             </a>
    //             <div className="film-item-type">
    //               <span className="icon-2d" />
    //               <span className="icon-am3d" />
    //               <span className="icon-3d" />
    //             </div>
    //             <div className="film-item-but">
    //               <a className="trailler-btn fontsize13" href="/#">TRAILER</a>
    //               <a className="cart-btn fontsize13" href="/lich-chieu/2d671082-ab74-4470-8f0d-d65861b9aabf">Muavé</a>
    //             </div>
    //           </div>
    //           <div className="film-item cl-ppl t-2d" style={{ height: '476px' }}>
    //             <a href="/phim/57e8a32b-0ba2-4223-920d-7cd92a3c74b0">
    //               <div className="film-item-pic">
    //                 <img src="https://res.cloudinary.com/dirtzhdru/image/upload/v1682220750/movie_images/8f606278-a2ea-4207-9a5f-709f69ad7e7d.jpg" alt="TÌNH CHỊ DUYÊN EM (C13)" />
    //               </div>
    //               <div className="film-item-txt">
    //                 <h3>TÌNH CHỊ DUYÊN EM (C13)</h3>
    //                 <p>Tình chị em tưởng chừng không thể rạn nứt cho đến khi chàng trai Mark chen vào giữa họ. Khi cặp song sinh phải đối mặt với “mối tình đầu không thể chia sẻ” như những thứ khác, cuộc xung đột nội tâm này sẽ dẫn họ bước sang giai đoạn mới của cuộc đời như thế nào?</p>
    //               </div>
    //             </a>
    //             <div className="film-item-type">
    //               <span className="icon-2d" />
    //               <span className="icon-am3d" />
    //               <span className="icon-3d" />
    //             </div>
    //             <div className="film-item-but">
    //               <a className="trailler-btn fontsize13" href="/#">TRAILER</a>
    //               <a className="cart-btn fontsize13" href="/lich-chieu/57e8a32b-0ba2-4223-920d-7cd92a3c74b0">Muavé</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>


    //       <div className="movie-col" data-open="special" style={{ opacity: 0 }}>
    //         <div className="col-inr" id="special" />
    //       </div>
    //     </div>
    //   </div>


    //   {
    //     showFormRegister ? (<FormRegister showFormRegister={showFormRegister}/>) : ('')
    //   }


    // </>
  );
}
