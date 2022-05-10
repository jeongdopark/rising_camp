import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from '../main/footer'
import Links from '../main/link';
import './list.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image1 from '../images-2/1-1.jpg'
import Image2 from '../images-2/1-2.jpg'
import Image3 from '../images-2/1-3.jpg'
import Image4 from '../images-2/1-4.jpg'
import Image5 from '../images-2/1-5.jpg'
import Image6 from '../images-2/2-1.jpg'
import Image7 from '../images-2/2-2.jpg'
import Image8 from '../images-2/2-3.jpg'
import Image9 from '../images-2/2-4.jpg'
import Image10 from '../images-2/2-5.jpg'
import Image11 from '../images-2/3-1.jpg'
import Image12 from '../images-2/3-2.jpg'
import Image13 from '../images-2/3-3.jpg'
import Image14 from '../images-2/3-4.jpg'
import Image15 from '../images-2/3-5.jpg'
import Image16 from '../images-2/4-1.jpg'
import Image17 from '../images-2/4-2.jpg'
import Image18 from '../images-2/4-3.jpg'
import Image19 from '../images-2/4-4.jpg'
import Image20 from '../images-2/4-5.jpg'
import Image21 from '../images/21.jpg'
import Image22 from '../images/22.jpg'
import Image23 from '../images/23.jpg'
import Image24 from '../images/24.jpg'
import Image25 from '../images/25.jpg'
import Image26 from '../images/26.jpg'
import Image27 from '../images/27.jpg'
import Image28 from '../images/28.jpg'
import Image29 from '../images/29.jpg'
import Image30 from '../images/30.jpg'
import Image31 from '../images/31.jpeg'
import Image33 from '../images/33.jpg'
import Image35 from '../images/1.jpg'
import Image36 from '../images/2.jpg'
import Image37 from '../images/3.jpg'
import Image38 from '../images/4.jpg'
import Image39 from '../images/5.jpg'
import Image40 from '../images/7.jpg'
import Image41 from '../images/8.jpg'
import Image42 from '../images/9.jpg'
import Image43 from '../images/10.jpg'
import Image44 from '../images/11.jpg'
import Image45 from '../images/12.jpg'
import Image46 from '../images/13.jpg'
import Image47 from '../images/14.jpg'


import ListElement from './list-element';
const List = () => {
    const listElement = [
        [
            {
                img1 : Image1,
                img2 : Image2,
                img3 : Image3,
                img4 : Image4,
                img5 : Image5,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일',
                data : {
                    img1 : Image1,
                    img2 : Image2,
                    img3 : Image3,
                    img4 : Image4,
                    img5 : Image5,
                    title : '남가원 南嘉園.'
                }
            },
            {
                img1 : Image6,
                img2 : Image7,
                img3 : Image8,
                img4 : Image9,
                img5 : Image10,
                title : 'Yeongwol-gun, 강원도',
                distance : '138',
                price : '114,374',
                date : '6월 13일 ~ 18일',
                data : {
                    img1 : Image6,
                    img2 : Image7,
                    img3 : Image8,
                    img4 : Image9,
                    img5 : Image10,
                    title : '강원도 영월에 위치한 통나무집'
                }

            },
            {
                img1 : Image11,
                img2 : Image12,
                img3 : Image13,
                img4 : Image14,
                img5 : Image15,
                title : '한경면, 제주시, 제주도',
                distance : '479',
                price : '173,294',
                date : '5월 27일 ~ 6월 1일',
                data : {
                    img1 : Image11,
                    img2 : Image12,
                    img3 : Image13,
                    img4 : Image14,
                    img5 : Image15,
                    title : '헬로반디vandi룸/수플레팬케잌&빠네 등(조식무료), 도자기컵체험무료,넷플릭스(55인치)'
                }
            },
            {
                img1 : Image16,
                img2 : Image17,
                img3 : Image18,
                img4 : Image19,
                img5 : Image20,
                title : 'Seogwipo-si, 제주도',
                distance : '482',
                price : '69,318',
                data : {
                    img1 : Image16,
                    img2 : Image17,
                    img3 : Image18,
                    img4 : Image19,
                    img5 : Image20,
                    title : '셋째날 펜션 - 삼나무 황토방'
                }
            }
        ],
        [
            {
                img1 : Image17,
                img2 : Image18,
                img3 : Image19,
                img4 : Image20,
                title : '인덕면, 서귀포시, 제주도',
                distance : '485',
                price : '83,559',
                date : '5월 29일 ~ 6월 4일'
            },
            {
                img1 : Image21,
                img2 : Image22,
                img3 : Image22,
                img4 : Image27,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image29,
                img2 : Image14,
                img3 : Image3,
                img4 : Image33,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image10,
                img2 : Image11,
                img3 : Image1,
                img4 : Image8,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            }
        ],
        [
            {
                img1 : Image24,
                img2 : Image15,
                img3 : Image22,
                img4 : Image23,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image30,
                img2 : Image25,
                img3 : Image26,
                img4 : Image27,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image28,
                img2 : Image29,
                img3 : Image30,
                img4 : Image31,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image43,
                img2 : Image33,
                img3 : Image35,
                img4 : Image13,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            }
        ],
        [
            {
                img1 : Image39,
                img2 : Image15,
                img3 : Image22,
                img4 : Image23,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image22,
                img2 : Image25,
                img3 : Image26,
                img4 : Image27,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image28,
                img2 : Image29,
                img3 : Image30,
                img4 : Image31,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image30,
                img2 : Image33,
                img3 : Image35,
                img4 : Image13,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            }
        ],
        [
            {
                img1 : Image21,
                img2 : Image15,
                img3 : Image22,
                img4 : Image23,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image13,
                img2 : Image25,
                img3 : Image26,
                img4 : Image27,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image10,
                img2 : Image29,
                img3 : Image30,
                img4 : Image31,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            },
            {
                img1 : Image2,
                img2 : Image33,
                img3 : Image36,
                img4 : Image13,
                title : '남원읍, 서귀포시, 제주도',
                distance : '477',
                price : '294,138',
                date : '8월 27 ~ 9월 1일'
            }
        ]
    ]
    return(
    <>
        <section class="nav-section-wrap">
            <div class="white-nav-wrap">
                <div class="white-nav-element1">
                    <div>
                        <i class="fa-brands fa-airbnb fa-2xl"></i>
                    </div>
                    <h1>airbnb</h1>
                </div>
                <div class="white-nav-element3">
                    <a href="../host-page/host.html">호스트 되기</a>
                    <i class="fa-solid fa-globe"></i>
                    <div class="host-wrap2">
                        <i class="fa-solid fa-bars"></i>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
            </div>
        </section>
        <section class="filter-section-wrap">
            <div class="filter-wrap">
                <ul>
                    <li>농장</li>
                    <li>멋진 수영장</li>
                    <li>해변 근처</li>
                    <li>개성 넘치는 숙소</li>
                    <li>통나무집</li>
                    <li>A자형 주택</li>
                    <li>캠핑카</li>
                    <li>중국전통 여인숙</li>
                    <li>료칸</li>
                    <li>성</li>
                    <li>더 보기 <i class="fa-solid fa-angle-down"></i></li>
                </ul>
                <div>
                    <div class="date">언제든 <i class="fa-solid fa-angle-down"></i></div>
                    <div class="people">인원 <i class="fa-solid fa-angle-down"></i></div>
                    <div class="filter">필터 <i class="fa-solid fa-angle-down"></i></div>
                </div>
            </div>
        </section>

        <section class="house-section-wrap">
            {listElement.map((wrap) => (
                <div class="house-wrap">
                    {wrap.map((element) => (
                        <ListElement element={element}></ListElement>
                    ))}
                </div>    
            ))}
        </section>
        
        <Links></Links>
        <Footer></Footer>
    </>
    )
}

export default List