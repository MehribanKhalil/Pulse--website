import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { EffectFade,Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import './index.scss'


const HeroSection = () => {
    return (
        <div className=' hero-section'>
            <Swiper pagination={true}  effect={'fade'} modules={[EffectFade,Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className=' slide slide-1'>
                        <h1>Food and more<span className=' text-main-color'>.</span></h1>
                        <p>By Chef Francis Smith</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide><div className=' slide slide-2'>
                    <h1>Food and more<span className=' text-main-color'>.</span></h1>
                    <p>By Chef Francis Smith</p>
                </div></SwiperSlide>


                <SwiperSlide><div className=' slide slide-3'>
                    <h1>Food and more<span className=' text-main-color'>.</span></h1>
                    <p className=''>By Chef Francis Smith</p>
                </div></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HeroSection