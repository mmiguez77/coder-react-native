import { useState, useEffect } from 'react'
import { FlatList, View, Text, Pressable } from 'react-native';

//cunstom components
import RenderFlatList from './components/RenderFlatList';
import TopBar from '../../components/TopBar/TopBar';

// services, adapters
import getArtists from '../../service/getArtists.service';
import artistsArrayAdapter from '../../adapters/artistsArray.adapter';

const HomeScreen = ({ navigation }) => {

  const [ artistsArray, setArtistsArray ] = useState([])
  const [ error, setError ] = useState([])

  useEffect(() => {
    getArtists()
    .then(response => artistsArrayAdapter(response))
      .then(resp => setArtistsArray(resp))
    .catch(err => setError(err))
  }, [])

  return (
    <>
    <View>
      
      {/* TOP */}
      <TopBar navigation={ navigation } title="BIENVENIDO"/>

      { /* FLAT_LIST */ }
      <FlatList
        renderItem={ (item) => <RenderFlatList item={ item } navigation= { navigation }/> }
        data={ artistsArray }
        keyExtractor={ item => item.id }
        contentContainerStyle={{ paddingBottom: '20%', marginTop: '5%'}}
        numColumns= {2}
      />
    </View>
    </>
  )
}

export default HomeScreen