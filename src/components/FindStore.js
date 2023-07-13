import React from 'react'
import './FindStore.css'
function FindStore(props) {
    const mainStyle = {
        backgroundImage: props.mainbg,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center '
    }
    const subbgStyle = {
        backgroundImage: props.subbg,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center '
    }

    return (
        <section className='find-store' style={mainStyle}>
            <div className='w1100 find-store-inner'>
                <div className='find-store-left'>
                    <div className='find-store-img-box '>
                        <img src={props.storeImg1} alt='스토어 이미지' />
                    </div>
                    <div className='find-store-img-box ab'>
                        <img src={props.storeImg2} alt='스토어 이미지' />
                    </div>
                </div>
                <div className='find-store-bg' style={subbgStyle}>
                </div>
                <div className='find-store-right'>
                    <div className='find-store-animate'>
                        <img src='./images/finde-store-h4.png' alt='텍스트 이미지' />
                    </div>
                    <div className='find-store-animate'>
                        <img src='./images/finde-store-h5.png' alt='텍스트 이미지' />
                    </div>
                    <div className='find-store-animate'>
                        <p >매장 찾기</p>
                    </div>
                    <div className='store-img'>
                        <img src={props.storeImg} alt='매장 이미지' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindStore
FindStore.defaultProps = {
    mainbg: 'url(images/store_bg.jpg)',
    subbg: 'url(images/store_exp_img03.png)',
    storeImg1: 'images/store_img1.png',
    storeImg2: 'images/store_img2.png',
    txt1: 'images/finde-store-h4.png',
    txt2: 'images/finde-store-h5.png',
    storeImg: 'images/finde-store-store.png',


};