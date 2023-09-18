import React from 'react';

export default function OrderTitle() {
    return (
        <div className="order-title">
            <div className="order-wrap">
                {/*<div class="order-pic"><img src="https://cinestar.com.vn/pictures/films/6.jpg" /></div>*/}
                <div className="order-overview">
                    <h2>
                        <strong>Tên phim</strong>
                        <br />
                        <span>KẺ ẨN DANH (T18)</span>
                    </h2>
                    <ul className="about-ticket">
                        <li>
                            <p className="caption">Chọn suất chiếu</p>
                            <p className="value">10:45</p>
                        </li>
                        <li>
                            <p className="caption">Ngày</p>
                            <p className="value">15-09-2023</p>
                        </li>
                        <li>
                            <p className="caption">Số lượng</p>
                            <p className="value">
                                <span>0</span>
                                <sub>vé</sub>
                            </p>
                        </li>
                        <li>
                            <p className="caption">Tổng số tiền</p>
                            <p className="value">
                                <span>0</span>
                                <sup>đ</sup>
                            </p>
                        </li>
                    </ul>
                    <ul className="about-seat">
                        <li>Số ghế</li>
                        <li className="seat-number" />
                    </ul>
                </div>
                <div className="order-clock">
                    <span className="title">Thời gian giữ ghế</span>
                    <div className="clock flip-clock-wrapper" data-time={60}>
                        <span className="flip-clock-divider minutes">
                            <span className="flip-clock-label">Minutes</span>
                            <span className="flip-clock-dot top" />
                            <span className="flip-clock-dot bottom" />
                        </span>
                        <ul className="flip ">
                            <li className="flip-clock-before">
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow" />
                                        <div className="inn">9</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow" />
                                        <div className="inn">9</div>
                                    </div>
                                </a>
                            </li>
                            <li className="flip-clock-active">
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow" />
                                        <div className="inn">0</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow" />
                                        <div className="inn">0</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="flip ">
                            <li className="flip-clock-before">
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow" />
                                        <div className="inn">0</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow" />
                                        <div className="inn">0</div>
                                    </div>
                                </a>
                            </li>
                            <li className="flip-clock-active">
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow" />
                                        <div className="inn">5</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow" />
                                        <div className="inn">5</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <span className="flip-clock-divider seconds">
                            <span className="flip-clock-label">Seconds</span>
                            <span className="flip-clock-dot top" />
                            <span className="flip-clock-dot bottom" />
                        </span>
                        <ul className="flip ">
                            <li className="flip-clock-before">
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow" />
                                        <div className="inn">9</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow" />
                                        <div className="inn">9</div>
                                    </div>
                                </a>
                            </li>
                            <li className="flip-clock-active">
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow" />
                                        <div className="inn">0</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow" />
                                        <div className="inn">0</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="flip ">
                            <li className="flip-clock-before">
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow" />
                                        <div className="inn">9</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow" />
                                        <div className="inn">9</div>
                                    </div>
                                </a>
                            </li>
                            <li className="flip-clock-active">
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow" />
                                        <div className="inn">0</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow" />
                                        <div className="inn">0</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
