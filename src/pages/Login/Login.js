import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  // 로그인 input 값 받기
  let [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });

  const handleInputs = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isVaild = inputs.id && inputs.pw !== '';

  // 로그인 인증 & 인가
  const gotoMain = () => {
    fetch('http://10.58.7.71:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: inputs.id,
        password: inputs.pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token) {
          alert('로그인 성공');
          localStorage.setItem('token', result.token);
          navigate('/menu');
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
            <h2 className="medium">로그인</h2>
            <input
              type="text"
              name="id"
              placeholder="아이디"
              onChange={handleInputs}
              value={inputs.id}
            />
            <input
              type="password"
              name="pw"
              placeholder="비밀번호"
              onChange={handleInputs}
              value={inputs.pw}
            />
            <div className="loginCheck">
              <div className="loginCheckBox">
                <input type="checkbox" />
                아이디 저장
              </div>
              <span>
                <Link to="/join">아이디/비밀번호 찾기</Link>
              </span>
            </div>
            <button
              type="button"
              className={isVaild ? 'active' : null}
              disabled={!isVaild}
              onClick={gotoMain}
            >
              로그인
            </button>
          </form>
        </div>
        <div className="joinPage">
          <span>
            <img src="https://avatars.githubusercontent.com/u/56650238?v=4" />
          </span>
          <div className="joinSelect">
            <h3 className="medium">솥지마요 회원이 아니신가요?</h3>
            <p>
              회원이 되시면 솥지마요의 다양한 정보와 이벤트를 만나보실 수
              있습니다.
            </p>
            <button>회원가입</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
