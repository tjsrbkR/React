import React from 'react'
import "./Footer.css";
function Footer(props) {
    const footerStyle = {
        backgroundColor: '#2C2A29',
        color: '#fff',
        padding: '32px 0 35px 0',
        position: 'relative',
    }
    return (
        <footer style={footerStyle}>
            <div className="w1100">
                <div className="footer-wrap">
                    <nav className="footer-tap">
                        <ul className="company">
                            <li>company</li>
                            <li>한눈에 보기</li>
                            <li>스타벅스 사명</li>
                            <li>스타벅스 소개</li>
                            <li>컴플라이언스</li>
                            <li>국내 뉴스룸</li>
                            <li>세계의 스타벅스</li>
                            <li>글로벌 뉴스룸</li>
                        </ul>
                        <ul className="corporate-sales">
                            <li>CORPORATE SALES</li>
                            <li>단체 및 기업 구매 안내</li>
                            <li>단체 주문 배달 안내</li>
                        </ul>
                        <ul className="partnership">
                            <li>PARTNERSHIP</li>
                            <li>신규 입점 제의</li>
                            <li>협력 고객사 등록신청</li>
                            <li>중개업체 확인</li>
                        </ul>
                        <ul className="online-community">
                            <li>페이스북</li>
                            <li>트위터</li>
                            <li>유튜브</li>
                            <li>인스타그램</li>
                        </ul>
                        <ul className="recruit">
                            <li>RECRUIT</li>
                            <li>채용소개</li>
                            <li>채용 지원하기</li>
                        </ul>
                        <div className="footer-logo">
                            <img src={props.footerLogo} alt="푸터로고" />
                        </div>
                    </nav>
                </div>
            </div>
            <nav className="footer-banner">
                <ul className="cf">
                    <li>
                        <img src={props.footerBanner1} alt="푸터 배너1" />
                    </li>
                    <li>
                        <img src={props.footerBanner2} alt="푸터 배너2" />
                    </li>
                    <li>
                        <img src={props.footerBanner3} alt="푸터 배너3" />
                    </li>
                    <li>
                        <img src={props.footerBanner4} alt="푸터 배너4" />
                    </li>
                    <li>
                        <img src={props.footerBanner5} alt="푸터 배너5" />
                    </li>
                    <li>
                        <img src={props.footerBanner6} alt="푸터 배너6" />
                    </li>
                    <li>
                        <img src={props.footerBanner7} alt="푸터 배너7" />
                    </li>
                </ul>
            </nav>
            <nav className="footer-aside">
                <ul className="cf">
                    <li><span>개인정보처리방침</span></li>
                    <li>영상정보처리기기 운영방침</li>
                    <li>홈페이지 이용약관</li>
                    <li><span>위치정보 이용약관</span></li>
                    <li>스타벅스 카드 이용약관</li>
                    <li>신세계 유니버스 클럽 이용약관</li>
                    <li>비회원 이용약관</li>
                    <li>My DT Pass 이용약관</li>
                    <li>윤리경영 핫라인</li>
                </ul>
                <div>
                    <button>찾아오시는 길</button>
                    <button>신규입점제의</button>
                    <button>사이트 맵</button>
                </div>
                <ul className="copyright">
                    <li>사업자 등록번호: 201-81-21515</li>
                    <li>주식회사 에스씨케이컴퍼니 대표이사 : 손정현 </li>
                    <li>TEL:1522-3232</li>
                    <li>개인정보 책임자 : 이진우</li>
                </ul>
                <p> &copy; 2023 Starbucks Coffee Company. All Rights Reserved.</p>
            </nav>
        </footer>
    )
}

export default Footer
Footer.defaultProps = {
    footerLogo: "images/footer_logo.png",
    footerBanner1: "images/footer-banner.jpg",
    footerBanner2: "images/footer-banner2.jpg",
    footerBanner3: "images/footer-banner3.jpg",
    footerBanner4: "images/footer-banner4.jpg",
    footerBanner5: "images/footer-banner5.jpg",
    footerBanner6: "images/footer-banner6.jpg",
    footerBanner7: "images/footer-banner7.jpg",

}