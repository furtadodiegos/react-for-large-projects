import Types from './types';

export default {
  all: () => ({ type: Types.REQUEST, action: 'ALL' }),
  save: (data) => ({
    type: Types.REQUEST,
    action: 'SAVE',
    data,
  }),
  update: (data) => ({
    type: Types.REQUEST,
    action: 'UPDATE',
    data,
  }),
};
