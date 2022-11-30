import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { usePlaybackState, useProgress } from 'react-native-track-player'

// Custom Components
import TopBar from "./components/TopBar"
import ArtistImage from "./components/ArtistImage"
import SongBarDuration from './components/SongBarDuration'
import Controls from './components/Controls'
import TapBar from './components/TapBar'

// Styles - Functions - Service
import { setupPlayer } from "./functions"
import styles from "./styles"


const PlayerScreen = ({ navigation, route }) => {

  const { song, album } = route.params

  const playBackState = usePlaybackState();
  const progressBar = useProgress();
  const [ error, setError ] = useState("")

  useEffect(() => {
    setupPlayer(album)
  }, [album])
  

  return (
    <View style={ styles.playerscreen__container }>

      {/* TOP */}
      <TopBar navigation = { navigation } />

      {/* IMAGE */}
      <ArtistImage/>
      
      {/* ARTIST */}
      <View style={ styles.playerscreen__artist_container }>
        <Text style={ styles.playerscreen__artist_title_text }> { song.item.title }</Text>
        <Text style={ styles.playerscreen__artist_artist_text }> { song.item.artist } </Text>
      </View>

      {/* BAR */}
      <SongBarDuration progressBar={ progressBar } duration= { song.item.duration } />

      {/* CONTROLS */}
      <Controls playBackState= { playBackState } />

      {/* TAPBAR */}
      <TapBar/>

    </View>
  )
}

export default PlayerScreen