import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import A_Series_1_20HP from '../../assets/products/A_Series_1_20HP.webp';
import CB_Series_10_40HP from '../../assets/products/CB_Series_10_40HP.webp';
import cr_series from '../../assets/products/cr_series.webp';
import FAS from '../../assets/products/FAS_(4_11KW).webp';
import ES_Series from '../../assets/products/ES_Series.webp';
import EX_Series from '../../assets/products/EX_Series.webp';
import W_Series_3_20HP from '../../assets/products/W_Series_3_20HP.webp';


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import SwiperCard from './SwiperCard';


const Carousel = () => {
    return (
        <div className="p-3 mx-auto w-[85%] ">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="h-[550px] p-2 relative"
            >
                <SwiperSlide className="w-[400px] h-[500px] relative p-2">
                    <SwiperCard logo={ES_Series} name="ES Series" about="8 BAR, Oil-Free Air Compressor, 5-20Hp" />
                </SwiperSlide>
                <SwiperSlide className="w-[400px] h-[500px] relative p-2">
                    <SwiperCard logo={A_Series_1_20HP} name="A Series 1-20HP" about="8-12 Bar, Belt Driven, Oil Lubricated, Reciprocating Air Compressor" />
                </SwiperSlide>
                <SwiperSlide className="w-[400px] h-[500px] relative p-2">
                    <SwiperCard logo={CB_Series_10_40HP} name="CB Series 10-40HP" about="40 Bar, Oil-Lubricated, Booster Compressor" />
                </SwiperSlide>
                <SwiperSlide className="w-[400px] h-[500px] relative p-2">
                    <SwiperCard logo={W_Series_3_20HP} name="W Series 3-20HP" about="8-10Bar, Oil Free, Reciprocating Air Compressor
" />
                </SwiperSlide>
                <SwiperSlide className="w-[400px] h-[500px] relative p-2">
                    <SwiperCard logo={FAS} name="FAS 4-11KW" about="Oil injected screw air compressor, 4-11 kw" />
                </SwiperSlide>
                <SwiperSlide className="w-[400px] h-[500px] relative p-2">
                    <SwiperCard logo={EX_Series} name="EX Series 100-370HP" about="7-10 Bar, Oil free dry screw air compressor suitable for ISO8573-1
Class Zero requirement" />
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default Carousel

// const Carousel = () => {
//     return (
//         <div className="p-3 mx-auto w-[85%] ">
//             <Swiper
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 loop={true}
//                 slidesPerView={'auto'}
//                 coverflowEffect={{
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 2.5,
//                 }}
//                 pagination={{ el: '.swiper-pagination', clickable: true }}
//                 navigation={{
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                     clickable: true,
//                 }}
//                 modules={[EffectCoverflow, Pagination, Navigation]}
//                 className="h-[550px] p-2 relative"
//             >
//                 <SwiperSlide className="w-[400px] h-[500px] relative p-2">
//                     {/* <div className='flex w-full h-full items-center flex-col gap-2 justify-center bg-slate-200'>
//                         <div className='h-[85%]'>
//                             <img className='block max-h-full' src={ES_Series} alt="slide_image" />
//                         </div>
//                         <div className='h-[15% flex items-center]'>
//                             <p className='text-3xl text-slate-500'>ES Series</p>
//                         </div>
//                     </div> */}
//                     <SwiperCard logo={ES_Series} name="ES Series" />
//                 </SwiperSlide>
//                 <SwiperSlide className="w-[400px] h-[500px] relative p-2">
//                     {/* <div className='flex w-full h-full items-center flex-col justify-center'>
//                         <img src={A_Series_1_20HP} alt="slide_image" />
//                         <p className='text-xl text-slate-500'>A Series 1-20HP</p>
//                     </div> */}
//                     <SwiperCard logo={A_Series_1_20HP} name="A Series 1-20HP" />
//                 </SwiperSlide>
//                 <SwiperSlide className="w-[400px] h-[500px] relative p-2">
//                     {/* <div className='flex w-full h-full items-center flex-col justify-center'>
//                         <img src={CB_Series_10_40HP} alt="slide_image" />
//                         <p className='text-xl text-slate-500'>CB Series 10-40HP</p>
//                     </div> */}
//                     <SwiperCard logo={CB_Series_10_40HP} name="CB Series 10-40HP" />
//                 </SwiperSlide>
//                 <SwiperSlide className="w-[400px] h-[500px] relative p-2">
//                     {/* <div className='flex w-full h-full items-center flex-col justify-center'>
//                         <img src={cr_series} alt="slide_image" />
//                         <p className='text-xl text-slate-500'>CR Series</p>
//                     </div> */}
//                     <SwiperCard logo={cr_series} name="CR Series" />
//                 </SwiperSlide>
//                 <SwiperSlide className="w-[400px] h-[500px] relative p-2">
//                     {/* <div className='flex w-full h-full items-center flex-col justify-center'>
//                         <img src={CT_Series_5_HP} alt="slide_image" />
//                         <p className='text-xl text-slate-500'>CT Series 5HP</p>
//                     </div> */}
//                     <SwiperCard logo={CT_Series_5_HP} name="CT Series 5HP" />
//                 </SwiperSlide>
//                 <SwiperSlide className="w-[400px] h-[500px] relative p-2">
//                     {/* <div className='flex w-full h-full items-center flex-col justify-center'>
//                         <img src={FSL_FSLV_SERIES} alt="slide_image" />
//                         <p className='text-xl text-slate-500'>FSL FSLV Series </p>
//                     </div> */}
//                     <SwiperCard logo={EX_Series} name="EX Series" />
//                 </SwiperSlide>


//                 <div className="slider-controler">
//                     <div className="swiper-button-prev slider-arrow">
//                         <ion-icon name="arrow-back-outline"></ion-icon>
//                     </div>
//                     <div className="swiper-button-next slider-arrow">
//                         <ion-icon name="arrow-forward-outline"></ion-icon>
//                     </div>
//                     <div className="swiper-pagination"></div>
//                 </div>
//             </Swiper>
//         </div>
//     )
// }

// export default Carousel