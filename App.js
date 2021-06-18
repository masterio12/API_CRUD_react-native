import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routernav from './src/screens/Routernav';

export default function App() {
  return (
    <NavigationContainer>
      <Routernav />
    </NavigationContainer>
  );
}
