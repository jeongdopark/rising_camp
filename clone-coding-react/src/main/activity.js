import React from 'react';
import ActivityElement from './activityElement';
import './main.css';
import Image5 from '../images/journey.webp'
import Image6 from '../images/home.webp'
const Activity = () => {
    const activityObj = [
        {
            img : Image5,
            sentance : "여행 중 만나는 이색적인 즐길 거리",
            btn : "체험"
        },
        {
            img : Image6,
            sentance : "집에서 만나는 다양한 즐길 거리여행 중 만나는 이색적인 즐길 거리",
            btn : "온라인 체험"
        }
    ]
    return(
            <div className="activity-section-wrap">
                <h1>에어비엔비 체험 둘러보기</h1>
                <div className="activity-wrap">
                    {activityObj.map((element) => (
                        <ActivityElement className="activity-wrap" element={element}></ActivityElement>
                    ))}
                </div>        
            </div>
    )
}

export default Activity;