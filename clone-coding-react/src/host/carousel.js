import React, { useState, useRef } from 'react';
import './host.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import IMG2 from '../images/img2.webp'
import IMG3 from '../images/img3.webp'
import IMG4 from '../images/img4.webp'
import IMG5 from '../images/img5.webp'
import IMG6 from '../images/img6.webp'
import IMG7 from '../images/img7.webp'

import NAMEIMG2 from '../images/name-img2.webp'
import NAMEIMG3 from '../images/name-img3.webp'
import NAMEIMG4 from '../images/name-img4.webp'
import NAMEIMG5 from '../images/name-img5.webp'
import NAMEIMG6 from '../images/name-img6.webp'
import NAMEIMG7 from '../images/name-img7.webp'
import CarouselElement from './carouselElement';
const Carousel = () => {
    const carouselObj = [
        {
            img : IMG2,
            nameImg : NAMEIMG2,
            sentance : "스튜디오 호스팅 덕에 새로운 삶을 사는 느낌이에요. 좋은 인연과 잊을 수 없는 추억은 덤이죠.",
            place : "밀라노의 호스트",
            valid : 1
        },
        {
            img : IMG3,
            nameImg : NAMEIMG3,
            sentance : "집을 숙소로 호스팅하면서 자영업자가 되어 경제적 자유에 한 걸음 더 가까워질 수 있었어요.",
            place : "애틀랜타의 호스트",
            valid : 2
        },
        {
            img : IMG4,
            nameImg : NAMEIMG4,
            sentance : "파스타 만들기 체험을 호스팅함으로써 <br/> 문화 보존에 기여할 수 있습니다.",
            place : "팔롬바라사비나의 호스트",
            valid : 3
        },
        {
            img : IMG5,
            nameImg : NAMEIMG5,
            sentance : "에어비앤비 덕분에 제가 제일 좋아하는 일을 업으로 삼을 수 있게 되었어요. 바로 집에서 게스트를 맞이하고 돌보는 일이죠.",
            place : "치앙마이의 호스트",
            valid : 4
        },
        {
            img : IMG6,
            nameImg : NAMEIMG6,
            sentance : "베두인 텐트 호스팅을 통해 세계 각지에서 온 분들을 만날 수 있었습니다.",
            place : "와디럼의 호스트",
            valid : 5
        },
        {
            img : IMG7,
            nameImg : NAMEIMG7,
            sentance : "게스트가 소중한 사람들과 자연 속에서 교감할 수 있도록 친환경 숙소를 호스팅하는 게 참 보람 있어요.",
            place : "파라치의 호스트",
            valid : 6
        }
    ]
    
    const [left, setLeft] = useState(-400);
    let count = useRef(2);
    let leftNum = useRef(-400)

    const rightBtn = () => {
        if(count.current < 6){
            count.current += 1
            leftNum.current -= 450;
            setLeft(leftNum.current)
        }
    }
    const leftBtn = () => {
        if(count.current > 1){
            count.current -= 1
            leftNum.current += 450;
            setLeft(leftNum.current)
        }
    }
    return ( 
            <>
                <div className="carousel-wrap" style={{left : `${left}px`}}>
                    <div className="carousel carousel-empty"></div>
                    {carouselObj.map((element) => (
                        <CarouselElement element={element} count={count.current}></CarouselElement>
                    ))}
                </div>
            
                <span className="btn-wrap">
                    <button className="left-btn" onClick={()=>leftBtn()}>
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </button>
                    <button className="right-btn" onClick={()=>rightBtn()}>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                </span>
            </>
    )
}

export default Carousel