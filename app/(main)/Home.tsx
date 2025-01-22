import React from "react";
import {ScrollView, StyleSheet, Text} from "react-native";
import { theme } from "@/constants/theme";
import Header from "../../components/Header";
import FeaturedContent from "../../components/FeaturedContent";

const Home = () => {

  return (
    <ScrollView style={styles.container}>
      <Header/>
      <FeaturedContent/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
