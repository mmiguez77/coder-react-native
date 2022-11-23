import React from 'react'
import { View, Text } from 'react-native'
import ArtistsInPlaylist from './components/ArtistsInPlaylist'
import LatestSong from './components/LatestSong'
import TopBar from './components/TopBar'

import { Divider } from '@rneui/themed'
import styles from "./styles"
import theme from "../../theme/theme"

const PlaylistScreen = ({ navigation }) => {
  return (
    <View style={ styles.playlistscreen__container }>

      { /* TOP */}
      <TopBar navigation = { navigation } />

      {/* LATEST_SONG */}
      <LatestSong/>
      <Divider 
        style={ styles.playlistscreen__latestsong_divider } 
        color= { theme.colors.tertiary } 
        insetType="left"
        width={1}
        orientation="horizontal"
      />

      {/* ARTIST IN PLAYLIST */}
      <ArtistsInPlaylist/>

    </View>
  )
}

export default PlaylistScreen