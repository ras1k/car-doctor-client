import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 absolute right-12 top-1/2 rounded-lg border-white border-l-8 border-t-8 shadow-xl" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl text-red-500 font-bold">About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-3 text-slate-600">There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.</p>
                        <p className="py-3 text-slate-600">There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.</p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;