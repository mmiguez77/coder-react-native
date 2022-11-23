import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { usePlaybackState } from 'react-native-track-player'

// Custom Components
import TopBar from "./components/TopBar"
import ArtistImage from "./components/ArtistImage"
import SongBarDuration from './components/SongBarDuration'
import Controls from './components/Controls'
import TapBar from './components/TapBar'
// Styles - Functions - Service
import { setupPlayer } from "./functions"
import getSongData from '../../service/getSongData.service'
import styles from "./styles"


const PlayerScreen = ({ navigation }) => {

  const playBackState = usePlaybackState();
  const [ infoSong, setInfoSong ] = useState({})
  const [ error, setError ] = useState("")

  useEffect(() => {
    setupPlayer()
    getSongData(7041)
    .then(resp => setInfoSong(resp["subsonic-response"].song))
    .catch(err => setError(err))
  }, [])
  

  return (
    <View style={ styles.playerscreen__container }>

      {/* TOP */}
      <TopBar navigation = { navigation } />

      {/* IMAGE */}
      <ArtistImage/>
      
      {/* ARTIST */}
      <View style={ styles.playerscreen__artist_container }>
        <Text style={ styles.playerscreen__artist_title_text }> { infoSong.title }</Text>
        <Text style={ styles.playerscreen__artist_artist_text }> { infoSong.artist } </Text>
      </View>

      {/* BAR */}
      <SongBarDuration/>

      {/* CONTROLS */}
      <Controls playBackState= { playBackState } />

      {/* TAPBAR */}
      <TapBar/>

    </View>
  )
}

export default PlayerScreen