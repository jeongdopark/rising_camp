import React from 'react';
import Footer from '../main/footer'
import Link from '../main/link';
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
import Image3 from '../images/5.jpg'
import Image4 from '../images/4.jpg'
import ListElement from './list-element';
const List = () => {
    const listElement = [
        {
            img1 : Image1,
            img2 : Image2,
            img3 : Image3,
            img4 : Image4
        },
        {
            img1 : Image1,
            img2 : Image2,
            img3 : Image3,
            img4 : Image4
        },
        {
            img1 : Image1,
            img2 : Image2,
            img3 : Image3,
            img4 : Image4
        },
        {
            img1 : Image1,
            img2 : Image2,
            img3 : Image3,
            img4 : Image4
        }
    ]
    return(
    <>
        <section class="nav-section-wrap">
            <div class="white-nav-wrap">
                <div class="white-nav-element1">
                    <i class="fa-brands fa-airbnb fa-2xl"></i>
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
            <div class="house-wrap">
                {listElement.map((element) => (
                    <ListElement element={element}></ListElement>
                ))}
            </div>
            {/* <div class="house-wrap">
                {listElement.map((element) => (
                    <ListElement element={element}></ListElement>
                ))}
            </div>
            <div class="house-wrap">
                {listElement.map((element) => (
                    <ListElement element={element}></ListElement>
                ))}
            </div>
            <div class="house-wrap">
                {listElement.map((element) => (
                    <ListElement element={element}></ListElement>
                ))}
            </div> */}
        </section>
        <Link></Link>
        <Footer></Footer>
    </>
    )
}

export default List