import React from 'react';

import InfoLinkElement from './info-linkElement';
const InfoLinks = () => {
    const linkElements = [
        {   
            title : "에어비앤비 지원",
            element : [ "도움말 센터", "안전 정보", "예약 취소 옵션", "장애인 지원", "이웃 민원 신고" ],
        },
        {
            title : "커뮤니티",
            element : [ "Airbnb.org:재난 구호 숙소", "아프간 난민 지원", "차별 철폐를 위한 노력" ],
        },
        {
            title : "호스팅",
            element : [ "호스팅 시작하기", "에어커버:호스트를 위한 보호 프로그램", "호스팅 자료 둘러보기", "커뮤니티 포럼 방문하기", "책임감 있는 호스팅"],
        },
        {
            title : "소개",
            element : ["뉴스룸", "새로운 기능에 대해 알아보기", "에어비앤비 공동창업자의 메시지", "채용정보", "투자자 정보", "에어비앤비 Luxe" ]
        }
    ]
    
        return (
        <div className="info-link-section-wrap">
            <div className="info-ul-wrap">
                {linkElements.map((element) => (
                    <InfoLinkElement title={element.title} element={element}></InfoLinkElement>
                ))}
            </div>
        </div>

        )
}

export default InfoLinks;