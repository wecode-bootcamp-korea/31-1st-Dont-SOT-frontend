import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form/Form';
import API from '../../config';
import '../Join/Join.scss';

const Join = () => {
  const navigate = useNavigate();
  const [handleDupId, setHandleDupId] = useState(false);
  const [joinInputs, setJoinInputs] = useState({
    id: '',
    pw: '',
    repw: '',
    name: '',
    email: '',
  });

  const isEmptyValueError =
    (
      joinInputs.id &&
      joinInputs.pw &&
      joinInputs.repw &&
      joinInputs.name &&
      joinInputs.email
    ).length !== 0;

  const isJoinInputsValid = joinInputs.pw === joinInputs.repw;

  const alertMessageBox = {
    INVALID_ID_FORM: '아이디 형식이 맞지 않습니다.',
    REGISTERED_USERNAME: '이미 사용중인 아이디 입니다.',
    INVALID_PASSWORD_FORM: '비밀번호 형식이 맞지 않습니다.',
    INVALID_EMAIL_FORM: '이메일 형식이 맞지 않습니다.',
    REGISTERED_EMAIL: '이미 사용중인 이메일 입니다.',
    CHECK_SUCCESS: '사용가능한 아이디 입니다.',
    SUCCESS: '회원가입이 완료되었습니다.',
  };

  const handleJoinInputs = e => {
    const { name, value } = e.target;
    setJoinInputs({
      ...joinInputs,
      [name]: value,
    });
  };

  const checkId = e => {
    e.preventDefault();

    fetch(`${API.JoinId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: joinInputs.id }),
    })
      .then(response => response.json())
      .then(result => {
        alert(alertMessageBox[result.message]);
        switch (result.message) {
          case `INVALID_ID_FORM`:
          case `REGISTERED_USERNAME`:
            setHandleDupId(false);
            break;

          default:
            setHandleDupId(true);
            break;
        }
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!handleDupId) return alert('중복확인 버튼을 눌러주세요');
    else if (!isJoinInputsValid) {
      alert('비밀번호와 비밀번호 확인이 같아야합니다.');
      return setJoinInputs({
        ...joinInputs,
        repw: '',
      });
    }

    fetch(`${API.Join}`, {
      method: 'POST',
      body: JSON.stringify({
        username: joinInputs.id,
        email: joinInputs.email,
        password: joinInputs.pw,
        name: joinInputs.name,
      }),
    })
      .then(res => res.json())
      .then(result => {
        alert(alertMessageBox[result.message]);
        switch (result.message) {
          case `INVALID_ID_FORM`:
          case `REGISTERED_USERNAME`:
          case `INVALID_PASSWORD_FORM`:
          case `INVALID_EMAIL_FORM`:
          case `REGISTERED_EMAIL`:
            break;

          default:
            navigate('/');
        }
      });
  };

  return (
    <section className="join inner">
      <div className="wrap">
        <div className="joinForm">
          <h2>회원가입</h2>
          <p>필수입력사항</p>
          <form onSubmit={onSubmit}>
            <Form
              checkId={checkId}
              joinInputs={joinInputs}
              handleJoinInputs={handleJoinInputs}
            />

            <div className="formSubmit">
              <button
                className={isEmptyValueError ? 'active' : ''}
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
