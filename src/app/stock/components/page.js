import React, { useContext } from 'react';

import { Add } from '@material-ui/icons';

import { HeaderComponent, ListWithActionComponent, FabComponent } from '../../common';

import { DrawerContext } from '../../contexts';

import useStockData from '../hooks/useStockData';
import FormComponent from './formComponent';

const StockPage = () => {
  const { openDrawer } = useContext(DrawerContext);
  const stock = useStockData(openDrawer);

  return (
    <div id="stockPage">
      <HeaderComponent title="my stock" page="stock" />

      <ListWithActionComponent items={stock} />

      <FabComponent
        type="button"
        icon={<Add />}
        styles={{
          position: 'absolute',
          right: 20,
          bottom: 40,
        }}
        action={() => openDrawer(<FormComponent />)}
      />
    </div>
  );
};

export default StockPage;
