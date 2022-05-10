import React from 'react';

const Place = ({element}) => {
    
    return(
        <ul className="place-wrap">
            {element.element.map((prop) => (
                <li key={prop} className="places">{prop}</li>
            ))}
        </ul>
    )
}

export default Place;