import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import { store } from './src/store/store';


const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [] )


  return (
    <Provider store={store}>
      <DrawerNavigator/>
    </Provider>
  );
};

export default App;
