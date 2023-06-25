import * as React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStack, AppStackParamList} from './AppStack';

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type ScreenNavigationProps<T extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, T>;

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
