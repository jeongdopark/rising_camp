import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import googleIcon from '../images/google.svg'
import appleIcon from '../images/apple.svg'
import mailIcon from '../images/mail.svg'
import facebookIcon from '../images/facebook.svg'


const ReserveLeftSection = () => {
    return(
                    <div className="main-left-section">
                        <div className="main-left-reserve">
                            <h2>예약 정보</h2>
                            <div className="main-left-date">
                                <div className="info-wrap">
                                    <h2>날짜</h2>
                                    <div>8월 10일~12일</div>
                                </div>
                                <button>수정</button>
                            </div>
                            <div className="main-left-guest">
                                <div className="info-wrap">
                                    <h2>게스트</h2>
                                    <div>게스트 1명</div>
                                </div>
                                <button>수정</button>
                            </div>
                        </div>
                        <div className="select-payment">
                            <h2>결제 방식 선택하기</h2>
                        </div>
                        <div className="payment-container">
                            <div className="payment-all">
                                <div className="text-container1">
                                    <h2>전액 결제</h2>
                                    <div>총액을 결제하시면 모든 절차가 완료됩니다.</div>
                                </div>
                                <div className="other-container1">
                                    <h2>₩143,256</h2>
                                    <button></button>
                                </div>
                            </div>
                            <div className="payment-installment">
                                <div className="text-container2">
                                    <h2>요금 일부는 지금 결제, 나머지는 나중에 결제</h2>
                                    <div>지금 ₩28,652을(를) 결제하시면, 나머지 금액(₩114,605)은 동일한 결제수단으로 2022년 7월 3일 자동 청구됩니다. 추가 수수료는 없습니다.</div>
                                    <span>상세 정보</span>
                                </div>
                                <div className="other-container2">
                                    <h2>₩28,652</h2>
                                    <button></button>
                                </div>
                            </div>
                        </div>
                        <div className="login-sectio2">
                            <div className="login-greeting2">예약하려면 로그인 또는 회원 가입하세요</div>
                            <div className="login-select-section">
                                <div className="login-nation">
                                    <div className="login-nation-inner">
                                        <div className="small-text">국가/지역</div>
                                        <select className="login-nation-select">
                                            <option value="한국">한국 (+82)</option>
                                            <option value="한국">한국</option>
                                            <option value="한국">한국</option>
                                        </select>
                                        <FontAwesomeIcon className="login-nation-icon" icon={faAngleDown} style={{fontSize:"15px"}}/>
                                    </div>
                                </div>
                                <div className="login-number">
                                    <div className="login-number-inner">
                                        <div className="small-text">전화번호</div>
                                        <div className="nation-number">+1</div>
                                        <input placeholder="(XXX) XXX-XXXX"/>   
                                    </div>
                                </div>
                                <span>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</span>
                                <div className="continue">계속</div>
                            </div>
                            <div className="login-section-line">
                                <div className="line-div-wrap">
                                    <div className="line-div"></div>
                                </div>
                                <div className="text">또는</div>
                                <div className="line-div-wrap">
                                    <div className="line-div"></div>
                                </div>
                            </div>
                            <div className="login-app">
                                <div className="login-logo-container">
                                    <div className="login-logo-top">
                                        <div>
                                            <div className="logo" style={{backgroundImage:`url(${facebookIcon})`}}></div>
                                        </div>
                                        <div>
                                            <div className="logo" style={{backgroundImage:`url(${googleIcon})`}}></div>    
                                        </div>
                                        <div>
                                            <div className="logo" style={{backgroundImage:`url(${appleIcon})`}}></div>
                                        </div>
                                    </div>
                                    <div className="login-logo-bottom">
                                        <div className="logo" style={{backgroundImage:`url(${mailIcon})`}}></div>
                                        <h3>이메일로 로그인하기</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ReserveLeftSection;