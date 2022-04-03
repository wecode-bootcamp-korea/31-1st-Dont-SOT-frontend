import React from 'react';
import FormInputs from './FormInputs';
import { FORM_LIST } from './JoinFormData';

const Form = ({ handleJoinInputs, joinInputs, checkId }) => {
  return (
    <div>
      {FORM_LIST.map(item => {
        return (
          <FormInputs
            data={item}
            key={item.id}
            handleJoinInputs={handleJoinInputs}
            joinInputs={joinInputs}
            checkId={checkId}
          />
        );
      })}
    </div>
  );
};

export default Form;
