import { StyleSheet } from "react-native";
import PrizeHeader from "../components/PrizeHeader";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function PrizeScreen({ navigation }: RootTabScreenProps<'Prize'>) {
  return (
    <View style={styles.conatiner}>
      <PrizeHeader />

    </View>
  );
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#efefef"
  },

})