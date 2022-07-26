import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from '../components/Themed';
import { accentColor } from '../constants/Colors';
import Layout from '../constants/Layout';
import { RootStackScreenProps } from "../types";

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => { }}>
          <AntDesign name="close" size={24} color="black" style={{ margin: 16 }} />
        </TouchableWithoutFeedback>

        <View style={styles.content}>
          <Image source={require("../assets/images/ic_logo.png")} style={styles.logo} />
          <Text style={styles.phoneNumber}>188****8888</Text>
          <View style={styles.tipRow}>
            <MaterialIcons name="security" size={14} color="#d1d1d1" />
            <Text style={styles.tipText}>手机认证服务由中国移动提供</Text>
          </View>
          <TouchableWithoutFeedback onPress={() => { }}>
            <View style={styles.btnOneLogin}>
              <Text style={styles.btnText}>本机号码一键登录</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => { }}>
            <Text style={styles.btnOtherLogin}>其他号码登录</Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  logo: { width: 100, height: 100 },
  tipRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  tipText: {
    fontSize: 14,
    color: "#d1d1d1",
  },
  phoneNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40
  },
  btnOneLogin: {
    backgroundColor: accentColor,
    borderRadius: 8,
    width: Layout.window.width - 30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 30
  },
  btnOtherLogin: {
    marginTop: 20,
    fontSize: 14
  },
  btnText: {
    color: 'white',
    fontSize: 18
  }
})
