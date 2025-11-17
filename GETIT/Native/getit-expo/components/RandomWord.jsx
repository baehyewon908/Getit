import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function RandomWord() {
  const [word, setWord] = useState('');
  const [author, setAuthor] = useState('');
  const [authorProfile, setAuthorProfile] = useState('');
  const [loading, setLoading] = useState(true);   // 로딩 상태
  const [error, setError] = useState(null);       // 에러 메시지

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          'https://korean-advice-open-api.vercel.app/api/advice'
        );
        if (!res.ok) throw new Error('네트워크 오류');

        const data = await res.json();

        setWord(data.message);
        setAuthor(data.author);
        setAuthorProfile(data.authorProfile || '');
      } catch (e) {
        console.log(e.message);
        setError(e.message || '문구를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // 로딩 중 화면
  if (loading) {
    return (
      <View style={styles.box}>
        <ActivityIndicator />
        <Text>명언 불러오는 중...</Text>
      </View>
    );
  }

  // 에러 화면
  if (error) {
    return (
      <View style={styles.box}>
        <Text style={styles.error}>에러: {error}</Text>
      </View>
    );
  }

  // 정상 화면
  return (
    <View style={styles.box}>
      <Text style={styles.title}>🃏 랜덤 명언</Text>
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.meta}>
        {author}
        {authorProfile ? ` (${authorProfile})` : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 16, gap: 8, backgroundColor: 'white', borderRadius: 8 },
  title: { fontSize: 20, fontWeight: '700' },
  word: { fontSize: 16, lineHeight: 22 },
  meta: { color: '#666' },
  error: { color: 'red' },
});
