// app/login.js
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Login</Text>
      <Pressable onPress={() => router.replace('/')}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
}