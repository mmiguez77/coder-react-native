import { useState, useEffect } from 'react'
import { FlatList, View, Text, Pressable, Image } from 'react-native';

// custom components
import TopBarHomeScreen from './components/TopBar';

// services - styles
import getArtistAlbum from '../../service/getArtistAlbums.service';
import styles from './styles'

const ArtistScreen = ({ navigation, route }) => {

  const { artistId } = route.params
  const [ artistsAlbums, setArtistsAlbums] = useState([])
  const [ error, setError ] = useState([])

  useEffect(() => {
    getArtistAlbum(artistId)
      .then(resp => setArtistsAlbums(resp.album))
      .catch(err => setError(err))
  }, [artistId])

  
  const RenderAlbums = ({ item, navigation }) => {

    return (
      <View style= {{ marginTop: 10 }}>
        <Text> Album: { item.item.name } </Text>
        <Pressable
          onPress={ () => { 
            navigation.navigate( 'Album' , {
              albumId: item.item.id
            } )
          }}
        >
         <Text>
          ACA LA IMG
         </Text>
        </Pressable>

      </View> 
    )
}

  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <TopBarHomeScreen navigation={ navigation }/>
      <Text> ARTIST SCREEN </Text>
      { /* FLAT_LIST */ }
      <FlatList
        renderItem={ (item) => <RenderAlbums item={ item } navigation= { navigation }/> }
        data={ artistsAlbums }
        keyExtractor={ item => item.id }
        vertical
        pagingEnabled
        showsHorizontalScrollIndicator = { false }
        scrollEventThrottle = { 25 }
        onScroll = {() => {}}
      />


    </View>
  )
}

export default ArtistScreen