import { View, Image, Pressable } from 'react-native'
import styles from "../styles";

const RenderDiscoverImg = (props) => {

    const { item, navigation } = props

    return (
        <View style={ styles.discoverscreen__container }>
            <View>
            <Pressable
                onPress={() => navigation.navigate('Player')}
                style={ styles.discoverscreen__image_rounded }
            >
                <Image 
                    source={ item.item.id }  
                    style={ styles.discoverscreen__image_container } 
                />
            </Pressable>
            </View>
        </View>         
    )
}

export default RenderDiscoverImg