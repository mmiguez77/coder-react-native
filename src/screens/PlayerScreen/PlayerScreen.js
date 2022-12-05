import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import TrackPlayer from 'react-native-track-player';

// Custom Components

import ArtistImage from "./components/ArtistImage"
import SongBarDuration from './components/SongBarDuration'
import Controls from './components/Controls'
import TapBar from './components/TapBar'


// custom hooks
import useCustomTrackPlayer from '../../hooks/useCustomTrackPlayer'

// Styles
import styles from "./styles"
import TopBar from '../../components/TopBar/TopBar';


const PlayerScreen = ({ navigation, route }) => {

  const { song, album } = route.params
  const albumLength  = album.length -1
  const { 
    playBackState,
    progressBar,
    songTitle,
    songArtist,
    songDuration,
    isAlbumEnd,
    setupPlayer  
  } = useCustomTrackPlayer()

  useEffect(() => {
    setupPlayer(album, song)

    return () => {
      TrackPlayer.destroy();
    };

  }, [album, song])
  

  return (
    <View style={ styles.playerscreen__container }>

      {/* TOP */}
      <TopBar navigation = { navigation } title = "ESCUCHAR" />

      {/* IMAGE */}
      <ArtistImage/>
      
      {/* ARTIST */}
      <View style={ styles.playerscreen__artist_container }>
        <Text style={ styles.playerscreen__artist_title_text }> { songTitle }</Text>
        <Text style={ styles.playerscreen__artist_artist_text }> { songArtist } </Text>
      </View>

      {/* BAR */}
      <SongBarDuration 
        progressBar={ progressBar } 
        duration= { songDuration }
        isAlbumEnd = { isAlbumEnd }
      />

      {/* CONTROLS */}
      <Controls 
        playBackState= { playBackState } 
        albumLength = { albumLength }
      />

      {/* TAPBAR */}
      <TapBar/>

    </View>
  )
}

export default PlayerScreen