import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider';
import styles from "../styles";


const SongBarDuration = () => {


    return (
        <>        
        <View style={ styles.playerscreen__bar_container }>
            <Slider
            style={{width: 300, height: 31}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="F35600"
            maximumTrackTintColor="white"
            />
        </View>
        <View style={ styles.playerscreen__bar_container_text }>
            <Text style={ styles.playerscreen__bar_time_text }> 2:05 </Text>
            <Text style={ styles.playerscreen__bar_time_text }> 4:23 </Text>
        </View>
        </>
    )
}

export default SongBarDuration