import React, {useCallback, useState, useRef} from 'react';
import Footer from '../main/footer';
import Link from '../main/link';
import Video2 from './second-video.mp4'
import './host.css';
import FirstVideo from './first-video';

import NavSection from './nav';
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
            <NavSection/>
            <FirstVideo onClickBtn={onClickBtn} buttonState={buttonState}/>
            <div className="carousel-section-wrap">
                <h1>언제 어디서든 <br/> 호스팅하실 수 있습니다</h1>
                <div className="carousel-wrap">
                    <div className="carousel carousel-empty"></div>
                    <div className="carousel">
                        <div className="carousel-people img-2"></div>
                        <div className="info-wrap">
                            <p>스튜디오 호스팅 덕에 새로운 삶을 사는 <br/> 느낌이에요. 좋은 인연과 잊을 수 없는 <br/> 추억은 덤이죠.</p>
                            <div className="name name-img-2"></div>
                            <h3>밀라노의 호스트</h3>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-people img-3"></div>
                        <div className="info-wrap">
                            <p>집을 숙소로 호스팅하면서 자영업자가 <br/> 되어 경제적 자유에 한 걸음 더 <br/> 가까워질 수 있었어요.</p>
                            <div className="name name-img-3"></div>
                            <h3>애틀랜타의 호스트</h3>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-people img-4"></div>
                        <div className="info-wrap">
                            <p>파스타 만들기 체험을 호스팅함으로써 <br/> 문화 보존에 기여할 수 있습니다.</p>
                            <div className="name name-img-4"></div>
                            <h3>팔롬바라사비나의 호스트</h3>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-people img-5"></div>
                        <div className="info-wrap">
                            <p>에어비앤비 덕분에 제가 제일 좋아하는 <br/> 일을 업으로 삼을 수 있게 되었어요. <br/> 바로 집에서 게스트를 맞이하고 돌보는 <br/> 일이죠.</p>
                            <div className="name name-img-5"></div>
                            <h3>치앙마이의 호스트</h3>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-people img-6"></div>
                        <div className="info-wrap">
                            <p>베두인 텐트 호스팅을 통해 세계 <br/> 각지에서 온 분들을 만날 수 <br/> 있었습니다.</p>
                            <div className="name name-img-6"></div>
                            <h3>와디럼의 호스트</h3>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-people img-7"></div>
                        <div className="info-wrap">
                            <p>게스트가 소중한 사람들과 자연 속에서 <br/> 교감할 수 있도록 친환경 숙소를 <br/> 호스팅하는 게 참 보람 있어요.</p>
                            <div className="name name-img-7"></div>
                            <h3>파라치의 호스트</h3>
                        </div>
                    </div>
                    <div className="carousel carousel-empty"></div>
                </div>
                <span className="btn-wrap">
                    <button className="left-btn">
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="right-btn">
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </span>
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
            <Link/>
            <Footer/>
        </div>
    )
}

export default Host