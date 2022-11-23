import React from 'react'
import { View, Text } from 'react-native'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import styles from './styles'
import theme from '../../theme/theme'

const DrawerMenu = (props) => {


  return (
    <View style = { styles.drawermenu__container }>

      <DrawerContentScrollView 
        {...props}
        contentContainerStyle = { styles.drawermenu__content_scroll }
        labelStyle = { { color: "white"}}
        
      >
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      
      <View>
        <Text>Hola</Text>
      </View>
    
    </View>
  )
}

export default DrawerMenu