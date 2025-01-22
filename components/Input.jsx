import { StyleSheet, TextInput } from "react-native";
import { theme } from "@/constants/theme";
import React from "react";

function Input(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="#999"
      style={styles.input}
      {...props}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: theme.colors.primaryLight,
    color: theme.colors.black,
    fontSize: 15,
  },
});
