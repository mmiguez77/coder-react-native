import { useState } from "react";
import { View, Text, TextInput, TouchableNativeFeedback, FlatList, Alert } from "react-native"
import generateNextId from "../../helpers/generateNextId";
import Modal from "../Modal/Modal";
import styles from "./styles";

const ItemsList = () => {

    const [ itemsList, setItemsList ] = useState([]);
    const [ itemSelected, setItemSelected ] = useState({});
    const [ inputTextItem, setInputTextItem ] = useState("");
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    
console.log(itemsList)

    const addNewItem = () => {
        let itemId = generateNextId(itemsList.length)
        setItemsList([
            ...itemsList, 
            { id: itemId, name: inputTextItem }
        ])
        setInputTextItem("")
    }

    const selectedItem = (id) => {
        setItemSelected(itemsList.find((it) => it.id === id));
        setIsModalVisible(true);
      };
    
    const deleteItem = (flagYN) => {
        if(flagYN === "Y") {
            setItemsList((items) => items.filter((it) => it.id !== itemSelected.id))
            setItemSelected({});
            setIsModalVisible(false);
        }
        setIsModalVisible(false);
      };

    const renderItem = ({ item }) => (
        <TouchableNativeFeedback onPress={() => selectedItem(item.id)}>
          <Text>{item.name}</Text>
        </TouchableNativeFeedback>
    )


    return (
            <View style={{ flex: 1, backgroundColor: "indigo" }}>
                <Text>LISTAS</Text>

                <View style={ styles.inputcontainer }>
                    <TextInput
                        placeholder="Agregar Nuevo Item"
                        placeholderTextColor="white"
                        style={styles.inputStyle}
                        value={inputTextItem}
                        onChangeText={(ev) => setInputTextItem(ev)}
                    />
                    <TouchableNativeFeedback 
                        onPress={addNewItem}
                    >
                        <Text> Agregar </Text>
                    </TouchableNativeFeedback>
                </View>

                <View style={{ flex: 4, backgroundColor: "blue" }}>
                <FlatList
                    data={itemsList}
                    renderItem={renderItem}
                    keyExtractor={(it) => it.id}
                    />
                </View>
                <Modal isVisible={isModalVisible} actionDeleteItem={deleteItem} />
            </View>

    )
}

export default  ItemsList

