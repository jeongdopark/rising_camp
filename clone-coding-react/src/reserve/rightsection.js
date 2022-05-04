import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import room from '../images/reserve.webp'

const ReserveRightSection = () => {
    return(
                    <div className="main-right-section">
                        <div className="main-right-container">
                            <div className="top-info">
                                <div className="top-info-img" style={{backgroundImage:`url(${room})`}}></div>
                                <div className="top-info-text-container">
                                    <h4>레지던스 전체</h4>
                                    <h3>☆Sunbed PartyRoom 8 in Gangnam/강남1min/NETFLIX/빔프 ☆</h3>
                                    <div className="mini-container">
                                        <FontAwesomeIcon icon={faStar} style={{fontSize:"10px", color:"#FF5A5F"}}/> 
                                        <h3>5.0</h3>
                                        <h4>(후기 1개)</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="charge-info">
                                <h2>요금 세부정보</h2>
                                <div className="day-charge charge-common">
                                    <div>₩70,000 x 1박</div>
                                    <div>₩70,000</div>
                                </div>
                                <div className="cleaning charge-common">
                                    <div className="under-line">청소비</div>
                                    <div>₩25,000</div>
                                </div>
                                <div className="service charge-common">
                                    <div className="under-line">서비스 수수료</div>
                                    <div>₩13,412</div>
                                </div>
                                <div className="tax charge-common">
                                    <div className="under-line">숙박세와 수수료</div>
                                    <div>₩1,314</div>
                                </div>
                            </div>
                            <div className="total-charge">
                                <div>
                                    <h2>총 합계</h2>    
                                    <h2 className="under-line">(KRW)</h2>
                                </div>
                                <h3>₩109,753</h3>
                            </div>                       
                        </div>
                    </div>  
    )
}

export default ReserveRightSection;