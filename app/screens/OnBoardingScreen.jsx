import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItems } from "@/utills/asyncStorage";

const { width, height } = Dimensions.get("window");

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = async () => {
    navigation.navigate("Home");
    await setItems("onBoarded", "true");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // DoneButtonComponent={doneButton} //Can pass custom Component
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require("../../assets/exam-prep1.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Learn Anytime, Anywhere",
            subtitle:
              "Access courses offline or online, at your convenience. Learn without limits.",
          },
          {
            backgroundColor: "#f3f3c7",
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require("../../assets/exam-prep1.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Master Your Exams",
            subtitle:
              "Access comprehensive study materials, structured courses, and past papers to build a strong foundation.",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require("../../assets/exam-prep1.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Unlock Opportunities",
            subtitle:
              "Get real-time Educational News, and never miss critical updates for your academic journey.",
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    height: width * 0.9,
    width: width,
  },
  doneButton: {},
});
