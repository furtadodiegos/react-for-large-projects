import { lazy } from 'react';

import responseSaga from './store/responseSaga';
import InitialLoading from './components/initialLoading';
import Layout from './components/layout';
import HeaderComponent from './components/headerComponent';
import FabComponent from './components/fabComponent';
import InputForm from './components/form/inputForm';
import AvatarForm from './components/form/avatarForm';
import ErrorHelperText from './components/form/errorHelperText';

const ListWithActionComponent = lazy(() => import('./components/listWithActionComponent'));

export {
  responseSaga,
  InitialLoading,
  Layout,
  HeaderComponent,
  FabComponent,
  ListWithActionComponent,
  InputForm,
  AvatarForm,
  ErrorHelperText,
};
