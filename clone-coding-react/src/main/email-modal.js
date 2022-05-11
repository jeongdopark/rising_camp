import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import LoginApp from './login-app-element';
import googleIcon from '../images/google.svg'
import appleIcon from '../images/apple.svg'
import mailIcon from '../images/mail.svg'
import facebookIcon from '../images/facebook.svg'
import { useSelector, useDispatch } from 'react-redux';
import { account } from '../reducer/validAccount';
import { emailModalDisplay } from '../reducer/email';
import { password } from '../reducer/password';
import { signup } from '../reducer/signup'; // 액션 함수 불러오기'
import { user_email } from '../reducer/userEmail';
const EmailModal = () => {
    const valid_account = useSelector((state) => state.valid)
    const user_email_element = useSelector((state) => state.userEmail)
    const dispatch = useDispatch();
    
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


    let USERS = []
    const userInfoTest1 = {id : 'powerdn123', password : '123123'}
    const userInfoTest2 = {id : 'powerdn1234', password : '123123'}
    USERS = USERS.concat(userInfoTest1, userInfoTest2)
    localStorage.setItem('userInfo', JSON.stringify(USERS))
    const inputValue = useRef(null)


    useEffect(() => {
        const LOCALSTORAGE_INFO = JSON.parse(localStorage.getItem('userInfo'))
        LOCALSTORAGE_INFO.forEach((e) => {
        if(e.id === user_email_element.email){
            dispatch(emailModalDisplay())   // 이메일 모달창 닫기
            dispatch(password())
            console.log('일치하는 이메일이 있다');
        }
    })
    return () => {
        dispatch(account()) // 일치하는 이메일 없음
    }
    },[user_email_element])

    useEffect(() => {
        console.log(valid_account);
        if(user_email_element.email.length > 0 && valid_account.boolean === false){     // 일치하는 이메일이 없을 경우
            dispatch(signup())  // 회원가입 모달창 열기
            dispatch(emailModalDisplay())   // 이메일 모달창 닫기
        }  
    }, [valid_account])

    

    const onClickContinue = () => {
        console.log('email 제출');
        dispatch(user_email(inputValue.current.value))
         
    }   

    

     
    
    return(
        <div className="login-modal-wrap">
            <div className="login-modal-container">
                <div className="email-login-modal-content-container" onClick={(e)=>e.stopPropagation()}>
                    <div className="login-modal-content">
                        <div className="title-content">
                            <FontAwesomeIcon className="icon" icon={faX} style={{fontSize:"15px"}}/>
                            <span>로그인 또는 회원가입</span>
                        </div>
                        <div className="login-section">
                            <div className="login-greeting">에어비앤비에 오신 것을 환영합니다.</div>
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