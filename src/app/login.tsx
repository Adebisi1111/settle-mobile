import { Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111827',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 28,
          fontWeight: 'bold',
        }}
      >
        Login Screen
      </Text>
    </View>
  );
}