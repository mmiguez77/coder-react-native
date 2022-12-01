import { View, Pressable } from 'react-native'
import { Icon } from '@rneui/themed';

// custom hooks
import useCustomTrackPlayer from '../../../hooks/useCustomTrackPlayer'

// styles
import styles from "../styles";
import theme from '../../../theme/theme';

const Controls = ({ playBackState }) => {

    const { togglePlayBack } = useCustomTrackPlayer()
    
    return (

        <View style={ styles.playerscreen__controls_container }>
            <Icon name="random" type="font-awesome" size={18} color= { theme.colors.secondary }  />
            <Icon name="control-rewind" type="simple-line-icon" size={20} color= { theme.colors.secondary } />
        
            <Pressable onPress={ () => { togglePlayBack(playBackState) } }>
            <Icon 
                name={ playBackState === 3 ? "control-pause" : "control-play"} 
                type="simple-line-icon" 
                size={30} 
                color= { theme.colors.primary } 
                style={{ borderRadius: 50, padding: 10, backgroundColor: theme.colors.tertiary }}
            />
            </Pressable>
        
            <Icon name="control-forward" type="simple-line-icon"  size={20} color= { theme.colors.secondary }  />
            <Icon name="repeat" type="ionicon" size={20} color= { theme.colors.secondary }  />
      </View>
    )
}

export default Controls