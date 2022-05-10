import React, { useState ,useRef } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const PasswordModal = ({SetcorrectPassword, correctPassword, emailModal, setEmailModal, userEmail, setUserEmail, userPassword, setUserPassword, correctEmail, setCorrectEmail}) => {

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
        setUserPassword(inputPassword.current.value)
        if(correctPassword === userPassword){
            setCorrectEmail(false)
                setEmailModal(false)
                setUserEmail(null)
                setUserPassword(null)
                console.log('비밀번호 일치');
                console.log('로그인 완료');

            }
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
                        {/* <div className="password-modal-incorrect-password">
                            <div className="password-modal-incorrect-password-wrap">
                                <FontAwesomeIcon className="incorrect-password-icon" icon={faCircleExclamation}/>
                                <div className="password-modal-incorrect-password-text-wrap">
                                    <div style={{fontWeight:"bold"}}>다시 시도해주세요.</div>
                                    <div style={{width:"80%", wordBreak: "keep-all"}}>올바르지 않은 비밀번호입니다. 다시 시도하거나 다른 로그인 방법을 선택하세요.</div>
                                </div>
                            </div>
                        </div> */}
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