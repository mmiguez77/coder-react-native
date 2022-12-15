import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import { store } from './src/store/store';


const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [] )


  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <DrawerNavigator/>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
