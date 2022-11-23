import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'
import ArtistFlatList from './ArtistFlatList'

const ArtistsInPlaylist = () => {
  return (
    <View style={ styles.playlistscreen__artists_container }>
      <ArtistFlatList/>
    </View>
  )
}

export default ArtistsInPlaylist