import { View, Image, Pressable } from 'react-native'
import styles from "../styles";


const RenderDiscoverImg = (props) => {

    const { item, handleIdNumberSong } = props 

    return (

        <View style={ styles.homescreen__container }>

            <View>
            <Pressable
                onPress={ () => { handleIdNumberSong(item.item.id) }}
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