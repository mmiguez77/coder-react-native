import { useState, useEffect } from 'react'
import { FlatList, View, Text } from 'react-native';

// custom components
import RenderFlatList from './components/RenderFlatList';

// services - styles
import getArtistAlbum from '../../service/getArtistAlbums.service';
import styles from './styles'
import TopBar from '../../components/TopBar/TopBar';

const ArtistScreen = ({ navigation, route }) => {

  const { artistId } = route.params
  const [ artistsAlbums, setArtistsAlbums] = useState([])
  const [ error, setError ] = useState([])

  useEffect(() => {
    getArtistAlbum(artistId)
      .then(resp => setArtistsAlbums(resp.album))
      .catch(err => setError(err))
  }, [artistId]) 


  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <TopBar navigation={ navigation } title= "DISCOS" />

      { /* FLAT_LIST */ }      
      <FlatList
        renderItem={ (item) => <RenderFlatList
          item={ item } 
          navigation= { navigation }
        /> }
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