import React from 'react'
import OrderTitle from './OrderTitle'
import TicketContent from './TicketContent'
import CinemaContent from './CinemaContent'
import Food from './Food'

export default function Order() {
    return (
        <div className='section-order' style={{ height: 'auto' }}>
            <a className="close-order" />
            {/*//movie-part//*/}
            <OrderTitle />

            <div className='order-content' style={{ display: 'block', height: '1367px' }}>
                {/*//ticket-part//*/}

                {/* <TicketContent /> */}

                {/* <CinemaContent /> */}

                <Food />
            </div>
        </div>

    )
}
