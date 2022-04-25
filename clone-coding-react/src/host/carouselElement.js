import React from 'react';

const CarouselElement = ({element, count}) => {

    return(
    <div className="carousel">
        <div className="carousel-people" style={{backgroundImage:`url(${element.img})`}}></div>
        {count === element.valid ? 
            <div className="info-wrap">
                <p>{element.sentance}</p>
                <div className="name" style={{backgroundImage:`url(${element.nameImg})`}}></div>
                <h3>{element.place}</h3>
            </div> : ''    
    }
        
    </div>
    )
}

export default CarouselElement;