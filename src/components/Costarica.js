import React from 'react'
import "./Costarica.css"
function Costarica(props) {
    const bgi = {
        background: props.background
    };
    return (
        <section className="costarica" style={bgi}>
            <div className="w1100 cf costarica-contents ">
                <div className="costarica-left">
                    <img src={props.text} alt="텍스트 이미지" />
                    <p>자세히 보기</p>
                </div>
                <div className="costarica-right">
                    <img src={props.coffee} alt="커피 이미지" />
                </div>
            </div>
        </section>
    )
}

export default Costarica
Costarica.defaultProps = {
    background: 'url(images/costaRica.jpg)',
    text: 'images/costaRicaText.png',
    coffee: 'images/costaricaCoffe.png'
};