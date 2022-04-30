import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from './footer';
import Links from './link';
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
import Search from './search.js'
const Main = () => {
    const [ menuDisplay, setMenuDisplay ] = useState(false);
    const [ loginModal, setLoginModal ] = useState(false);
    const [clickOne, setClickOne] = useState(false)
    const [clickTwo, setClickTwo] = useState(false)
    const [clickThree, setClickThree] = useState(false)
    const [clickFour, setClickFour] = useState(false)


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
                            <Link to="/Host">호스트 되기</Link>
                            <FontAwesomeIcon icon={faGlobe}/>
                            <div className="host-wrap" onClick={()=>menuOnClick()}>
                                <FontAwesomeIcon className="host-wrap-icons" icon={faBars}/>
                                <FontAwesomeIcon className="host-wrap-icons" icon={faUser}/>
                                {menuDisplay === true ? <MenuBar setLoginModal={setLoginModal} loginModal={loginModal}></MenuBar> : ''}
                            </div>
                        </div>
                    </div>
                    {
                    loginModal === true ? 
                    <LoginModalWrap setLoginModal={setLoginModal} loginModal={loginModal}></LoginModalWrap> : 
                    null
                    }
                    <Search 
                    clickOne={clickOne} setClickOne={setClickOne} setClickTwo={setClickTwo} 
                    clickTwo={clickTwo} setClickThree={setClickThree} clickThree={clickThree} 
                    clickFour={clickFour} setClickFour={setClickFour}>
                    </Search>
                </nav>
                {/* <!-- <nav className="white-nav">
                    <div className="black-nav-element1">
                        <i className="fa-brands fa-airbnb fa-2xl"></i>
                        <h1>airbnb</h1>
                    </div>
                </nav> --> */}
            </div>
            {/* <LoginModalWrap></LoginModalWrap> */}
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
                        <Link to="/List">유연한 검색</Link>
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
            <Links></Links>
            <Footer></Footer>
            
        </div>
    )
}

export default Main


