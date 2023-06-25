import React, {memo} from 'react';
import {ViewProps} from 'react-native';
import Animated, {
  AnimateProps,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface CollapseProps extends AnimateProps<ViewProps> {
  isOpen?: boolean;
}

const Collapse = (props: CollapseProps) => {
  const {isOpen, children, style, ...restProps} = props;

  const rStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(isOpen ? 400 : 80, {damping: 15}),
      opacity: withTiming(isOpen ? 1 : 0, {duration: 400}),
    };
  }, [isOpen]);

  return (
    <Animated.View style={[rStyle, style]} {...restProps}>
      {children}
    </Animated.View>
  );
};

export default memo(Collapse);
