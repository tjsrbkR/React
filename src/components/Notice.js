import React from 'react'
import "./Notice.css";
import $ from 'jQuery';
function Notice(props) {
    return (
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
                <p>
                    <img src={props.arrowDown} />
                </p>
            </div>
        </section>

    )
}

Notice.defaultProps = {
    arrowDown: "images/btn_prom_down.png",
}

// 스타벅스 프로모션 이벤트

let i = 0;
$(".line-notice-right p").on("click", function () {
    if (i == 0) {
        $(".line-notice-right p img").attr("src", "./images/btn_prom_up.png");
        i = 1;
        $(".poromotion-swiper").slideDown();
    }
    else if (i == 1) {
        $(".line-notice-right p img").attr("src", "./images/btn_prom_down.png");
        i = 0;
        $(".poromotion-swiper").slideUp();
    }
});

export default Notice
