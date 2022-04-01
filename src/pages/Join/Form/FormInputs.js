import React, { useState } from 'react';

const FormInputs = ({ data, handleInputs, inputs, isCheckId }) => {
  const isBtnVaild = data.title === '아이디';

  //doesEmailCheck
  const doesEmailCheck = () => {
    const emailCheck = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

    if (emailCheck) {
      return doesEmailCheck() ? 'isOkey' : 'isNotOkey';
    }
  };

  const renderFeedBackMessage = () => {
    if (!doesEmailCheck) {
      return <div className="isNotOkey">이메일형식이 맞지 않습니다.</div>;
    } else {
      return <div className="isOkey">이메일형식이 맞습니다!!!</div>;
    }
  };

  return (
    <div>
      <dl className="fst">
        <dt>{data.title}</dt>
        <dd>
          <input
            name={data.name}
            type={data.type}
            placeholder={data.placeholder}
            onChange={handleInputs}
            value={inputs[data.name]}
          />

          {isBtnVaild ? <button onClick={isCheckId}>중복확인</button> : null}
        </dd>
      </dl>
    </div>
  );
};

export default FormInputs;
