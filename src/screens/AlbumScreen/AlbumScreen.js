import { useEffect } from 'react'
import { FlatList, View, Text, Pressable, Image, LogBox } from 'react-native';

// custom hook
import useAlbumData from '../../hooks/useAlbumData.js';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// custom components
import TopBarHomeScreen from './components/TopBar';

// styles
import styles from './styles'

const AlbumScreen = ({ navigation, route }) => {

  const { albumId } = route.params
  const { album, changeState } = useAlbumData()

  useEffect(() => {
    changeState(albumId)
  }, [albumId])
  
  
  const RenderAlbum = ({ item, navigation }) => {
    
    return (
      <View style= {{ marginTop: 10 }}>
        <Pressable
          onPress={ () => { 
            navigation.navigate( 'Escuchar' , {
              song: item,
              album: album
            } )
          }}
        >
          <Text> { item.item.title } </Text>
          <Text> { item.item.artist } </Text>
        </Pressable>

      </View> 
    )
}

  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <TopBarHomeScreen navigation={ navigation }/>
      <Text> ALBUM SCREEN </Text>
      { /* FLAT_LIST */ }
      <FlatList
        renderItem={ (item) => <RenderAlbum item={ item } navigation= { navigation }/> }
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