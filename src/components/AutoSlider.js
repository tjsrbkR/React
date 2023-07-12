import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
SwiperCore.use([Navigation, Pagination, Autoplay])
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Swiper
            className="autoSlide"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
        >
            <SwiperSlide>
                <img src="./images/promotion-swiper-img1.jpg" alt="프로모션 이미지" />
                <p className="btn-more">
                    자세히 보기
                </p>
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/promotion-swiper-img2.jpg" alt="프로모션 이미지" />
                <p className="btn-more">
                    자세히 보기
                </p>
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/promotion-swiper-img3.jpg" alt="프로모션 이미지" />
                <p className="btn-more">
                    자세히 보기
                </p>
            </SwiperSlide>
        </Swiper>
    );
};