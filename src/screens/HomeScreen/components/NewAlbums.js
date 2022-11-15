import React from 'react'
import { Text, FlatList, View, Image, Pressable } from 'react-native'

// custom components
import RenderNewAlbum from './RenderNewAlbums'

// data - styles
import discoverMusicMock from '../../../mock/discoverMusicMock'
import styles from "../styles"

const NewAlbums = () => {

    return (
        <View>
        <View style={{ flexDirection:"row", justifyContent: "space-between", marginRight: 50 }}>
          <Text style={ styles.homescreen__newalbum_toptext }>New Albums</Text>
          <Text style={ styles.homescreen__newalbum_toptext }>All...</Text>
        </View>
        <FlatList
          renderItem={ RenderNewAlbum}
          data={ discoverMusicMock }
          keyExtractor={ item => item.id }
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator ={ false }
          scrollEventThrottle = { 25 }
          onScroll = {() => {}}
        />
      </View>
    )
}

export default NewAlbums