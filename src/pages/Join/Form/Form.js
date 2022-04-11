import React from 'react';
import FormInputs from './FormInputs';
import { FORM_LIST } from './JoinFormData';

const Form = ({ handleJoinInputs, joinInputs, checkId }) => {
  return (
    <div>
      {FORM_LIST.map(inputs => {
        const { id, type, name } = inputs;
        return (
          <FormInputs
            key={id}
            data={inputs}
            joinInputs={joinInputs}
            checkId={checkId}
            type={type}
            value={joinInputs[name]}
            handleJoinInputs={handleJoinInputs}
            handleValid={validator[name]}
          />
        );
      })}
    </div>
  );
};

export default Form;

const validator = {
  id: input => input.length >= 6,
  pw: input => input.length >= 8,
  repw: input => input.length >= 8,
  name: input => input.length >= 1,
  email: input => input?.includes('@'),
};
