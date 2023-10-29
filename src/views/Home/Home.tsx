import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { API_KEY, API_URL } from "../../utils/fetch";
import TodayImage from "../../components/TodayImage";
import { PostImage as postImageTypes } from "../../types";
import { format, sub } from "date-fns";
import lastFiveDaysImage from "../../components/lastFiveDaysImage";
import LastFiveDaysImage from "../../components/lastFiveDaysImage";
const Home = () => {
  const [image, setImage] = useState<postImageTypes>({});
  const [imageFive, setImageFive] = useState<postImageTypes[]>([]);

  const fetchData = async (urlParams?: string) => {
    try {
      const newDatas = await axios.get(
        `${API_URL}?api_key=${API_KEY}${
          typeof urlParams !== "undefined" && urlParams?.length > 0
            ? urlParams
            : ""
        }`
      );
      if (newDatas.data) {
        const images = newDatas.data;
        return images;
      } else {
        console.log("datos no encontrados");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadLast5DaysImage = async () => {
    try {
      const date = new Date();
      const todayDate = format(date, "yyyy-MM-dd");
      const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
      console.log("now", todayDate);
      console.log("five", fiveDaysAgoDate);
      const lastFiveDaysImagesResponse = await fetchData(
        `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`
      );
      setImageFive(lastFiveDaysImagesResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const todaysImage = async () => {
      try {
        const todayImageResponse = await fetchData();
        setImage(todayImageResponse);
      } catch (error) {
        console.error(error);
      }
    };
    todaysImage();
    loadLast5DaysImage();
  }, []);

  return (
    <View style={Styles.container}>
      <Header />
      <TodayImage {...image} />
      <LastFiveDaysImage postImages={imageFive} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:"rgba(7,26,93,255)",
  },
 
});
export default Home;
