import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
export default function Dashboard() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        padding: 24,
        paddingTop: 80,
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
        Dashboard
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          fontSize: 18,
          marginBottom: 30,
        }}
      >
        Welcome to Settle Wallet
      </Text>

      <View
        style={{
          backgroundColor: "#1e293b",
          borderRadius: 20,
          padding: 24,
          marginBottom: 24,
        }}
      >
        <Text
          style={{
            color: "#94a3b8",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Total Balance
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 42,
            fontWeight: "bold",
          }}
        >
          $12,450
        </Text>
      </View>

      <TouchableOpacity
      onPress={() => router.push("/send")}
        style={{
          backgroundColor: "#2563eb",
          padding: 20,
          borderRadius: 18,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Send Money
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => alert("Receive Money Clicked")}
        style={{
          backgroundColor: "#1e293b",
          padding: 20,
          borderRadius: 18,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Receive Money
        </Text>
      </TouchableOpacity>
    </View>
  );
}