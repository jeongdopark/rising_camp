import React from 'react';
import './main.css';
import MenuBarElement from './menubar-element';
const MenuBar = () => {
    const menuElement = [
        {
            title : "회원 가입",
            class : "menubar-bold menubar-common border-f"
        },
        {
            title : "로그인",
            class : "menubar-common"
        },
        {
            title : "",
            class : "menubar-linear"
        },
        {
            title : "숙소 호스트 되기",
            class : "menubar-common"
        },
        {
            title : "체험 호스트하기",
            class : "menubar-common"
        },
        {
            title : "도움말",
            class : "menubar-common border-l"
        }
    ]

    return(
        <div className="menubar-wrap">
            {menuElement.map((element) => (
                <MenuBarElement element={element}></MenuBarElement>
            ))}
        </div>
    )
}

export default MenuBar
