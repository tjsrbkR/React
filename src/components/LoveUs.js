import React from 'react'
import "./LoveUs.css";
function LoveUs(props) {
    const bgi = {
        backgroundImage: "url(images/mainBackGround.jpg)"
    };
    return (
        <article className="love-us" style={bgi}>
            <div className="love-us-container w1100 cf">
                <div className="main-text">
                    <img src={props.mainText} />
                </div>
                <div className="love-img-box">
                    <div className="love-us-img ">
                        <img src={props.tea} alt="티" />
                    </div>
                    <div className="love-us-img ">
                        <img src={props.latte} alt="라떼" />
                    </div>
                    <div className="love-us-img ">
                        <img src={props.blended} alt="블렌디드" />
                    </div>
                </div>
                <div className="btn-slogan">
                    <div>자세히 보기</div>
                </div>
            </div>
        </article>
    )
}

export default LoveUs
LoveUs.defaultProps = {
    mainText: "images/mainLoveUs.png",
    tea: "images/tea.png",
    latte: "images/latte.png",
    blended: "images/blended.png"

};