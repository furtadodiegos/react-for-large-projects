import { lazy } from 'react';

import StockSagas from './store/sagas';
import StockReducer from './store/reducer';

const StockPage = lazy(() => import('./components/page'));

export { StockSagas, StockReducer, StockPage };
