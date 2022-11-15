import React, { useState } from 'react';
import { View, Text, TextInput, TouchableNativeFeedback, FlatList } from 'react-native';
import { Icon } from '@rneui/themed';

import Modal from '../Modal/Modal';

// import Icon from "../../icons/icons";
import generateNextId from '../../helpers/generateNextId';
import styles from './styles';

const ItemsList = () => {
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [inputTextItem, setInputTextItem] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addNewItem = () => {
    let itemId = generateNextId(itemsList.length);
    setItemsList([...itemsList, { id: itemId, name: inputTextItem }]);
    setInputTextItem('');
  };

  const selectedItem = id => {
    setItemSelected(itemsList.find(it => it.id === id));
    setIsModalVisible(true);
  };

  const deleteItem = flagYN => {
    if (flagYN === 'Y') {
      setItemsList(items => items.filter(it => it.id !== itemSelected.id));
      setItemSelected({});
      setIsModalVisible(false);
    }
    setIsModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemlist__flatlist_element_container}>
      <Text style={styles.itemlist__flatlist_name}>{item.name}</Text>
      <Text style={styles.itemlist__flatlist_delete_item}>
        <TouchableNativeFeedback onPress={() => selectedItem(item.id)}>
          <Icon name="trash-o" type="font-awesome" size={20} color="#666" />
        </TouchableNativeFeedback>
      </Text>
    </View>
  );

  return (
    <View>
      <View style={styles.itemlist__view_container}>
        <Text style={styles.itemlist__title}>LISTAS</Text>
      </View> 

      <View style={styles.itemlist__input_container}>
        <TextInput
          placeholder="Escribir nuevo item"
          placeholderTextColor="grey"
          style={styles.itemlist__input_style}
          value={inputTextItem}
          onChangeText={ev => setInputTextItem(ev)}
        />
        <TouchableNativeFeedback onPress={addNewItem}>
          <Text style={styles.itemlist__input_button}> Agregar </Text>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.itemlist__flatlist_container}>
        <FlatList
          data={itemsList}
          renderItem={renderItem}
          keyExtractor={it => it.id}
        />
      </View>
      <Modal isVisible={isModalVisible} actionDeleteItem={deleteItem} />
    </View>
  );
};

export default ItemsList;
