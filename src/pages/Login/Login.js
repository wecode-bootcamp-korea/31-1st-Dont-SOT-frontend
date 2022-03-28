import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <section>
      <div className="login">
        <h2 className="medium">로그인</h2>
        <form className="loginForm">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <div className="loginCheck">
            <div className="loginCheckBox">
              <input type="checkbox" />
              아이디 저장
            </div>
            <span>
              <Link to="#">아이디/비밀번호 찾기</Link>
            </span>
          </div>
          <button>로그인</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
