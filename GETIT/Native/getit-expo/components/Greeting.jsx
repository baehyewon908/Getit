// ./src/components/Greeting.jsx
import { Text } from 'react-native';

export default function Greeting(props) {
  return<Text>안녕하세요, {props.name}! {props.job}</Text>
}
