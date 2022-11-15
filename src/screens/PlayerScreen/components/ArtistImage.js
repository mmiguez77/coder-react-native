import { View, Text, Image, FlatList, Pressable } from 'react-native'

import RenderImage from "./RenderImage"
import songsMock from '../../../mock/songsMock'

const ArtistImage = () => {

    return (

        <FlatList
        renderItem={ RenderImage }
        data={ songsMock }
        keyExtractor={ item => item.id }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator = { false }
        scrollEventThrottle = { 25 }
        onScroll = {() => {}}
      />
    )
}

export default ArtistImage