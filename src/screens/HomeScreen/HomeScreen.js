import React from 'react'
import { View, Text, FlatList, Image, Pressable } from 'react-native'
import { Icon } from '@rneui/themed';
import styles from './styles'


// Images
import discoverMusicMock from '../../mock/discoverMusic'

const HomeScreen = ({ handleIdNumberSong }) => {

  const renderDiscoverMusic = ({ item, index }) => {
    return (
      <View style={ styles.homescreen__container }>
        <View>
          <Pressable
            onPress={ () => { handleIdNumberSong(item.id) }}
            style={ styles.homescreen__image_rounded }
          >
            <Image 
              source={ item.image }  
              style={ styles.homescreen__image_container } 
            />
          </Pressable>
        </View>
      </View> 
    )
  }

  const renderNewAlbum = ({ item, index }) => {
    return (
      <View style={ styles.homescreen__newalbum_container }>
        <View style={ styles.homescreen__newalbum_image_rounded }>
          <Pressable
            onPress={ () => { console.log(item.id) }}
            style={ styles.homescreen__image_rounded }
          >
            <Image 
              style={ styles.homescreen__newalbum_image_rounded } 
              source={ item.image }  
              resizeMode={ "cover" }
            />
          </Pressable>
        </View>
        <Text style={{color:"white"}}>Hola</Text> 
        <Text style={{color:"white"}}>Hola</Text>
      </View> 
    )
  }

  const renderPopular = ({ item, index }) => {
    return (
      <View style={ styles.homescreen__popular_container }>
        <View style={ styles.homescreen__popular_image_rounded }>
          <Pressable
            onPress={ () => { console.log(item.id) }}
            style={ styles.homescreen__image_rounded }
          >
          <Image 
            style={ styles.homescreen__popular_image_rounded } 
            source={ item.image }  
            resizeMode={ "cover" }
          />
          </Pressable>
        </View>
        <Text style={{color:"white"}}>Hola</Text>
        <Text style={{color:"white"}}>Hola</Text>
      </View> 
    )
  }



  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <View style={ styles.homescreen__topbar_container }>
        <Text style={ styles.homescreen__topbar_icons }>
          <Icon name="arrowleft" type="antdesign" size={18} color="#fff" />
        </Text>
        <Text style={ styles.homescreen__topbar_title }>BIENVENIDO</Text>
        <Text style={ styles.homescreen__topbar_icons }>
          <Icon name="dots-vertical" type="material-community" size={20} color="#fff" />
        </Text>
      </View>

      
        {/* Discover Music */}
      <View>
      <Text style={ styles.homescreen__image_toptext }>Discover Music</Text>
      <FlatList
        renderItem={ renderDiscoverMusic }
        data={ discoverMusicMock }
        keyExtractor={ item => item.id }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator = { false }
        scrollEventThrottle = { 25 }
        onScroll = {() => {}}
        onPress={() => { console.log('press')}}
      />
      </View>

      {/* New Albums */}
      <View>
        <View style={{ flexDirection:"row", justifyContent: "space-between", marginRight: 50 }}>
          <Text style={ styles.homescreen__newalbum_toptext }>New Albums</Text>
          <Text style={ styles.homescreen__newalbum_toptext }>All...</Text>
        </View>
      <FlatList
        renderItem={ renderNewAlbum}
        data={ discoverMusicMock }
        keyExtractor={ item => item.id }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator ={ false }
        scrollEventThrottle = { 25 }
        onScroll = {() => {}}
      />
      </View>

      {/* Popular */}
      <View>
        <View style={{ flexDirection:"row", justifyContent: "space-between", marginRight: 50 }}>
          <Text style={ styles.homescreen__popular_toptext }>Popular</Text>
          <Text style={ styles.homescreen__popular_toptext }>All...</Text>
        </View>
      <FlatList
        renderItem={ renderPopular }
        data={ discoverMusicMock }
        keyExtractor={ item => item.id }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator ={ false }
        scrollEventThrottle = { 10 }
        onScroll = {() => {}}
      />
      </View>

    </View>
  )
}

export default HomeScreen