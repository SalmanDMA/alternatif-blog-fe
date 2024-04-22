'use client';
/* eslint-disable react/no-children-prop */
import { store } from '@/store';
import { Provider } from 'react-redux';
import AppShell from './AppShell';

const ProviderShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AppShell children={children} />
    </Provider>
  );
};

export default ProviderShell;
