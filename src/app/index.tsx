import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Settle
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          fontSize: 16,
          marginBottom: 30,
        }}
      >
        Welcome to your mobile app 🚀
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={{
          backgroundColor: "#2563eb",
          paddingVertical: 14,
          paddingHorizontal: 30,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}