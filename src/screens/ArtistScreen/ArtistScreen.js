import { useState, useEffect } from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native';

// custom components
import RenderFlatList from './components/RenderFlatList';
import TopBar from '../../components/TopBar/TopBar';

// services - styles
import getArtistAlbum from '../../service/getArtistAlbums.service';
import styles from './styles'
import theme from '../../theme/theme'

const ArtistScreen = ({ navigation, route }) => {

  const { artistId } = route.params
  const [ artistsAlbums, setArtistsAlbums] = useState([])
  const [ error, setError ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    getArtistAlbum(artistId)
      .then(resp => setArtistsAlbums(resp.album))
      .catch(err => setError(err))
      .finally(() => { setIsLoading(false) })
  }, [artistId]) 


  return (
    <View style={ styles.homescreen__container }>
      {
        isLoading
        ?
          <ActivityIndicator 
            size="large" 
            color= {theme.colors.tertiary} 
            style={{ flex: 1, alignSelf: "center" }}
          />
        :      
        <>
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
          />
        </>
      }
    </View>
  )
}

export default ArtistScreen