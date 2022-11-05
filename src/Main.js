
import Constants from "expo-constants"
import { View, Text } from "react-native"
import ItemsList from "./components/ItemsList/ItemsList"


const Main = () => {

    return (
        <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
            <ItemsList/>
        </View>

    )
}

export default Main
