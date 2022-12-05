import { StyleSheet, Dimensions } from "react-native"
import theme from "../../theme/theme";

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    
    //top
    homescreen__container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    }


});

export default styles