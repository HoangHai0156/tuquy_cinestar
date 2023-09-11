import React from 'react'

export default function Schedules() {
  return (
    <div className="content-page">
      {/*CINERMA - SYSTEM*/}
      <div className="cinema-list-content">
        <div className="cinema-list-wrap">
          <div className="cinema-list">
            <h2>Hệ thống rạp</h2>
            <div className="select-list" data-cate="location">
              <div className="select-header">
                <span />
                <h3>Hồ Chí Minh</h3>
              </div>
              <div className="select-box">
                <ul>
                  <li className="selected"><a href="javascript:void(0);" data-target="44eb9a3b-a1fb-45a4-898e-1c0ae39e84dc"><h3>Hồ Chí Minh</h3></a></li>
                  <li><a href="javascript:void(0);" data-target="506018c7-c3a6-4113-9112-01cbad73d0a7"><h3>Đà Lạt</h3></a></li>
                  <li><a href="javascript:void(0);" data-target="e2c7d28c-2f95-444d-b9ff-aa6684af4ad8"><h3>Bình Dương</h3></a></li>
                  <li><a href="javascript:void(0);" data-target="3a10a529-c2e3-4d88-8ad5-f3d653849c0d"><h3>Huế</h3></a></li>
                  <li><a href="javascript:void(0);" data-target="b27fe633-a4a1-4df4-81e2-23b3da44f7ec"><h3>Tiền Giang</h3></a></li>
                  <li><a href="javascript:void(0);" data-target="18b96581-f9e9-4216-97b4-78b49c54d5c5"><h3>Kiên Giang</h3></a></li>
                  <li><a href="javascript:void(0);" data-target="55e2182d-e5b8-4b74-b791-abf55f770b67"><h3>Lâm Đồng</h3></a></li>
                </ul>
              </div>
            </div>
            <div className="select-list" data-cate="location-cine">
              <div className="select-header">
                <span />
                <h3 data-holder="Chọn rạp">CineStar Quốc Thanh</h3>
              </div>
              <div className="select-box">
                <ul><li className="show selected"><a href="https://cinestar.com.vn/schedulelist" data-value="8f3a5832-8340-4a43-89bc-6653817162f1" cinema-id={1} data-cine="1/1" cine-open={1} cine-address="271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh" cine-call="028 7300 8881"><h3>CineStar Quốc Thanh</h3></a></li><li className="show"><a href="https://cinestar.com.vn/schedulelist" data-value="667c7727-857e-4aac-8aeb-771a8f86cd14" cinema-id={1} data-cine="1/1" cine-open={1} cine-address="135 Hai Bà Trưng, Phường Bến Nghé ,Quận 1,Thành Phố Hồ Chí Minh" cine-call="028 7300 7279"><h3>CineStar Hai Bà Trưng (TP.HCM)</h3></a></li></ul>
              </div>
            </div>
          </div>
          <div className="cinema-address">
            <h2><span className="c_logo" style={{ backgroundImage: 'url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)' }} /><span className="c_name">Quốc Thanh</span></h2>
            <div className="c_address">271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh</div>
            <div className="c_tel">Đặt vé: <strong><a href="tel:028 7300 8881">028 7300 8881</a></strong></div>
          </div>
        </div>
      </div>                {/*CINERMA - SYSTEM*/}
      {/*SCHECULE - LIST*/}

      <div className="schedule-list-content">
        <div className="schedule-list-wrap">
          <div className="schedule-load" style={{ minHeight: '137.5px', opacity: 1 }}><div className="schedule-item" cine-id="d8b730d2-b30a-4127-aae3-096aec822f33" cine-name="ÁC QUỶ MA SƠ 2 (T18)">
            <div className="film-item cl-org t-2d">
              <a href="https://cinestar.com.vn/phim/d8b730d2-b30a-4127-aae3-096aec822f33">
                <div className="film-item-pic">
                  <img src="https://cinestar.com.vn/pictures/Cinestar/09-2023/the-nun-ii.jpg" alt="ÁC QUỶ MA SƠ 2 (T18)" />
                </div>
                <div className="film-item-txt">
                  <h3>ÁC QUỶ MA SƠ 2 (T18)</h3>
                  <p>Bốn năm sau sự kiện tại tu viện St. Carta, sơ Irene trở lại một lần nữa để đối mặt với thế lực hắc ám của ác quỷ ma sơ Valak.</p>
                </div>
              </a>
              <div className="film-item-type">
                <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
              </div>
            </div>
            <div className="schedule">
              <div className="row">
                <div className="row-date" data-date="08/09/2023"><span>08/09<br />2023</span></div>
                <div className="row-hour">
                  <ul>
                    <li data-id="c0eace09-87d4-4711-8895-bb50e73fcd42" >08:45</li>
                    <li data-id="8b01dcbb-1c23-4be4-a196-9b5e863993e0" >09:45</li>
                    <li data-id="dd8be465-5cb5-40fa-9801-ea6757dfee8c" >11:00</li>
                    <li data-id="be9957cd-f95e-485c-9320-00e1fa43bcd3" >12:00</li>
                    <li data-id="bdc3a602-47a5-47bf-8390-0734416be192" >13:15</li>
                    <li data-id="3f2ef224-3df5-4d5b-a512-85f90abf9eb4" >14:15</li>
                    <li data-id="5476203a-c816-4751-9f17-54e3f834083d" >15:30</li>
                    <li data-id="500d02c9-c223-4464-9ca3-16ed3b249dc1" >16:30</li>
                    <li data-id="8aa01f78-07f8-4242-8b07-f69ed83adcc0" >17:45</li>
                    <li data-id="bbfd9617-867a-469a-a64a-b0c6d508bf42" >18:45</li>
                    <li data-id="3043492e-b8e9-47ce-97b8-13c14bfa57bb" >19:15</li>
                    <li data-id="da32400b-dfb8-41ce-86ce-8dba9226fbfc" >20:00</li>
                    <li data-id="eac8562f-9678-406f-90f4-3a6ddaee1fb0" >20:30</li>
                    <li data-id="60c604e3-65cb-4415-8bb4-72e903ecf7f4" >21:00</li>
                    <li data-id="f0dfd8d6-d00f-4794-b95c-a35017dd5299" >21:30</li>
                    <li data-id="f7417464-2db5-4294-a832-5570ca8fac8f" >22:15</li>
                    <li data-id="3b5b22ba-1968-4787-ac61-eb46213e8cb3" >22:45</li>
                    <li data-id="972ccfec-e489-4afd-bc67-088950720191" >23:15</li>
                    <li data-id="bfef2f77-8ab9-4d46-8683-ec4cc81450a3" >23:45</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <div className="schedule-item" cine-id="50982e83-0bb1-4c1d-a030-5761e5e9a65c" cine-name="TÌNH BẠN DIỆU KỲ 2D LT (P)">
              <div className="film-item cl-ppl-dark t-2d">
                <a href="https://cinestar.com.vn/phim/50982e83-0bb1-4c1d-a030-5761e5e9a65c">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/09-2023/tinh-ban-dieu-ky.jpg" alt="TÌNH BẠN DIỆU KỲ 2D LT (P)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>TÌNH BẠN DIỆU KỲ 2D LT (P)</h3>
                    <p>Một cuộc phiêu lưu kỳ thú tại thành phố New York hoa lệ của chú rối bỏ trốn với trí tưởng tượng vô biên - Don và món đồ chơi thú nhồi bông bị bỏ rơi - DJ Doggy Dog tại Công viên Trung tâm. Trải qua bao buồn vui, thăng trầm, cuộc phiêu lưu này đã gắn kết hai mảnh đời dường như chẳng liên quan đến nhau ấy, tạo nên một câu chuyện đẹp về tình bạn.</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="560cc692-d945-4673-8de4-d87989251d35" >13:20</li>
                      <li data-id="dfac9ab0-0286-4b44-941d-22d95a67059a" >16:25</li>
                      <li data-id="4d7c1690-cf96-4c35-9feb-a6c9d2fbab56" >17:30</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="1b8766d7-74f9-42e2-91f2-ae62cad3d54b" >13:20</li>
                      <li data-id="e11cc3de-2941-4d70-8e4b-b37b2c6f5853" >16:25</li>
                      <li data-id="7e67a7d9-15e5-4651-87e7-04b2fcfd5183" >17:30</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="a525bf6a-e9b9-4044-8a89-5b167f96650c" cine-name="THIỆN ÁC ĐỐI ĐẦU 3 (T18)">
              <div className="film-item cl-ppl t-2d">
                <a href="https://cinestar.com.vn/phim/a525bf6a-e9b9-4044-8a89-5b167f96650c">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/09-2023/thien-ac-doi-dau-3.jpg" alt="THIỆN ÁC ĐỐI ĐẦU 3 (T18)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>THIỆN ÁC ĐỐI ĐẦU 3 (T18)</h3>
                    <p>Robert McCall chuyển đến sinh sống tại miền Nam nước Ý nhưng phát hiện ra bạn bè của mình bị một tổ chức mafia ở địa phương kiểm soát. Khi tính mạng của họ bị đe dọa, ông buộc phải quay trở lại con đường sát thủ để bảo vệ bạn bè.</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="ef840476-df95-44ee-ae24-d1e9a111c291" >10:15</li>
                      <li data-id="4982a376-621d-4c77-810a-00af12cc402d" >15:15</li>
                      <li data-id="b238e73b-fa31-4b5b-b8c4-349771e4e911" >20:30</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="fc31527b-5240-46dd-b14d-0bafb38ebcac" >08:20</li>
                      <li data-id="2432580b-c3b1-4ef2-b543-5c96992303d0" >10:15</li>
                      <li data-id="60c83e12-f6cd-4353-b622-ba42a651e4db" >15:15</li>
                      <li data-id="e77ce8d7-5e99-4849-a570-e4557e218251" >20:30</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="af6013dc-5e12-4f92-8ac9-5ee43f92f96f" cine-name="BỘ ĐÔI BÁO THỦ (T16)">
              <div className="film-item cl-pnk t-2d">
                <a href="https://cinestar.com.vn/phim/af6013dc-5e12-4f92-8ac9-5ee43f92f96f">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/09-2023/bo-doi-bao-thu1.jpg" alt="BỘ ĐÔI BÁO THỦ (T16)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>BỘ ĐÔI BÁO THỦ (T16)</h3>
                    <p>Bộ Đôi Báo Thủ xoay quanh hành trình giải cứu một đồng nghiệp bị mất tích ở Lebanon 20 tháng trước của nhà ngoại giao Min-jun (Ha Jung-woo). Là một nhiệm vụ không chính thức rất nguy hiểm, nhưng Min-jun vẫn chấp nhận bởi anh khao khát được thăng chức tới Mỹ sau 5 năm chôn chân tại Vụ Trung Đông, Bộ Ngoại giao. Ngay khi đặt chân xuống sân bay Lebanon, Min-jun đã bị truy đuổi ráo riết bởi cảnh sát địa phương và cả bọn xã hội đen, khiến anh bất đắc dĩ phải dựa vào sự giúp đỡ của người Hàn Quốc duy nhất tại đây - tài xế Pan-su (Ju Ji-hoon).</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li className="disable-time">09:10</li>
                      <li data-id="6e354fd6-2d84-4997-8a19-0532620222f2" >11:45</li>
                      <li data-id="e5b1e420-98c5-4f8c-bf99-60c0aa7147e2" >22:45</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="c335df6f-f0fe-4384-864a-3340f44163ad" >09:10</li>
                      <li data-id="a381f38e-9338-41f6-898d-e6fdf1c41eaa" >11:45</li>
                      <li data-id="df794fa3-8448-4969-b69a-68f76e01ee2a" >22:45</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="6594de8a-d72d-449a-8d5f-9f08ba8cee56" cine-name="CHẠM VÀO HẠNH PHÚC (K)">
              <div className="film-item cl-org t-2d">
                <a href="https://cinestar.com.vn/phim/6594de8a-d72d-449a-8d5f-9f08ba8cee56">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/09-2023/cham-vao-cam-xuc.jpg" alt="CHẠM VÀO HẠNH PHÚC (K)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>CHẠM VÀO HẠNH PHÚC (K)</h3>
                    <p>Chạm Vào Hạnh Phúc là bộ phim điện ảnh Việt Nam nói về cuộc hành trình tìm kiếm hạnh phúc của cuộc sống, tình yêu và khát vọng, khai thác những tình cảm gia đình đầy ý nghĩa. Cùng xem lịch chiếu Chạm Vào Hạnh Phúc mới nhất, giá vé Chạm Vào Hạnh Phúc chi tiết tại rạp. Review phim và mua vé xem phim Chạm Vào Hạnh Phúc tại các Rạp Chiếu Phim.</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li className="disable-time">08:00</li>
                      <li data-id="57229480-70b9-45d2-91ce-82087dea6b01" >12:30</li>
                      <li data-id="352f012a-45a6-40e0-a087-ca68e88b3f42" >18:15</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="880d655c-4875-4e49-a034-14b0339f200c" >08:00</li>
                      <li data-id="47b47574-5f6e-4014-b24a-9b2870782551" >12:30</li>
                      <li data-id="d42f4ab9-dab5-415b-a32a-1ad43771a7c4" >18:15</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="cbdba331-5e8b-488d-9c15-e69c8aeb0279" cine-name="BẾN PHÀ XÁC SỐNG (T16)">
              <div className="film-item cl-ppl-dark t-2d">
                <a href="https://cinestar.com.vn/phim/cbdba331-5e8b-488d-9c15-e69c8aeb0279">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/09-2023/ben-pha-xac-song1.jpg" alt="BẾN PHÀ XÁC SỐNG (T16)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>BẾN PHÀ XÁC SỐNG (T16)</h3>
                    <p>Nội dung “Bến Phà Xác Sống” xoay quanh cuộc chạy trốn của nhóm người của Công (Huỳnh Đông) khỏi sự bùng phát của dịch bệnh và cố gắng chạy đến chuyến phà cuối cùng ở vùng hạ lưu sông Mekong. Thế nhưng, trong quá trình chạy trốn, họ một lần thất lạc khi xuất hiện sự biến chất và phá bĩnh của Diễm (Ốc Thanh Vân) khiến nhóm người buộc phải tách ra. Và cuộc tấn công của Zombie đổ bộ cù lao, đối mặt giữa sống và chết, các nhân vật nhận ra không phải dịch bệnh, chính sự tồn tại của tính ích kỷ và oán hận mới là thứ đẩy họ vào những thử thách sống còn.</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li className="disable-time">08:30</li>
                      <li data-id="0ed2ceb1-3d5f-48df-a130-1e13c470ca50" >14:20</li>
                      <li data-id="74de2e1a-1b44-407b-b8c3-f5ce0e35ce96" >19:20</li>
                      <li data-id="8cbd06f3-b1d4-49ba-870c-d9cf71fc845e" >20:40</li>
                      <li data-id="8c52965c-6d7c-4b02-b559-3019e822491c" >22:30</li>
                      <li data-id="3fd6aff0-472a-497a-b1a6-4d832a5cc602" >23:45</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="52e7cd78-339a-4bf4-83bd-ddb95644aa89" >08:30</li>
                      <li data-id="a447f6f4-4e04-4c55-8689-9b37855fbba3" >14:20</li>
                      <li data-id="604888d2-4d32-4085-9e7d-8bbb33c3e7ea" >19:20</li>
                      <li data-id="ab4a67d4-ba73-48fc-8f9b-67ae5635c0ab" >20:40</li>
                      <li data-id="3023a230-2e97-4051-b179-7e361698c341" >22:30</li>
                      <li data-id="d69c09b6-d611-446f-96b5-95dafeba7c2b" >23:45</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="6e5c0efe-6afa-42b1-9bb6-10c16872d5ec" cine-name="HÀM TỬ THẦN (T18)">
              <div className="film-item cl-ppl t-2d">
                <a href="https://cinestar.com.vn/phim/6e5c0efe-6afa-42b1-9bb6-10c16872d5ec">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/08-2023/ham-tu-than.png" alt="HÀM TỬ THẦN (T18)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>HÀM TỬ THẦN (T18)</h3>
                    <p>Trên chuyến hành trình xuyên biển đoàn tụ gia đình, một cơn bão buộc Naomi rời khỏi lộ trình và vướng vào phi vụ nguy hiểm dưới lòng đại dương. Nhiệm vụ khó thành, hàm tử thần chực chờ nuốt chửng, liệu Naomi có thể thoát khỏi biển máu!?</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="2e30782f-5cf0-4939-a0b4-d63d8fdc8fe5" >14:35</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="05360a19-b263-48fe-9ef1-0b5e7554ae66" >14:35</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="da4582f2-64af-42ca-91b3-4b23c29440ad" cine-name="ĐỊA ĐÀNG SỤP ĐỔ (T16)">
              <div className="film-item cl-pnk t-2d">
                <a href="https://cinestar.com.vn/phim/da4582f2-64af-42ca-91b3-4b23c29440ad">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/09-2023/dia-dang-sup-do.jpg" alt="ĐỊA ĐÀNG SỤP ĐỔ (T16)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>ĐỊA ĐÀNG SỤP ĐỔ (T16)</h3>
                    <p>Sau trận động đất dữ dội, ở trung tâm Seoul chỉ còn lại một tòa nhà chung cư có thể đứng vững, được gọi là Khu căn hộ Hwang Gung. Thời gian trôi qua, những người bên ngoài bắt đầu đến đây để cố gắng thoát khỏi cái lạnh khắc nghiệt. Chẳng bao lâu, cư dân chung cư không thể đối phó với số lượng ngày càng tăng và khi cảm thấy mối đe dọa đối với sự sống còn của mình, họ quyết định ban hành một biện pháp đặc biệt</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="800cafda-62dd-4e65-90b2-a21b582760b3" >09:45</li>
                      <li data-id="6bbc0020-53f1-4669-bcb6-b8cf86a2221d" >12:15</li>
                      <li data-id="5dc4005a-5cc0-4287-9b45-d0297361c707" >14:45</li>
                      <li data-id="17ee0630-8c88-4050-8779-e1d3dea23e0b" >16:15</li>
                      <li data-id="028fb9c1-699f-4007-b147-21d942cd8b5d" >17:15</li>
                      <li data-id="0ff0da23-6c61-4717-907d-d22451647281" >19:45</li>
                      <li data-id="229b2bb0-b9f0-42ff-9d52-71d7c46e9236" >21:15</li>
                      <li data-id="4c8e3922-b119-48d5-9cf0-8ce5ff3bf8eb" >22:15</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="ba8d9549-d6c0-42be-9ab2-7a6a51df2b21" >09:45</li>
                      <li data-id="a112bf7e-12de-485c-92eb-ae77a47b38c9" >12:15</li>
                      <li data-id="effc2884-17f9-492f-93a5-a686f56dba12" >14:45</li>
                      <li data-id="a75c0942-16c1-4075-a12d-e22cde6f7bea" >16:15</li>
                      <li data-id="b7cfe20c-fd2f-411d-9b17-f0dc48b30a95" >17:15</li>
                      <li data-id="6247198b-b965-4834-88ad-1619708b5497" >19:45</li>
                      <li data-id="e692706b-d135-4c8e-8481-31f64e938f1d" >21:15</li>
                      <li data-id="cfcf02fb-0d2d-4736-98e8-d34d59881b13" >22:15</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="18a2c270-002e-4946-a721-05cf8dc304d8" cine-name="KẺ ẨN DANH (T18)">
              <div className="film-item cl-org t-2d">
                <a href="https://cinestar.com.vn/phim/18a2c270-002e-4946-a721-05cf8dc304d8">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/08-2023/ke-an-danh-poster.jpg" alt="KẺ ẨN DANH (T18)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>KẺ ẨN DANH (T18)</h3>
                    <p>Chuyện kể về Lâm - người đàn ông chân chất có quá khứ bí mật, luôn đặt vợ con và hạnh phúc gia đình lên hàng đầu. Thế nhưng, cuộc sống yên bình của gia đình anh bỗng chốc bị đảo lộn. Lúc này, Lâm phải bảo vệ những điều mà anh yêu thương bằng mọi giá.</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="f6e91827-4efc-47be-b5e5-fd84345951f1" >10:05</li>
                      <li data-id="52b5e957-2a08-42e6-a39d-b872950dc464" >11:00</li>
                      <li data-id="4529b60c-0b3d-4645-a7f5-2b2d718e2b0c" >12:00</li>
                      <li data-id="061490b7-eaa1-474a-8fbe-b0d525adb2a8" >13:00</li>
                      <li data-id="ff49758a-0db0-43ac-9def-ce19d6aacbc4" >14:00</li>
                      <li data-id="4d53cfce-33a4-489f-96bc-fc5378a3c9a1" >15:00</li>
                      <li data-id="73159704-ca67-4be9-b627-cf661280bca7" >16:00</li>
                      <li data-id="9ead7d88-0fa9-413a-a593-1d9a2de500ef" >17:00</li>
                      <li data-id="715f9f5f-0ab8-44a2-9e82-5bc7da183be5" >18:00</li>
                      <li data-id="ed0f8e2c-47d1-4b08-b363-4af1eeef5e5f" >19:00</li>
                      <li data-id="f7e6ad6e-c524-4500-be84-b069cff802b7" >20:00</li>
                      <li data-id="57b3d0ac-5562-4901-bba2-8860616ebc43" >21:00</li>
                      <li data-id="f7a5f467-f5a7-4d78-81cc-edcd62e9f389" >22:05</li>
                      <li data-id="7629b4d2-6bde-45f8-bdae-410eda20074d" >23:00</li>
                      <li data-id="501124ca-6973-43f1-adf3-45cf45f3492e" >23:59</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="5d38f5b3-99d9-4ea2-8e43-cbb96620e738" >10:05</li>
                      <li data-id="2a4d08bb-1991-4a03-8dce-7595a4e500bb" >11:00</li>
                      <li data-id="1dd36f8e-1478-43a5-bdbd-92a981974979" >12:00</li>
                      <li data-id="bf13563c-3bce-42af-b11e-03a2deb2893a" >13:00</li>
                      <li data-id="169f4572-dd68-4415-8586-3948c613662f" >14:00</li>
                      <li data-id="0ce15526-07a5-4102-be5f-5e2bff14600d" >15:00</li>
                      <li data-id="8d0a51ee-9f06-412e-9d25-7a58a0067ea5" >16:00</li>
                      <li data-id="2f41b56c-de75-444a-a22d-1fe0c19217a1" >17:00</li>
                      <li data-id="03ce10d1-33eb-47bc-ad4d-1a135193e408" >18:00</li>
                      <li data-id="58c47bd3-5de8-49af-bf58-7ce3f817d110" >19:00</li>
                      <li data-id="b55a3652-120c-4a17-99bc-203d86e97796" >20:00</li>
                      <li data-id="4e43e39c-a935-4371-9089-286fc380ffdf" >21:00</li>
                      <li data-id="c324c7c9-0118-4597-958c-96bafd8083a0" >22:05</li>
                      <li data-id="08553e15-4c98-4cd7-a966-f017a4be1768" >23:00</li>
                      <li data-id="a7d872d6-1adf-4a7b-ac8a-4509f5ff846c" >23:59</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="a0d22936-c3ea-4906-b105-f6e414001660" cine-name="3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY">
              <div className="film-item cl-ppl-dark t-2d">
                <a href="https://cinestar.com.vn/phim/a0d22936-c3ea-4906-b105-f6e414001660">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/08-2023/shin-cau-be-but-chi.jpg" alt="3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY" />
                  </div>
                  <div className="film-item-txt">
                    <h3>3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</h3>
                    <p>3DCG! Shin Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~Sushi Bay~ xoay quanh câu chuyện về hai nguồn sáng đặc biệt từ vũ trụ mang theo siêu năng lực đặc biệt tới Trái Đất. Một nguồn sáng tích cực “nhập” vào nhóc Shin, khiến cặp mông núng nính của cậu chàng trở nên nóng bỏng và có khả năng điều khiển những đồ vật xung quanh theo ý muốn.</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li className="disable-time">09:00</li>
                      <li data-id="d7b30557-f289-4b6f-9d47-76b162c5696a" >18:45</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="f618e52d-23be-4ff6-b67e-fb568a703d65" >09:00</li>
                      <li data-id="463cad74-8f41-4fb2-9103-93cbb0bfcdb6" >18:45</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-item" cine-id="5b612727-452d-417a-b680-ea5194fa5019" cine-name="GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)">
              <div className="film-item cl-ppl t-2d">
                <a href="https://cinestar.com.vn/phim/5b612727-452d-417a-b680-ea5194fa5019">
                  <div className="film-item-pic">
                    <img src="https://cinestar.com.vn/pictures/Cinestar/08-2023/tay-dua-cu-phach1.jpg" alt="GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)" />
                  </div>
                  <div className="film-item-txt">
                    <h3>GRAN TURISMO: TAY ĐUA CỰ PHÁCH (T13)</h3>
                    <p>Nội dung bộ phim dựa trên câu chuyện có thật về Jann Mardenborough, một tay đua nổi tiếng tới từ Anh quốc. Vào năm 2011, anh đã đánh bại 90.000 đối thủ để trở thành nhà vô địch thứ ba, đồng thời là nhà vô địch trẻ tuổi nhất trong giải đấu GT Academy. Phần thưởng của Jann là cơ hội được đại diện cho Nissan tại giải đua Dubai 24-Hour.</p>
                  </div>
                </a>
                <div className="film-item-type">
                  <span className="icon-2d" />{/*<span class="icon-am3d"></span><span class="icon-3d"></span>*/}
                </div>
              </div>
              <div className="schedule">
                <div className="row">
                  <div className="row-date" data-date="06/09/2023"><span>06/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="17efa199-56fd-4544-a76b-044f30d3ba18" >10:40</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="row-date" data-date="07/09/2023"><span>07/09<br />2023</span></div>
                  <div className="row-hour">
                    <ul>
                      <li data-id="f06fe2de-7015-4caa-b6ce-f70e467c4ac1" >10:40</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*SCHECULE - LIST*/}
      {/*PROMOTION-SECTION*/}
      <div className="promotion-content">
        <div className="promotion-wrap">
          <div className="promotion-title">
            <h2>Ưu đãi</h2>
          </div>
          <div className="promotion-slide slide-slidebox" style={{ width: '1084px', marginLeft: '116px', opacity: 1, display: 'inline-block' }}>
            <div className="slide-wrapper-outer"><div className="slide-wrapper" style={{ width: '3610px', left: '0px', display: 'block', marginLeft: '0px', transition: 'all 1000ms ease 0s', transform: 'translate3d(0px, 0px, 0px)' }}><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
              <a href="https://cinestar.com.vn/khuyenmai/cinestarspurpleday">
                <div className="promotion-pic"><img className="lazyload" align="CINESTAR'S PURPLE DAY - THỨ 3 TUẦN CUỐI MỖI THÁNG" src="https://cinestar.com.vn/pictures/0330-web.jpg" style={{ display: 'block' }} /></div>
              </a>
            </div></div><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
              <a href="https://cinestar.com.vn/khuyenmai/c-monday">
                <div className="promotion-pic"><img className="lazyload" align="C'MONDAY - ƯU ĐÃI THỨ 2" src="https://cinestar.com.vn/pictures/c_monday.jpg" style={{ display: 'block' }} /></div>
              </a>
            </div></div><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
              <a href="https://cinestar.com.vn/khuyenmai/c-member">
                <div className="promotion-pic"><img className="lazyload" align="C'member - ngày hội thành viên" src="https://cinestar.com.vn/pictures/Hình%20nền%20CTKM/c'member.jpg" style={{ display: 'block' }} /></div>
              </a>
            </div></div><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
              <a href="https://cinestar.com.vn/khuyenmai/c-student">
                <div className="promotion-pic"><img className="lazyload" align="TẸT GA 45K SUỐT TUẦN TOÀN HỆ THỐNG" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/Hình%20nền%20CTKM/hssv.jpg" /></div>
              </a>
            </div></div><div className="slide-item" style={{ width: '361px' }}><div className="promotion-item">
              <a href="https://cinestar.com.vn/khuyenmai/c-ten">
                <div className="promotion-pic"><img className="lazyload" align="C'Ten - Khuyến mãi tại mốc 10H" style={{ display: 'block' }} src="https://cinestar.com.vn/pictures/c_ten.jpg" /></div>
              </a>
            </div></div></div></div>
            <div className="slide-controls clickable"><div className="slide-pagination"><div className="slide-page active"><span className /></div><div className="slide-page"><span className /></div></div></div></div>
        </div>
      </div>                {/*PROMOTION-SECTION*/}
    </div>
  )
}
