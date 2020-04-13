import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Actions from '../store/actions';
import StockSelectors from '../store/selectors';

const useSubmit = (action) => {
  const dispatch = useDispatch();

  const stockMemo = useMemo(StockSelectors.getStockFetching, []);
  const fetching = useSelector((state) => stockMemo(state));

  const submit = useCallback((data) => dispatch(Actions[action](data)), [dispatch, action]);

  return { fetching, submit };
};

useSubmit.propTypes = {
  action: PropTypes.string.isRequired,
};

export default useSubmit;
