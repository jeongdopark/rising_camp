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
                            <span className="create-account-title">?????? ?????? ????????????</span>
                        </div>
                        <div className="login-section">
                            <div className="login-select-section">
                                <div className="login-nation">
                                    <div className="login-nation-inner">
                                        <div className="placeholder-div">??????(???: ??????)</div>
                                        <input ref={inputFirstName} className="create-account-input" placeholder="??????(???: ??????)"/>   
                                    </div>
                                </div>
                                <div className="create-account-name">
                                    <div className="create-account-name-inner">
                                        <div className="placeholder-div">???(???: ???)</div>
                                        <input ref={inputLastName} className="create-account-input" placeholder="???(???: ???)"/>   
                                    </div>
                                </div>
                                <span style={{color:"#717171"}}>?????? ?????? ???????????? ????????? ????????? ??????????????? ???????????????.</span>
                            </div>
                            <div className="create-account-birth-section">
                                <div className="create-account-birth-container">
                                    <div className="placeholder-div">????????????</div>
                                    <input className="create-account-input" placeholder="??????. ???. ???."/>   
                                </div>
                                <span style={{color:"#717171"}}>??? 18??? ????????? ????????? ???????????? ????????? ??? ????????????. ????????? ?????????????????? ?????? ???????????? ???????????? ????????????.</span>
                            </div>
                            <div className="create-account-birth-section">
                                <div className="create-account-birth-container">
                                    <div className="placeholder-div">?????????</div>
                                    <input ref={inputUserEmail} className="create-account-input" placeholder="?????????" value={user_email_element.email}  /> 
                                    
                                </div>
                                <span style={{color:"#717171"}}>?????? ????????? ???????????? ???????????? ??????????????????.</span>
                            </div>
                            <div className="create-account-birth-section">
                                <div className="create-account-password-container">
                                    <div className="create-account-input-wrapper">
                                        <div>????????????</div>
                                        <input ref={inputUserPassword} className="create-account-input" placeholder="????????????"/>   
                                    </div>
                                    <div style={{textDecoration:"underLine", cursor:"pointer"}}>??????</div>
                                </div>
                                <div style={{color:"#717171", wordBreak:"keep-all", fontSize:"12px", marginTop:"15px"}}>?????? ??? ???????????? ????????? ???????????? ??????????????? ????????? ??????, ?????? ????????? ?????? ??? ?????? ?????? ????????? ???????????? ???????????? ???????????? ????????? ???????????? ????????????.</div>
                            </div>
                            <div className="login-select-section">
                                <div onClick={() => (onClickNext())} className="create-account-continue">?????? ??? ????????????</div>
                            </div>
                            <div className="create-account-line"></div>
                            <div style={{fontSize:"12px", color:"#717171", wordBreak:"keep-all", marginTop:"15px"}}>??????????????? ?????? ?????? ??????, ?????? ?????? ??????, ????????? ?????????, ?????? ????????? ??????????????????. ?????? ?????? ?????? ????????? ???????????? ???????????? ????????? ????????? ????????? ??? ????????????.</div>
                            <div className="create-account-checkbox-container">
                                <input style={{width:"23px", height:"23px" ,color:"#717171"}} type="checkbox"/>
                                <div style={{fontSize:"12px", color:"#717171"}}>????????????????????? ????????? ????????? ???????????? ?????? ?????? ????????????.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount