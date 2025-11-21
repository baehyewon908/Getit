// src/components/ui/ConfirmModal.js
import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';

export default function ConfirmModal({
  visible,
  title = '확인',
  message,
  onCancel,
  onConfirm,
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          {!!message && <Text style={styles.msg}>{message}</Text>}

          <View style={styles.row}>
            <Pressable style={[styles.btn, styles.cancel]} onPress={onCancel}>
              <Text style={styles.btnText}>취소</Text>
            </Pressable>

            <Pressable style={[styles.btn, styles.danger]} onPress={onConfirm}>
              <Text style={[styles.btnText, { color: '#fff' }]}>삭제</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 18,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  msg: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  cancel: {
    backgroundColor: '#E5E7EB',
  },
  danger: {
    backgroundColor: '#DC2626',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
});
