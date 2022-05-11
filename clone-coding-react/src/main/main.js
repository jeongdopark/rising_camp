import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from "react-dom/client";
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
import EmailModal from './email-modal';
import PasswordModal from './password-modal';
import CreateAccount from './createAccount';
import SignupModal from './signup';
import { useSelector, useDispatch } from 'react-redux';
import { menuModalDisplay } from '../reducer/menuModal';

const Main = () => {
    const menuModal = useSelector(state => state.menuModal)
    const emailModal = useSelector(state => state.email)
    const loginModal = useSelector((state) => state.loginModal)
    const passwordModal = useSelector((state) => state.password)
    const signupModal = useSelector((state) => state.signup)
    const dispatch = useDispatch();

    // const [ loginModal, setLoginModal ] = useState(false);
    // const [ emailModal, setEmailModal ] = useState(false);
    const [ userEmail, setUserEmail ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    const [ correctEmail, setCorrectEmail ] = useState(false)
    const [ signup, setSignup ] = useState(false)
    const [ correctPassword, SetcorrectPassword ] = useState(true)

    const [clickOne, setClickOne] = useState(false)
    const [clickTwo, setClickTwo] = useState(false)
    const [clickThree, setClickThree] = useState(false)
    const [clickFour, setClickFour] = useState(false)
    const [ validEmail, setValidEmail ] = useState(false)

    const menuOnClick = () => {
        if(menuModal.boolean === false){
            dispatch(menuModalDisplay())
        }else{
            dispatch(menuModalDisplay())
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
                        <div className="main-black-nav-element2">
                            <h3 className="main-black-nav-text">숙소</h3>
                            <h3 className="main-black-nav-text">체험</h3>
                            <h3 className="main-black-nav-text">온라인 체험</h3>
                        </div>
                        <div className="black-nav-element3">
                            <div>호스트 되기</div>
                            <FontAwesomeIcon icon={faGlobe}/>
                            <div className="mainpage-host-wrap" onClick={()=>menuOnClick()}>
                                <FontAwesomeIcon className="host-wrap-icons" icon={faBars}/>
                                <FontAwesomeIcon className="host-wrap-icons" icon={faUser}/>
                                {menuModal.boolean === true ? <MenuBar ></MenuBar> : ''}
                            </div>
                        </div>
                    </div>
                    {
                    loginModal.boolean === true ? 
                    <LoginModalWrap 
                     emailModal={emailModal}
                    ></LoginModalWrap> : 
                    null
                    }
                    {
                        emailModal.boolean === true ?
                        <EmailModal emailModal={emailModal}
                        userEmail={userEmail} setUserEmail={setUserEmail}
                        correctEmail={correctEmail} setCorrectEmail={setCorrectEmail}
                        correctPassword={correctPassword} SetcorrectPassword={SetcorrectPassword}
                        signup={signup} setSignup={setSignup} validEmail={validEmail} setValidEmail={setValidEmail}
                        ></EmailModal> : null
                    }
                    {
                        passwordModal.boolean === true ?
                        <PasswordModal
                        userEmail={userEmail} setUserEmail={setUserEmail}
                        userPassword={userPassword} setUserPassword={setUserPassword}
                        correctEmail={correctEmail} setCorrectEmail={setCorrectEmail}
                        correctPassword={correctPassword} SetcorrectPassword={SetcorrectPassword}
                        /> : null
                    }
                    {
                        signupModal.boolean === true ?
                        <CreateAccount
                        signup={signup} setSignup={setSignup}
                        /> : null

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
                        <div className="main-page-to-list-page">
                            <Link to="/list">유연한 검색</Link>
                            </div>
                    </div>
                </div>
            </div>
            <Card></Card>
            <Activity></Activity>
            <div className="main-question-section-wrap">
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


