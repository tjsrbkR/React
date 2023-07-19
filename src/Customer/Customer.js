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
    return (
        <Fragment>
            <Header />
            <div className='banner' style={bannerBg}>
                <h4 className='w1100'>
                    <img src={props.bannerTxt} alt="배너 텍스트 이미지" />
                </h4>
                <ul className='home_list'>
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

            </div>
            <Footer />
        </Fragment>

    )
}

export default Customer
Customer.defaultProps = {
    bannerImg: "url(images/Customer/background_favorite.jpg)",
    bannerTxt: "images/Customer/csi_ttl.png",
    bannerNavItem1: "images/Customer/Home_icon.png",
    bannerNavItem2: "images/Customer/icon_arrow_w.png"

}