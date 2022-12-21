import { useEffect, useState } from 'react'
import { FlatList, View, LogBox, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux'

// custom hook
import useAlbumData from '../../hooks/useAlbumData.js';

// custom components
import TopBar from '../../components/TopBar/TopBar.js';
import RenderAlbum from './components/RenderAlbums.js';
import theme from '../../theme/theme'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// styles
import styles from './styles'

const AlbumScreen = ({ navigation, route }) => {

  const { albumId } = route.params
  const { songs } = useSelector((state) => state.songsStore )
  const { generateAlbumData } = useAlbumData()
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    generateAlbumData(albumId)
    setIsLoading(false)
  }, [albumId])
  
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
          <TopBar navigation={ navigation } title = { "CANCIONES" }  />
          
          { /* FLAT_LIST */ }
          <FlatList
            renderItem={ (item) => <RenderAlbum 
              item={ item } 
              navigation= { navigation }
              album={ songs }  
            /> }
            data={ songs }
            keyExtractor={ item => item.id }
            vertical
            pagingEnabled
            showsHorizontalScrollIndicator = { false }
            scrollEventThrottle = { 25 }
            onScroll = {() => {}}
          />
        </>
      }
    </View>
  )
}

export default AlbumScreen