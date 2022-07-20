import { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import PrizeHeader from "../components/PrizeHeader";
import TaskItem, { TaskItemProps } from "../components/TaskItem";
import { View } from "../components/Themed";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAllTasks, getUserPoint } from "../redux/prizeSlices";
import { RootTabScreenProps } from "../types";

export default function PrizeScreen({ navigation }: RootTabScreenProps<'Prize'>) {

  const point = useAppSelector(state => state.userPoint.value)
  const allTasks = useAppSelector(state => state.allTasks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserPoint())
    dispatch(fetchAllTasks())
  }, [])

  function getItemType(index: number): TaskItemProps["type"] {
    if (index == 0) {
      return "top"
    } else if (index == allTasks.items.length - 1) {
      return "bottom"
    } else {
      return "middle"
    }
  }

  return (
    <View style={styles.conatiner}>
      <PrizeHeader taskCount={allTasks.items.length} point={point} />
      {allTasks.status === 'idle' &&
        <FlatList
          data={allTasks.items}
          renderItem={({ item, index }) => <TaskItem
            type={getItemType(index)}
            title={item.taskName}
            onClick={() => {
              navigation.push("TaskDetail", item)
            }} />
          }
        />}
      {allTasks.status === 'loading' && <ActivityIndicator style={styles.indicator} />}
    </View>
  );
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  indicator: {
    flex: 1
  }
})

