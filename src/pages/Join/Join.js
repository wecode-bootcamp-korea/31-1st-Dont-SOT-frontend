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
        switch (result.message) {
          case `SUCCESS`:
            alert('사용가능한 아이디 입니다.');
            setHandleDupId(true);
            break;

          case `INVALID_ID_FORM`:
            alert('아이디 형식이 맞지 않습니다.');
            setHandleDupId(false);
            break;

          case `REGISTERED_USERNAME`:
            alert('이미 사용중인 아이디 입니다.');
            setHandleDupId(false);
            break;
        }
      });
  };
  const gotoMain = () => {
    if (!handleDupId) return alert('중복확인버튼을 눌러주세요');
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
        switch (result.message) {
          case `SUCCESS`:
            alert('회원가입이 완료되었습니다.');
            setHandleSubmitBtn(true);
            navigate('/menu');
            break;

          case `INVALID_ID_FORM`:
            alert('아이디 형식이 맞지 않습니다.');
            setHandleSubmitBtn(false);
            break;

          case `REGISTERED_USERNAME`:
            alert('이미 사용중인 아이디 입니다.');
            setHandleSubmitBtn(false);
            break;

          case `INVALID_PASSWORD_FORM`:
            alert('비밀번호 형식이 맞지 않습니다.');
            setHandleSubmitBtn(false);
            break;

          case `INVALID_EMAIL_FORM`:
            alert('이메일 형식이 맞지 않습니다.');
            setHandleSubmitBtn(false);
            break;

          case `REGISTERED_EMAIL`:
            alert('이미 사용중인 이메일 입니다.');
            setHandleSubmitBtn(false);
            break;
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

  // console.log(isEmptyValueError, handleSubmitBtn, handleDupId);

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
