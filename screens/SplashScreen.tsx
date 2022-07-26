import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/ic_logo.png")} style={styles.logo} />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: { width: 100, height: 100 },
})
