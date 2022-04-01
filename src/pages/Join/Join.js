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
  // input 값 확인용
  // console.log(inputs);

  // submitBtn 구현
  const [handleSubmitBtn, setHandleSubmitBtn] = useState(false);

  // 아이디 중복 확인 버튼
  const [handleDupId, setHandleDupId] = useState(false);

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
          setHandleDupId(false);
        } else if (result.message === 'INVALID_ID_FORM') {
          alert('아이디 형식이 맞지 않습니다.');
          setHandleDupId(true);
        }
      });
  };

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
        if (result.message === 'SUCCESS') {
          alert('사용가능한 아이디 입니다.');
          setHandleSubmitBtn(false);
        } else if (result.message === 'INVALID_ID_FORM') {
          alert('아이디 형식이 맞지 않습니다.');
          setHandleSubmitBtn(true);
        } else if (result.message === 'REGISTERED_USERNAME') {
          alert('이미 사용중인 아이디 입니다.');
          setHandleSubmitBtn(true);
        } else if (result.message === 'INVALID_PASSWORD_FORM') {
          alert('비밀번호 형식이 맞지 않습니다.');
          setHandleSubmitBtn(true);
        } else if (result.message === 'INVALID_EMAIL_FORM') {
          alert('이메일 형식이 맞지 않습니다.');
          setHandleSubmitBtn(true);
        } else if (result.message === 'REGISTERED_EMAIL') {
          alert('이미 사용중인 이메일 입니다.');
          setHandleSubmitBtn(true);
        } else if (result.message === 'KEY_ERROR') {
          alert('모든 정보가 들어오지 않았습니다.');
          setHandleSubmitBtn(true);
        } else if (handleDupId === true) {
          alert('아이디 중복 버튼을 클릭해주세요');
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
    // console.log(e.target.disabled);
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
                disabled={!isEmptyValueError && setHandleSubmitBtn === true}
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
