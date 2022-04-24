import React from 'react';
import './host.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

const NavSection = () => {
    return(
            <nav className="nav-section">
                <div className="icon-wrap-first">
                    <FontAwesomeIcon className="font-awsome-icon" icon={faAirbnb} style={{fontSize:"40px"}}/>
                </div>
                <div className="host-imgs-wrap">
                    <div className="host-imgs f"></div>
                    <div className="host-imgs s"></div>
                    <div className="host-imgs t"></div>
                    <h3>슈퍼호스트에게 물어보기</h3>
                </div>
                <div className="host-start">호스트 시작하기</div>
            </nav>
    )
}

export default NavSection;