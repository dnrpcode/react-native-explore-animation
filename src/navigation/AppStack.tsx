import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlatlistAndCollapseScreen from '../modules/flatlistAndCollapse/screens';
import Home from '../modules/home/screens';

export type AppStackParamList = {
  Home: undefined;
  FlatlistAndCollapse: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="FlatlistAndCollapse"
        component={FlatlistAndCollapseScreen}
      />
    </Stack.Navigator>
  );
};
