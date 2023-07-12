import React from 'react'
import "./Blend.css"
function Blend(props) {
    const bgi = {
        background: props.blendBgi
    };
    return (
        <section className="main-bean-wrap" style={bgi}>
            <div className="w1100 cherry-main">
                <div>
                    <img src={props.blendImg} alt="블렌드 이미지" />
                </div>
                <div className="main-bean-text notosanskr">
                    <p>다크 체리의 풍미로 시작하는 봄
                    </p>
                    <h2>스프링 시즌 블렌드 250g</h2>
                    <p>삼나무향이 감도는 진한 풍미와 은은한 다크 체리의 산미가</p>
                    <p>조화롭게 블렌딩 된 시즌 한정 원두</p>
                    <p>자세히 보기</p>
                </div>
            </div>
        </section>
    )
}

export default Blend
Blend.defaultProps = {
    blendImg: "images/cherryBlend.png",
    blendBgi: "url(images/cherryblossom.jpg)"
}