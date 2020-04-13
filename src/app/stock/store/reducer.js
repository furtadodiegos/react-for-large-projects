import Types from './types';

import { HandleRequiredKeys } from '../../../utils';
import StockSchema from '../services/stockSchema';

const requiredKeys = Object.keys(new StockSchema()).filter((field) => field !== 'id');

export const initialState = {
  fetching: false,
  success: '',
  error: '',
  stock: [],
};

export default (state = initialState, { type, payload, error }) => {
  try {
    switch (type) {
      case Types.REQUEST:
        return { ...state, fetching: true, success: '', error: '' };
      case Types.ALL:
        return {
          // Por estarmos usando o redux-persist, nao iremos buscar novas informacoes e sim retornar o conteudo ja persistido
          stock: [...state.stock],
          fetching: false,
          success: '',
          error: '',
        };
      case Types.SAVE:
        return {
          stock: [...state.stock, HandleRequiredKeys(requiredKeys, payload)],
          fetching: false,
          success: 'Stock save with success!',
          error: '',
        };
      case Types.UPDATE:
        if (!payload.id) throw Error('id not found!');

        return {
          stock: state.stock.map((s) => (s.id === payload.id ? payload : s)),
          fetching: false,
          success: 'Stock updated with success!',
          error: '',
        };
      case Types.FAILURE:
        return { ...state, fetching: false, success: '', error: error || 'Ops... Algo deu errado' };
      default:
        return state;
    }
  } catch (e) {
    return { ...state, fetching: false, success: '', error: e.message || 'Ops... Algo deu errado' };
  }
};
