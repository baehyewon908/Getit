// components/TodoList.jsx
import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ data, onRemove, onToggle }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TodoItem item={item} onRemove={onRemove} onToggle={onToggle} />
      )}
      keyExtractor={item => item.id}
    />
  );
}
