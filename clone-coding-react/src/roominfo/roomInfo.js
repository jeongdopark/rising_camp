import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faMattressPillow } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";




import InfoCalendar from './info-calendar';
import InfoLinks from './info-link';
import InfoPlace from './infoother';

import Image1 from '../images/info1.jpeg'
import Image2 from '../images/info2.jpeg'
import Image3 from '../images/info3.jpeg'
import Image4 from '../images/info4.jpeg'
import Image5 from '../images/info5.jpeg'
import Image6 from '../images/roomInfo.jpeg'

import bed from '../images/bed.png'
import elevator from '../images/elevator.png'
import bedding from '../images/bedding.png'
import refriger from '../images/refrigerator.png'
import snow from '../images/snowflake.png'
import tableware from '../images/tableware.png'
import tv from '../images/television.png'
import washer from '../images/washer.png'
import wifi from '../images/wifi.png'
import work from '../images/work-space.png'
import hair from '../images/hair-dryer.png'
import micro from '../images/microwave.png'
import keyboard from '../images/keyboard.png'
import review1 from '../images/review1.jpg'
import review2 from '../images/review2.jpg'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MenuBar from '../main/menubar';
import './roomInfo.css';
import GoogleMapTest from '../googleMap';
import InfoFooter from './info-footer';
import TopNav from './top-nav';
import SkeletonRoomInfo from './skeleton-roominfo';
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux';

const reducer = (currentState, action) => {
    if(currentState === undefined){
        return{
            scrollPosition : 0,
        };
    }
    const newState = {...currentState};
    return (
        newState
    )
}
const store = createStore(reducer)

const RoomInfo = () => {
    const location = useLocation()
    console.log(location.state.data);



    const [ topNavDisplay, setTopNavDisplay ] = useState(false);
    const [ menuDisplay, setMenuDisplay ] = useState(false);
    const [ loginModal, setLoginModal ] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
      }, []);

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return(
        <>  
            {scrollPosition > 580 ? <Provider store={store}><TopNav scrollPosition={scrollPosition}></TopNav></Provider> : null}
            {loading ? <SkeletonRoomInfo/> : 
            <>
            <div className="roomInfo-nav-section">
                <div className="roomInfo-nav-container">
                    <div className="roomInfo-nav-icon">
                        <FontAwesomeIcon icon={faAirbnb} style={{fontSize:"35px", color:"#FF5A5F"}}/>
                        <h1 style={{fontSize:"25px", color:"#FF5A5F" ,marginLeft:"6px", marginTop:"12px"}}>airbnb</h1> 
                    </div>
                    <div className="roomInfo-search-container">
                        <div>?????? ????????????</div>
                        <div className="magnify-wrap">
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"white"}}/>
                        </div>
                    </div>
                    <div className="menu-container">
                        <div>????????? ??????</div>
                        <FontAwesomeIcon icon={faGlobe}/>
                        <div className="host-wrap-container">
                            <div className="icon-array">
                                <FontAwesomeIcon className="host-wrap-icons" icon={faBars}/>
                            </div>
                            <div className="icon-array">
                                <FontAwesomeIcon className="host-wrap-icons" icon={faUser}/>
                            </div>
                            {menuDisplay === true ? <MenuBar setLoginModal={setLoginModal} loginModal={loginModal}></MenuBar> : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div className="roomInfo-title-section">
                <div className="roomInfo-title-container">
                    <h1>{location.state.data.title}</h1>
                    <div className="roomInfo-tag-container">
                        <div className="tag-left-container">
                            <span className="underline" style={{color:"#717171", fontSize:"14px"}}>?????? 1???</span>
                            <span style={{margin : "0 7px 0 7px"}}>.</span>
                            <span className="underline" style={{color:"#717171", fontSize:"14px"}}>?????????,??????,??????</span>
                        </div>
                        <div className="tag-right-container">
                            <div className="tag-right">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} style={{margin:"5px 2px 0 2px"}}/>
                                <div>????????????</div>
                            </div>
                            <div className="tag-right">
                                <FontAwesomeIcon icon={faHeart} style={{margin:"5px 2px 0 2px"}}/>
                                <div>??????</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="roomInfo-image-section">
                <div className="roomInfo-image-container">
                    <div className="roomInfo-image-left-section" style={{backgroundImage:`url(${location.state.data.img1})`}}></div>
                    <div className="roomInfo-image-right-section">
                        <div className="image-container">
                            <div className="image-box" style={{backgroundImage:`url(${location.state.data.img2})`}}></div>
                            <div className="image-box" style={{backgroundImage:`url(${location.state.data.img3})`}}></div>
                        </div>
                        <div className="image-container">
                            <div className="image-box border-one" style={{backgroundImage:`url(${location.state.data.img4})`}}></div>
                            <div className="image-box border-two" style={{backgroundImage:`url(${location.state.data.img5})`}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roomInfo-middle-section">
                <div className="roomInfo-middle-container">
                    <div className="roomInfo-middle-left-container">
                        <div className="roomInfo-host-section">
                            <div className="roomInfo-host-text">
                                <h3>???????????? ??????????????? ???????????? ??????</h3>
                                <span>?????? ?????? 5????????? 1????????? 2????????? 1???</span>
                            </div>
                            <div className="roomInfo-host-img-wrap">
                                <div className="round-img" style={{backgroundImage:`url(${Image6})`}}></div>
                            </div>
                        </div>

                        <div className="roomInfo-svg-section">
                            <div className="svg-section-wrap">
                                <FontAwesomeIcon icon={faDoorOpen} style={{width:"30px",fontSize:"25px"}}/>
                                <div className="svg-section-text-container">
                                    <div>?????? ?????????</div>
                                    <span>???????????? ????????? ??????????????????.</span>
                                </div>
                            </div>
                            <div className="svg-section-wrap">
                                <FontAwesomeIcon icon={faBookmark} style={{width:"30px",fontSize:"25px", backgroundColor:"white"}}/>
                                <div className="svg-section-text-container">
                                    <h3>?????? ?????????</h3>
                                    <span>???????????? ?????? ?????? ????????????</span>
                                </div>
                            </div>
                            <div className="svg-section-wrap">
                                <FontAwesomeIcon icon={faCalendar} style={{width:"30px",fontSize:"25px"}}/>
                                <div className="svg-section-text-container">
                                    <h3>5??? 7??? ????????? ?????? ?????? ??????</h3>
                                </div>
                            </div>
                        </div>

                        <div className="roomInfo-detail-section">
                            <div>???Sunbed PartyRoom 8 in Gangnam???</div>
                            <ul>
                                <li>- ????????? ?????? 1~2??? ??????</li>
                                <li>- ?????? ??? ????????????.</li>
                                <li>- Free Wi-fi</li>
                                <li>- ????????? TV, NETFLIX ??????</li>
                            </ul>
                            <div className="more-wrap">
                                <h2 className="more-info">??? ??????</h2>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </div>
                        </div>

                        <div className="roomInfo-bedding-section">
                            <div className="roomInfo-bedding-container">
                                <h2>?????? ??????</h2>
                                <div className="bedding-wrap">
                                    <div className="bedding-img-container">
                                        {/* <FontAwesomeIcon className="host-wrap-icons" icon={faBed}/> */}
                                        <div className="bedding-img" style={{backgroundImage:`url(${bed})`, width:"25px",height:"25px"}}></div>
                                        <div className="bedding-img" style={{backgroundImage:`url(${bed})`, width:"25px",height:"25px", marginLeft:"7px"}}></div>
                                        <div className="bedding-img" style={{backgroundImage:`url(${bedding})`, width:"25px",height:"25px", marginLeft:"7px"}}></div>
                                        <div className="bedding-img" style={{backgroundImage:`url(${bedding})`, width:"25px",height:"25px"}}></div>
                                        <div className="bedding-img" style={{backgroundImage:`url(${bedding})`, width:"25px",height:"25px", marginLeft:"7px"}}></div>
                                    </div>
                                    <div style={{fontWeight:"600", marginTop:"10px"}}>??????</div>
                                    <div>?????? ?????? 2???, ?????? ?????? 3???</div>
                                </div>
                            </div>
                        </div>

                        <div className="roomInfo-facilities-container">
                            <div style={{fontSize:"22px", fontWeight:"600"}}>?????? ????????????</div>
                                <div className="facilities-icon-container">
                                    <div className="facilities-icon">
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${tableware})`}}></div>
                                            <span>??????</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${work})`}}></div>
                                            <span>?????? ?????? ??????</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${elevator})`}}></div>
                                            <span>???????????????</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${snow})`}}></div>
                                            <span>?????????</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${refriger})`}}></div>
                                            <span>?????????</span>
                                        </div>
                                    </div>
                                    <div className="facilities-icon">
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${wifi})`}}></div>
                                            <span>?????? ?????????</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${tv})`}}></div>
                                            <span>TV</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${washer})`}}></div>
                                            <span>?????????</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${hair})`}}></div>
                                            <span>??????????????????</span>
                                        </div>
                                        <div className="roomInfo-icon-wrap">
                                            <div style={{backgroundImage:`url(${micro})`}}></div>
                                            <span>???????????????</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="show-all-facilities">???????????? 47??? ?????? ??????</div>
                            </div>
                            <div className="roomInfo-calendar-section">
                                <div className="roomInfo-calendar-container">
                                    <div className="check-in-text">????????? ????????? ??????????????????.</div>
                                    <span>?????? ????????? ???????????? ????????? ????????? ???????????????.</span>
                                    <div className="roomInfo-calendar-wrap">
                                        <InfoCalendar></InfoCalendar>
                                    </div>
                                </div>
                                <div className="roomInfo-calendar-bottom">
                                    <div className="calendar-bottom-img" style={{backgroundImage:`url(${keyboard})`}}></div>
                                    <div className="date-remove">?????? ?????????</div> 
                                </div>
                            </div>
                        </div>
                    <div className="middle-right-container">
                        <div className="roomInfo-middle-right-containerbox">
                            <div className="roomInfo-right-sticky-container">
                                <div className="sticky-box-title">????????? ??????????????? ????????? ???????????????.</div>
                                <div className="mini-underline">?????? 2???</div>
                                <div className="ckeck-in-box">
                                    <div className="check-in-box-top">
                                        <div className="sticky-box-check-in">
                                            <div className="sticky-box-check-in-text">?????????</div>
                                            <div className="sticky-box-date-text">?????? ??????</div>
                                        </div>
                                        <div className="sticky-box-check-out">
                                            <div className="sticky-box-check-in-text">?????? ??????</div>
                                            <div className="sticky-box-date-text">?????? ??????</div>
                                        </div>
                                    </div>
                                    <div className="check-in-box-bottom">
                                        <div className="sticky-box-guest-text">
                                            <div className="guest-mini-text">??????</div>    
                                            <div className="guest-text">????????? 1???</div>    
                                        </div>
                                        <FontAwesomeIcon className="sticky-icon" icon={faAngleDown} style={{fontSize:"15px"}}/>
                                    </div> 
                                </div>
                                <div className="sticky-box-reserve-box">?????? ?????? ?????? ??????</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roomInfo-review-section">
                    <div className="roomInfo-review-container">
                        <div className="review-title-container">
                            <FontAwesomeIcon icon={faStar} style={{fontSize:"15px", color:"#FF5A5F"}}/>
                            <div className="review-title-text">?????? 2???</div>
                        </div>
                        <div className="Info-review-container">
                            <div className="roomInfo-review-wrap">
                                <div className="roomInfo-user-info">
                                    <div className="round-img" style={{backgroundImage:`url(${review1})`}}></div>
                                    <div className="roomInfo-name-date">
                                        <div className="roomInfo-review-name">?????????</div>
                                        <div className="mini-text-date">2022??? 5???</div>
                                    </div>
                                </div>
                                <div className="roomInfo-review-text">
                                    ????????? ?????? ??? ???????????? ????????? ????????????
                                    ????????? ?????? ??????????????????!! ??????
                                    ????????? ?????? ????????? ????????? ?????? ?????? ?????????????????????
                                </div>
                                <div className="more-wrap">
                                    <h2 className="more-info">??? ??????</h2>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </div>
                            </div>
                            
                            <div className="roomInfo-review-wrap">
                                <div className="roomInfo-user-info">
                                    <div className="round-img" style={{backgroundImage:`url(${review2})`}}></div>
                                    <div className="roomInfo-name-date">
                                        <div className="roomInfo-review-name">Myyah</div>
                                        <div className="mini-text-date">2022??? 5???</div>
                                    </div>
                                </div>
                                <div className="roomInfo-review-text">
                                    nice place. This is my 2 time staying at this Airbnb and it???s nice !
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roomInfo-hosting-location-section">
                    <div className="roomInfo-hosting-location-container">
                        <div className="roomInfo-hosting-title text-common">????????? ??????</div>
                        <div className="roomInfo-address">?????????, ??????, ??????</div>
                        <div className="roomInfo-google-map">
                            <GoogleMapTest></GoogleMapTest>
                        </div>
                    </div>
                </div>

                <div className="roomInfo-host-info-section">
                    <div className="host-info-host-container">
                        <div className="host-info-first-container">
                            <div className="round-img" style={{backgroundImage:`url(${Image6})`}}></div>
                            <div className="host-info-container">
                                <div className="big-text">?????????: ?????????</div>
                                <div className="host-mini-text">???????????????:2016??? 9???</div>
                            </div>
                        </div>

                        <div className="roomInfo-host-second-container">
                            <div className="second-container-inner">
                                <div className="first-container-icon">
                                    <div className="first-container-first">
                                        <FontAwesomeIcon icon={faStar} style={{fontSize:"15px", color:"#FF5A5F"}}/> 
                                        <div>?????? 3,030???</div>
                                    </div>
                                    <div className="first-container-second">
                                        <FontAwesomeIcon icon={faSquareCheck} style={{fontSize:"15px", color:"#FF5A5F"}}/> 
                                        <div>?????? ?????? ??????</div>
                                    </div>
                                </div>
                                <div>Hi :)</div>
                                <div className="bold-text">?????? ?????????</div>
                                <div className="img-container">
                                    <div className="small-round-img" style={{backgroundImage:`url(${review1})`}}></div>
                                    <span>??????</span>
                                </div>
                            </div>
                            <div className="second-container-inner">
                                <div>?????????:100%</div>
                                <div style={{marginTop:"20px"}}>?????? ?????? : 1?????? ??????</div>
                                <div className="host-contact-box">
                                    ??????????????? ????????????
                                </div>
                                <div className="mini-text">????????? ????????? ?????? ??????????????? ??????????????? ??? ???????????? ??????????????? ????????? ????????? ?????????.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roomInfo-known-section">
                    <div className="roomInfo-known-container">
                        <div className="text-common">??????????????? ??? ??????</div>
                            <div className="known-container">
                                <div className="known-first-section">
                                    <div className="known-title">?????? ????????????</div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faClock}/>
                                        <div>?????????: ?????? 3:00 ??????</div>
                                    </div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faClock}/>
                                        <div>?????????: ?????? 3:00 ??????</div>
                                    </div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faDoorOpen}/>
                                        <div>?????????(???)??? ?????? ?????????</div>
                                    </div>
                                </div>
                                <div className="known-second-section">
                                    <div className="known-title">????????? ??????</div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faSprayCanSparkles}/>
                                        <div>??????????????? ?????????19 ?????? ????????? ??????????????? ?????????.</div>
                                    </div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                                        <div>??????????????? ?????????</div>
                                    </div>
                                    <div className="known-icon-container">
                                        <FontAwesomeIcon icon={faFire}/>
                                        <div>???????????????</div>
                                    </div>
                                    <h2 className="more-info">??? ??????</h2>
                                </div>
                                <div className="known-second-section">
                                    <div className="known-title">?????? ??????</div>
                                    <div className="known-icon-container">
                                        5??? 6??? ?????? 3:00 ????????? ?????? ?????? ??????
                                    </div>
                                    <h2 className="more-info">??? ??????</h2>
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
            <div className="roomInfo-bottom-container">
                <div className="roomInfo-place-section">
                    <div className="roomInfo-place-inner">
                        <InfoPlace className="infoPlace"></InfoPlace>
                    </div>
                </div>
                <div className="roomInfo-link-section-wrap">
                    <InfoLinks></InfoLinks>
                    <InfoFooter></InfoFooter>
                </div>
            </div>
        </>
            }
        </>
    )
}

export default RoomInfo;