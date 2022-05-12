import React, { useState ,useRef, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { correct_password } from '../reducer/correctPassword'; 
import { user_email } from '../reducer/userEmail';
import { password } from '../reducer/password';
import { password_valid_action } from '../reducer/passwordvalid';
const PasswordModal = ({SetcorrectPassword, correctPassword, emailModal, setEmailModal, userEmail, setUserEmail, userPassword, setUserPassword, correctEmail, setCorrectEmail}) => {

    const userPassword_test = useSelector((state) => state.correctPassword)
    const password_valid = useSelector((state) => state.passwordValid);
    const dispatch = useDispatch()

    const inputPassword = useRef(null);
    
    const removeModal = () => {
        setEmailModal(false);
    }
    const onClickBack = () => {
        setCorrectEmail(false)
        setEmailModal(true)
        setUserEmail(null)
    }
    
    const onClickValid = () => {
        if(userPassword_test.correct_password === inputPassword.current.value){
                dispatch(password())
                dispatch(correct_password(''))
                dispatch(user_email(''))
                dispatch(password_valid_action(true))
                localStorage.setItem('login', 'on')
                console.log('correct password');
            }else{
                console.log('wrong password');
                dispatch(password_valid_action(false))

            }
        }   
    
    useEffect(() => {},[password_valid])
    console.log(password_valid);
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
                        { password_valid.boolean ? null : <div className="password-modal-incorrect-password">
                            <div className="password-modal-incorrect-password-wrap">
                                <FontAwesomeIcon className="incorrect-password-icon" icon={faCircleExclamation}/>
                                <div className="password-modal-incorrect-password-text-wrap">
                                    <div style={{fontWeight:"bold"}}>다시 시도해주세요.</div>
                                    <div style={{width:"80%", wordBreak: "keep-all"}}>올바르지 않은 비밀번호입니다. 다시 시도하거나 다른 로그인 방법을 선택하세요.</div>
                                </div>
                            </div>
                        </div>}
                        <div className="login-section">
                            <div className="email-login-input-container">
                                <input ref={inputPassword} className="email-login-input" placeholder='비밀번호'/>
                            </div>
                            <div className="login-select-section" onClick={onClickValid}>
                                <div className="continue">로그인</div>
                            </div>
                            <div className="password-modal-forget">
                                비밀번호를 잊으셨나요?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PasswordModal;