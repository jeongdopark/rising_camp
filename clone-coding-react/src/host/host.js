import React, {useCallback, useState, useRef} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from '../main/footer';
import Links from '../main/link';
import Video2 from './second-video.mp4'
import './host.css';
import FirstVideo from './first-video';

import NavSection from './nav';
import Carousel from './carousel';
const Host = () => {
    
    const [buttonState, setButtonState] = useState(false);
    const onClickBtn = useCallback((videoElement) => {
        if(buttonState === false){
            setButtonState(true)
            videoElement.current.pause()
        }else{
            setButtonState(false)
            videoElement.current.play();
        }
    },[buttonState])

    
    return(
        <div className="host-page-wrap">
            <Link to="/">홈</Link>
            <NavSection/>
            <FirstVideo onClickBtn={onClickBtn} buttonState={buttonState}/>
            <div className="carousel-section-wrap">
                <h1>언제 어디서든 <br/> 호스팅하실 수 있습니다</h1>
                <Carousel></Carousel>
            </div>

            <div className="question-section-wrap">
                <div className="question">
                    <p>어떤 종류의 숙소인가요?</p>
                    <span>공간 전체</span>
                </div>
                <div className="question">
                    <p>숙박 인원은 몇 명인가요?</p>
                    <span>게스트 4명</span>
                </div>
                <div className="question">
                    <p>숙소 위치는 어디인가요?</p>
                    <span>인천</span>
                </div>
                <h1>월 최대 ₩1,068,409의 수입을 올리세요.*</h1>
                <h3>에어비앤비가 예상 수입을 산정하는 방법</h3>
            </div>
            <div className="super-host-section">
                <div className="super-host-wrap">
                    <h1>호스팅에 관해 궁금하신 점이 있나요? <br/>슈퍼호스트에게 물어보세요.</h1>
                    <div>자세히 알아보기</div>
                </div>
            </div>
            <div className="air-cover-section">
                <div className="air-cover-wrap">
                    <div className="left-side">
                        <div className="left-element-wrap">
                            <span><h1 className="red">에어</h1><h1 className="black">커버</h1></span>
                            <h3>호스팅 전반에 걸친 보호. 호스트에게<br/> 무료 제공. 오직 에어비앤비에서만.</h3>
                            <div>에어커버 둘러보기</div>
                        </div>
                    </div>
                    <div className="right-side"></div>
                </div>
            </div>
            <NavSection/>
            <div className="video2-section-wrap">
                <div className="left-side-wrap-2">
                    <video className="second-video" autoPlay={true} muted={true} style={{width:'100%', height:'100%'}}>
                        <source src={Video2} tpye="video/mp4"/>
                    </video>
                    <button className="play-btn-2">
                        <i className="fa-solid fa-pause"></i>
                    </button>
                </div>
                <div className="right-side-wrap-2">
                    <h1>에어비앤비에서 <br/> 호스팅을 시작해보세요</h1>
                    <h3>에어비앤비 호스트가 되어보세요. 에어비앤비가 <br/>모든 단계에서 도와드립니다.</h3>
                    <div>시작하기</div>
                </div>
            </div>
            <Links/>
            <Footer/>
        </div>
    )
}

export default Host