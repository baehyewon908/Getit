// src/components/items/ItemForm.js
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ButtonPrimary from '../ui/ButtonPrimary';

export default function ItemForm({ initial = {}, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: initial.name ?? '',
    description: initial.description ?? '',
    price: initial.price != null ? String(initial.price) : '',
  });

  const update = (k, v) =>
    setForm(prev => ({
      ...prev,
      [k]: k === 'price' ? v.replace(/[^0-9]/g, '') : v,
    }));

  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="예) 무지 티셔츠"
          value={form.name}
          onChangeText={t => update('name', t)}
        />
      </View>

      <View>
        <Text style={styles.label}>설명</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          placeholder="간단 설명"
          value={form.description}
          onChangeText={t => update('description', t)}
        />
      </View>

      <View>
        <Text style={styles.label}>가격</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          value={form.price}
          onChangeText={t => update('price', t)}
        />
      </View>

      <View style={styles.btnRow}>
        <ButtonPrimary
          title="저장"
          onPress={() =>
            onSubmit?.({
              name: form.name.trim(),
              description: form.description.trim(),
              price: Number(form.price || 0),
            })
          }
        />
        <ButtonPrimary
          title="취소"
          onPress={onCancel}
          style={{ backgroundColor: '#4B5563' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    gap: 14,
  },
  label: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: '#F9FAFB',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  btnRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
    justifyContent: 'flex-end',
  },
});
