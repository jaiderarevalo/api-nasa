import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native"; // paracoger parametros
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content} key={title}>
        <Image style={styles.image} source={{ uri: url }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
  scrollContainer:{
    flex:1
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom:16,
    fontWeight: "bold",
  },
  date: { color: "#fff", fontSize: 15, paddingBottom: 10 },
  content: {
    backgroundColor: "#2c449d",
    padding: 16,
    borderRadius: 32,
    marginVertical: 26,
    flex:1
  },
  explanation: { color: "#fff" },
  image: {
    height: '50%',
    width: "100%",
    borderColor: '#fff',
    borderRadius: 32,
    borderWidth:2,
    marginBottom:16
  },
});

export default Detail;
