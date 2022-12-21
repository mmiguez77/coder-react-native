import { useEffect, useState } from 'react'
import { Text, View, Pressable, ActivityIndicator } from 'react-native'

// styles
import theme from "../../../theme/theme"

const RenderAlbum = ({ item, navigation, album }) => {
    
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
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
          <View style= {{ marginTop: 10 }}>
            <Pressable
              onPress={ () => { 
                navigation.navigate( 'Escuchar' , {
                  song: item,
                  album: album
                } )
              }}
            >
              <Text style= {{ color: theme.colors.secondary }}> { item.item.title } </Text>
              <Text style= {{ color: theme.colors.secondary }}> { item.item.artist } </Text>
            </Pressable>
          </View> 
        </>
      }
    </>
  )
}

export default RenderAlbum