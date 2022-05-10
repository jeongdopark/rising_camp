import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from '../main/footer';

import './reserve.css';
import ReserveLeftSection from './leftsection';
import ReserveRightSection from './rightsection';

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
                    <div>확인 및 결제</div>
                </div>            
            </StyleTitleContainer>
            <StyleMainSection>
                <div className="main-section-container">
                    <ReserveLeftSection></ReserveLeftSection>
                    <ReserveRightSection></ReserveRightSection>
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
    height : 1200px;
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

        .payment-all{
            border : 1px solid #DDDDDD;
            border-radius : 10px 10px 0 0;
            display : flex;
            justify-content : space-between;
            font-size : 12px;
        }


        .text-container1{
            padding : 15px 0 15px 15px;
            div{
                font-size : 1rem;
                color : #717171;
            }
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
            border : 1px solid #DDDDDD;
            border-radius : 0px 0px 10px 10px;
            display : flex;
            justify-content : space-between;
            font-size : 12px;
        }

        .text-container2{
            padding : 15px;

            div {
                margin : 10px 0 10px 0;
                font-size : 1rem;
                color : #717171;
                width : 100%;
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