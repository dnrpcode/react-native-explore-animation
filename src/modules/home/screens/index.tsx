import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../navigation/AppStack';

type HomeProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

export default function Home(props: HomeProps) {
  const {navigation} = props;
  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() => navigation.navigate('FlatlistAndCollapse')}>
        <Text>Flatlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ListSharedComponent')}>
        <Text>Shared Component</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
