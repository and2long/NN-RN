import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { primaryColor } from "../constants/Colors";
import Layout from "../constants/Layout";
import { Text, View } from './Themed';

export type TaskItemProps = {
  type: 'top' | 'middle' | 'bottom'
  title: string
  onClick?: () => void
}

export default function TaskItem(props: TaskItemProps) {

  function getContainerStyle() {
    let style;
    switch (props.type) {
      case "top":
        style = [styles.container, styles.firstContainer]
        break;
      case "middle":
        style = styles.container
        break;
      case "bottom":
        style = [styles.container, styles.lastContainer]
        break;
    }
    return style
  }

  return (
    <View style={getContainerStyle()} lightColor="#fff" darkColor="#000">
      <Image source={require("../../assets/images/ic_interactive.png")} style={styles.leading} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode={"tail"}>{props.title}</Text>
        <Text style={styles.subTitle}>可看10次，观看1次积分+10</Text>
      </View>
      <TouchableWithoutFeedback onPress={props.onClick}>
        <View style={styles.trailing}>
          <Text style={styles.do}>去完成</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    width: Layout.window.width - 15 * 2,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14
  },
  firstContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  lastContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 15
  },
  leading: {
    width: 44,
    height: 44,
    resizeMode: "cover"
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#0000'
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#808080",
    fontSize: 13,
    marginTop: 3
  },
  trailing: {
    width: 72,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4
  },
  do: {
    color: "white",
    fontSize: 12,
  }
})