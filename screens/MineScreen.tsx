import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from "react-native";
import { accentColor } from '../constants/Colors';
import Layout from "../constants/Layout";
import { RootTabScreenProps } from "../types";
export default function MineScreen({ navigation }: RootTabScreenProps<'Mine'>) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Image source={require("../assets/images/mine_bg.png")} style={styles.headerBg} />
        <Image source={require("../assets/images/avatar.webp")} style={styles.avatar} />
      </View>
      <View style={styles.cameraBg}>
        <Ionicons name="camera-outline" size={18} color="white" style={styles.camera} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBg: {
    width: Layout.window.width,
    height: Layout.window.width / 150 * 113,
    resizeMode: "contain"
  },
  avatar: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'white'
  },
  cameraBg: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 15,
    backgroundColor: accentColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Layout.window.width / 150 * 113 / 2 + 10,
    marginLeft: Layout.window.width / 2 + 10
  },
  camera: {
    position: 'absolute',
  }
})