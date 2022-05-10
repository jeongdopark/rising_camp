import React from 'react';
import './search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import SearchTag from './tag';
const SearchNav = () => {
    const tagElement = ["취소 수수료 없음", "수변에 인접", "무선 인터넷", "주방", "세탁기", "에어컨", "무료 주차 공간", "건조기", "업무 전용 공간", "헬스장", "다리미"]
    return(
        <div className="nav-all-container">
            <div className="search-nav-section">
                <div className="search-nav-container">
                    <div className="search-nav-icon">
                        <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"35px", color:"#FF5A5F"}}/>
                        <h1 style={{fontSize:"25px", color:"#FF5A5F" ,marginLeft:"6px"}}>airbnb</h1> 
                    </div>
                    <div className="search-search-container">
                        <div className="search-container-box">
                            <div>지도 표시 지역</div>
                            <div className="box-line">5월 11일~13일</div>
                            <div>게스트 1명</div>
                        </div>
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
            <div className="search-filter-tag-section">
                <div className="search-filter-tag-container">
                    <div className="search-filter-tag-down-icon-container">
                        <div className="search-filter-tag-down-icon first-filter-tag">
                            <div>요금</div>
                            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"15px"}}/>
                        </div>
                        <div className="search-filter-tag-down-icon second-filter-tag">
                            <div>숙소 유형</div>
                            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"15px"}}/>
                        </div>
                    </div>
                    <div className="search-linear"></div>
                    {tagElement.map((tag) => (<SearchTag tag={tag}></SearchTag>))}
                    <div className="search-filter-tag-down-icon" style={{width:"80px"}}>
                        <FontAwesomeIcon icon={faRetweet} style={{fontSize:"14px"}}/> 
                        <div>필터</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchNav