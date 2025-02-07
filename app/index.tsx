import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./_layout";

const index = () => {
  return (
    // <NavigationContainer>
      //<Onboarding />
    // </NavigationContainer>
    <ActivityIndicator size={'large'} color={'blue'}/>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
