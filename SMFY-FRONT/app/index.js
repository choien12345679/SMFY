import {Link, useRouter} from 'expo-router';
import {Pressable, Text, View} from 'react-native';

const LoginPage = () => {
  const router = useRouter()
  const handleLogin = () => {
    router.replace('/home')
  }

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "skyblue"}}>
            <Pressable onPress = { handleLogin }>
                <Text>Login Page</Text>
            </Pressable>

            <Link href = "/register" asChild>
              <Text>Create account</Text>
            </Link>
            <Link href = "/test">Unmatched route</Link>
        </View>
    )
}

export default LoginPage;