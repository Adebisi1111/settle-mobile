import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
  <View
    style={{
      flex: 1,
      backgroundColor: "#0f172a",
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
    }}
  >
    <Text
      style={{
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        marginBottom: 12,
      }}
    >
      Settle Mobile
    </Text>

    <Text
      style={{
        color: "#b8c1ec",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 40,
      }}
    >
      Send and receive USDC instantly
    </Text>

    <TouchableOpacity
      onPress={() => router.push("/login")}
      style={{
        backgroundColor: "#2563eb",
        paddingVertical: 16,
        paddingHorizontal: 60,
        borderRadius: 16,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Open Settle
      </Text>
    </TouchableOpacity>
  </View>
);
}