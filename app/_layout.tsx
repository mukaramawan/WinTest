import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import HomeScreen from "./(main)/HomeScreen";
import { getItems } from "@/utills/asyncStorage";

const Stack = createNativeStackNavigator();

const _layout = () => {
  const [ShowOnBoarding, setShowOnBoarding] = useState(null);

  useEffect(() => {
    checkIfAlreadyOnBoarded();
  }, []);

  const checkIfAlreadyOnBoarded = async () => {
    const onBoarded = await getItems("onBoarded");
    if (onBoarded == "true") {
      setShowOnBoarding(false);
    } else {
      setShowOnBoarding(true);
    }
  };

  if (ShowOnBoarding === null) {
    return null;
  }

  return (
    // <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ShowOnBoarding ? "Onboarding" : "Home"}
      >
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnBoardingScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default _layout;
