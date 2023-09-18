import React, { useState } from 'react';
import TicketContentRow from './TicketContentRow';

export default function TicketContent() {

    const [ticketCal, setTicketCal] = useState({
        quantity: 0,
        amount: 0
    })

    return (
        <div className="ticket-content" style={{ display: 'block' }}>
            <div className="ticket-wrap">
                <div className="tbl-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Loại vé</th>
                                <th>Số lượng</th>
                                <th>Giá (VNĐ)</th>
                                <th>Tổng tiền (VNĐ)</th>
                            </tr>
                        </thead>
                        <tbody id="content-price">
                            <TicketContentRow price={95000} name={'Người Lớn (ĐÔI)'} ticketCal={ticketCal} setTicketCal={setTicketCal} />
                            <TicketContentRow price={45000} name={'Người Lớn (ĐƠN)'} ticketCal={ticketCal} setTicketCal={setTicketCal} />
                        </tbody>
                    </table>
                </div>
                <ul className="ticket-cal">
                    <li className="total-ticket-num">
                        Số lượng:<span>{ticketCal.quantity}</span>
                        <mark>vé</mark>
                    </li>
                    <li className="total-ticket-amount">
                        Tổng số tiền:<span>{ticketCal.amount}</span>
                        <sup>đ</sup>
                    </li>
                </ul>
                <div className="ticket-request">
                    <p />
                </div>
                <div className={`input-but ${ticketCal.quantity === 0 ? '' : 'active'}`}>
                    <input type="button" defaultValue="Quay lại" id="ticket-back" />
                    <input type="button" defaultValue="Chọn ghế" id="ticket-next" />
                </div>
            </div>
        </div>
    );
}
