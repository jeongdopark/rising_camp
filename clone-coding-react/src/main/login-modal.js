import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import LoginApp from './login-app-element';
import googleIcon from '../images/google.svg'
import appleIcon from '../images/apple.svg'
import mailIcon from '../images/mail.svg'
import facebookIcon from '../images/facebook.svg'
import { useDispatch } from 'react-redux';
import { loginModalDisplay } from '../reducer/loginModal';
import { emailModalDisplay } from '../reducer/email';
const LoginModalWrap = ({loginModal, setLoginModal, setEmailModal}) => {
    const dispatch = useDispatch();

    const appInfo = [
        {
            idx : 1,
            img : facebookIcon,
            text : "페이스북으로 로그인하기"
        },
        {
            idx : 2,
            img : googleIcon,
            text : "구글로 로그인하기"
        },
        {
            idx : 3,
            img : appleIcon,
            text : "애플로 로그인하기"
        },
        {
            idx : 4,
            img : mailIcon,
            text : "이메일로 로그인하기"
        }
    ]

    const removeModal = () => {
        setLoginModal(false);
    }

    const onClickEmail = () => {
        dispatch(loginModalDisplay())
        dispatch(emailModalDisplay())
    }

    return(
        <div className="login-modal-wrap">
            <div className="login-modal-container" onClick={()=>removeModal()}>
                <div className="login-modal-content-container" onClick={(e)=>e.stopPropagation()}>
                    <div className="login-modal-content">
                        <div className="title-content">
                            <FontAwesomeIcon className="icon" icon={faX} style={{fontSize:"15px"}}/>
                            <span>로그인 또는 회원가입</span>
                        </div>
                        <div className="login-section">
                            <div className="login-greeting">에어비앤비에 오신 것을 환영합니다.</div>
                            <div className="login-select-section">
                                <div className="login-nation">
                                    <div className="login-nation-inner">
                                        <div className="small-text">국가/지역</div>
                                        <select className="login-nation-select">
                                            <option value="한국">한국 (+82)</option>
                                            <option value="한국">한국</option>
                                            <option value="한국">한국</option>
                                        </select>
                                        <FontAwesomeIcon className="login-nation-icon" icon={faAngleDown} style={{fontSize:"15px"}}/>
                                    </div>
                                </div>
                                <div className="login-number">
                                    <div className="login-number-inner">
                                        <div className="small-text">전화번호</div>
                                        <div className="nation-number">+1</div>
                                        <input placeholder="(XXX) XXX-XXXX"/>   
                                    </div>
                                </div>
                                <span>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</span>
                                <div className="continue">계속</div>
                            </div>
                            <div className="main-login-section-line">
                                <div className="main-line-div-wrap">
                                    <div className="main-line-div"></div>
                                </div>
                                <div className="main-line-text">또는</div>
                                <div className="main-line-div-wrap" style={{justifyContent:"right"}}>
                                    <div className="main-line-div"></div>
                                </div>
                            </div>
                            <div className="login-app">
                                <div className="loginApp-wrap">
                                    <div className="loginApp-app" style={{backgroundImage:`url(${appInfo[0].img})`}}></div>
                                    <div className="loginApp-text">{appInfo[0].text}</div>
                                </div>
                                <div className="loginApp-wrap">
                                    <div className="loginApp-app" style={{backgroundImage:`url(${appInfo[1].img})`}}></div>
                                    <div className="loginApp-text">{appInfo[1].text}</div>
                                </div>
                                <div className="loginApp-wrap">
                                    <div className="loginApp-app" style={{backgroundImage:`url(${appInfo[2].img})`}}></div>
                                    <div className="loginApp-text">{appInfo[2].text}</div>
                                </div>
                                <div className="loginApp-wrap" onClick={onClickEmail}>
                                    <div className="loginApp-app" style={{backgroundImage:`url(${appInfo[3].img})`}}></div>
                                    <div className="loginApp-text">{appInfo[3].text}</div>
                                </div>
                                {/* {appInfo.map((element) => (element.idx === 4 ? 
                                <LoginApp onClick={onClickEmail} element={element}></LoginApp> : 
                                <LoginApp element={element}></LoginApp>))} */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModalWrap