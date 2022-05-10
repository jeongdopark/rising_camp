import React from 'react';
import { Skeleton, List, Avatar } from "antd";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SkeletonSection = ({element, loading}) =>{
    return(
        <>
                    <div class="search-room-element-container">
                        <div className="search-room-element-box">
                            <Swiper
                    // install Swiper modules
                                className="search-swiper-wrapper skeleton"
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide className="swiper-img" style={{backgroundColor:"#9e9e9e"}}></SwiperSlide>
                                <SwiperSlide className="swiper-img" style={{backgroundColor:"#9e9e9e"}}></SwiperSlide>
                                <SwiperSlide className="swiper-img" style={{backgroundColor:"#9e9e9e"}}></SwiperSlide>
                                <SwiperSlide className="swiper-img" style={{backgroundColor:"#9e9e9e"}}></SwiperSlide>
                            </Swiper>
                            
                            <div className="search-room-right-container">
                                <div className="search-right-container-top">
                                    <div className="search-right-text-container">
                                    <Skeleton
                                    loading={loading}
                                    active
                                    paragraph={{  width: "100px", rows: 1}}
                                    >
                                        <div className="main-mini-text">{element.miniTitle}</div>
                                        <div className="main-title-text">{element.bigTitle}</div>
                                    </Skeleton>
                                    </div>
                                </div>
                                <div className="search-right-room-info">
                                <Skeleton
                                    loading={loading}
                                    active
                                    paragraph={{  width: "100px", rows: 1}}
                                    >
                                    <div className="main-mini-text" style={{marginBottom:"5px", color:"white"}}>{element.number}</div>
                                    <div className="main-mini-text" style={{color:"white"}}>{element.facility}</div>                
                                </Skeleton>                
                                </div>
                                <div className="search-right-bottom">
                                    <Skeleton
                                    loading={loading}
                                    active
                                    // avatar
                                    // title={{ width: "100px" }}
                                    paragraph={{  width: "100px", rows: 1}}
                                    >
                                        <div className="search-star-icon">
                                            <FontAwesomeIcon icon={faStar} style={{fontSize:"15px", color:"#FF5A5F"}}/>
                                            <div className="search-star-number">{element.star}</div>
                                            <div className="search-review-number" style={{color:"#717171", fontSize:"15px"}}>(후기{element.review})개</div>
                                        </div>
                                        <div className="search-price-container">
                                            <div className="search-price-wrap">
                                                <div className="font-bold-price">₩{element.dayPay}</div>
                                                <div style={{marginLeft:"5px"}}>/ 박</div>
                                            </div>
                                            <div className="search-price-mini-text">총액 ₩{element.total}</div>
                                        </div>
                                    </Skeleton>
                                </div>
                            </div>
                        </div>   
                    </div>       
        </>
    )   
}

export default SkeletonSection;