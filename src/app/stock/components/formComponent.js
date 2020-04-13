import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

import { makeStyles, CircularProgress } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { HandleForm } from '../../../utils';
import { FabComponent } from '../../common';
import StockSchema from '../services/stockSchema';
import useSubmit from '../hooks/useSubmit';

const useStyles = makeStyles((theme) => ({
  drawer: {
    borderRadius: '20px 20px 0 0',
    padding: 20,
  },
  fabProgress: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    bottom: 14,
    right: 14,
    zIndex: 1,
  },
}));

const FormComponent = ({ stock }) => {
  const classes = useStyles();
  const { fetching, submit } = useSubmit(stock.id ? 'update' : 'save');
  const { getInitialValues, getValidationSchemas, customInputComponent } = HandleForm;

  const fields = new StockSchema(stock.id, stock.image, stock.name, stock.price);

  return (
    <Formik
      enableReinitialize
      initialValues={getInitialValues(fields)}
      validationSchema={getValidationSchemas(fields)}
      onSubmit={(values) => submit(values)}
    >
      {({ errors }) => (
        <Form className={classes.root}>
          {Object.values(fields).map((field) => (
            <Field
              key={field.name}
              type={field.type}
              name={field.name}
              label={field.label}
              fullWidth={field.fullWidth}
              endAdornment={field.endAdornment}
              placeholder={field.label}
              options={field.options || null}
              multiple={field.multiple}
              disabled={field.disabled}
              component={customInputComponent}
            />
          ))}

          <FabComponent
            type="submit"
            icon={<Send />}
            styles={{
              float: 'right',
              marginTop: 20,
            }}
            disabled={Boolean(Object.entries(errors).length) || fetching}
          />
          {fetching && <CircularProgress size={68} className={classes.fabProgress} />}
        </Form>
      )}
    </Formik>
  );
};

FormComponent.propTypes = {
  stock: PropTypes.instanceOf(Object),
};

FormComponent.defaultProps = {
  stock: {},
};

export default FormComponent;
