import React, { Fragment, useState } from 'react';
import "./Notice.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import AutoSlider from './AutoSlider';

function Notice(props) {
    const [IsToggled, setToggle] = useState(false);
    const btnchangeToggle = function () {
        setToggle(!IsToggled);
    };
    return (
        <Fragment>
            <section className="line-notice  ">
                <div className="line-notice-left cf">
                    <h2>공지사항</h2>
                    <div className="benner">
                        <div className="kind-wrap">
                            <div className="kind-slider">
                                <ul className="slider">
                                    <li className="on">시스템 개선 및 서비스 점검 안내</li>
                                    <li>탄소중립포인트 인센티브 지급 기준 안내</li>
                                    <li>스타벅스 코리아 샃핑 홈페이지 및 이메일 주의 안내</li>
                                    <li>Summer 시즌 사이렌오더 음료 기본설정 변경 안내</li>
                                </ul>
                            </div>
                            <div className="arrow">
                                <a href="" className="prev">이전</a>
                                <a href="" className="next">다음</a>
                            </div>
                        </div>
                    </div>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </div>
                <div className="line-notice-right">
                    <h2>스타벅스 프로모션</h2>
                    <p onClick={btnchangeToggle}>
                        <img src={IsToggled ? props.arrowUp : props.arrowDown} />
                    </p>
                </div>
            </section>
            <section className={IsToggled ? 'poromotion-swiperBlock' : 'poromotion-swiperNone'}>
                {IsToggled ? <AutoSlider /> : false}
            </section >
        </Fragment >
    )
}

Notice.defaultProps = {
    arrowDown: "images/btn_prom_down.png",
    arrowUp: "images/btn_prom_up.png"
}
export default Notice
