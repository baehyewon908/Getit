// components/ItemFlatList.jsx
import { FlatList, Text } from 'react-native';

export default function ItemFlatList() {
  const items = Array.from(
    { length: 100 },
    (_, i) => ({ id: i.toString(), title: `아이템 ${i + 1}` })
  );

  return (
    <FlatList data={items}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 18, padding: 10 }}>{item.title}</Text>
      )}
      keyExtractor={item => item.id}
    />
  );
}
