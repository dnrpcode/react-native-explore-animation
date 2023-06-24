import React from 'react';
import {FlatList, StyleSheet, ViewToken} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {ListItem} from './src/components';

const data = new Array(50).fill(0).map((_, index) => ({id: index}));

export default function App() {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <FlatList
      data={data}
      style={styles.container}
      contentContainerStyle={styles.content}
      onViewableItemsChanged={({viewableItems: vItems}) => {
        viewableItems.value = vItems;
      }}
      renderItem={({item}) => (
        <ListItem item={item} viewableItems={viewableItems} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 40,
  },
});
