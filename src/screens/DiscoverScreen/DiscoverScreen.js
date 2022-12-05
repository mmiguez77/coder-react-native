import React from 'react'
import { View  } from 'react-native'

// custom components
import DiscoverMusic from './components/DiscoverMusic';
import NewAlbums from './components/NewAlbums';
import PopularArtist from './components/PopularArtist';

// styles
import styles from './styles'
import TopBar from '../../components/TopBar/TopBar';

const DiscoverScreen = ({ navigation }) => {

  return (
    <View style={ styles.discoverscreen__container }>
      
      {/* TOP */}
      <TopBar navigation={ navigation } title="DESCUBRÍ" />
      
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