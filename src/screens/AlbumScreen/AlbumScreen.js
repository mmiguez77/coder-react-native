import { useEffect } from 'react'
import { FlatList, View, LogBox } from 'react-native';

// custom hook
import useAlbumData from '../../hooks/useAlbumData.js';

// custom components
import TopBar from '../../components/TopBar/TopBar.js';
import RenderAlbum from './components/RenderAlbums.js';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// styles
import styles from './styles'

const AlbumScreen = ({ navigation, route }) => {

  const { albumId } = route.params
  const { album, changeState } = useAlbumData()
  
  useEffect(() => {
    changeState(albumId)
  }, [albumId])
  
  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <TopBar navigation={ navigation } title = { "CANCIONES" }  />
      
      { /* FLAT_LIST */ }
      <FlatList
        renderItem={ (item) => <RenderAlbum 
          item={ item } 
          navigation= { navigation }
          album={ album }  
        /> }
        data={ album }
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

export default AlbumScreen