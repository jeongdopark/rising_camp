import React, { useEffect } from 'react';
import './calendar.css'
import 'react-dates/initialize';
import moment from "moment"
import "moment/locale/ko"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';


const Calendar = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ])
    useEffect(() => {
        moment.locale('ko');
    })
    return(
        <div className="calendar-wrapper">
            <div className="calendar-container">
                <div className="select-box">
                    <div className="select-common select-one">달력</div>
                    <div className="select-common select-two">유연한 일정</div>
                </div>
                <DateRangePicker
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    direction="horizontal"
                />
            </div>
        </div>
    )
}

export default Calendar
