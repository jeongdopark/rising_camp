import React, { useState, useEffect } from 'react';
import LoginModalWrap from './login-modal';
import './main.css';
import MenuBarElement from './menubar-element';
const MenuBar = ({loginModal, setLoginModal}) => {
    // useEffect(() => {
    //     // console.log(loginModal)
    // }, [loginModal])
    // const [ loginModal, setLoginModal ] = useState(false);
    // useEffect(() => {
    //     const onClickModal = () => {
    //         console.log(loginModal)
    //         if(loginModal === false){
    //             setLoginModal(true)
    //             console.log(loginModal);
    //         }else{
    //             setLoginModal(false)
    //             console.log(loginModal);
    //         }
    //     }
    // }, [loginModal])
    const menuElement = [
        {  
            valid : 1,
            title : "회원 가입",
            class : "menubar-bold menubar-common border-f"
        },
        {
            valid : 2,
            title : "로그인",
            class : "menubar-common"
        },
        {
            valid : 3,
            title : "",
            class : "menubar-linear"
        },
        {
            valid : 4,
            title : "숙소 호스트 되기",
            class : "menubar-common"
        },
        {
            valid : 5,
            title : "체험 호스트하기",
            class : "menubar-common"
        },
        {
            valid : 6,
            title : "도움말",
            class : "menubar-common border-l"
        }
    ]
    // const [ loginModal, setLoginModal ] = useState(false);
    // const onClickModal = () => {
    //     console.log(loginModal)
    //     if(loginModal === false){
    //         setLoginModal(true)
    //         console.log(loginModal);
    //     }else{
    //         setLoginModal(false)
    //         console.log(loginModal);
    //     }
    // }
    
    return(
        <>
            <div className="menubar-wrap">
                {menuElement.map((element) => (
                    <MenuBarElement element={element} setLoginModal={setLoginModal} loginModal={loginModal}></MenuBarElement>
                ))}
                
            </div>
            
        </>
    )
}

export default MenuBar
