import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faMattressPillow } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";




import InfoCalendar from './info-calendar';
import InfoLinks from './info-link';
import InfoPlace from './infoother';

import Image1 from '../images/info1.jpeg'
import Image2 from '../images/info2.jpeg'
import Image3 from '../images/info3.jpeg'
import Image4 from '../images/info4.jpeg'
import Image5 from '../images/info5.jpeg'
import Image6 from '../images/roomInfo.jpeg'

import bed from '../images/bed.png'
import elevator from '../images/elevator.png'
import bedding from '../images/bedding.png'
import refriger from '../images/refrigerator.png'
import snow from '../images/snowflake.png'
import tableware from '../images/tableware.png'
import tv from '../images/television.png'
import washer from '../images/washer.png'
import wifi from '../images/wifi.png'
import work from '../images/work-space.png'
import hair from '../images/hair-dryer.png'
import micro from '../images/microwave.png'
import keyboard from '../images/keyboard.png'
import review1 from '../images/review1.jpg'
import review2 from '../images/review2.jpg'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MenuBar from '../main/menubar';
import './roomInfo.css';
import GoogleMapTest from '../googleMap';
import InfoFooter from './info-footer';
import TopNav from './top-nav';

import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux';

const reducer = (currentState, action) => {
    if(currentState === undefined){
        return{
            scrollPosition : 0,
        };
    }
    const newState = {...currentState};
    return (
        newState
    )
}
const store = createStore(reducer)

const RoomInfo = () => {
    const location = useLocation()
    console.log(location.state.data);
    const [ topNavDisplay, setTopNavDisplay ] = useState(false);
    const [ menuDisplay, setMenuDisplay ] = useState(false);
    const [ loginModal, setLoginModal ] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
      }, []);

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return(
        <>  
            {scrollPosition > 580 ? <Provider store={store}><TopNav scrollPosition={scrollPosition}></TopNav></Provider> : null}
            <div className="roomInfo-nav-section">
                <div className="roomInfo-nav-container">
                    <div className="roomInfo-nav-icon">
                        <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"35px", color:"#FF5A5F"}}/>
                        <h1 style={{fontSize:"25px", color:"#FF5A5F" ,marginLeft:"6px", marginTop:"12px"}}>airbnb</h1> 
                    </div>
                    <div className="roomInfo-search-container">
                        <div>검색 시작하기</div>
                        <div className="magnify-wrap">
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"white"}}/>
                        </div>
                    </div>
                    <div className="menu-container">
                        <div>호스트 되기</div>
                        <FontAwesomeIcon icon={faGlobe}/>
                        <div className="host-wrap-container">
                            <div className="icon-array">
                                <FontAwesomeIcon className="host-wrap-icons" icon={faBars}/>
                            </div>
                            <div className="icon-array">
                                <FontAwesomeIcon className="host-wrap-icons" icon={faUser}/>
                            </div>
                            {menuDisplay === true ? <MenuBar setLoginModal={setLoginModal} loginModal={loginModal}></MenuBar> : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div className="roomInfo-title-section">
                <div className="roomInfo-title-container">
                    <h1>{location.state.data.title}</h1>
                    <div className="roomInfo-tag-container">
                        <div className="tag-left-container">
                            <span className="underline" style={{color:"#717171", fontSize:"14px"}}>후기 1개</span>
                            <span style={{margin : "0 7px 0 7px"}}>.</span>
                            <span className="underline" style={{color:"#717171", fontSize:"14px"}}>강남구,서울,한국</span>
                        </div>
                        <div className="tag-right-container">
                            <div className="tag-right">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} style={{margin:"5px 2px 0 2px"}}/>
                                <div>공유하기</div>
                            </div>
                            <div className="tag-right">
                                <FontAwesomeIcon icon={faHeart} style={{margin:"5px 2px 0 2px"}}/>
                                <div>저장</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="roomInfo-image-section">
                <div className="roomInfo-image-container">
                    <div className="roomInfo-image-left-section" style={{backgroundImage:`url(${location.state.data.img1})`}}></div>
                    <div className="roomInfo-image-right-section">
                        <div className="image-container">
                            <div className="image-box" style={{backgroundImage:`url(${location.state.data.img2})`}}></div>
                            <div className="image-box" style={{backgroundImage:`url(${location.state.data.img3})`}}></div>
                        </div>
                        <div className="image-container">
                            <div className="image-box border-one" style={{backgroundImage:`url(${location.state.data.img4})`}}></div>
                            <div className="image-box border-two" style={{backgroundImage:`url(${location.state.data.img5})`}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roomInfo-middle-section">
                <div className="roomInfo-middle-container">
                    <div className="roomInfo-middle-left-container">
                        <div className="roomInfo-host-section">
                            <div className="roomInfo-host-text">
                                <h3>윤수님이 호스팅하는 레지던스 전체</h3>
                                <span>최대 인원 5명침실 1개침대 2개욕실 1개</span>
                            </div>
                            <div className="roomInfo-host-img-wrap">
                                <div className="round-img" style={{backgroundImage:`url(${Image6})`}}></div>
                            </div>
                        </div>

                        <div className="roomInfo-svg-section">
                            <div className="svg-section-wrap">
                                <FontAwesomeIcon icon={faDoorOpen} style={{width:"30px",fontSize:"25px"}}/>
                                <div className="svg-section-text-container">
                                    <div>셀프 체크인</div>
                                    <span>키패드를 이용해 체크인하세요.</span>
                                </div>
                            </div>
                            <div className="svg-section-wrap">
                                <FontAwesomeIcon icon={faBookmark} style={{width:"30px",fontSize:"25px", backgroundColor:"white"}}/>
                                <div className="svg-section-text-container">
                                    <h3>무선 인터넷</h3>
                                    <span>게스트가 자주 찾는 편의시설</span>
                                </div>
                            </div>
                            <div className="svg-section-wrap">
                                <FontAwesomeIcon icon={faCalendar} style={{width:"30px",fontSize:"25px"}}/>
                                <div className="svg-section-text-container">
                                    <h3>5월 7일 전까지 무료 취소 가능</h3>
                                </div>
                            </div>
                        </div>

                        <div className="roomInfo-detail-section">
                            <div>☆Sunbed PartyRoom 8 in Gangnam☆</div>
                            <ul>
                                <li>- 강남역 도보 1~2분 거리</li>
                                <li>- 고급 빔 프로젝터.</li>
                                <li>- Free Wi-fi</li>
                                <li>- 스마트 TV, NETFLIX 가능</li>
                            </ul>
                            <div className="more-wrap">
                                <h2 className="more-info">더 보기</h2>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </div>
                        </div>

                        <div className="roomInfo-bedding-section">
                            <div className="roomInfo-bedding-container">
                                <h2>숙박 장소</h2>
                                <div className="bedding-wrap">
                                    <div className="bedding-img-container">
                                        {/* <FontAwesomeIcon className="host-wrap-icons" icon={faBed}/> */}
                                        <div className="bedding-img" style={{backgroundImage:`url(${bed})`, width:"25px",height:"25px"}}></div>
                                        <div className="bedding-img" style={{backgroundImage:`url(${bed})`, width:"25px",height:"25px", marginLeft:"7px"}}></div>
                                        <div className="bedding-img" style={{backgroundImage:`url(${bedding})`, width:"25px",height:"25px", marginLeft:"7px"}}></div>
                                        <div className="bedding-img" style={{backgroundImage:`url(${bedding})`, width:"25px",height:"25px"}}></div>
                                        <div className="bedding-img" style={{backgroundImage:`url(${bedding})`, width:"25px",height:"25px", marginLeft:"7px"}}></div>
                                    </div>
                                    <div style={{fontWeight:"600", marginTop:"10px"}}>침실</div>
                                    <div>더블 침대 2개, 요와 이불 3개</div>
                                </div>
                            </div>
                        </div>

                        <div className="roomInfo-facilities-container">
                            <div style={{fontSize:"22px", fontWeight:"600"}}>숙소 편의시설</div>
                                <div className="facilities-icon-container">
                                    <div className="facilities-icon">
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${tableware})`}}></div>
                                            <span>주방</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${work})`}}></div>
                                            <span>업무 전용 공간</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${elevator})`}}></div>
                                            <span>엘리베이터</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${snow})`}}></div>
                                            <span>에어컨</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${refriger})`}}></div>
                                            <span>냉장고</span>
                                        </div>
                                    </div>
                                    <div className="facilities-icon">
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${wifi})`}}></div>
                                            <span>무선 인터넷</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${tv})`}}></div>
                                            <span>TV</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${washer})`}}></div>
                                            <span>세탁기</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${hair})`}}></div>
                                            <span>헤어드라이어</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${micro})`}}></div>
                                            <span>전자레인지</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="show-all-facilities">편의시설 47개 모두 보기</div>
                            </div>
                            <div className="roomInfo-calendar-section">
                                <div className="roomInfo-calendar-container">
                                    <div className="check-in-text">체크인 날짜를 선택해주세요.</div>
                                    <span>여행 날짜를 입력하여 정확한 요금을 확인하세요.</span>
                                    <div className="roomInfo-calendar-wrap">
                                        <InfoCalendar></InfoCalendar>
                                    </div>
                                </div>
                                <div className="roomInfo-calendar-bottom">
                                    <div className="calendar-bottom-img" style={{backgroundImage:`url(${keyboard})`}}></div>
                                    <div className="date-remove">날짜 지우기</div> 
                                </div>
                            </div>
                        </div>
                    <div className="middle-right-container">
                        <div className="roomInfo-middle-right-containerbox">
                            <div className="roomInfo-right-sticky-container">
                                <div className="sticky-box-title">요금을 확인하려면 날짜를 입력하세요.</div>
                                <div className="mini-underline">후기 2개</div>
                                <div className="ckeck-in-box">
                                    <div className="check-in-box-top">
                                        <div className="sticky-box-check-in">
                                            <div className="sticky-box-check-in-text">체크인</div>
                                            <div className="sticky-box-date-text">날짜 추가</div>
                                        </div>
                                        <div className="sticky-box-check-out">
                                            <div className="sticky-box-check-in-text">체크 아웃</div>
                                            <div className="sticky-box-date-text">날짜 추가</div>
                                        </div>
                                    </div>
                                    <div className="check-in-box-bottom">
                                        <div className="sticky-box-guest-text">
                                            <div className="guest-mini-text">인원</div>    
                                            <div className="guest-text">게스트 1명</div>    
                                        </div>
                                        <FontAwesomeIcon className="sticky-icon" icon={faAngleDown} style={{fontSize:"15px"}}/>
                                    </div> 
                                </div>
                                <div className="sticky-box-reserve-box">예약 가능 여부 보기</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roomInfo-review-section">
                    <div className="roomInfo-review-container">
                        <div className="review-title-container">
                            <FontAwesomeIcon icon={faStar} style={{fontSize:"15px", color:"#FF5A5F"}}/>
                            <div className="review-title-text">후기 2개</div>
                        </div>
                        <div className="Info-review-container">
                            <div className="roomInfo-review-wrap">
                                <div className="roomInfo-user-info">
                                    <div className="round-img" style={{backgroundImage:`url(${review1})`}}></div>
                                    <div className="roomInfo-name-date">
                                        <div className="roomInfo-review-name">애드박</div>
                                        <div className="mini-text-date">2022년 5월</div>
                                    </div>
                                </div>
                                <div className="roomInfo-review-text">
                                    따뜻한 물도 넘 잘나오고 시설도 깔끔하구
                                    조명이 완전 감성적이에요!! ㅎㅎ
                                    침대도 너무 편해서 친구도 저도 꿀잠 잤습니당ㅎㅎㅎ
                                </div>
                                <div className="more-wrap">
                                    <h2 className="more-info">더 보기</h2>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </div>
                            </div>
                            
                            <div className="roomInfo-review-wrap">
                                <div className="roomInfo-user-info">
                                    <div className="round-img" style={{backgroundImage:`url(${review2})`}}></div>
                                    <div className="roomInfo-name-date">
                                        <div className="roomInfo-review-name">Myyah</div>
                                        <div className="mini-text-date">2022년 5월</div>
                                    </div>
                                </div>
                                <div className="roomInfo-review-text">
                                    nice place. This is my 2 time staying at this Airbnb and it’s nice !
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roomInfo-hosting-location-section">
                    <div className="roomInfo-hosting-location-container">
                        <div className="roomInfo-hosting-title text-common">호스팅 지역</div>
                        <div className="roomInfo-address">강남구, 서울, 한국</div>
                        <div className="roomInfo-google-map">
                            <GoogleMapTest></GoogleMapTest>
                        </div>
                    </div>
                </div>

                <div className="roomInfo-host-info-section">
                    <div className="host-info-host-container">
                        <div className="host-info-first-container">
                            <div className="round-img" style={{backgroundImage:`url(${Image6})`}}></div>
                            <div className="host-info-container">
                                <div className="big-text">호스트: 윤수님</div>
                                <div className="host-mini-text">회원가입일:2016년 9월</div>
                            </div>
                        </div>

                        <div className="roomInfo-host-second-container">
                            <div className="second-container-inner">
                                <div className="first-container-icon">
                                    <div className="first-container-first">
                                        <FontAwesomeIcon icon={faStar} style={{fontSize:"15px", color:"#FF5A5F"}}/> 
                                        <div>후기 3,030개</div>
                                    </div>
                                    <div className="first-container-second">
                                        <FontAwesomeIcon icon={faSquareCheck} style={{fontSize:"15px", color:"#FF5A5F"}}/> 
                                        <div>본인 인증 완료</div>
                                    </div>
                                </div>
                                <div>Hi :)</div>
                                <div className="bold-text">공동 호스트</div>
                                <div className="img-container">
                                    <div className="small-round-img" style={{backgroundImage:`url(${review1})`}}></div>
                                    <span>기정</span>
                                </div>
                            </div>
                            <div className="second-container-inner">
                                <div>응답률:100%</div>
                                <div style={{marginTop:"20px"}}>응답 시간 : 1시간 이내</div>
                                <div className="host-contact-box">
                                    호스트에게 연락하기
                                </div>
                                <div className="mini-text">안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roomInfo-known-section">
                    <div className="roomInfo-known-container">
                        <div className="text-common">알아두어야 할 사항</div>
                            <div className="known-container">
                                <div className="known-first-section">
                                    <div className="known-title">숙소 이용규칙</div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faClock}/>
                                        <div>체크인: 오후 3:00 이후</div>
                                    </div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faClock}/>
                                        <div>체크인: 오후 3:00 이후</div>
                                    </div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faDoorOpen}/>
                                        <div>키패드(으)로 셀프 체크인</div>
                                    </div>
                                </div>
                                <div className="known-second-section">
                                    <div className="known-title">건강과 안전</div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faSprayCanSparkles}/>
                                        <div>에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.</div>
                                    </div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                                        <div>일산화탄소 경보기</div>
                                    </div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faFire}/>
                                        <div>화재경보기</div>
                                    </div>
                                    <h2 className="more-info">더 보기</h2>
                                </div>
                                <div className="known-second-section">
                                    <div className="known-title">환불 정책</div>
                                    <div className="known-icon-container">
                                        5월 6일 오후 3:00 전까지 무료 취소 가능
                                    </div>
                                    <h2 className="more-info">더 보기</h2>
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
            <div className="roomInfo-bottom-container">
                <div className="roomInfo-place-section">
                    <div className="roomInfo-place-inner">
                        <InfoPlace className="infoPlace"></InfoPlace>
                    </div>
                </div>
                <div className="roomInfo-link-section-wrap">
                    <InfoLinks></InfoLinks>
                    <InfoFooter></InfoFooter>
                </div>
            </div>
            
        </>
    )
}

export default RoomInfo;