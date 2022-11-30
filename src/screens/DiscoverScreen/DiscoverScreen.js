import React from 'react'
import { View  } from 'react-native'

// custom components
import DiscoverMusic from './components/DiscoverMusic';
import TopBarDiscoverScreen from './components/TopBar';
import NewAlbums from './components/NewAlbums';
import PopularArtist from './components/PopularArtist';

// styles
import styles from './styles'

const DiscoverScreen = ({ navigation }) => {

  return (
    <View style={ styles.discoverscreen__container }>
      
      {/* TOP */}
      <TopBarDiscoverScreen navigation={ navigation }/>
      
      {/* Discover Music */}
      <DiscoverMusic navigation={ navigation }/>

      {/* New Albums */}
      <NewAlbums/>

      {/* Popular */}
      <PopularArtist/>

    </View>
  )
}

export default DiscoverScreen