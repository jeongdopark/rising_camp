import React, { useState ,useRef } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const SignupModal = ({emailModal, setEmailModal, userEmail, setUserEmail, userPassword, setUserPassword, correctEmail, setCorrectEmail}) => {

    const inputPassword = useRef(null);
    const [ correctPassword, SetcorrectPassword ] = useState(true)
    const removeModal = () => {
        setEmailModal(false);
    }
    const onClickBack = () => {
        setCorrectEmail(false)
        setEmailModal(true)
    }
    
    const onClickValid = () => {
        const LOCALSTORAGE_INFO = JSON.parse(localStorage.getItem('userInfo'))
        setUserPassword(inputPassword.current.value)
        
        LOCALSTORAGE_INFO.forEach((e) => {
            console.log(e);
            if(e.password === userPassword){
                setCorrectEmail(false)
                setEmailModal(false)

                console.log('로그인 완료');
            }
        })
        localStorage.setItem('key', userEmail);
        localStorage.getItem('key')
    }

    
    return(
        <>
            <div className="login-modal-wrap">
            <div className="login-modal-container" onClick={()=>removeModal()}>
                <div className="password-login-modal-content-container" onClick={(e)=>e.stopPropagation()}>
                    <div className="password-modal-content">
                        
                        <div className="password-modal-content-inner">
                            <div className="password-modal-login-title-content">
                                <FontAwesomeIcon onClick={onClickBack} icon={faAngleLeft} className="password-modal-icon" style={{fontSize:"15px", marginLeft:"20px"}}/>
                                <div>로그인</div>
                            </div>
                        </div>
                        
                        <div className="login-section">
                            <div className="email-login-input-container">
                                <input ref={inputPassword} className="email-login-input" placeholder='비밀번호'/>
                            </div>
                            <div className="login-select-section" onClick={onClickValid}>
                                <div className="continue">회원가입</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignupModal;