import React from 'react'
import './Reward.css'
function Reward(props) {
    return (
        <section className="new-rewards-wrap ">
            <div className="w1100 main-reward cf">
                <div className="main-reward-img">
                    <img src={props.rewardImg} alt="" />
                </div>
                <div className="main-reward-join">
                    <div className="main-reward-register cf">
                        <div className="reward-msg">
                            <h2>스타벅스만의 특별한 혜택,<span>스타벅스 리워드</span></h2>
                            <p>
                                <span>스타벅스 회원이세요?</span>&nbsp;로그인을 통해 나만의 리워드를 확인해보세요.</p>
                            <p>
                                <span>스타벅스 회원이 아니세요?</span>&nbsp;가입을 통해 리워드 혜택을 즐기세요.</p>
                        </div>
                        <div className="reward-btn">
                            <div>회원가입</div>
                            <div>로그인</div>
                        </div>
                    </div>
                    <div className="reward-gift">
                        <div >
                            <p>회원 가입 후, 스타벅스 e-Gift Card를
                                <span>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</span></p>
                            <p>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</p>
                        </div>
                        <p className="reward-gift-btn">
                            e-Gift Card 선물하기
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reward
Reward.defaultProps = {
    rewardImg: 'images/starbucksRewards.png'
}