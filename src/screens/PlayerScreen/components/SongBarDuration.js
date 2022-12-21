import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider';
import TrackPlayer from 'react-native-track-player';

// styles, fn
import styles from "../styles";
import theme from "../../../theme/theme"
import secondsToMinutes from '../../../helpers/secondsToMinutes';

const SongBarDuration = ({ progressBar, duration }) => {

    const progressBarPosition = secondsToMinutes(progressBar.position)
    const progressBarDuration = secondsToMinutes(duration) 

    const handleSlidingComplete = async (value) => {
        if(value !== null || value !== undefined) {
            await TrackPlayer.seekTo(value)
        }
        return
    }

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
            onSlidingComplete= { value => handleSlidingComplete(value)  }
            />
        </View>
        <View style={ styles.playerscreen__bar_container_text }>
            <Text style={ styles.playerscreen__bar_time_text }> { progressBarPosition } </Text>
            <Text style={ styles.playerscreen__bar_time_text }> { progressBarDuration } </Text>
        </View>
        </>
    )
}

export default SongBarDuration