import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Calendar from '../detail/calendar.js';
import Test from '../test';
const Search = ({clickOne, clickTwo, clickThree, clickFour, setClickOne, setClickTwo, setClickThree, setClickFour}) => {
    const clickLocation = useCallback(() => {
        if(clickOne === true){
            setClickOne(false)
        }else{
            setClickOne(true)
            setClickTwo(false)
            setClickThree(false)
            setClickFour(false)
        }
    }, [clickOne])

    const clickCheckIn = useCallback(() => {
        if(clickTwo === true){
            setClickTwo(false)
        }else{
            setClickTwo(true)
            setClickOne(false)
            setClickThree(false)
            setClickFour(false)
        }
    }, [clickTwo])
    const clickCheckOut = () => {
        if(clickThree === true){
            setClickThree(false)
        }else{
            setClickTwo(false)
            setClickOne(false)
            setClickThree(true)
            setClickFour(false)
        }
    }
    const clickNumbers = () => {
        if(clickFour === true){
            setClickFour(false)
        }else{
            setClickTwo(false)
            setClickOne(false)
            setClickThree(false)
            setClickFour(true)
        }
    }
    
    const [adultNum, setAdultNum] = useState(0)
    const [childNum, setChildNum] = useState(0)
    const [babyNum, setBabyNum] = useState(0)
    const [dogNum, setDogNum] = useState(0)
    const [text, setText] = useState([
        {
            text : `게스트 ${adultNum+childNum}명`
        }
    ])
    
    useEffect(() => {
        setText([babyNum > 0 ? {text : `게스트 ${adultNum+childNum}명, 유아 ${babyNum}명`} : {text : `게스트 ${adultNum+childNum}명`}])
    },[adultNum, childNum, babyNum])


    const adultPlus = () => {
        setAdultNum(adultNum+1)
    };
    
    const adultMinus = () => {
        if(adultNum > 0){
            setAdultNum(adultNum-1)
        }
    }
    const childPlus = () => {
        setChildNum(childNum+1)
    };
    
    const childMinus = () => {
        if(childNum > 0){
            setChildNum(childNum-1)
        }
    }
    const babyPlus = () => {
        setBabyNum(babyNum+1)
    };
    
    const babyMinus = () => {
        if(babyNum > 0){
            setBabyNum(babyNum-1)
        }
    }

    const dogPlus = () => {
        setDogNum(dogNum+1)
    };
    
    const dogMinus = () => {
        if(dogNum > 0){
            setDogNum(dogNum-1)
        }
    }
    
    
    return(
        <>
                    <div className="black-nav-search-wrap">
                        <div className={clickOne===true ?  "search-location search-height search-common select" : "search-location search-height search-common"} 
                        onClick={()=>clickLocation()}>
                            <h1 className="search-font1">위치</h1>
                            <h2 className="search-font2">어디로 여행가세요?</h2>
                        </div>
                        <div className="search-line"></div>
                        <div className={clickTwo===true ? "search-checkin search-height search-common select" : "search-checkin search-height search-common"}  
                        onClick={()=>clickCheckIn()}>
                            <h1 className="search-font1">체크인</h1>
                            <h2 className="search-font2">날짜 입력</h2>
                        </div>
                        <div className="search-line"></div>
                        <div className={clickThree===true ? "search-checkout search-height search-common select" : "search-checkout search-height search-common"}
                        onClick={()=>clickCheckOut()}>
                            <h1 className="search-font1">체크 아웃</h1>
                            <h2 className="search-font2">날짜 입력</h2>
                        </div>
                        <div className="search-line"></div>
                        <div className={clickFour===true ? "search-numbers search-height search-common select" : "search-numbers search-height search-common"}
                        onClick={()=>clickNumbers()}>
                            <div className="search-numbers-h-wrap">
                                <h1 className="search-font1">인원</h1>
                                {adultNum>0 || childNum>0 ? <h2 className="search-font2 guest">{text[0].text}</h2> : <h2 className="search-font2">게스트 추가</h2>}
                            </div>
                            <div className="search-numbers-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </div>
                        </div>
                    </div>    
                    {clickOne===true ? 
                    <div className="location-sub-box">
                        <div className="location-sub-container">
                            <span>언제 어디로든 떠나는 여행</span>
                            <div>
                                <Link to="/List" className="location-sub-link">유연한 검색</Link>
                            </div>
                        </div>
                    </div> : null}

                    {clickTwo===true || clickThree===true ? <Calendar></Calendar> : null}
                    {clickFour===true ? <div className="people-number-box">
                        <div className="people-number-container">
                            <div className="people-element-container">
                                <div className="people-number-div">
                                    <h2>성인</h2>
                                    <h3>만 13세 이상</h3>
                                </div>
                                <div className="number-wrap">
                                    <FontAwesomeIcon onClick={()=>adultMinus()} className="number-wrap-icon" icon={faMinus}/>
                                    <h3>{adultNum}</h3>
                                    <FontAwesomeIcon onClick={()=>adultPlus()} className="number-wrap-icon" icon={faPlus}/>
                                </div>
                            </div>
                            <div className="people-element-container">
                                <div className="people-number-div">
                                    <h2>어린이</h2>
                                    <h3>만 2~12세</h3>
                                </div>
                                <div className="number-wrap">
                                    <FontAwesomeIcon onClick={()=>childMinus()} className="number-wrap-icon" icon={faMinus}/>
                                    <h3>{childNum}</h3>
                                    <FontAwesomeIcon onClick={()=>childPlus()} className="number-wrap-icon" icon={faPlus}/>
                                </div>
                            </div>
                            <div className="people-element-container">
                                <div className="people-number-div">
                                    <h2>유아</h2>
                                    <h3>만 2세 미만</h3>
                                </div>
                                <div className="number-wrap">
                                    <FontAwesomeIcon onClick={()=>babyMinus()} className="number-wrap-icon" icon={faMinus}/>
                                    <h3>{babyNum}</h3>
                                    <FontAwesomeIcon onClick={()=>babyPlus()} className="number-wrap-icon" icon={faPlus}/>
                                </div>
                            </div>
                            <div className="people-element-container">
                                <div className="people-number-div">
                                    <h2>반려동물</h2>
                                    <h3>보조동물을 동반하시나요?</h3>
                                </div>
                                <div className="number-wrap">
                                    <FontAwesomeIcon onClick={()=>dogMinus()} className="number-wrap-icon" icon={faMinus}/>
                                    <h3>{dogNum}</h3>
                                    <FontAwesomeIcon onClick={()=>dogPlus()}className="number-wrap-icon" icon={faPlus}/>
                                </div>
                            </div>
                            <span>반려동물을 3마리 이상 동반하는 경우, 반드시 호스트에게 알려주세요.</span>
                        </div>
                    </div> : null}

        </>
    )
}

export default Search