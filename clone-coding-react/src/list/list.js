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
import Image1 from '../images/1.jpg'
import Image2 from '../images/2.jpg'
import Image3 from '../images/3.jpg'
import Image4 from '../images/4.jpg'
import Image5 from '../images/5.jpg'
import Image6 from '../images/6.jpg'
import Image7 from '../images/7.jpg'
import Image8 from '../images/8.jpg'
import Image9 from '../images/9.jpg'
import Image10 from '../images/10.jpg'
import Image11 from '../images/11.jpg'
import Image12 from '../images/12.jpg'
import Image13 from '../images/13.jpg'
import Image14 from '../images/14.jpg'
import Image15 from '../images/15.jpg'
import Image16 from '../images/16.jpg'
import Image17 from '../images/17.jpg'
import Image18 from '../images/18.jpg'
import Image19 from '../images/19.jpg'
import Image20 from '../images/20.jpg'
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
import Image32 from '../images/32.jpg'
import Image33 from '../images/33.jpg'
import Image34 from '../images/34.jpeg'
import ListElement from './list-element';
const List = () => {
    const listElement = [
        [
            {
                img1 : Image1,
                img2 : Image2,
                img3 : Image3,
                img4 : Image4
            },
            {
                img1 : Image5,
                img2 : Image6,
                img3 : Image7,
                img4 : Image8
            },
            {
                img1 : Image9,
                img2 : Image10,
                img3 : Image11,
                img4 : Image12
            },
            {
                img1 : Image13,
                img2 : Image14,
                img3 : Image15,
                img4 : Image16
            }
        ],
        [
            {
                img1 : Image17,
                img2 : Image18,
                img3 : Image19,
                img4 : Image20
            },
            {
                img1 : Image25,
                img2 : Image31,
                img3 : Image22,
                img4 : Image27
            },
            {
                img1 : Image29,
                img2 : Image14,
                img3 : Image3,
                img4 : Image33
            },
            {
                img1 : Image31,
                img2 : Image11,
                img3 : Image1,
                img4 : Image8
            }
        ],
        [
            {
                img1 : Image21,
                img2 : Image15,
                img3 : Image22,
                img4 : Image23
            },
            {
                img1 : Image24,
                img2 : Image25,
                img3 : Image26,
                img4 : Image27
            },
            {
                img1 : Image28,
                img2 : Image29,
                img3 : Image30,
                img4 : Image31
            },
            {
                img1 : Image30,
                img2 : Image33,
                img3 : Image34,
                img4 : Image13
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
                        <Link to="/">홈</Link>

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