import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import SettingItem from '../components/SettingItem';
import { accentColor } from '../constants/Colors';
import Layout from "../constants/Layout";
import { RootTabScreenProps } from "../types";

export default function MineScreen({ navigation }: RootTabScreenProps<'mine'>) {
  const [image, setImage] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onNickNameItemClick = () => {
    Alert.prompt(
      "修改昵称",
      undefined,
      [
        {
          text: "Cancel",
        },
        {
          text: "OK",
          onPress: password => console.log("OK Pressed: " + password)
        }
      ],
      "plain-text"
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Image source={require("../assets/images/mine_bg.png")} style={styles.headerBg} />
        <TouchableWithoutFeedback onPress={pickImage}>
          <Image source={image ? { uri: image } : require("../assets/images/avatar.webp")} style={styles.avatar} />
        </TouchableWithoutFeedback>
        <Text style={styles.nickName}>快乐男孩</Text>
        <Text style={styles.userId}>ID:8888</Text>
      </View>
      <TouchableWithoutFeedback onPress={pickImage}>
        <View style={styles.cameraBg}>
          <Ionicons name="camera-outline" size={18} color="white" style={styles.camera} />
        </View>
      </TouchableWithoutFeedback>
      <SettingItem ionIconName={'person-outline'} title={'昵称'} onclick={onNickNameItemClick} />
      <SettingItem ionIconName={'location-outline'} title={'所在地'} onclick={() => { }} />
      <SettingItem ionIconName={'settings-outline'} title={'设置'} onclick={() => { navigation.push("settings") }} />
    </View>
  )
}

const avatarMarginTop = 80
const headerBgHeight = Platform.OS === 'web' ? 250 : Layout.window.width / 150 * 113
const headerBgResizeMode = Platform.OS === 'web' ? "cover" : "contain"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  headerBg: {
    width: Layout.window.width,
    height: headerBgHeight,
    resizeMode: headerBgResizeMode
  },
  avatar: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: avatarMarginTop
  },
  cameraBg: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 15,
    backgroundColor: accentColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: avatarMarginTop + 46,
    marginLeft: Layout.window.width / 2 + 10
  },
  camera: {
    position: 'absolute',
  },
  nickName: {
    position: 'absolute',
    marginTop: avatarMarginTop + 90,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  userId: {
    position: 'absolute',
    marginTop: avatarMarginTop + 120,
    color: '#808080',
    fontSize: 12,
  }
})