import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../navigation/AppStack';
import {sharedElementTransition} from '../../../utils/animations/SharedElementTransition';
import {Colors} from '../../../themes';

type DetailSharedComponentType = NativeStackScreenProps<
  AppStackParamList,
  'DetailSharedComponent'
>;

export default function DetailSharedComponent(_: DetailSharedComponentType) {
  return (
    <View style={styles.page}>
      <Animated.View
        style={styles.card}
        sharedTransitionTag="sharedTag"
        sharedTransitionStyle={sharedElementTransition}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  card: {width: 200, height: 100, backgroundColor: Colors.primary},
});
