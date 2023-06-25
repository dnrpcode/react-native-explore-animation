import React from 'react';
import {FlatList, ViewToken} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {ListItem} from '../components/ListItems';

const data = new Array(50).fill(0).map((_, index) => ({id: index}));

export default function FlatlistAndCollapseScreen() {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <FlatList
      data={data}
      onViewableItemsChanged={({viewableItems: vItems}) => {
        viewableItems.value = vItems;
      }}
      renderItem={({item}) => (
        <ListItem item={item} viewableItems={viewableItems} />
      )}
    />
  );
}
