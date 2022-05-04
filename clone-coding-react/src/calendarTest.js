import React, { useEffect, useRef, useState } from 'react';
import Test from './test';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './test.css'
const CalendarTest = () => {
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
        <div className="calendar-section">
            <div className="calendar-icon-wrapper-left" onClick={()=>onClickBefore()}>
                <FontAwesomeIcon className="calendar-icon" icon={faAngleLeft}/>
            </div>
            <Test name={'leftCalendar'} btnClick={btnClick} initMonth={currentMonth}></Test>
            <Test className="right-calendar" btnClick={btnClick} initMonth={nextMonth}></Test>
            <div className="calendar-icon-wrapper-right" onClick={()=>onClickNext()}>
                <FontAwesomeIcon className="calendar-icon" icon={faAngleRight}/>
            </div>
        </div>
    )
}

export default CalendarTest;