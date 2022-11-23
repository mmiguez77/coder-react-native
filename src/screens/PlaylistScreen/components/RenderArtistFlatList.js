import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'

// styles
import styles from "../styles"

const RenderArtistFlatList = ({ item }) => {


  return (
    <View>
      <View>
          <Pressable
            onPress={ () => { console.log(item.id) }}
            style={ styles.playlistscreen__artists_image_pressable} 
          >
            <Image 
                style={ styles.playlistscreen__artists_image_rounded } 
                source={ item.image }  
                resizeMode={ "cover" }
            />
          </Pressable>
        <View style={ styles.playlistscreen__artists_image_text_container }>
          <Text style={ styles.playlistscreen__artists_image_text }>Hola</Text>
        </View>
      </View>
    </View> 
  )
}

export default RenderArtistFlatList