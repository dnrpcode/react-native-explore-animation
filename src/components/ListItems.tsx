import React from 'react';
import {StyleSheet, ViewToken} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

interface ListItemProps {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {id: number};
}

export const ListItem = React.memo(({item, viewableItems}: ListItemProps) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(itm => itm.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.1),
        },
      ],
    };
  }, []);

  return <Animated.View style={[styles.container, rStyle]} />;
});

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '90%',
    backgroundColor: '#78CAD2',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
});
