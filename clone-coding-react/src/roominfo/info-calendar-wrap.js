import React, { useEffect, useRef, useState } from 'react';
import InfoCalenderInner from './info-calendar-inner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './info-calendar.css'
const InfoCalendarWrap = () => {
    const [currentMonth, setCurrentMonth] = useState(0)
    const [nextMonth, setNextMonth] = useState(1)
    const [btnClick, setBtnClick] = useState(true);
    const onClickBefore = () => {
        setCurrentMonth(-1)
        setNextMonth(-1)
        setBtnClick(!btnClick)
    }

    const onClickNext = () => {
        setCurrentMonth(1)
        setNextMonth(1)
        setBtnClick(!btnClick)
    }

    return(
        <div className="info-calendar-section">
            <div className="calendar-icon-wrapper-left" onClick={()=>onClickBefore()}>
                <FontAwesomeIcon className="calendar-icon" icon={faAngleLeft}/>
            </div>
            <InfoCalenderInner name={'leftCalendar'} btnClick={btnClick} initMonth={currentMonth}></InfoCalenderInner>
            <InfoCalenderInner className="right-calendar" btnClick={btnClick} initMonth={nextMonth}></InfoCalenderInner>
            <div className="calendar-icon-wrapper-right" onClick={()=>onClickNext()}>
                <FontAwesomeIcon className="calendar-icon" icon={faAngleRight}/>
            </div>
        </div>
    )
}

export default InfoCalendarWrap;