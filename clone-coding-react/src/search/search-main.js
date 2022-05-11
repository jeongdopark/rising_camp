import React, { useEffect, useState } from 'react';
import { Skeleton, List, Avatar } from "antd";
import GoogleMapTest from '../googleMap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import './search.css'
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

import RoomElement from './search-room-element';
import SkeletonSection from './skeleton';
const SearchMain = () => {

    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
      }, []);

    const listElement = [
            {
                img1 : Image1,
                img2 : Image2,
                img3 : Image3,
                img4 : Image4,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image5,
                img2 : Image6,
                img3 : Image7,
                img4 : Image8,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image9,
                img2 : Image10,
                img3 : Image11,
                img4 : Image12,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image13,
                img2 : Image14,
                img3 : Image15,
                img4 : Image16,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image17,
                img2 : Image18,
                img3 : Image19,
                img4 : Image20,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image25,
                img2 : Image31,
                img3 : Image22,
                img4 : Image27,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image29,
                img2 : Image14,
                img3 : Image3,
                img4 : Image33,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image31,
                img2 : Image11,
                img3 : Image1,
                img4 : Image8,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image21,
                img2 : Image15,
                img3 : Image22,
                img4 : Image23,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image24,
                img2 : Image25,
                img3 : Image26,
                img4 : Image27,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image28,
                img2 : Image29,
                img3 : Image30,
                img4 : Image31,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            },
            {
                img1 : Image30,
                img2 : Image33,
                img3 : Image34,
                img4 : Image13,
                miniTitle : '강남구의 레지던스 전체',
                bigTitle : 'Sunbed PartyRoom 8 in Gangnam/강남 1min',
                number : '최대 인원 5명 ・ 침실 1개 ・ 침대 2개 ・ 욕실 1개',
                facility : '주방 ・ 무선 인터넷 ・ 세탁기 ・ 셀프 체크인',
                star : '4.8',
                review : '25',
                dayPay : '95,000',
                total : '190,000'
            }
    ]
    return(
        <>
            {loading ? 
            <div className="search-main-section">
                <div className="search-main-left-section">
                    <div className="search-main-left-container">
                        <Skeleton
                        loading={loading}
                        active
                        // avatar
                        title={{ width: "100px" }}
                        size = 'small'
                        paragraph={{  width: "400px", rows: 1}}
                        >
                            {/* <span className="search-mini-text skeleton">지도에 표시된 지역에 위치한 300개 이상의 숙소</span> */}
                        </Skeleton>
                        <div className="search-room-list-container">
                            {listElement.map((element) => (<SkeletonSection element={element} loading={loading}/>))}
                        </div>
                    </div>
                    <div className="search-page-number-container">
                        <div className="search-page-number-inner">
                            <div className="search-page-number">
                                <FontAwesomeIcon icon={faAngleLeft} style={{ marginRight:"15px", fontSize:"20px", color:"#FF5A5F"}}/>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <FontAwesomeIcon icon={faAngleRight} style={{marginLeft:"15px" ,fontSize:"20px", color:"#FF5A5F"}}/>
                            </div>
                            <div className="search-page-number-text">총 300개 이상의 숙소 중 1 ~20번째</div>
                            <div className="search-page-number-warning">추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.</div>
                        </div>
                    </div>
                </div>
                <div className="search-main-right-section">
                    <div className="search-map-wrapper">
                        <GoogleMapTest></GoogleMapTest>
                    </div>
                </div>
            </div>
            :
            <div className="search-main-section">
                <div className="search-main-left-section">
                    <div className="search-main-left-container">
                        <span className="search-mini-text">지도에 표시된 지역에 위치한 300개 이상의 숙소</span>
                        <div className="briefcase-icon">
                            <FontAwesomeIcon icon={faBriefcase} style={{fontSize:"20px", color:"#FF5A5F"}}/>
                            <div className="search-mini-text" style={{marginLeft:"10px"}}>여행이 5일 남았습니다. 지금 바로 예약할 수 있는 숙소를 보려면 '즉시 예약' 필터를 사용하세요.</div>
                        </div>
                        <div className="search-room-list-container">
                            {listElement.map((element) => (<RoomElement element={element}/>))}
                        </div>
                    </div>
                    <div className="search-page-number-container">
                        <div className="search-page-number-inner">
                            <div className="search-page-number">
                                <FontAwesomeIcon icon={faAngleLeft} style={{ marginRight:"15px", fontSize:"20px", color:"#FF5A5F"}}/>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <FontAwesomeIcon icon={faAngleRight} style={{marginLeft:"15px" ,fontSize:"20px", color:"#FF5A5F"}}/>
                            </div>
                            <div className="search-page-number-text">총 300개 이상의 숙소 중 1 ~20번째</div>
                            <div className="search-page-number-warning">추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.</div>
                        </div>
                    </div>
                </div>
                <div className="search-main-right-section">
                    <div className="search-map-wrapper">
                        <GoogleMapTest></GoogleMapTest>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default SearchMain