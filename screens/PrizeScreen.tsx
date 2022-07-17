import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import PrizeHeader from "../components/PrizeHeader";
import TaskItem, { TaskItemProps } from "../components/TaskItem";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function PrizeScreen({ navigation }: RootTabScreenProps<'Prize'>) {

  const [userPoint, setUserPoint] = useState(0)
  const [allTasks, setAllTasks] = useState([])

  useEffect(() => {
    getUserPoint()
    getAllTasks()
  }, [])

  function getUserPoint() {
    try {
      fetch(`http://test1-opapi.nn.com/nn-assist/taskPoints/findUserPoint/34758`,
        {
          method: "POST",
          headers: {
            "appId": "nnMobileIm_6z0g3ut7",
            "reqChannel": "2",
            "token": "nnMobileIm_6z0g3ut75a82e3aa717242b5a1b7a24e87387e31",
          }
        }).then(r => r.json())
        .then(data => {
          if (data.success) {
            setUserPoint(data.retData.point)
          }
        })
    } catch (error) {
      console.error(error);
    }
  }

  function getAllTasks() {
    try {
      fetch(`http://test1-opapi.nn.com/nn-assist/taskPoints/findAllTask`,
        {
          method: "POST",
          headers: {
            "appId": "nnMobileIm_6z0g3ut7",
            "reqChannel": "2",
            "token": "nnMobileIm_6z0g3ut75a82e3aa717242b5a1b7a24e87387e31",
          }
        }).then(r => r.json())
        .then(data => {
          if (data.success) {
            setAllTasks(data.retData)
          }
        })
    } catch (error) {
      console.error(error);
    }
  }

  function getItemType(index: number): TaskItemProps["type"] {
    if (index == 0) {
      return "top"
    } else if (index == allTasks.length - 1) {
      return "bottom"
    } else {
      return "middle"
    }
  }

  return (
    <View style={styles.conatiner}>
      <PrizeHeader taskCount={allTasks.length} point={userPoint} />
      <FlatList
        data={allTasks}
        renderItem={({ item, index }) => <TaskItem
          type={getItemType(index)}
          title={item["taskName"]}
          onClick={() => {
            navigation.push("TaskDetail", item)
          }} />
        }
      />
    </View>
  );
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#efefef"
  },
})