import React from 'react'
import { View, Text } from 'react-native'


import styles from '../styles'

const LatestSong = () => {
  return (
    <View style={ styles.playlistscreen__latestsong_container }>
      <View style={ styles.playlistscreen__latestsong_avatar_container }>
        <Text>Avatar</Text>
        <View>
          <Text>Latest Song</Text>
          <Text>24 Tracks</Text>
          <View>
            <Text>Play All</Text>
            <Text>Share</Text>

          </View>
        </View>
      </View>


    </View>
  )
}

export default LatestSong