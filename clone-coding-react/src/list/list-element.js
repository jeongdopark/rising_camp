import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './list.css'

const ListElement = ({element}) => {
    
    return(
            <>
                <div class="house house-1">
                    <div class="images-wrap">
                        <Swiper
                // install Swiper modules
                            className="swiper-wrapper"
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img1})`}}></SwiperSlide>
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img2})`}}></SwiperSlide>
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img3})`}}></SwiperSlide>
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img4})`}}></SwiperSlide>
                        </Swiper>
                    </div>       
                    <FontAwesomeIcon className="heart-icon" icon={faHeart}/>
                    <div class="info-1-wrap">
                        <h1>Lishui, Zhejiang</h1>
                        <h3>₩182,772 / 박</h3>
                    </div>
                    <div class="info-2-wrap">
                        <h2>1,265km 거리</h2>
                        <h3>4월 16 ~ 21일</h3>
                    </div>
                </div>
            </>
    )
}

export default ListElement