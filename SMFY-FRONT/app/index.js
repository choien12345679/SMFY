// app/index.js
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'skyblue' }}>
      <Text style={{ fontSize:18, marginBottom: 8 }}>Home</Text>
      <Link href="/register" asChild>
        <Text>Create account</Text>
      </Link>
    </View>
  );
}