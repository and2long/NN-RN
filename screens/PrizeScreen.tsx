import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import PrizeHeader from "../components/PrizeHeader";
import TaskItem from "../components/TaskItem";
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
            console.log(data.retData);

            setAllTasks(data.retData)
          }
        })
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <View style={styles.conatiner}>
      <PrizeHeader taskCount={allTasks.length} point={userPoint} />
      <ScrollView >
        {allTasks.map((item, index) => <TaskItem key={index} title={item["taskName"]} />)}
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