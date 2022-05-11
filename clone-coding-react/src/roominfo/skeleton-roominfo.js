import React, { useState, useEffect } from 'react';
import { Skeleton, List, Avatar } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";





import Image6 from '../images/roomInfo.jpeg'



import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import './roomInfo.css';



const SkeletonRoomInfo = () => {
    const [ loading, setLoading ] = useState(true);


    return(
        <>  
           
            <div className="roomInfo-nav-section">
                <div className="roomInfo-nav-container">
                    <div className="roomInfo-nav-icon">
                        <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"35px", color:"#FF5A5F"}}/>
                        <h1 style={{fontSize:"25px", color:"#FF5A5F" ,marginLeft:"6px", marginTop:"12px"}}>airbnb</h1> 
                    </div>
                   
                        <div className="roomInfo-search-container">
                    
                                {/* <span className="search-mini-text skeleton">지도에 표시된 지역에 위치한 300개 이상의 숙소</span> */}

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
                        </div>
                    </div>
                </div>
            </div>

            <div className="roomInfo-title-section">
                <div className="roomInfo-title-container">
                    <div className="roomInfo-tag-container">
                        <div className="tag-left-container">
                        <Skeleton
                            loading={loading}
                            active
                            // avatar
                            title={{ width: "100px" }}
                            size = 'small'
                            paragraph={{  width: "400px", rows: 1}}
                            >
                            </Skeleton>
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
                    <div className="roomInfo-image-left-section" style={{backgroundColor:'#D0D0D0'}}></div>
                    <div className="roomInfo-image-right-section">
                        <div className="image-container">
                            <div className="image-box" style={{backgroundColor:'#D0D0D0'}}></div>
                            <div className="image-box" style={{backgroundColor:'#D0D0D0'}}></div>
                        </div>
                        <div className="image-container">
                            <div className="image-box border-one" style={{backgroundColor:'#D0D0D0'}}></div>
                            <div className="image-box border-two" style={{backgroundColor:'#D0D0D0'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roomInfo-middle-section">
                <div className="roomInfo-middle-container">
                    <div className="roomInfo-middle-left-container">
                            <Skeleton
                            loading={loading}
                            active
                            // avatar
                            title={{ width: "100px" }}
                            size = 'small'
                            paragraph={{  width: "400px", rows: 1}}
                            >
                            </Skeleton>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default SkeletonRoomInfo;