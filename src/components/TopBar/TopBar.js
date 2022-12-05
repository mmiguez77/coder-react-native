import { Text, View } from 'react-native'
import { Icon } from '@rneui/themed';

// styles
import styles from "./styles"
import theme from "../../theme/theme"

const TopBar = ({ navigation, title }) => {

    return (
        <View style={ styles.topbar_container }>
        <Text style={ styles.topbar_icons }>
          <Icon 
            name="menu" 
            type="material-community" 
            size={20}  
            color= { theme.colors.secondary }
            onPress={ () => { navigation.openDrawer() }}  
          />
        </Text>
        <Text style={ styles.topbar_title }> { title } </Text>
        <Text style={ styles.topbar_icons }>
        </Text>
      </View>
    )
}

export default TopBar