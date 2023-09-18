import React, { useEffect, useState } from 'react'

export default function TicketContentRow({ price, name, ticketCal, setTicketCal }) {

    const [ticket, setTicket] = useState({
        quantity: 0,
        price: price,
        name: name
    })

    const handlePlus = () => {
        setTicket((prev) => {
            return {
                ...prev,
                quantity: prev.quantity + 1
            }
        })
        setTicketCal((prev) => {
            return {
                ...prev,
                quantity: prev.quantity + 1,
                amount: prev.amount + ticket.price
            }
        })
    }

    const handleMinus = () => {
        if (ticket.quantity > 0) {
            setTicket((prev) => {
                return {
                    ...prev,
                    quantity: prev.quantity - 1
                }
            })
            setTicketCal((prev) => {
                return {
                    ...prev,
                    quantity: prev.quantity - 1,
                    amount: prev.amount - ticket.price
                }
            })
        }
    }

    return (
        <tr data-seatstyle-id={30} data-ticket-id={26}>
            <td>{ticket.name}</td>
            <td className="ticket-num">
                <a className="minus" style={{ cursor: 'pointer' }} onClick={handleMinus}>
                    -
                </a>
                <input type="text" value={ticket.quantity} readOnly size={3} />
                <a className="add" style={{ cursor: 'pointer' }} onClick={handlePlus}>
                    +
                </a>
            </td>
            <td className="ticket-price">
                {ticket.price}<sup>đ</sup>
            </td>
            <td className="ticket-total" data-total={0}>
                <span>{ticket.price * ticket.quantity}</span>
                <sup>đ</sup>
            </td>
        </tr>
    )
}
