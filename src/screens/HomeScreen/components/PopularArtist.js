import React from 'react'
import { View, Text, FlatList } from 'react-native'

// custom components
import RenderPopularArtists from './RenderPopularArtists'

// data - styles
import discoverMusicMock from '../../../mock/discoverMusicMock'
import styles from '../styles'

const PopularArtist = () => {

  return (
    <View>
      <View style={{ flexDirection:"row", justifyContent: "space-between", marginRight: 50 }}>
        <Text style={ styles.homescreen__popular_toptext }>Popular</Text>
        <Text style={ styles.homescreen__popular_toptext }>All...</Text>
      </View>
      <FlatList
        renderItem={ RenderPopularArtists }
        data={ discoverMusicMock }
        keyExtractor={ item => item.id }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator ={ false }
        scrollEventThrottle = { 10 }
        onScroll = {() => {}}
      />
    </View>
  )
}

export default PopularArtist