import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from "react-dom/client";
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
                <div class="list-page-house">
                    <div class="images-wrap">
                    <Link to="/roomInfo" state={{data : element.data}}>
                        <Swiper
                // install Swiper modules
                            className="swiper-wrapper"
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            // onSwiper={(swiper) => console.log(swiper)}
                            // onSlideChange={() =>()}
                        >   
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img1})`}}></SwiperSlide>                            
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img2})`}}></SwiperSlide>
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img3})`}}></SwiperSlide>
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img4})`}}></SwiperSlide>
                            <SwiperSlide className="swiper-img" style={{backgroundImage:`url(${element.img5})`}}></SwiperSlide>
                        </Swiper>
                    </Link>
                        <FontAwesomeIcon className="heart-icon" icon={faHeart}/>
                    </div>       
                    <div class="list-page-info-1-wrap">
                        <h1>{element.title}</h1>
                        <h3>₩{element.price} / 박</h3>
                    </div>
                    <div class="list-page-info-2-wrap">
                        <h2>{element.distance}km 거리</h2>
                        <h3>{element.date}</h3>
                    </div>
                </div>
            </>
    )
}

export default ListElement