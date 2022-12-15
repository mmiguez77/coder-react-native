// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// custom screen
import AlbumScreen from '../screens/AlbumScreen/AlbumScreen';
import ArtistScreen from '../screens/ArtistScreen/ArtistScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import DiscoverScreen from '../screens/DiscoverScreen/DiscoverScreen';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PlayerScreen from '../screens/PlayerScreen/PlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen/PlaylistScreen';

// styles
import theme from '../theme/theme'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

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
               name="Descubrir" 
               component={DiscoverScreen}
            />
            
            <Drawer.Screen 
               name="Artista" 
               component={ArtistScreen}
               options={{
                  drawerItemStyle: {
                     display: "none",
                  },
               }} 
            />
            
            <Drawer.Screen 
               name="Album" 
               component={AlbumScreen}
               options={{
                  drawerItemStyle: {
                     display: "none",
                  },
               }} 
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
               name="Camara" 
               component={CameraScreen}
            />
            

         </Drawer.Navigator>
      </NavigationContainer>
   )
}

export default DrawerNavigator