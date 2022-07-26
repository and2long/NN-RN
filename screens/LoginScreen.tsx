import { Text, View } from "react-native";
import { RootStackScreenProps } from "../types";

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <View>
      <Text>登录界面</Text>
    </View>
  )
}