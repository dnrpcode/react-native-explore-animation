import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, ViewToken} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Collapse} from '../../../components';

interface ListItemProps {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {id: number};
}

export const ListItem = React.memo((props: ListItemProps) => {
  const {item, viewableItems} = props;

  const [isOpenContent, setIsOpenContent] = useState(false);

  const animateStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(items => items.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{scale: withTiming(isVisible ? 1 : 0.1)}],
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => setIsOpenContent(!isOpenContent)}>
      <Animated.View style={[styles.container, animateStyle]}>
        <Collapse isOpen={isOpenContent} style={styles.collapse} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#415A77',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  collapse: {
    backgroundColor: '#415A77',
    borderRadius: 15,
  },
});
