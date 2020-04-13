import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Edit } from '@material-ui/icons';

import StockSelectors from '../store/selectors';

import FormComponent from '../components/formComponent';

const handleList = (stockData, openDrawer) =>
  stockData.map((stock) => ({
    label: stock.name,
    avatar: localStorage.getItem(stock.image),
    secondaryAction: {
      icon: <Edit />,
      action: () =>
        openDrawer(
          <FormComponent stock={{ ...stock, image: localStorage.getItem(stock.image) }} />,
        ),
    },
  }));

const useStockData = (openDrawer) => {
  const stockMemo = useMemo(StockSelectors.getStockData, []);
  const stock = useSelector((state) => stockMemo(state));

  return handleList(stock, openDrawer);
};

export default useStockData;
