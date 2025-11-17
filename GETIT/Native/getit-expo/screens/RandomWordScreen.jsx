// screens/RandomWordScreen.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import RandomWord from '../components/RandomWord'; // 이미 만든 컴포넌트 재사용

export default function RandomWordScreen() {
  return (
    <View style={styles.container}>
      <RandomWord />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
