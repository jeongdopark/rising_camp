import React, { useState } from 'react';
import CardElement from './cardElement';

import Image1 from '../images/incheon.webp'
import Image2 from '../images/seoul.webp'
import Image3 from '../images/daegu.webp'
import Image4 from '../images/daejeon.webp'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
const Card = () => {
    const [value, onChange] = useState(new Date());
    const cardsElement = [
        {
            city : 'seoul',
            color : '#bc1a6e',
            image : Image1,
            distance : '2KM 거리'
        },
        {
            city : 'incheon',
            color : '#CC2D4A',
            image : Image2,
            distance : '29KM 거리'
        },
        {
            city : 'daegu',
            color : '#DE3151',
            image : Image3,
            distance : '237KM 거리'
        },
        {
            city : 'daejeon',
            color : '#D93B30',
            image : Image4,
            distance : '140KM 거리'
        }
    ]
    return(
            <div className="city-section-wrap">
                <h1>설레는 다음 여행을 위한 아이디어</h1>
                {/* <Calendar onChange={onChange} value={value} />
                <Calendar onChange={onChange} value={value} /> */}
                <div className="city-wrap">
                    {cardsElement.map((prop) => (
                    <CardElement key={prop.city} prop={prop}/>
                    ))}
                </div>
            </div>
        
    )
}

export default Card;