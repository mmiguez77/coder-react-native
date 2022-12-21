import { View } from 'react-native'
import { Icon } from '@rneui/themed';

// styles
import styles from "../styles";
import theme from "../../../theme/theme"

const TapBar = () => {

    return (
        <View style={ styles.playerscreen__tapbar_container }>
            <Icon name="playlist-music" type="material-community" size={18}  color= { theme.colors.secondary }  />
            <Icon name="download" type="antdesign" size={18}  color= { theme.colors.secondary }  />
            <Icon name="hearto" type="antdesign" size={18}  color= { theme.colors.secondary }  />
            <Icon name="sharealt" type="antdesign" size={18}  color= { theme.colors.secondary }  />
        </View>
    )
}

export default TapBar