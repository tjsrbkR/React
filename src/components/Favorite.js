import React from 'react'
import './Favorite.css'
function Favorite(props) {
    const bgi = {
        background: props.backgroundImg,
        backgroundRepeat: 'no - repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    return (
        <section className="favorite" style={bgi} >
            <div className="w1100 favorite-contents">
                <div className="favorite-left">
                    <div className="favoriteVisual-text box">
                        <img src={props.txt1} alt="텍스트 이미지" />
                    </div>
                    <div className="favorite-text box">
                        <img src={props.txt2} alt="텍스트 이미지" />
                    </div>
                    <p>자세히 보기</p>
                </div>
                <div className="favorite-right">
                    <img src={props.visual} alt="비쥬얼 이미지" />
                </div>
            </div>
        </section>
    )
}

export default Favorite
Favorite.defaultProps = {
    backgroundImg: 'url(images/background_favorite.jpg)',
    txt1: 'images/favorite_visual.png',
    txt2: 'images/favorite_text.png',
    visual: 'images/background_favoriteImg.png'
}