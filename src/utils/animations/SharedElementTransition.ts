import {
  SharedTransition,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

const SPRING_CONFIG: WithSpringConfig = {
  damping: 100,
};

export const sharedElementTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withSpring(values.targetHeight, SPRING_CONFIG),
    width: withSpring(values.targetWidth, SPRING_CONFIG),
    originX: withSpring(values.targetGlobalOriginX, SPRING_CONFIG),
    originY: withSpring(values.targetGlobalOriginY, SPRING_CONFIG),
  };
});
