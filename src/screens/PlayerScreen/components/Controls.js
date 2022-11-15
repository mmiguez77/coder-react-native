import { View, Pressable } from 'react-native'
import { Icon } from '@rneui/themed';

import { togglePlayBack } from "../functions"
import styles from "../styles";

const Controls = ({ playBackState }) => {

    return (

        <View style={ styles.playerscreen__controls_container }>
            <Icon name="random" type="font-awesome" size={18} color="#fff" />
            <Icon name="control-rewind" type="simple-line-icon" size={20} color="#fff" />
        
            <Pressable onPress={ () => { togglePlayBack(playBackState) } }>
            <Icon name="control-pause" type="simple-line-icon"  size={30} color="#F35600" 
                style={{ borderRadius: 50, borderWidth: 1, borderColor: "#F35600", padding: 10 }}
            />
            </Pressable>
        
            <Icon name="control-forward" type="simple-line-icon"  size={20} color="#fff" />
            <Icon name="repeat" type="ionicon" size={20} color="#fff" />
      </View>
    )
}

export default Controls