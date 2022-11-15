import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /**** MODAL ****/
  modal__container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 'auto',
  },
  modal__view_container: {
    backgroundColor: '#D2B4DE',
    height: 95,
    width: 200,
    borderRadius: 5,
  },
  modal__view_text_question: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  modal__view_answer: {
    marginTop: 25,
    borderRadius: 20,
    width: 40,
    backgroundColor: '#BB8FCE',
  },
  modal__view_text_answer: {
    textAlign: 'center',
    padding: 4,
    fontWeight: 'semi-bold',
  },
});

export default styles;
