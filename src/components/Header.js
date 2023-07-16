import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
function Header(props) {
    return (
        <header>
            <div className="gnb">
                <div className="w1100">
                    <nav className="util-nav ">
                        <Link to="/"><h1 className="Logo"><img src={props.logo} alt="로고 이미지" /></h1></Link>
                        <ul className="sub-nav cf">
                            <Link to="/SingIn"><li>Sign In</li></Link>
                            <Link to="/MyStarbucks"><li>My Starbucks</li></Link>
                            <Link to="/CustomerService"><li>Customer Service & Ideas</li></Link>
                            <Link to="/FindStore"><li>Find a Store</li></Link>
                            <li className="searchBtn">
                                <img
                                    src={props.search}
                                    alt="검색 이미지" />
                            </li>
                        </ul>
                        <div className="logo-var">
                            <ul className="menu-tab">
                                <li className="coffe inner-tab">COFFE
                                    <div className="gnb-var coffe-gnb">
                                        <nav className=" w1100  ">
                                            <ul className="gnb-tab ">
                                                <li>
                                                    커피
                                                    <ul>
                                                        <li>스타벅스 원두</li>
                                                        <li>스타벅스 비아</li>
                                                        <li>스타벅스엣홈 by 캡슐</li>
                                                        <li>나와 어울리는 커피</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    커피 이야기
                                                    <ul>
                                                        <li>농장에서 우리 손으로</li>
                                                        <li>최상의 아라비카 원두</li>
                                                        <li>스타벅스 로스트 스펙트럼</li>
                                                        <li>스타벅스 디카페인</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    스타벅스 리저브
                                                    <ul>
                                                        <li>RESERVE MAGAZINE</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    에스프레소 음료
                                                    <ul>
                                                        <li>도피오</li>
                                                        <li>에스프레소 마키아또</li>
                                                        <li>아메리카노</li>
                                                        <li>마키아또</li>
                                                        <li>카푸치노</li>
                                                        <li>라떼모카</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    최상의 커피를 즐기는 법
                                                    <ul>
                                                        <li>커피 프레스</li>
                                                        <li>푸어 오버</li>
                                                        <li>아이스 푸어 오버</li>
                                                        <li>커피 메이커</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                                <li className="menu inner-tab">MENU
                                    <div className="gnb-var menu-gnb">
                                        <nav className="menu_tab w1100 ">
                                            <ul className="gnb-tab ">
                                                <li>
                                                    음료
                                                    <ul>
                                                        <li>콜드 브루</li>
                                                        <li>브루드 커피</li>
                                                        <li>에스프레소</li>
                                                        <li>프라푸치노</li>
                                                        <li>블렌디드스타벅스
                                                        </li>
                                                        <li>리프레셔스타벅스</li>
                                                        <li>피지오티(티바나)</li>
                                                        <li>기타 제조 음료</li>
                                                        <li>스타벅스 주스(병음료)</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    푸드
                                                    <ul>
                                                        <li>브레드케이크</li>
                                                        <li>샌드위치 &amp; 샐러드</li>
                                                        <li>따뜻한 푸드</li>
                                                        <li>과일 &amp; 요거트</li>
                                                        <li>스낵 &amp; 미니 디저트
                                                        </li>
                                                        <li>아이스크림</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    상품
                                                    <ul>
                                                        <li>머그</li>
                                                        <li>글라스</li>
                                                        <li>플라스틱 텀블러</li>
                                                        <li>스테인리스 텀블러</li>
                                                        <li>보온병
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    액세서리
                                                    <ul>
                                                        <li>선물세트</li>
                                                        <li>커피 용품</li>
                                                        <li>패키지 티(티바나)</li>
                                                        <li>시럽</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    카드
                                                    <ul>
                                                        <li>실물카드e-Gift 카드</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    메뉴 이야기
                                                    <ul>
                                                        <li>스타벅스
                                                        </li>
                                                        <li>티바나콜드</li>
                                                        <li>브루나이트로 콜드브루</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                                <li className="store inner-tab">STORE
                                    <div className="gnb-var store-gnb">
                                        <nav className="menu_tab w1100 ">
                                            <ul className="gnb-tab ">
                                                <li>
                                                    매장 찾기
                                                    <ul>
                                                        <li>퀵 검색</li>
                                                        <li>지역 검색</li>
                                                    </ul>
                                                </li>
                                                <li>드라이브 스루 매장</li>
                                                <li>스타벅스 리저브 매장</li>
                                                <li>커뮤니티 스토어 매장</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                                <li className="responstible inner-tab">RESPONSIBILITY
                                    <div className="gnb-var responsibility-gnb">
                                        <nav className="menu_tab w1100 ">
                                            <ul className="gnb-tab ">
                                                <li>사회공헌 캠페인 소개</li>
                                                <li>
                                                    지역 사회 참여 활동
                                                    <ul>
                                                        <li>희망배달 캠페인</li>
                                                        <li>재능기부 카페 소식</li>
                                                        <li>커뮤니티 스토어</li>
                                                        <li>청년 지원 프로그램</li>
                                                        <li>우리 농산물 사랑 캠페인</li>
                                                        <li>우리 문화 지키기</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    환경보호
                                                    <ul>
                                                        <li>활동친환경 활동</li>
                                                        <li>일회용 컵 없는 매장</li>
                                                        <li>플라스틱 텀블러</li>
                                                        <li>커피 원두 재활용</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    윤리 구매
                                                    <ul>
                                                        <li>윤리적 원두 구매</li>
                                                        <li>공정무역 인증</li>
                                                        <li>커피 농가 지원 활동</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    글로벌 사회 공헌
                                                    <ul>
                                                        <li>윤리경영 보고서</li>
                                                        <li>스타벅스 재단</li>
                                                        <li>지구촌 봉사의 달</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                                <li className="reward inner-tab">STARBUCKS REWARDS
                                    <div className="gnb-var rewards-gnb">
                                        <nav className="menu_tab w1100 ">
                                            <ul className="gnb-tab ">
                                                <li>
                                                    스타벅스 리워드
                                                    <ul>
                                                        <li>스타벅스 리워드 소개</li>
                                                        <li>등급 및 혜택</li>
                                                        <li>스타벅스 별</li>
                                                        <li>자주 하는 질문</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    스타벅스 카드
                                                    <ul>
                                                        <li>스타벅스 카드 소개</li>
                                                        <li>스타벅스 카드 갤러리</li>
                                                        <li>충전 및 이용안내</li>
                                                        <li>분실신고/환불신청</li>
                                                        <li>자주 하는 질문</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    스타벅스 e-Gift Card
                                                    <ul>
                                                        <li>스타벅스 e-Gift Card 소개</li>
                                                        <li>이용안내</li>
                                                        <li>선물하기</li>
                                                        <li>자주 하는 질문</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                                <li className="sale inner-tab">CORPORATE SALES
                                    <div className="gnb-var corporate-gnb">
                                        <nav className="menu_tab w1100 ">
                                            <ul className="gnb-tab ">
                                                <li>단체 및 기업 구매 안내</li>
                                                <li>
                                                    단체 주문 배달 안내
                                                    <ul>
                                                        <li>단체 주문 배달 안내</li>
                                                        <li>스타벅스 카드 갤러리</li>
                                                        <li>단체 주문 신청</li>
                                                        <li>신청 내역 조회</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                                <li className="news inner-tab">WHAT'S NEW
                                    <div className="gnb-var news-gnb">
                                        <nav className="menu_tab w1100 ">
                                            <ul className="gnb-tab ">
                                                <li>
                                                    이벤트
                                                    <ul>
                                                        <li>전체</li>
                                                        <li>스타벅스 카드</li>
                                                        <li>스타벅스 리워드</li>
                                                        <li>온라인</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    뉴스
                                                    <ul>
                                                        <li>전체</li>
                                                        <li>상품 출시</li>
                                                        <li>스타벅스와 문화</li>
                                                        <li>스타벅스 사회공헌</li>
                                                        <li>스타벅스 카드출시</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    매장별 이벤트
                                                    <ul>
                                                        <li>일반 매장</li>
                                                        <li>신규 매장</li>
                                                    </ul>
                                                </li>
                                                <li>공지사항</li>
                                                <li>월페이퍼</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
Header.defaultProps = {
    logo: "images/logo.png",
    search: "https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"
};