import React, { useState } from 'react';
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

  /*
  // 아이디 중복 확인
  const isCheckDuplit = e => {
    e.preventDefault();
    fetch('url'),
      {
        method: POST,
        body: JSON.stringify({ username: inputs.id }),
        headers: {
          'Content-Type': 'application/json',
        }.then(res => {
          if (res.status === 200) {
            alert('사용 가능한 아이디 입니다.');
          } else if (res.status === 409) {
            alert('이미 사용 중인 아이디 입니다.');
          } else {
            alert('사용 불가능한 아이디 입니다.');
          }
        }),
      };
  };

  /*
  // 회원가입 API 붙이기
  const gotoMain = () => {
    fetch('url', {
      method: 'POST',
      body: JSON.stringify({
        username: inputs.id,
        email: inputs.email,
        password: inputs.password,
        name: inputs.name,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token.success) {
          alert('회원가입이 완료되었습니다.');
          navigate('/main');
        }
      });
  };
  */

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

  //테스트
  // const gotoMain = () => {
  //   navigate('/main');
  // };

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
              // isCheckId={isCheckId}
              inputs={inputs}
              handleInputs={handleInputs}
            />
            <div className="formSubmit">
              <button
                // onClick={gotoMain}
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
