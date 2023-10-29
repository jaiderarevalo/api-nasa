import { View, Text, Button, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {useNavigation} from '@react-navigation/native'
import { PostImageNavigationProps, PostImage as PostImageTypes, RootStackParams } from '../../types'


const PostImage:FC<PostImageTypes> = ({title,date,url,explanation}) => {
    const { navigate } = useNavigation<PostImageNavigationProps>();
    const handleViewPress = () => {
      navigate("Detail", { title, date, url, explanation });
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date} >{date}</Text>
      <View style={styles.containerButton}>
        <Button title='View' color='#2c449d' onPress={handleViewPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    borderRadius:20,
    backgroundColor:'rgba(18,39,113,225)',
    marginBottom:12,
    padding:16
},
title:{
color:'#fff',
fontSize:18,
fontWeight:'bold',
marginBottom:12
},
date:{
    color:'#fff',
    fontSize:15
},
containerButton:{
    padding:10,
    alignItems: "flex-end",
}
})
export default PostImage