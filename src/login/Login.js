import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "./Login.css"
function Login(props) {
    const mainBg = {
        backgroundImage: props.bgI,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        windth: "100%"
    }
    return (
        <div>
            <Header />
            <div className='wrap' style={mainBg}>
                <div className='container'>
                    <form action='#' method='post'>
                        <h1>로그인</h1>
                        <fieldset className='info'>
                            <section>
                                <p className='welcome'>Welcome! 스타벅스 코리아에 오신걸 환영합니다.</p>
                                <div className='login'>
                                    <input type="text" name="id" placeholder='아이디를 입력해 주세요' />
                                    <input type="password" name="pw" placeholder='비밀번호를 입력해 주세요' />
                                </div>
                                <div className='save'>
                                    <input type="checkbox" id='save' />
                                    <label htmlFor="save">
                                        <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                                        아이디 저장
                                    </label>
                                </div>
                            </section>
                        </fieldset>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
Login.defaultProps = {
    bgI: "url(images/login/login_bg.jpg)"
}