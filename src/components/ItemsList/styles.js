import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /**** ITEMSLIST ****/
  itemlist__container: {
    flex: 1
  },

  // title
  itemlist__view_container: {
    height: 40,
    backgroundColor: '#462CB2',
  },
  itemlist__title: {
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // input
  itemlist__input_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#BB8FCE',
    height: 80
  },
  itemlist__input_style: {
    backgroundColor: 'white',
    width: 250,
    borderRadius: 5,
    paddingLeft: 10,
  },
  itemlist__input_button: {
    borderRadius: 15,
    backgroundColor: '#8E44AD',
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
    width: 70,
    color: 'white',
  },

  // array de elementos
  itemlist__flatlist_container: {
    alignItems: 'center'
  },
  itemlist__flatlist_element_container: {
    backgroundColor: '#D6EAF8',
    width: 300,
    height: 75,
    marginTop: 10,
    borderRadius: 5,
    borderTopWidth: 2,
    borderColor: '#884EA0',
  },
  itemlist__flatlist_name: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  itemlist__flatlist_delete_item: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 10,
  },
});

export default styles;
