import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../navigation/AppStack';
import {sharedElementTransition} from '../../../utils/animations/SharedElementTransition';
import {Colors} from '../../../themes';

type DetailSharedComponentType = NativeStackScreenProps<
  AppStackParamList,
  'DetailSharedComponent'
>;

export default function DetailSharedComponent(
  props: DetailSharedComponentType,
) {
  const {navigation} = props;
  return (
    <View style={styles.page}>
      <Animated.View
        style={styles.card}
        sharedTransitionTag="sharedTag"
        sharedTransitionStyle={sharedElementTransition}
      />
      <Button
        title="Go back"
        onPress={() => navigation.navigate('ListSharedComponent')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, marginTop: 50, alignItems: 'center'},
  card: {width: 200, height: 100, backgroundColor: Colors.primary},
});
