import React from 'react';

const LinkElement = ({ title, element}) => {
    return(
        <ul className="link-wrap">
            <li className="links bold">{title}</li>
            {element.element.map((prop) => (
                <li key={prop} className="links">{prop}</li>
            ))}
        </ul>
    )
}

export default LinkElement;