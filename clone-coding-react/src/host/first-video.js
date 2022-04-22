import React, { useRef } from 'react';
import './first-video.css';
import Video1 from './first-video.mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

const FirstVideo = ({onClickBtn, buttonState}) => {
    const videoElement = useRef();
    
    console.log(videoElement);
    
    return(
            <div className="video1-section-wrap">
                <div className="icon-wrap">
                    <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"40px"}}/>
                </div>
                
                <div className="left-side-wrap">
                    <p>에어비앤비의 <br/>핵심을 이루는<br/> 호스팅</p>
                    <div className="hosting-start">호스팅 시작하기</div>
                    <button className="move-down-btn">
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                </div>


                <div className="right-side-wrap">
                    <video className="first-video" autoPlay={true} muted={true} ref={videoElement}>
                        <source src={Video1} tpye="video/mp4" />
                    </video>
                    <button className="play-btn" onClick={onClickBtn}>
                        {buttonState === false ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
                    </button>
                    <div className="video1-section-image"></div>
                    <h3 className="video1-section-h3"></h3>
                </div>
            </div>
    )
}

export default FirstVideo

                    {/* <!-- <button className="pause-btn">
                        <i className="fa-solid fa-play"></i>
                    </button> --> */}