import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "taskDetail">

export default function TaskDetailScreen({ route }: Props) {

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>{JSON.stringify(route.params, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16
  }
})