import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const BookService = () => {
    const service = useLoaderData()
    const { _id, img, title, price, service_id } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const email = user?.email;
        const email = form.email.value;
        const date = form.date.value;
        const booking = {
            customerName: name,
            email,
            img, 
            date,
            service: title,
            service_id : _id,
            price: price
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('booked lol')
            }
        })
    }
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-5xl font-bold text-orange-600'>{title}</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleBookService}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="number" name='amount' defaultValue={price} className="input input-bordered" />
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-block btn-neutral hover:bg-cyan-600' value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;