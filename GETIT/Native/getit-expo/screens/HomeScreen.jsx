// screens/HomeScreen.jsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import StyledCard from '../components/StyledCard';
import NativeWindCard from '../components/NativeWindCard';

const DATA = [
	{ id: '1', title: '사과' },
	{ id: '2', title: '바나나' },
	{ id: '3', title: '포도' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <StyledCard
        title="스타일 카드"
        content="스타일 카드 내용"
        cardStyle={{ backgroundColor: '#900' }}
      />
	  <NativeWindCard
	  	title={'네이티브 카드'}
		content={'네이티브 카드 내용'}
	/>
    </View>
  );
}

