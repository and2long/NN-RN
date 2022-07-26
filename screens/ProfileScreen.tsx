import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from "react-native";
import Layout from "../constants/Layout";
import { RootTabScreenProps } from "../types";

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require("../assets/images/mine_bg.png")} style={styles.headerBg} />
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBg: {
    width: Layout.window.width,
    height: Layout.window.width / 150 * 113,
    resizeMode: "contain"
  }
})