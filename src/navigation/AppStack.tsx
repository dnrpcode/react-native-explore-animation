import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlatlistAndCollapseScreen from '../modules/flatlistAndCollapse/screens';
import Home from '../modules/home/screens';
import {
  DetailSharedComponent,
  ListSharedComponent,
} from '../modules/sharedComponent/screens';

export type AppStackParamList = {
  Home: undefined;
  FlatlistAndCollapse: undefined;
  ListSharedComponent: undefined;
  DetailSharedComponent: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
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
      <Stack.Screen
        name="ListSharedComponent"
        component={ListSharedComponent}
      />
      <Stack.Screen
        name="DetailSharedComponent"
        component={DetailSharedComponent}
      />
    </Stack.Navigator>
  );
};
