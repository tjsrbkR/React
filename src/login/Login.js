import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
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
                                <div className='info-'>
                                    <div className='login'>
                                        <input type="text" name="id" placeholder='아이디를 입력해 주세요' />
                                        <input type="password" name="pw" placeholder='비밀번호를 입력해 주세요' />
                                    </div>
                                    <div className='save'>
                                        <input type="checkbox" id='save' />
                                        <label htmlFor="save">
                                            <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                                            <p>&nbsp;&nbsp;아이디 저장</p>
                                        </label>
                                    </div>
                                    <input type="submit" value="로그인" />
                                </div>
                                <p className='waring-txt'>
                                    * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.
                                    <br />
                                    * 스타벅스 코리아의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
                                </p>
                                <div className='forget'>
                                    <ul>
                                        <li>
                                            회원가입
                                        </li>
                                        <li>
                                            아이디 찾기
                                        </li>
                                        <li>
                                            비밀번호 찾기
                                        </li>
                                    </ul>
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