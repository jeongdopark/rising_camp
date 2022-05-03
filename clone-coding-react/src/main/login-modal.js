import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import LoginApp from './login-app-element';
import googleIcon from '../images/google.svg'
import appleIcon from '../images/apple.svg'
import mailIcon from '../images/mail.svg'
import facebookIcon from '../images/facebook.svg'
const LoginModalWrap = ({loginModal, setLoginModal}) => {

    const appInfo = [
        {
            img : facebookIcon,
            text : "페이스북으로 로그인하기"
        },
        {
            img : googleIcon,
            text : "구글로 로그인하기"
        },
        {
            img : appleIcon,
            text : "애플로 로그인하기"
        },
        {
            img : mailIcon,
            text : "이메일로 로그인하기"
        }
    ]

    const removeModal = () => {
        setLoginModal(false);
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
                            <span className="login-greeting">에어비앤비에 오신 것을 환영합니다.</span>
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
                            <div className="login-section-line">
                                <div className="line-div-wrap">
                                    <div className="line-div"></div>
                                </div>
                                <div className="text">또는</div>
                                <div className="line-div-wrap">
                                    <div className="line-div"></div>
                                </div>
                            </div>
                            <div className="login-app">
                                {appInfo.map((element) => (<LoginApp element={element}></LoginApp>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModalWrap