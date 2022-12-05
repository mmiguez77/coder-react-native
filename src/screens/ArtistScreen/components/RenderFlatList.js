import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'

// styles
import styles from "../styles"
import theme from "../../../theme/theme"

const RenderFlatList = ({ item, navigation }) => {

    return (
      <View style= {{ marginTop: 10 }}>
        <Text> Album: { item.item.name } </Text>
        <Pressable
          onPress={ () => { 
            navigation.navigate( 'Album' , {
              albumId: item.item.id
            } )
          }}
        >
         <Text>
          ACA LA IMG
         </Text>
        </Pressable>

      </View> 
    )
  }

export default RenderFlatList