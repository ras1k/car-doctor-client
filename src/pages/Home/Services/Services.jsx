import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-f8z5.onrender.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center w-1/2 mx-auto'>
                <h3 className='text-3xl font-bold text-orange-600'>Services</h3>
                <h2 className='text-5xl'>Our Services</h2>
                <p className='text-slate-400'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;