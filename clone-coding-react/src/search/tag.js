import React, { useRef } from 'react';
import './search.css';

const SearchTag = ({tag}) => {
    console.log(tag.length);
    let useWidth = 0
    if(tag.length === 2){
        useWidth = 4;
    }else if(tag.length === 3){
        useWidth = 5;
    }else if(tag.length === 6){ 
        useWidth = 7;
    }else if(tag.length === 8){ 
        useWidth = 7;
    }else if(tag.length === 9){ 
        useWidth = 9;
    }
    return(
            <div className="search-filter-tag-element" style={{width:`${useWidth}%`}}>
                <div style={{fontSize:"13px"}}>{tag}</div>
            </div>
    )
}

export default SearchTag