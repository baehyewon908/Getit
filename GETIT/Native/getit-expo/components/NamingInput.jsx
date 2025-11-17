// components/NameInput.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이름을 입력하세요:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="이름 입력"
      />
      <Text style={styles.greeting}>안녕하세요, {name}님!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 12,
    borderRadius: 4,
  },
  greeting: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
