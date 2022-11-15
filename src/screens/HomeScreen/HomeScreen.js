import React from 'react'
import { View, Text, FlatList, Image, Pressable } from 'react-native'

// custom components
import DiscoverMusic from './components/DiscoverMusic';
import TopBarHomeScreen from './components/TopBar';
import NewAlbums from './components/NewAlbums';
import PopularArtist from './components/PopularArtist';

// styles
import styles from './styles'

const HomeScreen = ({ handleIdNumberSong }) => {

  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <TopBarHomeScreen/>
      
      {/* Discover Music */}
      <DiscoverMusic  handleIdNumberSong = { handleIdNumberSong } />

      {/* New Albums */}
      <NewAlbums/>

      {/* Popular */}
      <PopularArtist/>

    </View>
  )
}

export default HomeScreen