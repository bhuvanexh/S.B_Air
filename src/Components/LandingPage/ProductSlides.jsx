import { Navigation, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import A_Series_1_20HP from '../../assets/products/A_Series_1_20HP.webp';
import CB_Series_10_40HP from '../../assets/products/CB_Series_10_40HP.webp';
import FAS from '../../assets/products/FAS_(4_11KW).webp';
import ES_Series from '../../assets/products/ES_Series.webp';
import EX_Series from '../../assets/products/EX_Series.webp';
import W_Series_3_20HP from '../../assets/products/W_Series_3_20HP.webp';
import ProductSlide from './ProductSlide';

const ProductSlides = () => {
    return (
        <>
            <Swiper
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}

                className="mySwiper rounded-lg shadow-lg">
                <SwiperSlide>
                    <ProductSlide logo={CB_Series_10_40HP}
                        product="CB Series 10-40HP"
                        sub="40 Bar, Oil-Lubricated, Booster Compressor" about="Especially for the production of pet bottles, which are being used more and more in daily life, by people all over the world." />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductSlide logo={A_Series_1_20HP}
                        product="A Series 1-20HP"
                        sub="8-12 Bar, Belt Driven, Oil Lubricated, Reciprocating Air Compressor" about="Continuous duty, slow speed, oil injected piston compressors suitable for industrial applications." />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductSlide logo={W_Series_3_20HP}
                        product="W Series 3-20HP"
                        sub="8-10Bar, Oil Free, Reciprocating Air Compressor" about="Continuous duty, slow speed, oil free piston compressors suitable for industrial and medical air applications." />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductSlide logo={EX_Series}
                        product="EX Series 100-370HP"
                        sub="7-10 Bar, Oil free dry screw air compressor suitable for ISO8573-1
                        Class Zero requirement" about=" It is designed with a sophisticated processing
                        rotor, gear drive, and a reliable seal combination to provide high-quality
                        compressed air." />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ProductSlides

