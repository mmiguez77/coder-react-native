import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from '@rneui/themed';

// styles
import styles from "../styles"


const TopBarHomeScreen = () => {

    return (
        <View style={ styles.homescreen__topbar_container }>
        <Text style={ styles.homescreen__topbar_icons }>
          <Icon name="arrowleft" type="antdesign" size={18} color="#fff" />
        </Text>
        <Text style={ styles.homescreen__topbar_title }>BIENVENIDO</Text>
        <Text style={ styles.homescreen__topbar_icons }>
          <Icon name="dots-vertical" type="material-community" size={20} color="#fff" />
        </Text>
      </View>
    )
}

export default TopBarHomeScreen