import React from 'react';

const FormInputs = ({ data, handleJoinInputs, joinInputs, checkId }) => {
  const isBtnVaild = data.title === '아이디';
  const { title, name, type, placeholder } = data;

  return (
    <div>
      <dl className="formInputs">
        <dt>{title}</dt>
        <dd>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleJoinInputs}
            value={joinInputs[name]}
          />

          {isBtnVaild && <button onClick={checkId}>중복확인</button>}
        </dd>
      </dl>
    </div>
  );
};

export default FormInputs;
