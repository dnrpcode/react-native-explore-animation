import {
  SharedTransition,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const sharedElementTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withTiming(values.targetGlobalOriginX, {duration: 500}),
    originY: withTiming(values.targetGlobalOriginY, {duration: 500}),
  };
});
