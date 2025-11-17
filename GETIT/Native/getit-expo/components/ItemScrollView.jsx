// components/ItemScrollView.jsx
import { ScrollView, Text } from 'react-native';

export default function ItemScrollView() {
  const items = Array.from({ length: 30 }, (_, i) => `아이템 ${i + 1}`);

  return (
    <ScrollView>
      {items.map((item, index) => (
        <Text key={index} style={{ fontSize: 20, padding: 10 }}>{item}</Text>
      ))}
    </ScrollView>
  );
}
