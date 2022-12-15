import { StyleSheet, Dimensions } from "react-native"
import theme from "../../theme/theme";

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    
    homescreen__image_container: {
        flex: 1,
        width: '100%'
    },

    homescreen__image_pressable: {
        flex: 1,
        alignItems: "center"
    },
    homescreen__image_rounded: {
        zIndex: 100,
        height: 65,
        width: 65,
        borderRadius: 50,
        borderColor: theme.colors.tertiary,
        borderWidth: 2
    },
    homescreen__image_text_container: {
        alignSelf: 'center',
        top: -30,
        backgroundColor: theme.colors.secondary,
        width: 140,
        height: 80,
        zIndex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: "flex-end",
    },
    homescreen__image_text: {
        color: theme.colors.primary,
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 2,
        zIndex: 1,
    },
    homescreen__image_gender: {
        color: theme.colors.primary,
        textAlign: "center",
        marginBottom: 5,
        zIndex: 1,
    },




});

export default styles