import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { theme } from "@/constants/theme";

import { supabase } from "@/lib/supabase";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

function Login() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter();

  const onLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Log In!", "Please fill all the Fields!");
    } else {
      setLoading(true);
      const email = emailRef.current.trim();
      const password = passwordRef.current.trim();

      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        Alert.alert(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginTxt}>Welcome,</Text>
      <Text style={styles.subloginTxt}>Sign in to Continue!</Text>

      <Input
        placeholder="Email"
        onChangeText={(value) => {
          emailRef.current = value;
        }}
      />

      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(value) => {
          passwordRef.current = value;
        }}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 10, marginBottom: 20 }}
          size="large"
          color="#39b44c"
        />
      ) : (
        <Button title="Log In" onPress={onLogin} />
      )}

      <Text style={styles.orText}>Or Continue with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="google" size={24} color={theme.colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="facebook" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.regContainer}>
        <Text style={{ color: theme.colors.gray }}>Not a member?</Text>
        <TouchableOpacity onPress={() => router.push("/screens/Signup")}>
          <Text style={styles.registerNow}>Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    padding: 20,
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
  loginTxt: {
    fontSize: theme.size.xxl,
    fontWeight: "bold",
    color: theme.colors.primary,
    textAlign: "left",
    marginBottom: 5,
  },
  subloginTxt: {
    fontSize: theme.size.xx,
    color: theme.colors.gray,
    textAlign: "left",
    marginBottom: 25,
  },
  forgotPassword: {
    textAlign: "left",
    color: theme.colors.primaryDark,
    marginBottom: 20,
  },
  orText: {
    textAlign: "center",
    color: theme.colors.gray,
    fontSize: theme.size.md,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    padding: 8,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.lightGray,
    borderRadius: 25,
  },
  regContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerNow: {
    fontWeight: "bold",
    color: theme.colors.primary,
    marginLeft: 5,
  },
});

export default Login;
