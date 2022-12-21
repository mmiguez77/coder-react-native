import { Text, FlatList, View  } from 'react-native'

// custom components, mock, styles
import RenderDiscoverImg from './RenderDiscoverImg'
import discoverMusicMock from '../../../mock/discoverMusicMock'
import styles from "../styles"

const DiscoverMusic = ({ navigation }) => {

    return (
        <View>
            <Text style={ styles.discoverscreen__image_toptext }>Discover Music</Text>
            <FlatList
                renderItem={ (item) => 
                    <RenderDiscoverImg
                        item = { item }
                        navigation = { navigation }
                    /> }
                data={ discoverMusicMock }
                keyExtractor={ item => item.id }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator = { false }
                scrollEventThrottle = { 25 }
                onScroll = {() => {}}
            />
        </View>
  )
}

export default DiscoverMusic