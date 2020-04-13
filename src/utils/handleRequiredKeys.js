import _ from 'lodash';

export default (requiredKeys, payload) => {
  if (!payload || !_.every(requiredKeys, _.partial(_.has, payload)))
    throw Error('Payload is invalid!');

  return payload;
};
