// ./src/components/FoodItem.jsx
import { View, Text, StyleSheet } from 'react-native';

export default function FoodItem({ food }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>• {food}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  itemText: {
    fontSize: 16,
  },
});
