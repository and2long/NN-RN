import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { primaryColor } from "../constants/Colors";

interface TaskItemParams {
  title: string
  onClick?: () => void
}

export default function TaskItem(params: TaskItemParams) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/ic_interactive.png")} style={styles.leading} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode={"tail"}>{params.title}</Text>
        <Text style={styles.subTitle}>可看10次，观看1次积分+10</Text>
      </View>
      <TouchableWithoutFeedback onPress={params.onClick}>
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
    width: Dimensions.get("window").width - 15 * 2,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14
  },
  leading: {
    width: 44,
    height: 44,
    resizeMode: "cover"
  },
  content: {
    flex: 1,
    marginHorizontal: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#02191A"
  },
  subTitle: {
    color: "#808080",
    fontSize: 14
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