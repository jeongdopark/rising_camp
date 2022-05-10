import React from 'react';

import Place from './infoPlace';
const InfoPlace = () => {
    const placeElements = [
        {   
            element : [ "인천시", "용인시", "속초시"]
        },
        {
            element : [ "대전", "Pyeongtaek-si", "Yeongjongdo" ],
        },
        {
            element : [ "수원시", "양평군", "원주시"]
        },
        {
            element : ["춘천시", "Ansan-si", "부산"]
        }
    ]
    
        return (
        <>
            <div className="info-place-title">Gangnam-gu 및 인근의 다른 옵션 살펴보기</div>
            <div className="info-place-section-wrap">
                <div className="info-place-wrap">
                    {placeElements.map((element) => (
                        <Place element={element}></Place>
                    ))}
                </div>
            </div>
        </>
        )
}

export default InfoPlace;