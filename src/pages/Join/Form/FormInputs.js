import React, { useState } from 'react';

const FormInputs = ({ data, handleInputs, inputs, isCheckId }) => {
  const isBtnVaild = data.title === '아이디';

  return (
    <div>
      <dl className="fst">
        <dt>{data.title}</dt>
        <dd>
          <input
            name={data.name}
            type="text"
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
