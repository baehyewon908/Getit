// screens/TimerScreen.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from '../components/Timer'; // 전에 만든 Timer/Stopwatch 컴포넌트

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <Timer />
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
