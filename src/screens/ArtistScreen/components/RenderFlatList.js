import { Text, View, Pressable } from 'react-native'

// styles
import theme from "../../../theme/theme"

const RenderFlatList = ({ item, navigation }) => {

    return (
      <View style= {{ marginTop: 10 }}>
        <Text style= {{ color: theme.colors.secondary }}> Album: { item.item.name } </Text>
        <Pressable
          onPress={ () => { 
            navigation.navigate( 'Album' , {
              albumId: item.item.id
            } )
          }}
        >
         <Text style= {{ color: theme.colors.secondary }} >
          ACA LA IMG
         </Text>
        </Pressable>

      </View> 
    )
  }

export default RenderFlatList