import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const LoginModalWrap = () => {
    return(
        <div className="login-modal-wrap">
            <div className="login-modal-content-container">
                <div className="login-modal-content">
                    <div className="title-content">
                        <FontAwesomeIcon className="icon" icon={faX} style={{fontSize:"15px"}}/>
                        <span>로그인 또는 회원가입</span>
                    </div>
                    <div className="login-section">
                        <span>에어비앤비에 오신 것을 환영합니다.</span>
                        <div className="login-select-section">
                            <div className="login-nation">
                                <div className="small-text">국가/지역</div>
                                <select className="login-nation-select">
                                    <option value="한국">한국</option>
                                    <option value="한국">한국</option>
                                    <option value="한국">한국</option>
                                </select>
                                
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModalWrap