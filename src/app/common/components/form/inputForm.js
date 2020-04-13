import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, Input, InputLabel } from '@material-ui/core';

const InputForm = ({
  field,
  form: { touched, errors },
  props: { fullWidth, label, ...props },
  errorField,
}) => {
  return (
    <FormControl fullWidth={fullWidth} margin="normal">
      <InputLabel htmlFor={field.id}>{label}</InputLabel>
      <Input {...field} {...props} error={Boolean(touched[field.name] && errors[field.name])} />

      {errorField(field, touched, errors)}
    </FormControl>
  );
};

InputForm.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.instanceOf(Object).isRequired,
    errors: PropTypes.instanceOf(Object).isRequired,
  }).isRequired,
  props: PropTypes.shape({
    fullWidth: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  errorField: PropTypes.func.isRequired,
};

export default InputForm;
