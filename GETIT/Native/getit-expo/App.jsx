// App.jsx
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 이미 components 폴더에 있는 컴포넌트들
import RandomWord from './components/RandomWord';
import Timer from './components/Timer';

const Stack = createNativeStackNavigator();

/** 🏠 홈 화면 */
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 네비게이션 실습 홈</Text>

      <Button
        title="랜덤 명언 보러가기"
        onPress={() => {
          console.log('랜덤 명언 버튼 눌림');
          navigation.navigate('RandomWord');
        }}
      />

      <View style={{ height: 16 }} />

      <Button
        title="타이머 / 스톱워치 보러가기"
        onPress={() => {
          console.log('타이머 버튼 눌림');
          navigation.navigate('Timer');
        }}
      />
    </View>
  );
}

/** 🃏 RandomWord 화면 */
function RandomWordScreen() {
  return (
    <View style={styles.screen}>
      <RandomWord />
    </View>
  );
}

/** ⏱ Timer/Stopwatch 화면 */
function TimerScreen() {
  return (
    <View style={styles.screen}>
      <Timer />
    </View>
  );
}

/** 전체 네비게이션 설정 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '홈' }}
        />
        <Stack.Screen
          name="RandomWord"
          component={RandomWordScreen}
          options={{ title: '랜덤 명언' }}
        />
        <Stack.Screen
          name="Timer"
          component={TimerScreen}
          options={{ title: '타이머 / 스톱워치' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
