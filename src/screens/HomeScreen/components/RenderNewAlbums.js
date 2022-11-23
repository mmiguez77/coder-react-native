import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'

// styles
import styles from "../styles"
import theme from "../../../theme/theme"

const RenderNewAlbum = ({ item }) => {
return (
    <View style={ styles.homescreen__newalbum_container }>
    <View style={ styles.homescreen__newalbum_image_rounded }>
        <Pressable
            onPress={ () => { console.log(item.id) }}
            style={ styles.homescreen__image_rounded }
        >
        <Image 
            style={ styles.homescreen__newalbum_image_rounded } 
            source={ item.image }  
            resizeMode={ "cover" }
        />
        </Pressable>
    </View>
    <Text style={ theme.colors.secondary }>Hola</Text> 
    <Text style={ theme.colors.secondary }>Hola</Text>
    </View> 
)
}

export default RenderNewAlbum