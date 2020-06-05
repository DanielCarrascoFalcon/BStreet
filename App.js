import * as React from 'react';
import useCachedResources from './hooks/useCachedResources';
import MainNavigator from './navigation/MainNavigator';
import { Text } from 'react-native';


export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <Text>Cargando</Text>;
  } else {
    return (
      <MainNavigator />
    );
  }
}

