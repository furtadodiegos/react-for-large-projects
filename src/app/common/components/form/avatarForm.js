import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  input: {
    display: 'none',
  },
  figure: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: '10px 0 0 0',
  },
}));

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AvatarForm = ({ field, form: { setFieldValue } }) => {
  const classes = useStyles();

  return (
    <label htmlFor="avatar">
      <input
        id="avatar"
        type="file"
        name={field.name}
        onChange={async (e) => {
          e.persist();

          // setFieldValue(field.name, URL.createObjectURL(e.target.files[0] || null));
          setFieldValue(field.name, await toBase64(e.target.files[0]));
        }}
        className={classes.input}
      />
      <figure className={classes.figure}>
        <Avatar alt="avatarImg" src={field.value} className={classes.avatar} />
      </figure>
    </label>
  );
};

AvatarForm.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
  }).isRequired,
};

export default AvatarForm;
