import React, { useState } from 'react';
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


import Image1 from '../images/info1.jpeg'
import Image2 from '../images/info2.jpeg'
import Image3 from '../images/info3.jpeg'
import Image4 from '../images/info4.jpeg'
import Image5 from '../images/info5.jpeg'
import Image6 from '../images/roomInfo.jpeg'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MenuBar from '../main/menubar';
import './roomInfo.css';
const RoomInfo = () => {
    const [ menuDisplay, setMenuDisplay ] = useState(false);
    const [ loginModal, setLoginModal ] = useState(false);
    return(
        <>
            <div className="roomInfo-nav-section">
                <div className="roomInfo-nav-container">
                    <div className="roomInfo-nav-icon">
                        <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"35px", color:"#FF5A5F"}}/>
                        <h1 style={{fontSize:"25px", color:"#FF5A5F" ,marginLeft:"6px"}}>airbnb</h1> 
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
                    <h1>☆Sunbed PartyRoom 8 in Gangnam/강남1min/NETFLIX/빔프 ☆</h1>
                    <div className="roomInfo-tag-container">
                        <div className="tag-left-container">
                            <span className="underline" style={{color:"#717171", fontSize:"14px"}}>후기 1개</span>
                            <span style={{margin : "0 7px 0 7px"}}>.</span>
                            <span className="underline" style={{color:"#717171", fontSize:"14px"}}>강남구,서울,한국</span>
                        </div>
                        <div className="tag-right-container">
                            <div className="tag-right">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} style={{margin:"0 2px 0 2px"}}/>
                                <div>공유하기</div>
                            </div>
                            <div className="tag-right">
                                <FontAwesomeIcon icon={faHeart} style={{margin:"0 2px 0 2px"}}/>
                                <div>저장</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="roomInfo-image-section">
                <div className="roomInfo-image-container">
                    <div className="roomInfo-image-left-section" style={{backgroundImage:`url(${Image3})`}}></div>
                    <div className="roomInfo-image-right-section">
                        <div className="image-container">
                            <div className="image-box" style={{backgroundImage:`url(${Image3})`}}></div>
                            <div className="image-box" style={{backgroundImage:`url(${Image3})`}}></div>
                        </div>
                        <div className="image-container">
                            <div className="image-box border-one" style={{backgroundImage:`url(${Image3})`}}></div>
                            <div className="image-box border-two" style={{backgroundImage:`url(${Image3})`}}></div>
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
                                <div className="roomInfo-host-img" style={{backgroundImage:`url(${Image6})`}}></div>
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
                            <div className="roomInfo-detail-more-wrap">
                                <h2>더 보기</h2>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </div>
                        </div>

                        <div className="roomInfo-bedding-section">
                            <div className="roomInfo-bedding-container">
                                <h2>숙박 장소</h2>
                                <div className="bedding-wrap">
                                    <div>
                                        <FontAwesomeIcon className="host-wrap-icons" icon={faBed}/>
                                        <FontAwesomeIcon className="host-wrap-icons" icon={faBed}/>
                                        <FontAwesomeIcon className="host-wrap-icons" icon={faMattressPillow}/>
                                        <FontAwesomeIcon className="host-wrap-icons" icon={faMattressPillow}/>
                                        <FontAwesomeIcon className="host-wrap-icons" icon={faMattressPillow}/>
                                    </div>
                                    <div>침실</div>
                                    <div>더블 침대 2개, 요와 이불 3개</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="roomInfo-middle-right-container"></div>
                </div>
            </div>
            
        </>
    )
}

export default RoomInfo;