import React from 'react';

const CardElement = ({prop}) => {
    return(
        <div className="city-wrap-common">
            <div className="city-img" style={{backgroundImage:`url(${prop.image})`}}></div>
            <div className="city-info" style={{backgroundColor:`${prop.color}`}}>
                <h1 style={{color:"white"}}>{prop.city}</h1>
                <h3 style={{color:"white"}}>{prop.distance}</h3>
            </div>
        </div>
    )
}


export default CardElement

                // <div className="city-wrap">
                //     <div className="city-wrap-common">
                //         <div className="seoul-img city-img"></div>
                //         <div className="city-info seoul">
                //             <h1>서울</h1>
                //             <h3>2km 거리</h3>
                //         </div>
                //     </div>
                //     <div className="city-wrap-common">
                //         <div className="incheon-img city-img"></div>
                //         <div className="city-info incheon">
                //             <h1>인천</h1>
                //             <h3>29km 거리</h3>
                //         </div>
                //     </div>
                //     <div className="city-wrap-common">
                //         <div className="daegu-img city-img"></div>
                //         <div className="city-info daegu">
                //             <h1>대구</h1>
                //             <h3>237km 거리</h3>
                //         </div>
                //     </div>
                //     <div className="city-wrap-common">
                //         <div className="daejeon-img city-img"></div>
                //         <div className="city-info daejeon">
                //             <h1>대전</h1>
                //             <h3>140km 거리</h3>
                //         </div>
                //     </div>
                // </div>