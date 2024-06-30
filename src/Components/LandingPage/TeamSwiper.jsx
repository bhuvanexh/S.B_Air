import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bl from '../../assets/Team/bl.png'
import kamal from '../../assets/Team/kamal.png'
import manish from '../../assets/Team/manish.png'
import pradeep from '../../assets/Team/pradeep.png'
import pramod from '../../assets/Team/pramod.png'
import sandeep from '../../assets/Team/sandeep.png'
import umesh from '../../assets/Team/umesh.png'
import anand from '../../assets/Team/anand.png'
import { Navigation, Pagination } from 'swiper/modules';
import TeamCard from './TeamCard';

export default function TeamSwiper() {
    return (
        <>
            <div className='h-[600px] w-[95%] '>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper h-full w-[80%]"
                >
                    <SwiperSlide className='flex items-center justify-center mx-2'>
                        <TeamCard image={bl} name="Babulal Saini" post="Founder" number="9414240322" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center mx-2'>
                        <TeamCard image={sandeep} name="Sandeep Kumar" post="Founder" number="978532585" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center mx-2'>
                        <TeamCard image={pramod} name="Pramod Saini" post="Senior Sales Manager" number="992838502" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center mx-2'>
                        <TeamCard image={kamal} name="Kamal" post="Service Engineer" number="7425837400" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center mx-2'>
                        <TeamCard image={anand} name="Anand" post="Service Engineer" number="9887369524" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center mx-2'>
                        <TeamCard image={manish} name="Manish Kumar" post="Service Engineer" number="7976084001" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center mx-2'>
                        <TeamCard image={pradeep} name="Pradeep Kumar" post="Service Engineer" number="6350527106" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center mx-2'>
                        <TeamCard image={umesh} name="Umesh Kumar" post="Accountant" number="9460361469" />
                    </SwiperSlide>

                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </>
    );
}
