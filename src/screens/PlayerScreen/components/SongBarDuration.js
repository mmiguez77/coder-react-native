import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider';

// styles
import styles from "../styles";
import theme from "../../../theme/theme"

const SongBarDuration = ({ progressBar, duration }) => {

    return (
        <>        
        <View style={ styles.playerscreen__bar_container }>
            <Slider
            style={{width: 300, height: 31}}
            value={progressBar.position}
            minimumValue={0}
            maximumValue={progressBar.duration}
            minimumTrackTintColor= { theme.colors.tertiary }
            maximumTrackTintColor= { theme.colors.tertiary }
            thumbTintColor= { theme.colors.tertiary }
            onSlidingComplete= {async (value) => {
                await TrackPlayer.seekToValue(value)
            }}
            />
        </View>
        <View style={ styles.playerscreen__bar_container_text }>
            <Text style={ styles.playerscreen__bar_time_text }> { progressBar.position } </Text>
            <Text style={ styles.playerscreen__bar_time_text }> { duration } </Text>
        </View>
        </>
    )
}

export default SongBarDuration