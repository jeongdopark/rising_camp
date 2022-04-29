import React from 'react';

const LoginApp = ({element}) => {
    return(
        <div className="loginApp-wrap">
            <div className="loginApp-app" style={{backgroundImage:`url(${element.img})`}}></div>
            <div className="loginApp-text">{element.text}</div>
        </div>
    )
}

export default LoginApp;