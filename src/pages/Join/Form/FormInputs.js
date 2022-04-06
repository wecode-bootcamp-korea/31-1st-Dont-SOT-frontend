import React from 'react';

const FormInputs = ({ data, handleJoinInputs, joinInputs, checkId }) => {
  const isBtnVaild = data.title === '아이디';

  return (
    <div>
      <dl className="formInputs">
        <dt>{data.title}</dt>
        <dd>
          <input
            name={data.name}
            type={data.type}
            placeholder={data.placeholder}
            onChange={handleJoinInputs}
            value={joinInputs[data.name]}
          />

          {isBtnVaild ? <button onClick={checkId}>중복확인</button> : null}
        </dd>
      </dl>
    </div>
  );
};

export default FormInputs;
