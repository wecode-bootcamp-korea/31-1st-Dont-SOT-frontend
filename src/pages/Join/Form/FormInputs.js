import React from 'react';

const FormInputs = props => {
  const { data, handleJoinInputs, joinInputs, checkId, handleValid, value } =
    props;
  const { title, name, type, placeholder } = data;

  const isValid = handleValid(value);

  const isIdVaild = title === '아이디';
  const isEmailVaild = title === 'email';
  const isCheckType = isIdVaild || isEmailVaild;
  const isCheckLength = joinInputs[name].length;
  const isCheckValid = isCheckType && isCheckLength;

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

          {isIdVaild ? <button onClick={checkId}>중복확인</button> : null}

          {isCheckValid ? (
            isValid ? (
              <span className="isValidColor">옳은 형식입니다.</span>
            ) : (
              <span className="isNonValidColor">옳지 않은 형식입니다.</span>
            )
          ) : (
            !isIdVaild
          )}
        </dd>
      </dl>
    </div>
  );
};

export default FormInputs;
