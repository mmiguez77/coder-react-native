import { useState, useEffect } from 'react'
import { FlatList, View, Text, Pressable } from 'react-native';

//cunstom components
import RenderFlatList from './components/RenderFlatList';
import TopBar from '../../components/TopBar/TopBar';

// styles - services
import styles from './styles'
import getArtists from '../../service/getArtists.service';

const HomeScreen = ({ navigation }) => {

  const [ artistsArray, setArtistsArray ] = useState([])
  const [ error, setError ] = useState([])

  useEffect(() => {
    getArtists()
    .then(resp => setArtistsArray(resp))
    .catch(err => setError(err))
  }, [])

  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <TopBar navigation={ navigation } title="BIENVENIDO"/>

      { /* FLAT_LIST */ }
      <FlatList
        renderItem={ (item) => <RenderFlatList item={ item } navigation= { navigation }/> }
        data={ artistsArray }
        keyExtractor={ item => item.artist.map(it => it.id) }
        pagingEnabled
        showsHorizontalScrollIndicator = { false }
        scrollEventThrottle = { 25 }
        onScroll = {() => {}}
        numColumns={2}
      />
    </View>
  )
}

export default HomeScreen