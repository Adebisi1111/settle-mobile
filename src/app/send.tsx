import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SendScreen() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

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
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Send Money
      </Text>

      <Text
        style={{
          color: "white",
          marginBottom: 8,
          fontSize: 16,
        }}
      >
        Recipient
      </Text>

      <TextInput
      value={recipient}
onChangeText={setRecipient}
        placeholder="Enter wallet address"
        placeholderTextColor="#94a3b8"
        style={{
          backgroundColor: "#1e293b",
          color: "white",
          padding: 18,
          borderRadius: 14,
          marginBottom: 20,
        }}
      />

      <Text
        style={{
          color: "white",
          marginBottom: 8,
          fontSize: 16,
        }}
      >
        Amount
      </Text>

      <TextInput
      value={amount}
onChangeText={setAmount}
        placeholder="$0.00"
        placeholderTextColor="#94a3b8"
        keyboardType="numeric"
        style={{
          backgroundColor: "#1e293b",
          color: "white",
          padding: 18,
          borderRadius: 14,
          marginBottom: 30,
        }}
      />

      <TouchableOpacity
      onPress={() => {
  console.log("Wallet Address:", recipient);
  console.log("Amount:", amount);
}}
        style={{
          backgroundColor: "#2563eb",
          padding: 20,
          borderRadius: 16,
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
          Continue
          
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}