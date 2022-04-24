import React, { useEffect, useRef, useState, useCallback } from 'react';
import './first-video.css';
import Video1 from './first-video.mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
const FirstVideo = ({ onClickBtn, buttonState }) => {

    const videoElement = useRef();
    useEffect(() => {
    }, [])

    const scrollTo = () => {
        window.scrollTo({top : 800, behavior : 'smooth'});
        console.log('scrollTo');
    }

    return(
            <div className="video1-section-wrap">
                <div className="icon-wrap">
                    <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"40px"}}/>
                </div>
                <div className="left-side-wrap">
                    <p>에어비앤비의 <br/>핵심을 이루는<br/> 호스팅</p>
                    <div className="hosting-start">호스팅 시작하기</div>
                    <button className="move-down-btn" onClick={() => {scrollTo(0, 1000)}}>
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </button>
                </div>

                <div className="right-side-wrap">

                    <video className="first-video" autoPlay={true} muted={true} ref={videoElement}>
                        <source src={Video1} tpye="video/mp4"/>
                    </video>
                    <button className="play-btn" onClick={() => {onClickBtn(videoElement)}}>
                        {buttonState === false ? <FontAwesomeIcon icon={faPlay}/> : <FontAwesomeIcon icon={faPause}/>}
                    </button>
                    
                    <div className="video1-section-image"></div>
                    {/* <h3 className="video1-section-h3"></h3> */}
                </div>
            </div>
    )
}

export default FirstVideo
