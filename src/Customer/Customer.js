import React, { Fragment } from 'react'
import "./Customer.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
// import { Link } from 'react-router-dom';
import "../common.css";
function Customer(props) {
    const bannerBg = {
        background: props.bannerImg
    }
    const searchBg = {
        background: props.mainSearchbg
    }
    return (
        <Fragment>
            <Header />
            <div className='banner' style={bannerBg}>
                <ul className='home_list w1100'>
                    <h4>
                        <img src={props.bannerTxt} alt="배너 텍스트 이미지" />
                    </h4>
                    <ul>
                        <li>
                            <img src={props.bannerNavItem1} alt="배너 홈이미지" />
                        </li>
                        <li>
                            <img src={props.bannerNavItem2} alt="배너 화살표이미지" />
                        </li>
                        <li>
                            Customer Service & Ideas
                        </li>
                    </ul>
                </ul>

            </div>
            <main className='customer-main w1100'>
                <form action='#' method='get'>
                    <div className='search' style={searchBg}>
                        <h2>궁금하신 점을 검색해 보세요.</h2>
                        <p>검색창에 원하는 정보를 키워드로 입력하세요. <br />
                            FAQ, 이용 안내, 팁 등 다양한 내용을 검색을 통해 확인하실 수 있습니다. </p>
                        <div className='main_search_input'>
                            <input type="text" name="search" placeholder='검색어를 입력하세요.' />
                            <button type="submit">
                                <img src={props.btnSubmit} alt="검색" />
                            </button>
                        </div>
                    </div>
                </form>
                <div className='question'>
                    asd
                </div>
            </main>
            <Footer />
        </Fragment>

    )
}

export default Customer
Customer.defaultProps = {
    bannerImg: "url(images/Customer/background_favorite.jpg)",
    bannerTxt: "images/Customer/csi_ttl.png",
    bannerNavItem1: "images/Customer/Home_icon.png",
    bannerNavItem2: "images/Customer/icon_arrow_w.png",
    mainSearchbg: "url(images/Customer/main_search_bg.png)",
    btnSubmit: "images/Customer/btn_search.png"

}