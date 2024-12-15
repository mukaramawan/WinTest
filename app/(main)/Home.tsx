import React from "react";
import { Alert, ScrollView, TouchableOpacity, View, Text, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@/hooks/AuthContext";
import { supabase } from "@/lib/supabase";

const Home = () => {
  const { setAuth } = useAuth();

  const onLogout = async () => {
    setAuth(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Sign Out", "Error Signing Out!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Hello</Text>
          <Text style={styles.userName}>Mukaram Awan</Text>
        </View>
        <TouchableOpacity style={styles.profileImage} onPress={onLogout}>
          <Ionicons name="log-out-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
    color: "#666",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default Home;
