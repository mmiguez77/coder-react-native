import { View } from 'react-native'
import { Icon } from '@rneui/themed';

import styles from "../styles";

const TapBar = () => {


    return (
        <View style={ styles.playerscreen__tapbar_container }>
            <Icon name="playlist-music" type="material-community" size={18} color="#fff" />
            <Icon name="download" type="antdesign" size={18} color="#fff" />
            <Icon name="hearto" type="antdesign" size={18} color="#fff" />
            <Icon name="sharealt" type="antdesign" size={18} color="#fff" />
        </View>
    )
}

export default TapBar