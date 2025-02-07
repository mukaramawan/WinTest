import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItems = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("Eror in storing value: ", error);
  }
};

export const getItems = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log("Eror in getting value: ", error);
  }
};

export const removeItems = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Eror in removing value: ", error);
  }
};
