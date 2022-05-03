import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from '../main/footer';
import googleIcon from '../images/google.svg'
import appleIcon from '../images/apple.svg'
import mailIcon from '../images/mail.svg'
import facebookIcon from '../images/facebook.svg'
import room from '../images/reserve.webp'
import './reserve.css';
// https://a0.muscache.com/im/pictures/miso/Hosting-614253100553171461/original/0770125b-4f3d-4260-b57c-b42d1eceec6f.jpeg?aki_policy=large
const Reserve = () => {
    return(
        <>
            <StyleNav>
                
                <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"37px", color:"#FF5A5F"}}/>
                <h2 style={{color:"#FF5A5F"}}>airbnb</h2>
            </StyleNav>
            <StyleTitleContainer>
                <div>
                    <FontAwesomeIcon className="title-icon" icon={faAngleLeft}/>
                    <div>예약 요청</div>
                </div>            
            </StyleTitleContainer>
            <StyleMainSection>
                <div className="main-section-container">
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
                                    <h3>총액을 결제하시면 모든 절차가 완료됩니다.</h3>
                                </div>
                                <div className="other-container1">
                                    <h2>₩143,256</h2>
                                    <button></button>
                                </div>
                            </div>
                            <div className="payment-installment">
                                <div className="text-container2">
                                    <h2>요금 일부는 지금 결제, 나머지는 나중에 결제</h2>
                                    <h3>지금 ₩28,652을(를) 결제하시면, 나머지 금액(₩114,605)은 동일한 결제수단으로 2022년 7월 3일 자동 청구됩니다. 추가 수수료는 없습니다.</h3>
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
                                    <div>청소비</div>
                                    <div>₩25,000</div>
                                </div>
                                <div className="service charge-common">
                                    <div>서비스 수수료</div>
                                    <div>₩13,412</div>
                                </div>
                                <div className="tax charge-common">
                                    <div>숙박세와 수수료</div>
                                    <div>₩1,314</div>
                                </div>
                            </div>
                            <div className="total-charge">
                                <h2>총 합계 (KRW)</h2>    
                                <h3>₩109,753</h3>
                            </div>                       
                        </div>
                    </div>  
                </div>
            </StyleMainSection>
            
            <Footer></Footer>
        </>
    )
}

export default Reserve


const StyleNav = styled.div`
    padding-left : 1.3rem;
    display : flex;
    flex-direction: row;
    align-items: center;    
    width : 100%;
    height : 80px;
    border-bottom : 0.5px solid #DDDDDD;
    
    h2 {
        padding-left : 5px;
        font-weight : 800;        
    }
`

const StyleTitleContainer = styled.div`
    width : 100%;
    height : 9rem;
    display : flex;
    align-items : center;
    div {
        position : relative;
        width : 78%;
        margin :0 auto;
        display : flex;
        flex-direction : row;
        align-items : center;


        div{
            position: absolute;
            font-size : 2.1rem;
            font-weight : 500;
            left : 3rem;
        }
    }
`

const StyleMainSection = styled.div`
    height : 1000px;
    width : 100%;

    .main-section-container{
        width : 78%;
        margin : 0 auto;
        display : flex;
        flex-direction : row;
        justify-content : space-between;
    }

    .main-left-section{
        width : 49%;
    }

    .main-right-section{
        width : 49%;
    }

    .main-left-date{
        display : flex;
        justify-content : space-between;
        margin-top : 20px;

        button {
            border : 0;
            outline : 0;
            background-color : white;
            text-decoration : underline;
            font-weight : 600;
            font-size : 1rem;
        }
    }

    .info-wrap > h2{
        font-size : 1rem;

    }

    .info-wrap > div {
        margin-top : 10px;
    }
    .main-left-guest{
        display : flex;
        justify-content : space-between;
        margin-top : 25px;

        button {
            border : 0;
            outline : 0;
            background-color : white;
            text-decoration : underline;
            font-weight : 600;
            font-size : 1rem;
        }
    }

    .main-left-reserve{
        padding-bottom : 20px;
        border-bottom : 1px solid #DDDDDD;
    }

    .select-payment{
        margin : 25px 0 25px 0; 
    }

    .payment-container{
        border : 1px solid #DDDDDD;

        .payment-all{
            border : 1px solid black;
            border-radius : 10px 10px 0 0;
            display : flex;
            justify-content : space-between;
            font-size : 12px;
        }


        .text-container1{
            padding : 15px 0 15px 15px;

            h3{
                margin-top : 5px;
                color : #717171;
            }
        }

        .other-container1{
            display : flex;
            padding : 10px 10px 10px 0;

            button {
                margin-left : 15px;
                width : 20px;
                height : 20px;
                border-radius : 50%;
                border : 1px solid #DDDDDD;
            }
        }

        .payment-installment{
            border : 1px solid black;
            border-radius : 0px 0px 10px 10px;
            display : flex;
            justify-content : space-between;
            font-size : 12px;
        }

        .text-container2{
            padding : 15px;

            h3{
                margin : 5px 0 5px 0;
                color : #717171;
            }

            span{
                font-size : 15px;
                font-weight : 600;
                text-decoration : underline;
            }
        }

        .other-container2{
            display : flex;
            padding : 15px 15px 15px 0;
            button {
                margin-left : 15px;
                width : 20px;
                height : 20px;
                border-radius : 50%;
                border : 1px solid #DDDDDD;
            }
        }
    }
`