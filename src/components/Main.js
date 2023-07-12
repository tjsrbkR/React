import React, { Fragment } from 'react'
import Remote from "../components/Remote.js";
import LoveUs from './LoveUs.js';
import Notice from './Notice.js';
import Reward from './Reward.js';
import Blend from './Blend.js'
function Main() {
    return (
        <Fragment>
            <Remote />
            <LoveUs />
            <Notice />
            <Reward />
            <Blend />
        </Fragment>
    )
}

export default Main