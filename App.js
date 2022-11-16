import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen'
//import ItemsList from './src/components/ItemsList/ItemsList';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen/PlayerScreen';

const App = () => {

  const [ idNumberSong, setIdNumberSong ] = useState()

  useEffect(() => {
    SplashScreen.hide()
  }, [] )

  const handleIdNumberSong = (idNumber) => {
    setIdNumberSong(idNumber);
  };

  let context = <HomeScreen handleIdNumberSong={ handleIdNumberSong }/>

  if (idNumberSong >= 1) {
    context = <PlayerScreen handleIdNumberSong={ handleIdNumberSong }/>;
  }


  return (

    <SafeAreaProvider style={{ flex: 1}}>
      { context }
    </SafeAreaProvider>

  );
};

export default App;
