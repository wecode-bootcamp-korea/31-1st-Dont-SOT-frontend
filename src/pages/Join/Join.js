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

  // 유효성 검사
  const [handleSubmitBtn, setHandleSubmitBtn] = useState(false); // 회원가입 버튼
  const [handleDupId, setHandleDupId] = useState(false); // 아이디 중복 확인 버튼

  // 오류메세지 상태 저장
  const [nameMessage, setNameMessage] = useState(''); // 형식 message
  const [emailMessage, setEmailMessage] = useState(''); // 형식 message

  // const renderFeedBackMessage = () => {
  //   if (!doesEmailCheck) {
  //     return <div className="isNotOkey">이메일형식이 맞지 않습니다.</div>;
  //   } else {
  //     return <div className="isOkey">이메일형식이 맞습니다!!!</div>;
  //   }
  // };

  // const doesIdCheck = () => {
  //   const idCheck = '^[A-Za-z]{1}[A-Za-z0-9]{6,19}$';
  // };

  const isCheckId = e => {
    e.preventDefault();

    fetch('http://10.58.6.239:8000/users/signup/idcheck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: inputs.id }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('사용가능한 아이디 입니다.');
          setHandleDupId(false);
        } else if (result.message === 'REGISTERED_USERNAME') {
          alert('이미 사용중인 아이디 입니다.');
          setHandleDupId(true);
        } else if (result.message === 'INVALID_ID_FORM') {
          alert('아이디 형식이 맞지 않습니다.');
          setHandleDupId(true);
        }
      });
  };

  // 빈 공백 제거
  const { id, pw, repw, name, email } = useState(inputs);
  const isEmptyValueError =
    (inputs.id && inputs.pw && inputs.repw && inputs.name && inputs.email)
      .length === 0;

  // 회원가입 API 붙이기
  const gotoMain = () => {
    fetch('http://10.58.6.239:8000/users/signup', {
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
          alert('회원가입이 완료되었습니다.');
          navigate('/menu');
          setHandleSubmitBtn(false);
        } else if (handleDupId === true) {
          alert('아이디 중복 버튼을 클릭해주세요');
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

  // 조건부 렌더링

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
                className={!isEmptyValueError ? 'active' : null}
                disabled={isEmptyValueError}
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
