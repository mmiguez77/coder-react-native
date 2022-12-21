import { Text, View, Image, Pressable } from 'react-native'

// styles
import styles from "../styles"

const RenderFlatList = ({ item, navigation }) => {

  return (
    <View 
      key={item.index} 
      style={styles.homescreen__image_container}
    >
      <View >
        <Pressable
          onPress={ () => { 
            navigation.navigate( 'Artista' , {
              artistId: item.item.id
            } )
          }}
          style={ styles.homescreen__image_pressable} 
        >
          <Image
            source={require('../../../assets/img/no-image.jpg')}
            style={ styles.homescreen__image_rounded }
            resizeMode={ "cover" }
          /> 
        <View style={ styles.homescreen__image_text_container }>
          <Text style={ styles.homescreen__image_text }> { item.item.name } </Text>
          <Text style={ styles.homescreen__image_gender }> Genero </Text>
        </View>
        </Pressable>
      </View>
    </View> 
  )
}

export default RenderFlatList