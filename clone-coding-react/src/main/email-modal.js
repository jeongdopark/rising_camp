import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import LoginApp from './login-app-element';
import googleIcon from '../images/google.svg'
import appleIcon from '../images/apple.svg'
import mailIcon from '../images/mail.svg'
import facebookIcon from '../images/facebook.svg'

const EmailModal = ({SetcorrectPassword,correctPassword,validEmail, setValidEmail,signupModal, setSignupModal ,emailModal, setEmailModal, userEmail, setUserEmail, userPassword, setUserPassword, correctEmail, setCorrectEmail}) => {

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
            text : "전화번호로 로그인하기"
        }
    ]

    const removeModal = () => {
        setEmailModal(false);
    }


    const [ userInfo, setUserInfo ] = useState({
        email : userEmail,
        password : userPassword
    })

    let USERS = []
    const userInfoTest1 = {id : 'powerdn123', password : '123123'}
    const userInfoTest2 = {id : 'powerdn1234', password : '123123'}
    USERS = USERS.concat(userInfoTest1, userInfoTest2)
    localStorage.setItem('userInfo', JSON.stringify(USERS))
    const inputValue = useRef(null)
    
    const onClickContinue = () => {
        const LOCALSTORAGE_INFO = JSON.parse(localStorage.getItem('userInfo'))
        setUserEmail(inputValue.current.value)
        
        LOCALSTORAGE_INFO.forEach((e) => {
            if(e.id === userEmail){
                setCorrectEmail(true)
                setEmailModal(false)
                setValidEmail(true)
                SetcorrectPassword(e.password)
                console.log('이메일 일치');
            }
        })
        // if(validEmail === false){
        //     setEmailModal(false)
        //     setSignupModal(true)
        // }


    }   

    
    
    
    return(
        <div className="login-modal-wrap">
            <div className="login-modal-container" onClick={()=>removeModal()}>
                <div className="email-login-modal-content-container" onClick={(e)=>e.stopPropagation()}>
                    <div className="login-modal-content">
                        <div className="title-content">
                            <FontAwesomeIcon className="icon" icon={faX} style={{fontSize:"15px"}}/>
                            <span>로그인 또는 회원가입</span>
                        </div>
                        <div className="login-section">
                            <span className="login-greeting">에어비앤비에 오신 것을 환영합니다.</span>
                            <div className="email-login-input-container">
                                <input ref={inputValue} className="email-login-input" placeholder='이메일'/>
                            </div>
                            <div className="login-select-section" onClick={(() => onClickContinue())}>
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
                                {appInfo.map((element) => (<LoginApp element={element}></LoginApp>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailModal