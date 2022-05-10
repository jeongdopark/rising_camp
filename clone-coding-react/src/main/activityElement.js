import React, { useState } from 'react';
import './main.css';


const ActivityElement = ({element}) => {
    const [value, onChange] = useState(new Date());
    return (
                    <div className="activity-common" style={{backgroundImage:`url(${element.img})`}}>
                        <h1 className="activity-text">{element.sentance}</h1>
                        <div>{element.btn}</div>
                    </div>
    )
}

export default ActivityElement;