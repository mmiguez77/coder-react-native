import { View, Image } from 'react-native'

// styles
import styles from "../styles";

const RenderImage = ({ item }) => {

    return (
      <View style={ styles.playerscreen__image_container }>
        <View style={ styles.playerscreen__image_rounded }>
          <Image 
            style={ styles.playerscreen__image_container } 
            source={ item.image }  
          />
        </View>
      </View> 
    )
}

export default RenderImage