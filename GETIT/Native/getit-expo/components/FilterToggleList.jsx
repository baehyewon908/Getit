// components/FilterToggleList.jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FilterToggleList({ tasks, showCompleted, onToggle }) {
  // showCompleted 상태에 따라 필터링
  const filtered = tasks.filter(task =>
    showCompleted ? task.done : !task.done
  );

  return (
    <View style={styles.container}>
      <Button
        title={showCompleted ? '미완료만 보기' : '완료된 항목 보기'}
        onPress={onToggle}
      />
      <View style={styles.list}>
        {filtered.map(item => (
          <Text
            key={item.id}
            style={[styles.item, item.done && styles.completedText]}
          >
            • {item.text}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  list: {
    marginTop: 16,
  },
  item: {
    fontSize: 18,
    marginVertical: 4,
  },
  completedText: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});
