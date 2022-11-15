import { View, Text } from 'react-native'
import { Icon } from '@rneui/themed';
import styles from "../styles";

const TopBar = ({ handleIdNumberSong }) => {


    return (
        <View style={ styles.playerscreen__topbar_container }>
        <Text style={ styles.playerscreen__topbar_icons }>
          <Icon 
            name="arrowleft" type="antdesign" size={18} color="#fff" 
            onPress={ () => handleIdNumberSong(0)}
          />
        </Text>
        <Text style={ styles.playerscreen__topbar_title }>AHORA SONANDO</Text>
        <Text style={ styles.playerscreen__topbar_icons }>
          <Icon name="dots-vertical" type="material-community" size={20} color="#fff" />
        </Text>
      </View>
    )

}

export default TopBar