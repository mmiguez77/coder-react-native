import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from '@rneui/themed';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import styles from './styles'
import theme from '../../theme/theme'

const DrawerMenu = (props) => {


  return (
    <View style = { styles.drawermenu__container }>
      <View style = { styles.drawermenu__top_container }>

      </View>

      <DrawerContentScrollView 
        {...props}
        contentContainerStyle = { styles.drawermenu__content_scroll }

      >

        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      
      <View style = { styles.drawermenu__bottom_container }>
        <Icon name="logout" type="antdesign" size={16} color= { theme.colors.secondary } />
        <Text style = { styles.drawermenu__bottom_text }>Log out</Text>
      </View>
    
    </View>
  )
}

export default DrawerMenu