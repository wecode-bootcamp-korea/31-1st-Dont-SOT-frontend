import React, { useState } from 'react';

const Form = ({ handleInputs, inputs, isCheckId }) => {
  return (
    <div>
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
          {/* <button onClick={isCheckId}>중복확인</button> */}
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
            name="repw"
            type="password"
            onChange={handleInputs}
            value={inputs.repw}
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
    </div>
  );
};

export default Form;
