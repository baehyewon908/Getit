import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function FriendCard({ name, hobby, img }) {
  return (
    <View style={styles.FriendContainer}>
      <Image style={styles.profileImage} source={img} />

      <Text style={styles.FriendText}>
        이름: {name}{"\n"}취미: {hobby}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  FriendContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  FriendText: {
    fontSize: 16,
  },
});
