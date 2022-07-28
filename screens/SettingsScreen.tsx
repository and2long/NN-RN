import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomAlertDialog } from '../components/CustomAlertDialog';
import SettingItem from '../components/SettingItem';
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <SettingItem title={'检查更新'} />
      <View style={styles.divider} />
      <SettingItem title={'隐私政策'} />
      <View style={styles.divider} />

      <View style={{ flex: 1 }} />

      <TouchableOpacity onPress={() => { setModalVisible(true) }}>
        <View style={styles.btnLogout}>
          <Text>退出</Text>
        </View>
      </TouchableOpacity>
      <CustomAlertDialog
        visible={modalVisible}
        title={'确认退出登录吗？'}
        onCancelClick={hideModal}
        onOkClick={confirmLogout} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
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
