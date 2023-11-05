import { NativeRouter, Route, Routes } from 'react-router-native';
import { Home } from '@psu-superapp/mobile-modules';

export const Router = () => (
  <NativeRouter>
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  </NativeRouter>
);
