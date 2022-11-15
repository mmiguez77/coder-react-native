import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

// styles
import styles from '../styles'

const RenderPopularArtists = ({ item }) => {
   return (
      <View style={ styles.homescreen__popular_container }>
      <View style={ styles.homescreen__popular_image_rounded }>
         <Pressable
            onPress={ () => { console.log(item.id) }}
            style={ styles.homescreen__image_rounded }
         >
            <Image 
               style={ styles.homescreen__popular_image_rounded } 
               source={ item.image }  
               resizeMode={ "cover" }
            />
         </Pressable>
      </View>
      <Text style={{color:"white"}}>Hola</Text>
      <Text style={{color:"white"}}>Hola</Text>
      </View> 
   )
}

export default RenderPopularArtists
