import { useState, useEffect } from 'react'
import { FlatList, View, Text, Pressable } from 'react-native';

import getArtists from '../../service/getArtists.service';

// custom components
import TopBarHomeScreen from './components/TopBar';

// styles
import styles from './styles'

const HomeScreen = ({ navigation }) => {

  const [ artistsArray, setArtistsArray ] = useState([])
  const [ error, setError ] = useState([])


  useEffect(() => {
    getArtists()
    .then(resp => setArtistsArray(resp))
    .catch(err => setError(err))


  }, [])

const RenderItem = ({ item, navigation }) => {

    return (
      <View style= {{ marginTop: 10 }} key={item.index}>
        <Text> Letra { item.item.name } </Text>
        {
          item.item.artist.map((it) => {

            return (
              <View key={it.id}>
                <Pressable
                  onPress={ () => { 
                    navigation.navigate( 'Artista' , {
                      artistId: it.id
                    } )
                  }}
                >
                  <Text> { it.name } </Text>
                </Pressable>
              </View>
            )
          })

        }

      </View> 
    )
}

  return (
    <View style={ styles.homescreen__container }>
      
      {/* TOP */}
      <TopBarHomeScreen navigation={ navigation }/>
      <Text> HOME SCREEN </Text>
      { /* FLAT_LIST */ }
      <FlatList
        renderItem={ (item) => <RenderItem item={ item } navigation= { navigation }/> }
        data={ artistsArray }
        keyExtractor={ item => item.artist.map(it => it.id) }
        vertical
        pagingEnabled
        showsHorizontalScrollIndicator = { false }
        scrollEventThrottle = { 25 }
        onScroll = {() => {}}
      />


    </View>
  )
}

export default HomeScreen