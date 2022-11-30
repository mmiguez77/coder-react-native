import { StyleSheet, Dimensions } from "react-native"
import theme from "../../theme/theme";

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    
    /**** HOME_SCREEN ****/
    //top
    homescreen__container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    homescreen__topbar_container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 7,
    },
    homescreen__topbar_title: {
        color: theme.colors.secondary,
        fontWeight: "bold"
    },
    homescreen__topbar_icons: {

    },

    // *** DISCOVER
    homescreen__image_container: {
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 18,
        marginRight: 25,
    },
    homescreen__image_rounded: {
        height: 140,
        width: 290,
        borderRadius: 5,
        overflow: 'hidden',
    },
    homescreen__image_toptext: {
        color: theme.colors.secondary,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 20
    },

    // *** NEW ALBUMS
    homescreen__newalbum_container: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 18,
        marginRight: 15,
    },
    homescreen__newalbum_image_rounded: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    homescreen__newalbum_toptext: {
        color: theme.colors.secondary,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 25
    },

    // *** POPULAR
    homescreen__popular_container: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 18,
        marginRight: 15,
    },
    homescreen__popular_image_rounded: {
        height: 100,
        width: 120,
        borderRadius: 5
    },
    homescreen__popular_toptext: {
        color: theme.colors.secondary,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 25,
    },


});

export default styles