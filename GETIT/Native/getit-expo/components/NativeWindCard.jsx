import { View, Text } from "react-native";

export default function NativeWindCard({ title, content }) {
  return (
    <View className="bg-neutral-900 p-4 rounded-xl my-2">
      <Text className="text-white text-lg font-bold">{title}</Text>
      <Text className="text-gray-300 mt-1">{content}</Text>
    </View>
  );
}