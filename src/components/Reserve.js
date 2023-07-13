import React from 'react'
import './Reserve.css'
function Reserve(props) {
    const stlye = {
        backgroundImage: props.backgroundImg
    }
    return (
        <section className="reserve" style={stlye}>
            <div className="reserve-text">
                <img src={props.txt} alt="텍스트 이미지" />
            </div>
            <div className="reserve-img">
                <img src={props.coffeImg} alt="커피 이미지" />
            </div>
            <div className="reserve-more">
                <p>
                    자세히 보기
                </p>
            </div>
        </section>
    )
}

export default Reserve
Reserve.defaultProps = {
    backgroundImg: 'url(images/reserve_bg.png)',
    txt: "images/reserve_text.png",
    coffeImg: 'images/reserve1.png'
};