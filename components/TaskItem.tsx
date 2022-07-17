import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { primaryColor } from "../constants/Colors";
import Layout from "../constants/Layout";

export type TaskItemProps = {
  title: string
  type: 'top' | 'middle' | 'bottom',
  onClick?: () => void,
}

export default function TaskItem(props: TaskItemProps) {

  function getContainerStyle() {
    let style;
    switch (props.type) {
      case "top":
        style = styles.firstContainer
        break;
      case "middle":
        style = styles.container
        break;
      case "bottom":
        style = styles.lastContainer
        break;
    }
    return style
  }

  return (
    <View style={getContainerStyle()}>
      <Image source={require("../assets/images/ic_interactive.png")} style={styles.leading} />
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
    backgroundColor: "white",
    paddingHorizontal: 14,
    width: Layout.window.width - 15 * 2,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14
  },
  firstContainer: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    width: Layout.window.width - 15 * 2,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  lastContainer: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    width: Layout.window.width - 15 * 2,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
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
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#02191A"
  },
  subTitle: {
    color: "#808080",
    fontSize: 13
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