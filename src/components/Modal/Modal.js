import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal as ModalRNative,
  } from "react-native";
  import React from "react";
  
  const Modal = ({ isVisible, actionDeleteItem  }) => {
  
    return (
      <ModalRNative animationType="fade" transparent={ true } visible={ isVisible }>
        <View style={styles.centeredView}>
          <View style={{ backgroundColor: "white" }}>
            <Text>¿Eliminar producto? </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Pressable
                onPress={() => actionDeleteItem("Y")}
                style={{ backgroundColor: "red" }}
                >
                <Text>Si</Text>
                </Pressable>
                <Pressable
                onPress={() => actionDeleteItem("N")}
                style={{ backgroundColor: "red" }}
                >
                <Text>No</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </ModalRNative>
    );
  };
  
  export default Modal;
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
  });