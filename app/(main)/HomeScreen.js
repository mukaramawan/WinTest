import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { removeItems } from "../../utills/asyncStorage";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItems("onBoarded");
    navigation.navigate("Onboarding");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LottieView
          style={styles.lottie}
          source={require("../../assets/Animation - 1738654585887.json")}
          autoPlay
          loop
        />
        <Text>Welcome Home!</Text>
        <TouchableOpacity onPress={handleReset} style={styles.resetBtn}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottie: {
    height: width * 0.9,
    width: width,
  },
  resetBtn: {
    backgroundColor: "#34d399",
    padding: 10,
    borderRadius: 5,
  },
});
