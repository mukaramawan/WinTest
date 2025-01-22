import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@/hooks/AuthContext";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";
import { theme } from "@/constants/theme";

const Header = () => {
  const { setAuth } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    setAuth(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Sign Out", "Error Signing Out!");
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.greetingUser}>
        <Text style={styles.greetingText}>Good Afternoon!</Text>
        <Text style={styles.name}>Mukaram</Text>
      </View>
      <View style={styles.Buttons}>
        <TouchableOpacity style={styles.profileButton} onPress={onLogout}>
          <Ionicons name="notifications" size={28} color={theme.colors.primaryDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton} onPress={onLogout}>
          <Ionicons name="log-out-outline" size={28} color={theme.colors.primaryDark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({ 
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greetingText: {
    fontSize: theme.size.lg,
    color: theme.colors.gray,
  },
  name: {
    fontSize: theme.size.xl,
    fontWeight: "bold",
    color: theme.colors.primaryDark,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  Buttons: {
    flexDirection: 'row',
  },
  profileButton: {
    height: 40,
    width: 40,
    justifyContent: "center",
  },
});