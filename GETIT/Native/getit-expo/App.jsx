// App.jsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // all | done | todo
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = text => {
    setTasks(prev => [
      { id: Date.now().toString(), text, done: false },
      ...prev,
    ]);
  };

  const removeTask = id => {
    setTasks(prev => prev.filter(item => item.id !== id));
  };

  const toggleTask = id => {
    setTasks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };


  const toggleFilter = () => {
    setFilter(prev =>
      prev === 'all' ? 'done' : prev === 'done' ? 'todo' : 'all',
    );
  };

  const getFilterLabel = () => {
    if (filter === 'all') return '전체 보기';
    if (filter === 'done') return '완료된 항목 보기';
    return '미완료만 보기';
  };


  const visibleTasks = tasks
    .filter(item => {
      if (filter === 'done') return item.done;
      if (filter === 'todo') return !item.done;
      return true; // all
    })
    .filter(item => {
      const term = searchTerm.toLowerCase();
      return item.text.toLowerCase().includes(term);
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchFilterContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Button title={getFilterLabel()} onPress={toggleFilter} />
      </View>

      <TodoInput onAdd={addTask} />
      <TodoList data={visibleTasks} onRemove={removeTask} onToggle={toggleTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
});
