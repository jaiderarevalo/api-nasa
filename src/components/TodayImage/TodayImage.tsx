import { View, Text, StyleSheet, Image, Button } from "react-native";
import React, { FC } from "react";
import {
  PostImage,
  PostImageNavigationProps,
  RootStackParams,
} from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TodayImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="view" color={"#2c449d"} onPress={handleViewPress} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 32,
  },
  imageContainer: {},
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
    marginVertical: 20,
    borderRadius: 32,
    alignContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: { color: "#fff", marginBottom: 12, fontSize: 16 },
  buttonContainer: {
    backgroundColor: "#2c449d",
    alignItems: "flex-end",
  },
});
export default TodayImage;
