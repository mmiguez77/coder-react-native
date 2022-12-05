import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import BottomTabNavigator from './src/navigation/BottomTabNavitagor';
import DrawerNavigator from './src/navigation/DrawerNavigator';


const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [] )


  return (
    // <DrawerNavigator/>
    <BottomTabNavigator/>
  );
};

export default App;
