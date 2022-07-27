import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog";
import SettingItem from '../components/SettingItem';
import Layout from '../constants/Layout';
import { useAppDispatch } from '../redux/hooks';
import { clearAuthState } from '../redux/slices/authSlice';
import { RootStackParamList } from '../types';

export default function SettingsScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "Settings">) {

  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch()

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOK = () => {
    setVisible(false);
    dispatch(clearAuthState())
    navigation.navigate("Root")
  };

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
      <TouchableOpacity onPress={showDialog}>
        <View style={styles.btnLogout}>
          <Text>退出</Text>
        </View>
      </TouchableOpacity>

      <Dialog.Container visible={visible}>
        <Dialog.Description>确认退出登录？</Dialog.Description>
        <Dialog.Button label="取消" onPress={handleCancel} />
        <Dialog.Button label="确认" onPress={handleOK} />
      </Dialog.Container>

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
