import { Text, View, Pressable } from 'react-native'

// styles
import styles from "../styles"
import theme from "../../../theme/theme"

const RenderAlbum = ({ item, navigation, album }) => {
    
    return (
      <View style= {{ marginTop: 10 }}>
        <Pressable
          onPress={ () => { 
            navigation.navigate( 'Escuchar' , {
              song: item,
              album: album
            } )
          }}
        >
          <Text style= {{ color: theme.colors.secondary }}> { item.item.title } </Text>
          <Text style= {{ color: theme.colors.secondary }}> { item.item.artist } </Text>
        </Pressable>

      </View> 
    )
  }

export default RenderAlbum