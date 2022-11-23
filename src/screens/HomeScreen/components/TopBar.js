import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from '@rneui/themed';

// styles
import styles from "../styles"
import theme from "../../../theme/theme"

const TopBarHomeScreen = ({ navigation }) => {



    return (
        <View style={ styles.homescreen__topbar_container }>
        <Text style={ styles.homescreen__topbar_icons }>
          <Icon 
            name="dots-vertical" 
            type="material-community" 
            size={20}  
            color= { theme.colors.secondary }  
            onPress={ () => { navigation.openDrawer() }}  
          />
        </Text>
        <Text style={ styles.homescreen__topbar_title }>WELCOME</Text>
        <Text style={ styles.homescreen__topbar_icons }>
        </Text>
      </View>
    )
}

export default TopBarHomeScreen