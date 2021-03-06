import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../config';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [isCheckBox, setIsCheckBox] = useState(false);

  const activCheck = () => {
    setIsCheckBox(!isCheckBox);
  };

  const [loginInputs, setLoginInputs] = useState({
    idValue: '',
    pwValue: '',
  });

  const handleInputs = e => {
    const { name, value } = e.target;

    setLoginInputs({
      ...loginInputs,
      [name]: value,
    });
  };

  const isLoginVaild = loginInputs.idValue && loginInputs.pwValue !== '';

  const gotoMain = () => {
    fetch(`${API.Login}`, {
      method: 'POST',
      body: JSON.stringify({
        username: loginInputs.idValue,
        password: loginInputs.pwValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token) {
          alert('로그인 성공');
          localStorage.setItem('token', result.token);
          navigate('/');
        } else {
          alert('로그인 실패');
        }
      });
  };

  return (
    <section className="login">
      <div className="inner">
        <div className="loginPage">
          <form className="loginForm">
            <h2 className="medium loginTitle">로그인</h2>
            <input
              className="loginInput"
              type="text"
              name="idValue"
              placeholder="아이디"
              onChange={handleInputs}
              value={loginInputs.idValue}
            />
            <input
              className="pwInput"
              type="password"
              name="pwValue"
              placeholder="비밀번호"
              onChange={handleInputs}
              value={loginInputs.pwValue}
            />
            <div className="loginCheck">
              <div className="loginCheckBox">
                <input
                  type="checkbox"
                  onClick={activCheck}
                  className={!isCheckBox ? 'active' : 'nonActive'}
                />

                <label>아이디 저장</label>
              </div>
              <span className="loginFind">
                <span className="activeSearch">아이디/비밀번호 찾기</span>
              </span>
            </div>
            <button
              type="button"
              className={isLoginVaild ? 'active' : null}
              disabled={!isLoginVaild}
              onClick={gotoMain}
            >
              로그인
            </button>
          </form>
        </div>
        <div className="joinPage">
          <span>
            <img alt="backgroundImg" src="/images/bg.jpg" />
          </span>
          <div className="joinSelect">
            <h3 className="medium joinTitle">솥지마요 회원이 아니신가요?</h3>
            <p className="joinSubTitle">
              회원이 되시면 솥지마요의 다양한 정보와 이벤트를 만나보실 수
              있습니다.
            </p>
            <Link to="/join">
              <button className="joinBtn">회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
