import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';
import {AppStackParamList} from '../../../navigation/AppStack';
import {Colors} from '../../../themes';

type ListSharedComponentType = NativeStackScreenProps<
  AppStackParamList,
  'ListSharedComponent'
>;

export default function ListSharedComponent(props: ListSharedComponentType) {
  const {navigation} = props;
  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailSharedComponent')}>
        <Animated.View style={styles.card} sharedTransitionTag="sharedTag" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, alignItems: 'center'},
  card: {
    width: 100,
    height: 100,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
});
