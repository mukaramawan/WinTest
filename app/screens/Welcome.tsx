import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "@/constants/theme";
import Button from "@/components/Button";

function Welcome() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Wintest logo.jpg")}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>WinTest</Text>

      <Text style={styles.subheading}>Developing tomorrow's minds today!</Text>

      <Button
        title="Getting Started"
        onPress={() => {
          router.push("/screens/Login");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 10,
  },
  subheading: {
    fontSize: theme.size.xl,
    color: "#666",
    textAlign: "center",
    marginBottom: 50,
  },
});

export default Welcome;
