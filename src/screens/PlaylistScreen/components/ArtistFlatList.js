import React from 'react'
import { Text, FlatList, View, Image, Pressable } from 'react-native'

// custom components
import RenderArtistFlatList from './RenderArtistFlatList'

// data - styles

import styles from "../styles"
import discoverMusicMock from '../../../mock/discoverMusicMock'

const ArtistFlatList = () => {

  return (
    <View style={ styles.playlistscreen__artists_container }>
      <View style={ styles.playlistscreen__artists_toptext_container }>
        <Text style={ styles.playlistscreen__artists_toptext }>Artists In Playlist</Text>
        <Text style={ styles.playlistscreen__artists_toptext }>See All</Text>
      </View>
      <View style={ styles.playlistscreen__artists_image_container }>
        <FlatList
          renderItem={ RenderArtistFlatList}
          data={ discoverMusicMock }
          keyExtractor={ item => item.id }
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator ={ false }
          scrollEventThrottle = { 25 }
          onScroll = {() => {}}
        />
      </View>
    </View>
  )
}

export default ArtistFlatList