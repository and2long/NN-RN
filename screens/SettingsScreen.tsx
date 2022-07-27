import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SettingItem from '../components/SettingItem';
import Layout from '../constants/Layout';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Image source={require("../assets/images/ic_logo.png")} style={styles.logo} />
      <Text style={styles.version}>Version:1.0.0</Text>
      <View style={styles.divider} />
      <SettingItem title={'检查更新'} />
      <View style={styles.divider} />
      <SettingItem title={'隐私政策'} />
      <View style={styles.divider} />
      <View style={{ flex: 1 }} />
      <TouchableOpacity onPress={() => { }}>
        <View style={styles.btnLogout}>
          <Text>退出</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: { width: 100, height: 100, marginTop: 50 },
  version: {
    marginBottom: 30,
    color: "#808080"
  },
  divider: { height: 1, backgroundColor: "#eee", width: Layout.window.width - 40, marginHorizontal: 20 },
  btnLogout: {
    width: Layout.window.width - 40,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
})
