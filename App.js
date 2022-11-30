import React, { useEffect, useState } from 'react';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen'

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// custom screen
import AlbumScreen from './src/screens/AlbumScreen/AlbumScreen';
import ArtistScreen from './src/screens/ArtistScreen/ArtistScreen';
import DiscoverScreen from './src/screens/DiscoverScreen/DiscoverScreen';
import DrawerMenu from './src/components/DrawerMenu/DrawerMenu';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen/PlayerScreen';
import PlaylistScreen from './src/screens/PlaylistScreen/PlaylistScreen';

// styles
import theme from './src/theme/theme'

const Drawer = createDrawerNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [] )


  return (

    
      <NavigationContainer>
        <Drawer.Navigator 
          drawerContent = { props => <DrawerMenu { ...props } /> } 
          initialRouteName="Home"
          screenOptions={{ 
            headerShown: false,
            drawerActiveBackgroundColor: theme.colors.secondary,
            drawerActiveTintColor: theme.colors.primary,
            drawerInactiveTintColor: theme.colors.secondary
          }}
        >
          <Drawer.Screen 
            name="Inicio" 
            component={HomeScreen}
          />

          <Drawer.Screen 
            name="Artista" 
            component={ArtistScreen}
          />
          
          <Drawer.Screen 
            name="Album" 
            component={AlbumScreen}
          />

          <Drawer.Screen 
            name="Escuchar" 
            component={PlayerScreen}
            />
          
          <Drawer.Screen 
            name="Playlist" 
            component={PlaylistScreen}
            />
          
          <Drawer.Screen 
            name="Descubrir" 
            component={DiscoverScreen}
            />
        
        </Drawer.Navigator>
      </NavigationContainer>
  

  );
};

export default App;
