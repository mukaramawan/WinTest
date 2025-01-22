import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Ensure this package is installed
import { theme } from "@/constants/theme";

function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryLight]}
        style={styles.gradient}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    shadowColor: theme.colors.primaryLight, 
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5, 
    elevation: 5, 
  },
  gradient: {
    width: "100%",
    padding: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fonts.bold,
    fontSize: theme.size.lg, 
    textAlign: "center",
  },
});