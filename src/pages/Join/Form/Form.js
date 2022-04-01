import React, { useState } from 'react';
import FormInputs from './FormInputs';
import { FORM_LIST } from './JoinFormData';

const Form = ({ handleInputs, inputs, isCheckId }) => {
  return (
    <div>
      {FORM_LIST.map(item => {
        return (
          <FormInputs
            data={item}
            key={item.id}
            handleInputs={handleInputs}
            inputs={inputs}
            isCheckId={isCheckId}
          />
        );
      })}
    </div>
  );
};

export default Form;
