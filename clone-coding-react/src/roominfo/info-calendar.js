import React, { useEffect } from 'react';
import './info-calendar.css'
import 'react-dates/initialize';
import moment from "moment"
import "moment/locale/ko"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import InfoCalendarWrap from './info-calendar-wrap';

const InfoCalendar = () => {
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
        <div className="info-calendar-wrapper">
            <div className="calendar-container">
                <InfoCalendarWrap/>
            </div>
        </div>
    )
}

export default InfoCalendar
