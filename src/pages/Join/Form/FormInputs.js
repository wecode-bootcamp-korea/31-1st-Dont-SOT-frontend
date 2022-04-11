import React from 'react';

const FormInputs = props => {
  const { data, handleJoinInputs, joinInputs, checkId, handleValid, value } =
    props;
  const { title, name, type, placeholder } = data;

  const isValid = handleValid(value);

  const isIdVaild = title === '아이디';
  const isCheckLength = joinInputs[name].length !== 0;

  return (
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

        {isIdVaild && <button onClick={checkId}>중복확인</button>}
        {isCheckLength && (isValid ? <ValidSpan /> : <NonValidSpan />)}
      </dd>
    </dl>
  );
};

export default FormInputs;

const ValidSpan = () => {
  return <span className="isValidColor">옳은 형식입니다.</span>;
};

const NonValidSpan = () => {
  return <span className="isNonValidColor"> 옳지 않은 형식입니다.</span>;
};
