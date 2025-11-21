// src/screens/ItemDetailScreen.js
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonPrimary from '../../components/ui/ButtonPrimary';
import ConfirmModal from '../../components/ui/ConfirmModal';

export default function ItemDetailScreen({ route, navigation }) {
  const { id, get, remove, update } = route.params;
  const [item, setItem] = useState(null);
  const [showDel, setShowDel] = useState(false);

  useEffect(() => {
    setItem(get());
  }, [get]);

  if (!item) return null;

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.price}>{item.price.toLocaleString()}원</Text>

      <View style={{ height: 24 }} />

      <ButtonPrimary
        title="수정하기"
        onPress={() =>
          navigation.navigate('Edit', {
            initial: item,
            apply: patch => {
              update(patch);
              setItem(prev => ({ ...prev, ...patch }));
            },
          })
        }
      />

      <View style={{ height: 10 }} />

      <ButtonPrimary
        title="삭제하기"
        onPress={() => setShowDel(true)}
        style={{ backgroundColor: '#DC2626' }}
      />

      <ConfirmModal
        visible={showDel}
        message="정말 삭제할까요?"
        onCancel={() => setShowDel(false)}
        onConfirm={() => {
          remove();
          setShowDel(false);
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 14,
    lineHeight: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
});
