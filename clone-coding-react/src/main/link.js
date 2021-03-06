import React from 'react';
import './link-element';
import LinkElement from './link-element';
const Links = () => {
        const linkElements = [
            {
                element : [ "도움말 센터", "안전 정보", "예약 취소 옵션", "장애인 지원", "이웃 민원 신고" ],
            },
            {
                element : [ "Airbnb.org:재난 구호 숙소", "아프간 난민 지원", "차별 철폐를 위한 노력" ],
            },
            {
                element : [ "호스팅 시작하기", "에어커버:호스트를 위한 보호 프로그램", "호스팅 자료 둘러보기", "커뮤니티 포럼 방문하기", "책임감 있는 호스팅"],
            },
            {
                element : ["뉴스룸", "새로운 기능에 대해 알아보기", "에어비앤비 공동창업자의 메시지", "채용정보", "투자자 정보", "에어비앤비 Luxe" ]
            }
        ]
    
        return (
        <div className="link-section-wrap">
            <div className="ul-wrap">
                {linkElements.map((element) => (
                    <LinkElement title={"에어비앤비 지원"} element={element}></LinkElement>
                ))}
                {/* <LinkElement title={"에어비앤비 지원"} elements={element1}></LinkElement>
                <LinkElement title={"커뮤니티"} elements={element2}></LinkElement>
                <LinkElement title={"호스팅"} elements={element3}></LinkElement>
                <LinkElement title={"소개"} elements={element4}></LinkElement> */}
            </div>
        </div>
        // <div className="link-section-wrap">
        //     <div className="ul-wrap">
        //         <ul className="link-wrap">
        //             <li className="links bold">에어비앤비 지원</li>
        //             <li className="links">도움말 센터</li>
        //             <li className="links">안전 정보</li>
        //             <li className="links">예약 취소 옵션</li>
        //             <li className="links">에어비앤비의 코로나19 대응 방안</li>
        //             <li className="links">장애인 지원</li>
        //             <li className="links">이웃 민원 신고</li>
        //         </ul>
        //         <ul className="link-wrap">
        //             <li className="links bold">커뮤니티</li>
        //             <li className="links">Airbnb.org:재난 구호 숙소</li>
        //             <li className="links">아프간 난민 지원</li>
        //             <li className="links">차별 철폐를 위한 노력</li>
        //         </ul>
        //         <ul className="link-wrap">
        //             <li className="links bold">호스팅</li>
        //             <li className="links">호스팅 시작하기</li>
        //             <li className="links">에어커버:호스트를 위한 보호 프로그램</li>
        //             <li className="links">호스팅 자료 둘러보기</li>
        //             <li className="links">커뮤니티 포럼 방문하기</li>
        //             <li className="links">책임감 있는 호스팅</li>
        //         </ul>
        //         <ul className="link-wrap">
        //             <li className="links bold">소개</li>
        //             <li className="links">뉴스룸</li>
        //             <li className="links">새로운 기능에 대해 알아보기</li>
        //             <li className="links">에어비앤비 공동창업자의 메시지</li>
        //             <li className="links">채용정보</li>
        //             <li className="links">투자자 정보</li>
        //             <li className="links">에어비앤비 Luxe</li>
        //         </ul>
        //     </div>
        // </div>
        )
}

export default Links;