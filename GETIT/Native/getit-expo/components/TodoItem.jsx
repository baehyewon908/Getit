// components/TodoItem.jsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function TodoItem({ item, onRemove, onToggle }) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => onToggle(item.id)}
      >
        <Text style={[styles.itemText, item.done && styles.itemDone]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Text style={styles.delete}>삭제</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  itemText: {
    fontSize: 18,
  },
  itemDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  delete: {
    color: 'red',
    fontSize: 14,
  },
});
