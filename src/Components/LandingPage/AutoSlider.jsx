import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AutoSlider = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper absolute inset-0 z-0"
        >
            <SwiperSlide className='w-[100%] h-full min-h-[500px] landing1'></SwiperSlide>
            <SwiperSlide className='w-[100%] h-full min-h-[500px] landing2'></SwiperSlide>
            {/* <SwiperSlide className='w-[100%] h-full min-h-[500px] landing3'></SwiperSlide> */}
            <SwiperSlide className='w-[100%] h-full min-h-[500px] landing4'></SwiperSlide>
            <SwiperSlide className='w-[100%] h-full min-h-[500px] landing5'></SwiperSlide>
        </Swiper>
    )
}

export default AutoSlider