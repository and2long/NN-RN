import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import { Text, View } from './Themed';

interface SettingItemProps {
  ionIconName?: React.ComponentProps<typeof Ionicons>['name']
  title: string
  onclick?: () => void
}
export default function SettingItem(props: SettingItemProps) {
  return (
    <TouchableOpacity onPress={props.onclick}>
      <View style={styles.container}>
        {props.ionIconName && <Ionicons name={props.ionIconName} size={24} color="gray" style={styles.icon} />}
        <Text style={styles.title}>{props.title}</Text>
        <MaterialIcons name="navigate-next" size={24} color="gray" style={styles.arrow} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: Layout.window.width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20
  },
  arrow: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 16,
    flex: 1,
    marginLeft: 20
  }
})