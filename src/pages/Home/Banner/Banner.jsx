import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel md:w-full md:h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full  gap-5 left-0 top-0 pl-14 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21- 21- 21- 0)] ">
                    <div className='text-white md:space-y-7 md:w-1/2'>
                        <h2 className='md:text-6xl font-bold'>
                            <p>Affordable Price For Car Servicing</p>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque animi fugiat cum ad quam nostrum.</p>
                        <div className=''>
                            <button className='btn btn-primary md:mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-red-600 text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex rounded-xl items-center h-full  gap-5 left-0 top-0 pl-14 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21- 21- 21- 0)] ">
                    <div className='text-white space-y-7 w-1/2'>
                        <h2 className='text-6xl font-bold'>
                            <p>Affordable Price For Car Servicing</p>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque animi fugiat cum ad quam nostrum.</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-red-600 text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex rounded-xl items-center h-full  gap-5 left-0 top-0 pl-14 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21- 21- 21- 0)] ">
                    <div className='text-white space-y-7 w-1/2'>
                        <h2 className='text-6xl font-bold'>
                            <p>Affordable Price For Car Servicing</p>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque animi fugiat cum ad quam nostrum.</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-red-600 text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full  gap-5 left-0 top-0 pl-14 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21- 21- 21- 0)] ">
                    <div className='text-white space-y-7 w-1/2'>
                        <h2 className='text-6xl font-bold'>
                            <p>Affordable Price For Car Servicing</p>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque animi fugiat cum ad quam nostrum.</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-red-600 text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;