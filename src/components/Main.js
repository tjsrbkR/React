import React, { Fragment } from 'react'
import Remote from "../components/Remote.js";
import LoveUs from './LoveUs.js';
import Notice from './Notice.js';
function Main() {
    return (
        <Fragment>
            <Remote />
            <LoveUs />
            <Notice />
        </Fragment>
    )
}

export default Main