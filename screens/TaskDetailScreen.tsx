import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { View } from "../components/Themed";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "TaskDetail">

export default function TaskDetailScreen({ route }: Props) {

  return (
    <View>
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
}