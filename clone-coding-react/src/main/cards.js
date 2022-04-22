import React from 'react';
import './cards.css';
// import Image from '../images/seoul.webp';
const Cards = ({prop}) => {
    console.log(prop.image);
    // const backgroundImageURL = "../images/seoul.webp"
    return(
        <div className="city-wrap-common">
            <div className="city-img" style={{backgroundImage:`url(${prop.image})`}}></div>
            <div className="city-info" style={{backgroundColor:`${prop.color}`}}>
                <h1>{prop.city}</h1>
                <h3>{prop.distance}</h3>
            </div>
        </div>
    )
}

// const Cards = ({cardsElement}) => {
//     console.log(cardsElement[0].image);
//     return(
        
//         <div className="city-wrap">
//             {cardsElement.map(element => (
//                 <div className="city-wrap-common">
//                     <div className="city-img" style={{backgroundImage:`url(${element.image})`}}></div>
//                     <div className="city-info" style={{backgroundColor:`${element.color}`}}>
//                         <h1>{element.city}</h1>
//                         <h3>{element.distance}</h3>
//                     </div>
                
//                 </div>
//             ))}
//         </div>
//     )
// }

export default Cards

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