import React, { Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import "./reset.css";
import "./font.css";
import "./common.css";
function Home() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>

    )
}

export default Home
