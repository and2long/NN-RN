import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { accentColor } from '../constants/Colors'

type CustomAlertDialogProps = {
  visible: boolean
  title: string
  onCancelClick?: () => void
  onOkClick?: () => void
}

export const CustomAlertDialog = (props: CustomAlertDialogProps) => {

  return (
    <Modal
      transparent={true}
      visible={props.visible} >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textTitle}>{props.title}</Text>
          <View style={styles.oprationRow}>
            <TouchableOpacity style={styles.btnCancel} onPress={props.onCancelClick}>
              <Text style={styles.textCancel}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOk} onPress={props.onOkClick}>
              <Text style={styles.textOk}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 220,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textTitle: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center'
  },
  oprationRow: {
    flexDirection: 'row',
  },
  btnCancel: {
    flex: 1,
  },
  btnOk: {
    flex: 1,
  },
  textCancel: {
    textAlign: 'center',
    padding: 20,
    color: "#888",
  },
  textOk: {
    textAlign: 'center',
    padding: 20,
    color: accentColor,
  }
})