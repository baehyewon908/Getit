// src/components/ui/ButtonPrimary.js
import { Pressable, Text, StyleSheet } from 'react-native';

export default function ButtonPrimary({ title, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btn,
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      <Text style={styles.txt}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 72,
  },
  txt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
