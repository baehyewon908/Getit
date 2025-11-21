import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Stopwatch() {
  
  const [time, setTime] = useState(0);      
  const [running, setRunning] = useState(false);
  const timerIdRef = useRef(null);          

  // 시작
  const start = () => {
    if (running) return; 
    setRunning(true);

    timerIdRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  // 정지
  const stop = () => {
    if (!running) return;
    clearInterval(timerIdRef.current);
    setRunning(false);
  };

  // 리셋 
  const reset = () => {
    clearInterval(timerIdRef.current);
    setRunning(false);
    setTime(0);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.time}>{time}초</Text>

      <View style={styles.btns}>
        <Button title="시작" onPress={start} />
        <Button title="정지" onPress={stop} />
        <Button title="리셋" onPress={reset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    alignItems: 'center',
    gap: 20,
  },
  time: {
    fontSize: 48,
    fontWeight: '700',
    marginBottom: 20,
  },
  btns: {
    flexDirection: 'row',
    gap: 10,
  },
});
