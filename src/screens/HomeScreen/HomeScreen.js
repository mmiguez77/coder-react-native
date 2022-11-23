import React from 'react'
import { View  } from 'react-native'

// custom components
import DiscoverMusic from './components/DiscoverMusic';
import TopBarHomeScreen from './components/TopBar';
import NewAlbums from './components/NewAlbums';
import PopularArtist from './components/PopularArtist';

// styles
import styles from './styles'

const HomeScreen = ({ navigation }) => {

  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <TopBarHomeScreen navigation={ navigation }/>
      
      {/* Discover Music */}
      <DiscoverMusic navigation={ navigation }/>

      {/* New Albums */}
      <NewAlbums/>

      {/* Popular */}
      <PopularArtist/>

    </View>
  )
}

export default HomeScreen