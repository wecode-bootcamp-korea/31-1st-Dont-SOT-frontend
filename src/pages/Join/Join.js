import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Join/Join.scss';

const Join = () => {
  const navigate = useNavigate();

  let [inputs, setInputs] = useState({
    id: '',
    pw: '',
    pwchk: '',
    name: '',
    email: '',
  });

  const handleInputs = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //확인용
  console.log(inputs);

  // const gotoMain = () => {
  //   fetch('Url'),
  //     {
  //       method: POST,
  //       body: JSON.stringify({
  //         id: inputs.id
  //         email: inputs.email,
  //         password: inputs.pw,
  //         name: inputs.name
  //       }),
  //     }
  //     .then((res) => Response.json())
  //     .then((res) => {
  //       if(result.token !== undefined){
  //         alert('로그인 성공')
  //         localStorage.setItem(`access_token: ${ result.token}` )
  //       }

  return (
    <section className="join inner">
      <div className="wrap">
        <div className="joinForm">
          <h2>회원가입</h2>
          <p>필수입력사항</p>
          <form>
            <dl className="fst">
              <dt>아이디</dt>
              <dd>
                <input
                  name="id"
                  type="text"
                  placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                  onChange={handleInputs}
                  value={inputs.id}
                />
                <button>중복확인</button>
              </dd>
              <dt>비밀번호</dt>
              <dd>
                <input
                  name="pw"
                  type="password"
                  onChange={handleInputs}
                  value={inputs.pw}
                  placeholder="비밀번호를 
                  입력해주세요"
                />
              </dd>
              <dt>비밀번호 확인</dt>
              <dd>
                <input
                  name="pwchk"
                  type="password"
                  onChange={handleInputs}
                  value={inputs.pwchk}
                  placeholder="비밀번호를 한번 더 입력해주세요"
                />
              </dd>
              <dt>이름</dt>
              <dd>
                <input
                  onChange={handleInputs}
                  name="name"
                  type="text"
                  placeholder="이름을 입력해주세요"
                  onChange={handleInputs}
                  value={inputs.name}
                />
              </dd>
              <dt>이메일</dt>
              <dd>
                <input
                  name="email"
                  type="email"
                  placeholder="예: Sot.jimayo.com"
                  onChange={handleInputs}
                  value={inputs.email}
                />
                <button>중복확인</button>
              </dd>
            </dl>
            <div className="formSubmit">
              <button type="button">가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
