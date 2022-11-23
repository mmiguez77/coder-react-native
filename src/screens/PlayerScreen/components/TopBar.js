import { View, Text } from 'react-native'
import { Icon } from '@rneui/themed';

// styles
import styles from "../styles";
import theme from "../../../theme/theme"

const TopBar = ({ navigation }) => {


    return (
        <View style={ styles.playerscreen__topbar_container }>
        <Text style={ styles.playerscreen__topbar_icons }>
          <Icon 
            name="arrowleft" type="antdesign" size={18}  color= { theme.colors.secondary } 
            onPress={ () => navigation.navigate('Home')}
          />
        </Text>
        <Text style={ styles.playerscreen__topbar_title }>NOW PLAYING</Text>
        <Text style={ styles.playerscreen__topbar_icons }>
          <Icon 
            name="dots-vertical" 
            type="material-community" 
            size={20}  
            color= { theme.colors.secondary }  
            onPress={ () => { navigation.openDrawer() }}  
          />
        </Text>
      </View>
    )

}

export default TopBar