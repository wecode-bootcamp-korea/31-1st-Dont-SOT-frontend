import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form/Form';
import { FORM_LIST } from './Form/JoinFormData';
import '../Join/Join.scss';

const Join = () => {
  const navigate = useNavigate();

  // 데이터 인풋값 받기
  let [inputs, setInputs] = useState({
    id: '',
    pw: '',
    repw: '',
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

  // 아이디 중복 확인
  const isCheckId = e => {
    e.preventDefault();
    fetch('http://10.58.3.205:8000/users/signup/idcheck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: inputs.id }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('사용가능한 아이디 입니다.');
        } else if (result.message === 'REGISTERED_USERNAME') {
          alert('이미 사용중인 아이디 입니다.');
        } else {
          alert('사용 불가능한 아이디 입니다.');
        }
      });
  };

  /*
  else if (res.message === 'INVALID_EMAIL_FORM') {
    alert('이메일 형식이 맞지 않습니다.');
  }
  */

  // 회원가입 API 붙이기
  const gotoMain = () => {
    fetch('http://10.58.3.205:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: inputs.id,
        email: inputs.email,
        password: inputs.pw,
        name: inputs.name,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'REGISTERED_EMAIL') {
          alert('이메일이 중복입니다');
        }
        if (result.status === 200) {
          alert('회원가입이 완료되었습니다.');
          navigate('/menu');
        }
      });
  };

  // 비밀번호 확인 기능 구현
  const onSubmit = e => {
    e.preventDefault();
    if (inputs.pw !== inputs.repw) {
      alert('비밀번호와 비밀번호 확인이 같아야합니다.');
      setInputs({
        ...inputs,
        repw: '',
      });
    }
  };

  // 빈 공백 제거
  const { id, pw, repw, name, email } = inputs;
  const isEmptyValueError = id && pw && repw && name && email !== '';

  return (
    <section className="join inner">
      <div className="wrap">
        <div className="joinForm">
          <h2>회원가입</h2>
          <p>필수입력사항</p>
          <form onSubmit={onSubmit}>
            <Form
              isCheckId={isCheckId}
              inputs={inputs}
              handleInputs={handleInputs}
            />
            <div className="formSubmit">
              <button
                onClick={gotoMain}
                className={isEmptyValueError ? 'active' : null}
                disabled={!isEmptyValueError}
                type="submit"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
