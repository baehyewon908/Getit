import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculateAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    if (isNaN(sum)) {
      Alert.alert('입력 오류', '유효한 숫자를 입력해주세요');
      return;
    }
    setResult(sum);
  };

  const calculateSub = () => {
    const cha = parseFloat(num1) - parseFloat(num2);
    if (isNaN(cha)) {
      Alert.alert('입력 오류', '유효한 숫자를 입력해주세요');
      return;
    }
    setResult(cha);
  };

  const calculateMul = () => {
    const mul = parseFloat(num1) * parseFloat(num2);
    if (isNaN(mul)) {
      Alert.alert('입력 오류', '유효한 숫자를 입력해주세요');
      return;
    }
    setResult(mul);
  };

  const calculateDiv = () => {
    const div = parseFloat(num1) / parseFloat(num2);
    if (isNaN(div)) {
      Alert.alert('입력 오류', '유효한 숫자를 입력해주세요');
      return;
    }
    if (parseFloat(num2) === 0) {
      Alert.alert('계산 오류', '0으로 나눌 수 없습니다');
      return;
    }
    setResult(div);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="숫자 1"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="숫자 2"
        value={num2}
        onChangeText={setNum2}
      />

      <Button title="더하기" onPress={calculateAdd} />
      <Button title="빼기" onPress={calculateSub} />
      <Button title="곱하기" onPress={calculateMul} />
      <Button title="나누기" onPress={calculateDiv} />

      {result !== null && (
        <Text style={styles.result}>결과: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
