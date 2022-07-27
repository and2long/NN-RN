import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import Layout from "../constants/Layout";

interface SettingItemProps {
  ionIconName: React.ComponentProps<typeof Ionicons>['name']
  title: string
  onclick: () => void
}
export default function SettingItem(props: SettingItemProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={props.ionIconName} size={24} color="gray" style={styles.icon} />
      <Text style={styles.title}>{props.title}</Text>
      <MaterialIcons name="navigate-next" size={24} color="gray" style={styles.arrow} />
    </View>
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
    marginHorizontal: 20
  },
  arrow: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 16,
    color: '#111111',
    flex: 1
  }
})