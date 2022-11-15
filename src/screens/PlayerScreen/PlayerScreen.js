import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native'
import { Icon } from '@rneui/themed';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Slider from '@react-native-community/slider';

// Mock
import songsMock from '../../mock/songsMock'

// styles
import styles from "./styles";

// service
import getSongData, { songData } from '../../service/getSongData.service'

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(songData);
  } catch (error) {
    console.log(error);
  }
};


const togglePlayBack = async (playBackState) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if (currentTrack != null) {
    if (playBackState == State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};


const PlayerScreen = ({ handleIdNumberSong }) => {

  const playBackState = usePlaybackState();
  const [ infoSong, setInfoSong ] = useState({})
  const [ error, setError ] = useState("")

  useEffect(() => {
    setupPlayer()
    getSongData(7041)
    .then(resp => setInfoSong(resp["subsonic-response"].song))
    .catch(err => setError(err))



  }, [])
  

  const renderImage = ({ item, index }) => {

    return (
      <View style={ styles.playerscreen__image_container }>
        <View style={ styles.playerscreen__image_rounded }>
          <Image 
            style={ styles.playerscreen__image_container } 
            source={ item.image }  
          />
        </View>
      </View> 
    )
  }



  return (
    <View style={ styles.playerscreen__container }>

      {/* TOP */}
      <View style={ styles.playerscreen__topbar_container }>
        <Text style={ styles.playerscreen__topbar_icons }>
          <Icon 
            name="arrowleft" type="antdesign" size={18} color="#fff" 
            onPress={ () => handleIdNumberSong(0)}
          />
        </Text>
        <Text style={ styles.playerscreen__topbar_title }>AHORA SONANDO</Text>
        <Text style={ styles.playerscreen__topbar_icons }>
          <Icon name="dots-vertical" type="material-community" size={20} color="#fff" />
        </Text>
      </View>

      {/* IMAGE */}
      <FlatList
        renderItem={ renderImage }
        data={ songsMock }
        keyExtractor={ item => item.id }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator = { false }
        scrollEventThrottle = { 25 }
        onScroll = {() => {}}
      />
      
      {/* ARTIST */}
      <View style={ styles.playerscreen__artist_container }>
        <Text style={ styles.playerscreen__artist_title_text }> { infoSong.title }</Text>
        <Text style={ styles.playerscreen__artist_artist_text }> { infoSong.artist } </Text>
      </View>

      {/* BAR */}
      <View style={ styles.playerscreen__bar_container }>
        <Slider
          style={{width: 300, height: 31}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="F35600"
          maximumTrackTintColor="white"
        />
        
      </View>
      <View style={ styles.playerscreen__bar_container_text }>
        <Text style={ styles.playerscreen__bar_time_text }> 2:05 </Text>
        <Text style={ styles.playerscreen__bar_time_text }> 4:23 </Text>
      </View>

      {/* CONTROLS */}
      <View style={ styles.playerscreen__controls_container }>
        <Icon name="random" type="font-awesome" size={18} color="#fff" />
        <Icon name="control-rewind" type="simple-line-icon" size={20} color="#fff" />
        
        <Pressable onPress={ () => { togglePlayBack(playBackState) } }>
          <Icon name="control-pause" type="simple-line-icon"  size={30} color="#F35600" 
            style={{ borderRadius: 50, borderWidth: 1, borderColor: "#F35600", padding: 10 }}
          />
        </Pressable>
        
        <Icon name="control-forward" type="simple-line-icon"  size={20} color="#fff" />
        <Icon name="repeat" type="ionicon" size={20} color="#fff" />
      </View>



      {/* TAPBAR */}
      <View style={ styles.playerscreen__tapbar_container }>
        <Icon name="playlist-music" type="material-community" size={18} color="#fff" />
        <Icon name="download" type="antdesign" size={18} color="#fff" />
        <Icon name="hearto" type="antdesign" size={18} color="#fff" />
        <Icon name="sharealt" type="antdesign" size={18} color="#fff" />
      </View>
    </View>
  )
}

export default PlayerScreen