import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen'

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen/PlayerScreen';
import PlaylistScreen from './src/screens/PlaylistScreen/PlaylistScreen';
import DrawerMenu from './src/components/DrawerMenu/DrawerMenu';



const Drawer = createDrawerNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [] )


  return (

    <SafeAreaProvider style={{ flex: 1}}>
      <NavigationContainer>
        <Drawer.Navigator 
          drawerContent = { props => <DrawerMenu { ...props } /> } 
          initialRouteName="Home"          
        >
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
          
          <Drawer.Screen 
            name="Player" 
            component={PlayerScreen} 
            options={{ headerShown: false, title: 'Listen'}}
            />
          
          <Drawer.Screen 
            name="Playlist" 
            component={PlaylistScreen} 
            options={{ headerShown: false }}
            />
        
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
};

export default App;
