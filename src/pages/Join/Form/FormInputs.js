import React, { useState } from 'react';

const FormInputs = ({ data, handleInputs, inputs, isCheckId }) => {
  console.log(inputs);

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
          <button onClick={isCheckId}>중복확인</button>
        </dd>
      </dl>
    </div>
  );
};

export default FormInputs;
