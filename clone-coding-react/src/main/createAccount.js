import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../reducer/signup';
import { emailModalDisplay } from '../reducer/email';
import { user_email } from '../reducer/userEmail';
import './main.css';
const CreateAccount = () => {
    // const user_email = useSelector((state) => (state.userEmail))
    const signup_display = useSelector((state) => (state.signup))
    console.log(signup_display);
    const dispatch = useDispatch()
    // console.log(user_email_a);
    // const [ firstName, setFirstName ] = useState('')
    // const [ lastName, setLastName ] = useState('')
    // const [ userEmail, setUserEmail ] = useState(user_email.email)
    // const [ userPassword, setUserPassword ] = useState('') 


    const inputFirstName = useRef(null)
    const inputLastName = useRef(null)
    const inputUserEmail = useRef(null)
    const inputUserPassword = useRef(null)
    const user_email_element = useSelector((state) => state.userEmail)
    console.log(user_email_element);
    const onClickNext = () => {
        // setFirstName(inputFirstName.current.value)
        // setLastName(inputLastName.current.value)
        // setUserEmail(inputUserEmail.current.value)
        // setUserPassword(inputUserPassword.current.value)
        localStorage.setItem('login', 'on')
        
        const userInfo = { 
            firstName : inputFirstName.current.value, 
            lastName : inputLastName.current.value, 
            id : inputUserEmail.current.value, 
            userPassword : inputUserPassword.current.value
        }
        if(JSON.parse(localStorage.getItem('userInfo')) !== null){
            let userInfo_list = JSON.parse(localStorage.getItem('userInfo'))
            userInfo_list.push(userInfo)
            console.log(userInfo_list);
            localStorage.setItem('userInfo', JSON.stringify(userInfo_list))
            dispatch(signup())
            dispatch(user_email(''))

        }else{
            let empty_array = []
            empty_array.push(userInfo)
            localStorage.setItem('userInfo', JSON.stringify(empty_array))
        }
        console.log(signup_display.state.boolean);
        dispatch(user_email(''))
        
        
    }
    return(
        <div className="login-modal-wrap">
            <div className="login-modal-container">
                <div className="login-modal-content-container" onClick={(e)=>e.stopPropagation()}>
                    <div className="login-modal-content">
                        <div className="title-content">
                            <FontAwesomeIcon className="icon" icon={faAngleLeft} style={{fontSize:"15px"}}/>
                            <span className="create-account-title">회원 가입 완료하기</span>
                        </div>
                        <div className="login-section">
                            <div className="login-select-section">
                                <div className="login-nation">
                                    <div className="login-nation-inner">
                                        <div className="placeholder-div">이름(예: 길동)</div>
                                        <input ref={inputFirstName} className="create-account-input" placeholder="이름(예: 길동)"/>   
                                    </div>
                                </div>
                                <div className="create-account-name">
                                    <div className="create-account-name-inner">
                                        <div className="placeholder-div">성(예: 홍)</div>
                                        <input ref={inputLastName} className="create-account-input" placeholder="성(예: 홍)"/>   
                                    </div>
                                </div>
                                <span style={{color:"#717171"}}>정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.</span>
                            </div>
                            <div className="create-account-birth-section">
                                <div className="create-account-birth-container">
                                    <div className="placeholder-div">생년월일</div>
                                    <input className="create-account-input" placeholder="연도. 월. 일."/>   
                                </div>
                                <span style={{color:"#717171"}}>만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의 다른 회원에게 공개되지 않습니다.</span>
                            </div>
                            <div className="create-account-birth-section">
                                <div className="create-account-birth-container">
                                    <div className="placeholder-div">이메일</div>
                                    <input ref={inputUserEmail} className="create-account-input" placeholder="이메일" value={user_email_element.email}  /> 
                                    
                                </div>
                                <span style={{color:"#717171"}}>예약 확인과 영수증을 이메일로 보내드립니다.</span>
                            </div>
                            <div className="create-account-birth-section">
                                <div className="create-account-password-container">
                                    <div className="create-account-input-wrapper">
                                        <div>비밀번호</div>
                                        <input ref={inputUserPassword} className="create-account-input" placeholder="비밀번호"/>   
                                    </div>
                                    <div style={{textDecoration:"underLine", cursor:"pointer"}}>표시</div>
                                </div>
                                <div style={{color:"#717171", wordBreak:"keep-all", fontSize:"12px", marginTop:"15px"}}>동의 및 계속하기 버튼을 선택하면 에어비앤비 서비스 약관, 결제 서비스 약관 및 차별 금지 정책에 동의하며 개인정보 처리방침 정책을 이해하는 것입니다.</div>
                            </div>
                            <div className="login-select-section">
                                <div onClick={() => (onClickNext())} className="create-account-continue">동의 및 계속하기</div>
                            </div>
                            <div className="create-account-line"></div>
                            <div style={{fontSize:"12px", color:"#717171", wordBreak:"keep-all", marginTop:"15px"}}>에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일, 푸시 알림을 보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지 메시지 수신을 거부할 수 있습니다.</div>
                            <div className="create-account-checkbox-container">
                                <input style={{width:"23px", height:"23px" ,color:"#717171"}} type="checkbox"/>
                                <div style={{fontSize:"12px", color:"#717171"}}>에어비앤비에서 보내는 마케팅 메시지를 받고 싶지 않습니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount