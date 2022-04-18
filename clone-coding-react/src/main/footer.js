import React from 'react';
import './footer.css';
const Footer = () => {
    return(
        <footer className="footer-div-wrap">
                <div className="footer-wrap">
                    <span className="footer-left">
                        <h3>© 2022 Airbnb, Inc.</h3>
                        <h3>·</h3>
                        <h3>개인정보 처리방침</h3>
                        <h3>·</h3>
                        <h3>이용약관</h3>
                        <h3>·</h3>
                        <h3>사이트맵</h3>
                        <h3>·</h3>
                        <h3>한국의 변경된 환불 정책</h3>
                        <h3>·</h3>
                        <h3>회사 세부정보</h3>
                    </span>
                    <div className="footer-right">
                    </div>
                </div>                
            </footer>
    )
}

export default Footer