import React, { useState } from 'react';
import Footer from './footer';
import Link from './link';
import './main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Card from './card';
import Activity from './activity';
import MenuBar from './menubar';
import LoginModalWrap from './login-modal';
const Main = () => {
    const [menuDisplay, setMenuDisplay] = useState(false)

    const menuOnClick = () => {
        if(menuDisplay === false){
            setMenuDisplay(true)
        }else{
            setMenuDisplay(false)
        }
    }
    return(
        <div className="page-wrap">
            <div className="nav-wrap">
                <nav className="black-nav">
                    <p>에어비엔비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</p>                    
                    <div className="black-nav-element-wrap">
                        <div className="black-nav-element1">
                            <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"40px"}}/>
                            <h1>airbnb</h1>
                        </div>
                        <div className="black-nav-element2">
                            <h3>숙소</h3>
                            <h3>체험</h3>
                            <h3>온라인 체험</h3>
                        </div>
                        <div className="black-nav-element3">
                            <a href="../host-page/host.html">호스트 되기</a>
                            <FontAwesomeIcon icon={faGlobe}/>
                            <div className="host-wrap" onClick={()=>menuOnClick()}>
                                <FontAwesomeIcon className="host-wrap-icons" icon={faBars}/>
                                <FontAwesomeIcon className="host-wrap-icons" icon={faUser}/>
                                {menuDisplay === true ? <MenuBar></MenuBar> : ''}
                            </div>
                        </div>
                    </div>
                    
                    <div className="black-nav-search-wrap">
                        <div className="search-location search-height">
                            <h1 className="search-font1">위치</h1>
                            <h2 className="search-font2">어디로 여행가세요?</h2>
                        </div>
                        <div className="search-line"></div>
                        <div className="search-checkin search-height">
                            <h1 className="search-font1">체크인</h1>
                            <h2 className="search-font2">날짜 입력</h2>
                        </div>
                        <div className="search-line"></div>
                        <div className="search-checkout search-height">
                            <h1 className="search-font1">체크 아웃</h1>
                            <h2 className="search-font2">날짜 입력</h2>
                        </div>
                        <div className="search-line"></div>
                        <div className="search-numbers search-height">
                            <div className="search-numbers-h-wrap">
                                <h1 className="search-font1">인원</h1>
                                <h2 className="search-font2">게스트 추가</h2>
                            </div>
                            <div className="search-numbers-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </div>
                        </div>
                    </div>    
                </nav>
                {/* <!-- <nav className="white-nav">
                    <div className="black-nav-element1">
                        <i className="fa-brands fa-airbnb fa-2xl"></i>
                        <h1>airbnb</h1>
                    </div>
                </nav> --> */}
            </div>
            <LoginModalWrap></LoginModalWrap>
            {/* <!--우크라이나 ------------------------------------------------ --> */}
            <div className="uk-section-wrap">
                <div className="uk-section">
                    <span>10만 명에 달하는 우크라이나 피란민에게 임시 숙소를 제공해주세요</span>
                    <div>자세히 알아보기</div>
                </div>
            </div>
            {/* <!--유연한 검색 ------------------------------------------------ --> */}
            <div className="search-section-wrap">
                <div className="search-section-img-wrap">
                    <div className="search-section-img">
                        <h1>호기심을 자극하는 숙소로 떠나보세요</h1>
                        <a href="../grid-page/grid.html">유연한 검색</a>
                    </div>
                </div>
            </div>
            <Card></Card>
            <Activity></Activity>
            <div className="question-section-wrap">
                <div className="question-section">
                    <div className="span-wrap">
                        <span>호스팅에 관해 궁금하신 점이 있나요?</span>
                        <div>슈퍼호스트에게 물어보세요</div>
                    </div>
                </div>
            </div>
            <Link></Link>
            <Footer></Footer>
        </div>
    )
}

export default Main


