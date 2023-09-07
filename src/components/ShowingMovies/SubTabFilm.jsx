import React from 'react';

function SubTabFilm() {
    return (
            <div className="sub-tab film">
                <ul>
                    <li style={{ zIndex: 3 }} className="current">
                        <a href="javascript:void(0);" data-href="https://cinestar.com.vn/phimdangchieu" data-name="playing">Phim đang chiếu
                        </a>
                    </li>
                    <li style={{ zIndex: 2 }} className>
                        <a href="javascript:void(0);" data-href="https://cinestar.com.vn/phimsapchieu" data-name="coming">Phim sắp chiếu
                        </a>
                    </li>
                    <li style={{ zIndex: 1 }} className>
                        <a href="javascript:void(0);" data-href="https://cinestar.com.vn/suatchieudacbiet" data-name="special">Suất chiếu đặc biệt
                        </a>
                    </li>
                </ul>
            </div>

    );
}

export default SubTabFilm;