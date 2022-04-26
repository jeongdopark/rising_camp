import React from 'react';


const MenuBarElement = ({element}) => {
    return(
        <div className={element.class}>
            {element.title}
        </div>
    )
}

export default MenuBarElement;