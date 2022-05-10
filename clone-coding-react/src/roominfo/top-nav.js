import React from 'react';
import './roomInfo.css'
import { Provider, useSelector, useDispatch } from 'react-redux';
const TopNav = ({scrollPosition}) => {
    console.log(scrollPosition);
    
    return(
        <>
            <div className="scroll-top-nav-container">
                <div className="scroll-top-nav-wrap">
                    <div className="scroll-top-nav">
                        <div>사진</div>
                        <div>편의시설</div>
                        <div>후기</div>
                        <div>위치</div>
                    </div>
                    {scrollPosition > 2550 ? <div className="scroll-reserve-box">예약 가능 여부 보기</div> : null}
                </div>
            </div>
        </>
    )
}

export default TopNav