import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { InputForm, ErrorHelperText, AvatarForm } from '../app/common';

const getInitialValues = (inputs) =>
  Object.keys(inputs).reduce((acc, current) => {
    acc[current] = inputs[current].value;

    return acc;
  }, {});

const getValidationSchemas = (inputs) => {
  const initialValues = Object.keys(inputs).reduce((acc, current) => {
    acc[current] = inputs[current].schema;

    return acc;
  }, {});

  return Yup.object().shape({ ...initialValues });
};

const errorField = (field, touched, errors) => {
  return (
    touched[field.name] && errors[field.name] && <ErrorHelperText error={errors[field.name]} />
  );
};

const customInputComponent = ({ type, field, form, ...props }) => {
  switch (type) {
    case 'hidden':
      return null;
    case 'avatar':
      return <AvatarForm field={field} form={form} />;
    default:
      return <InputForm field={field} form={form} props={props} errorField={errorField} />;
  }
};

customInputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  field: PropTypes.instanceOf(Object).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.instanceOf(Object).isRequired,
    errors: PropTypes.instanceOf(Object).isRequired,
  }).isRequired,
};

export { getInitialValues, getValidationSchemas, errorField, customInputComponent };
