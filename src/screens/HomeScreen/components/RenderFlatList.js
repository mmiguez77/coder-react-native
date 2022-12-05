import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'

// styles
import styles from "../styles"
import theme from "../../../theme/theme"

const RenderFlatList = ({ item, navigation }) => {

    return (
      <View style= {{ marginTop: 10 }} key={item.index}>
        <Text> Letra { item.item.name } </Text>
        {
          item.item.artist.map((it) => {

            return (
              <View key={it.id}>
                <Pressable
                  onPress={ () => { 
                    navigation.navigate( 'Artista' , {
                      artistId: it.id
                    } )
                  }}
                >
                  <Text> { it.name } </Text>
                </Pressable>
              </View>
            )
          })
        }
      </View> 
    )
}

export default RenderFlatList