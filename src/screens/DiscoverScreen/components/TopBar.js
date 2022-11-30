import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from '@rneui/themed';

// styles
import styles from "../styles"
import theme from "../../../theme/theme"

const TopBarDiscoverScreen = ({ navigation }) => {



    return (
        <View style={ styles.discoverscreen__topbar_container }>
        <Text style={ styles.discoverscreen__topbar_icons }>
          <Icon 
            name="menu" 
            type="material-community" 
            size={20}  
            color= { theme.colors.secondary }
            onPress={ () => { navigation.openDrawer() }}  
          />
        </Text>
        <Text style={ styles.discoverscreen__topbar_title }>DESCUBRÍ</Text>
        <Text style={ styles.discoverscreen__topbar_icons }>
        </Text>
      </View>
    )
}

export default TopBarDiscoverScreen