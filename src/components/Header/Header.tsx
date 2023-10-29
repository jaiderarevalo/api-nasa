import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require("../../assets/Nasa-logo.png")}
          style={styles.images}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  images: {
    width: 80,
    height: 80,
  },
});

export default Header;
