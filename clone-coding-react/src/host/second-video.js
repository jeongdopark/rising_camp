import React from 'react';
import Video2 from './second-video.mp4'
const SecondVideo = () => {
    return(
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
    )
}