import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form/Form';
import API from '../../config';
import '../Join/Join.scss';

const Join = () => {
  const navigate = useNavigate();
  const [handleSubmitBtn, setHandleSubmitBtn] = useState(false);
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
        if (result.message === 'SUCCESS') {
          setHandleDupId(true);
          alert('사용가능한 아이디 입니다.');
        } else if (result.message === 'REGISTERED_USERNAME') {
          alert('이미 사용중인 아이디 입니다.');
          setHandleDupId(false);
        } else if (result.message === 'INVALID_ID_FORM') {
          alert('아이디 형식이 맞지 않습니다.');
          setHandleDupId(false);
        }
      });
  };

  const gotoMain = () => {
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
        if (result.message === 'SUCCESS') {
          setHandleSubmitBtn(true);
          alert('회원가입이 완료되었습니다.');
          navigate('/menu');
        } else if (handleDupId === false) {
          alert('아이디 중복 버튼을 클릭해주세요');
        } else if (result.message === 'INVALID_ID_FORM') {
          alert('아이디 형식이 맞지 않습니다.');
          setHandleSubmitBtn(false);
        } else if (result.message === 'REGISTERED_USERNAME') {
          alert('이미 사용중인 아이디 입니다.');
          setHandleSubmitBtn(false);
        } else if (result.message === 'INVALID_PASSWORD_FORM') {
          alert('비밀번호 형식이 맞지 않습니다.');
          setHandleSubmitBtn(false);
        } else if (result.message === 'INVALID_EMAIL_FORM') {
          alert('이메일 형식이 맞지 않습니다.');
          setHandleSubmitBtn(false);
        } else if (result.message === 'REGISTERED_EMAIL') {
          alert('이미 사용중인 이메일 입니다.');
          setHandleSubmitBtn(false);
        }
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (joinInputs.pw !== joinInputs.repw) {
      alert('비밀번호와 비밀번호 확인이 같아야합니다.');
      setJoinInputs({
        ...joinInputs,
        repw: '',
      });
    }
  };

  console.log(isEmptyValueError, handleSubmitBtn, handleDupId);

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
                onClick={gotoMain}
                className={isEmptyValueError && 'active'}
                disabled={!isEmptyValueError && !handleSubmitBtn}
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
