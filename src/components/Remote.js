import React from 'react'
import "./Remote.css";
function Remote(props) {
    return (
        <div className="add">
            <div>
                <img src={props.RemoteImg1} alt="리모컨 이미지" />
            </div>
            <div>
                <img src={props.RemoteImg2} alt="리모컨 이미지" />
            </div>
        </div>
    )
}

export default Remote
Remote.defaultProps = {
    RemoteImg1: "images/fixed.png",
    RemoteImg2: "images/fixed2.png"
}
