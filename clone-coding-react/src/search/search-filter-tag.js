import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

import SearchTag from './tag';
import './search.css';

const SearchFilterTag = () => {
    const tagElement = ["취소 수수료 없음", "수변에 인접", "무선 인터넷", "주방", "세탁기", "에어컨", "무료 주차 공간", "건조기", "업무 전용 공간", "헬스장", "다리미"]

    return(
        <>
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
                    {/* <div className="search-filter-tag-down-icon first-filter-tag">
                        <FontAwesomeIcon icon={faRetweet} style={{fontSize:"14px"}}/> 
                        <div>필터</div>
                    </div> */}
                    <div className="search-filter-tag-down-icon first-filter-tag">
                            <div>요금</div>
                            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"15px"}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchFilterTag