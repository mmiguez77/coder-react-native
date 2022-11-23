import { View, Image, Pressable } from 'react-native'
import styles from "../styles";


const RenderDiscoverImg = (props) => {

    const { item, navigation } = props

    return (

        <View style={ styles.homescreen__container }>

            <View>
            <Pressable
                onPress={() => navigation.navigate('Player')}
                style={ styles.homescreen__image_rounded }
            >
                <Image 
                    source={ item.item.id }  
                    style={ styles.homescreen__image_container } 
                />
            </Pressable>
            </View>
        </View> 
        
    )
}

export default RenderDiscoverImg