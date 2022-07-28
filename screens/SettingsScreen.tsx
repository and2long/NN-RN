import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { CustomAlertDialog } from '../components/CustomAlertDialog';
import SettingItem from '../components/SettingItem';
import { Text, View } from '../components/Themed';
import { dividerDark, dividerLight } from '../constants/Colors';
import Layout from '../constants/Layout';
import { useAppDispatch } from '../redux/hooks';
import { clearAuthState } from '../redux/slices/authSlice';
import { RootStackParamList } from '../types';

export default function SettingsScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "settings">) {

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch()

  const hideModal = () => {
    setModalVisible(false)
  }

  const confirmLogout = async () => {
    hideModal()
    dispatch(clearAuthState())
    navigation.navigate("root")
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <SettingItem title={'检查更新'} />
        <Divider />
        <SettingItem title={'隐私政策'} />
        <Divider />

        <View style={{ flex: 1 }} />

        <TouchableOpacity onPress={() => { setModalVisible(true) }}>
          <View style={styles.btnLogout} lightColor="#eee" darkColor="#222">
            <Text>退出</Text>
          </View>
        </TouchableOpacity>
        <CustomAlertDialog
          visible={modalVisible}
          title={'确认退出登录吗？'}
          onCancelClick={hideModal}
          onOkClick={confirmLogout} />
      </SafeAreaView>
    </View>
  )
}

const Divider = () => {
  return (
    <View style={styles.divider} lightColor={dividerLight} darkColor={dividerDark} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  divider: { height: 1, width: Layout.window.width - 40, marginHorizontal: 20 },
  btnLogout: {
    width: Layout.window.width - 40,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
})
