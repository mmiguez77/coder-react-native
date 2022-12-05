import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from '@rneui/themed'

// custom components
import ArtistsInPlaylist from './components/ArtistsInPlaylist'
import TopBar from '../../components/TopBar/TopBar'
import LatestSong from './components/LatestSong'

// styles
import styles from "./styles"
import theme from "../../theme/theme"

const PlaylistScreen = ({ navigation }) => {
  return (
    <View style={ styles.playlistscreen__container }>

      { /* TOP */}
      <TopBar navigation = { navigation } title = "PLAYLIST" />

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