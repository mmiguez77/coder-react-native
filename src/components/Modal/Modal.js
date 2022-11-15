import React from 'react';
import { Text, View, Pressable, Modal as ModalRNative } from 'react-native';

import styles from './styles';

const Modal = ({ isVisible, actionDeleteItem }) => {
  return (
    <ModalRNative animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modal__container}>
        <View style={styles.modal__view_container}>
          <Text style={styles.modal__view_text_question}>
            ¿Eliminar producto?{' '}
          </Text>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Pressable
              onPress={() => actionDeleteItem('Y')}
              style={styles.modal__view_answer}>
              <Text style={styles.modal__view_text_answer}>Si</Text>
            </Pressable>
            <Pressable
              onPress={() => actionDeleteItem('N')}
              style={styles.modal__view_answer}>
              <Text style={styles.modal__view_text_answer}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ModalRNative>
  );
};

export default Modal;
