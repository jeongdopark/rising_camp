import React, { useState, useEffect } from 'react';
import './test.css'
const Test = () => {
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    
    useEffect(() => {
        console.log('렌더링');
        console.log({one, two});
    })

    const onOne = (e) => {
        setOne(e.target.value)
    }

    const onTwo = (e) => {
        setTwo(e.target.value)
    }

  return (
        <div className="container">
            <input value={one} onChange={onOne}/>
            <div>
                <b>{one}</b>
            </div>
            <input value={two} onChange={onTwo}/>
            <div>
                <b>{two}</b>
            </div>
        </div>
  );
};
export default Test;