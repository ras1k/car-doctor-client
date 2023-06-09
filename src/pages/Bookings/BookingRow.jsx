import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, price, img, email, date, service, status } = booking;
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>${price}</td>
            <td>
                <button>{date}</button>
            </td>
            <td>
                {
                    status === 'confirm' ? <button className='btn btn-success text-white'>Confirmed</button> :
                    <button className='btn btn-ghost' onClick={() => handleBookingConfirm(_id)}>Confirm</button>
                }
            </td>
        </tr>
    );
};

export default BookingRow;