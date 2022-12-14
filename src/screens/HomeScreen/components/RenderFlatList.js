import { Text, View, Image, Pressable } from 'react-native'

// styles
import styles from "../styles"

const RenderFlatList = ({ item, navigation }) => {

  console.log(item.item)

    return (
      <View 
        style= {styles.homescreen__render_flat_list_container} 
        key={item.index}
      >
        <View
          style={styles.homescreen__render_flat_list_view}
        >
          <Pressable
            onPress={ () => { 
              navigation.navigate( 'Artista' , {
                artistId: item.item.id
              } )
            }}
          >
            <Text style={styles.homescreen__render_flat_list_band_name}> { item.item.name } </Text>
            <View style={styles.homescreen__render_flat_list_image_view}>
                <Image
                source={require('../../../assets/img/no-image.jpg')}
                style={styles.homescreen__render_flat_list_image}
              /> 
            </View>
            <Text style={styles.homescreen__render_flat_list_band_gender}>Género</Text>
            <Text style={styles.homescreen__render_flat_list_band_gender}>Ciudad</Text>
          </Pressable>
        </View>

      </View> 
    )
}

export default RenderFlatList