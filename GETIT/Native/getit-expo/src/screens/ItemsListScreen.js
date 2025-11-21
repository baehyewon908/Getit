// src/screens/ItemsListScreen.js
import { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { mockItems } from '../data/mockItems';
import ItemCard from '../../components/items/ItemCard';
import ButtonPrimary from '../../components/ui/ButtonPrimary';

export default function ItemsListScreen({ navigation }) {
  const [items, setItems] = useState(mockItems);
  const [query, setQuery] = useState('');

  const filtered = items.filter(i =>
    [i.name, i.description].join(' ').toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <TextInput
          placeholder="검색…"
          placeholderTextColor="#9CA3AF"
          value={query}
          onChangeText={setQuery}
          style={styles.search}
        />
        <ButtonPrimary
          title="추가"
          onPress={() =>
            navigation.navigate('Create', {
              add: it => setItems(prev => [...prev, it]),
            })
          }
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={it => String(it.id)}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 12 }}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onPress={() =>
              navigation.navigate('Detail', {
                id: item.id,
                get: () => items.find(x => x.id === item.id),
                remove: () =>
                  setItems(prev => prev.filter(x => x.id !== item.id)),
                update: patch =>
                  setItems(prev =>
                    prev.map(x =>
                      x.id === item.id ? { ...x, ...patch } : x
                    )
                  ),
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  search: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#fff',
    fontSize: 14,
  },
});
