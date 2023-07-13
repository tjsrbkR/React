import React, { Fragment } from 'react'
import Remote from "../components/Remote.js";
import LoveUs from './LoveUs.js';
import Notice from './Notice.js';
import Reward from './Reward.js';
import Blend from './Blend.js'
import Costarica from './Costarica.js';
import Favorite from './Favorite.js';
import Reserve from './Reserve.js';
import FindStore from './FindStore.js';
function Main() {
    return (
        <Fragment>
            <Remote />
            <LoveUs />
            <Notice />
            <Reward />
            <Blend />
            <Costarica />
            <Favorite />
            <Reserve />
            <FindStore />
        </Fragment>
    )
}

export default Main