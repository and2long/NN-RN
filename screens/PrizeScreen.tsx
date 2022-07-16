import { ScrollView, StyleSheet } from "react-native";
import PrizeHeader from "../components/PrizeHeader";
import TaskItem from "../components/TaskItem";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function PrizeScreen({ navigation }: RootTabScreenProps<'Prize'>) {
  return (
    <View style={styles.conatiner}>
      <PrizeHeader />
      <ScrollView >
        {
          Array.from({ length: 10 }, (_, i) => <TaskItem title={"观看激励视频"} />)
        }
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#efefef"
  },
})