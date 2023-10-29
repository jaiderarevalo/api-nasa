import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { FC } from "react";
import { PostImage as PostImageTypes } from "../../types";
import PostImage from "../PostImage";

const LastFiveDaysImage: FC<{ postImages?: PostImageTypes[] }> = ({
  postImages,
}) => {
  console.log("hi", postImages);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>

      <ScrollView style={styles.content}>
        {postImages?.map((postImage) => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flex: 1
  },
  title: {
    color: "#fff",
    fontSize: 16,
    paddingBottom: 10,
  },
  content: {
    paddingHorizontal: 24,
  },
});
export default LastFiveDaysImage;
