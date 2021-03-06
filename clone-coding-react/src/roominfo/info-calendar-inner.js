
import {useEffect, useState} from 'react';
import moment from 'moment';
import './info-calendar.css';
const InfoCalenderInner =({initMonth, name, btnClick})=>{

    const [getMoment, setMoment]=useState(moment());     
    useEffect(() => {
        setMoment(getMoment.clone().add(initMonth, 'month'))
    },[btnClick])
    
    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const calendarArr=()=>{
        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
          result = result.concat(
            <tr className="week-array" key={week}>
            {
              Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                // return(
                //     <td key={index}  >
                //       <span className="day">{days.format('D')}</span>
                //     </td>
                // );
                if(moment(moment().format('YYYYMMDD')).isAfter(moment(days.format('YYYYMMDD'))))
                  return(
                    <td key={index} style={{color:'#DDDDDD'}} >
                      <span>{days.format('D')}</span>
                    </td>
                );
                if(days.format('MM') !== today.format('MM')){
                    return(
                        <td key={index} >
                          <span></span>
                        </td>
                    );
                  }
                  else{
                    return(
                        <td key={index}  >
                          <span>{days.format('D')}</span>
                        </td>
                    );
                  }
              })
            }
          </tr>);
        }
        return result;
      }
  return(
    <div className={name}>
        <div className="control">
          <button style={{opacity:'0', marginBottom:'20px'}} onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >?????????</button>
          <span style={{fontWeight:'bold'}}>{today.format('YYYY ??? MM ???')}</span>
          <button style={{opacity:'0'}} onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >?????????</button>
        </div>
        <div className="row">
          {['???', '???', '???', '???', '???', '???', '???'].map((el) => (
            <div className="info-box" key={el}>
              <h4 className="text">{el}</h4>
            </div>
          ))}
        </div>
        <table className="info-calendar">
          <tbody>
            {calendarArr()}
          </tbody>
        </table>
    </div>
  );
}
export default InfoCalenderInner;